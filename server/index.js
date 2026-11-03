require('dotenv').config();
const path = require('node:path');
const fs = require('node:fs/promises');
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const { Pool } = require('pg');
const { verifyTelegramInitData, createAccessToken, requireAuth } = require('./auth');

const app = express();
const port = Number(process.env.PORT || 3000);
const pool = process.env.DATABASE_URL ? new Pool({ connectionString: process.env.DATABASE_URL, ssl: process.env.DATABASE_SSL === 'true' ? { rejectUnauthorized: true } : undefined, max: 10 }) : null;
const jwtSecret = process.env.JWT_SECRET || '';
const authRequired = requireAuth(jwtSecret);
const modes = new Set(['обычный', 'аналитический', 'творческий', 'обучение']);
const buildingCatalog = { hq: { name: 'Штаб', cost: 0, income: 0 }, bank: { name: 'Банк', cost: 500, income: 25 }, club: { name: 'Клуб', cost: 350, income: 18 }, market: { name: 'Рынок', cost: 250, income: 14 }, factory: { name: 'Завод', cost: 700, income: 40 } };

app.disable('x-powered-by');
app.set('trust proxy', 1);
app.use(helmet({ contentSecurityPolicy: false, crossOriginEmbedderPolicy: false }));
const allowedOrigins = (process.env.CORS_ORIGINS || '').split(',').map(value => value.trim()).filter(Boolean);
app.use(cors({ origin(origin, callback) { if (!origin || !allowedOrigins.length || allowedOrigins.includes(origin)) return callback(null, true); callback(new Error('Origin is not allowed.')); }, credentials: false }));
app.use(express.json({ limit: '32kb', strict: true }));
app.use('/api', rateLimit({ windowMs: 60_000, limit: 90, standardHeaders: 'draft-7', legacyHeaders: false }));
app.use('/api/auth', rateLimit({ windowMs: 60_000, limit: 10, standardHeaders: 'draft-7', legacyHeaders: false }));

function requireDatabase(req, res, next) {
  if (!pool) return res.status(503).json({ error: 'Database is not configured. Follow docs/SETUP.md.' });
  if (!jwtSecret || jwtSecret.length < 32) return res.status(503).json({ error: 'Server session secret is not configured.' });
  next();
}
function validText(value, maxLength) { return typeof value === 'string' && value.trim().length > 0 && value.trim().length <= maxLength; }
function asyncRoute(handler) { return (req, res, next) => Promise.resolve(handler(req, res, next)).catch(next); }

app.get('/api/health', asyncRoute(async (_req, res) => {
  let database = 'not-configured';
  if (pool) { try { await pool.query('SELECT 1'); database = 'connected'; } catch { database = 'unavailable'; } }
  res.status(database === 'unavailable' ? 503 : 200).json({ status: database === 'unavailable' ? 'degraded' : 'ok', database, telegramConfigured: Boolean(process.env.TELEGRAM_BOT_TOKEN), aiConfigured: Boolean(process.env.AI_API_KEY && process.env.AI_MODEL), version: '0.2.0' });
}));

app.post('/api/auth/telegram', requireDatabase, asyncRoute(async (req, res) => {
  const initData = req.body && req.body.initData;
  if (typeof initData !== 'string' || initData.length > 10_000) return res.status(400).json({ error: 'Telegram initData is required.' });
  let identity;
  try { identity = verifyTelegramInitData(initData, process.env.TELEGRAM_BOT_TOKEN); }
  catch (error) { return res.status(401).json({ error: error.message }); }
  const tg = identity.user;
  const displayName = [tg.first_name, tg.last_name].filter(Boolean).join(' ').slice(0, 120) || `User ${tg.id}`;
  const username = typeof tg.username === 'string' ? tg.username.slice(0, 64) : null;
  const result = await pool.query(`INSERT INTO users (telegram_id, username, first_name, last_name, language_code, photo_url, last_seen_at)
    VALUES ($1,$2,$3,$4,$5,$6,NOW()) ON CONFLICT (telegram_id) DO UPDATE SET username=EXCLUDED.username, first_name=EXCLUDED.first_name, last_name=EXCLUDED.last_name, language_code=EXCLUDED.language_code, photo_url=EXCLUDED.photo_url, last_seen_at=NOW()
    RETURNING id, telegram_id, username, first_name, last_name`, [String(tg.id), username, String(tg.first_name || '').slice(0, 64), String(tg.last_name || '').slice(0, 64), String(tg.language_code || '').slice(0, 12) || null, typeof tg.photo_url === 'string' && tg.photo_url.startsWith('https://') ? tg.photo_url : null]);
  const user = result.rows[0];
  await pool.query('INSERT INTO profiles (user_id, display_name, nickname) VALUES ($1,$2,$3) ON CONFLICT (user_id) DO NOTHING', [user.id, displayName, username]);
  await pool.query('INSERT INTO game_profiles (user_id) VALUES ($1) ON CONFLICT (user_id) DO NOTHING', [user.id]);
  await pool.query('INSERT INTO user_settings (user_id) VALUES ($1) ON CONFLICT (user_id) DO NOTHING', [user.id]);
  res.json({ token: createAccessToken(user.id, jwtSecret), user: { id: user.id, telegramId: user.telegram_id, name: displayName, username: user.username, photoUrl: tg.photo_url || null } });
}));

app.get('/api/me', requireDatabase, authRequired, asyncRoute(async (req, res) => {
  const result = await pool.query(`SELECT u.id, u.telegram_id, u.username, u.photo_url, p.display_name, p.nickname, p.bio, p.status, p.level, p.experience
    FROM users u JOIN profiles p ON p.user_id=u.id WHERE u.id=$1`, [req.userId]);
  if (!result.rowCount) return res.status(404).json({ error: 'User not found.' });
  res.json({ user: result.rows[0] });
}));

app.get('/api/profile', requireDatabase, authRequired, asyncRoute(async (req, res) => {
  const result = await pool.query(`SELECT u.id, u.username, u.photo_url, p.display_name, p.nickname, p.bio, p.status, p.level, p.experience,
    (SELECT COUNT(*)::int FROM friends f WHERE f.user_id=u.id) AS friend_count,
    (SELECT COUNT(*)::int FROM user_achievements ua WHERE ua.user_id=u.id AND ua.unlocked_at IS NOT NULL) AS achievement_count
    FROM users u JOIN profiles p ON p.user_id=u.id WHERE u.id=$1`, [req.userId]);
  if (!result.rowCount) return res.status(404).json({ error: 'Profile not found.' });
  res.json({ profile: result.rows[0] });
}));
app.put('/api/profile', requireDatabase, authRequired, asyncRoute(async (req, res) => {
  const { displayName, nickname, bio, status } = req.body || {};
  if (!validText(displayName, 80) || !validText(nickname, 32) || typeof bio !== 'string' || bio.length > 500 || typeof status !== 'string' || status.length > 80) return res.status(400).json({ error: 'Invalid profile fields.' });
  const result = await pool.query('UPDATE profiles SET display_name=$2, nickname=$3, bio=$4, status=$5, updated_at=NOW() WHERE user_id=$1 RETURNING *', [req.userId, displayName.trim(), nickname.trim().replace(/^@/, ''), bio.trim(), status.trim()]);
  res.json({ profile: result.rows[0] });
}));
app.get('/api/settings', requireDatabase, authRequired, asyncRoute(async (req, res) => {
  const result = await pool.query('SELECT notifications, sounds, privacy, language, theme, compact FROM user_settings WHERE user_id=$1', [req.userId]);
  res.json({ settings: result.rows[0] || {} });
}));
app.put('/api/settings', requireDatabase, authRequired, asyncRoute(async (req, res) => {
  const body = req.body || {};
  const bool = key => typeof body[key] === 'boolean' ? body[key] : null;
  const language = ['ru', 'en'].includes(body.language) ? body.language : null;
  const theme = ['dark', 'purple'].includes(body.theme) ? body.theme : null;
  const result = await pool.query(`UPDATE user_settings SET notifications=COALESCE($2,notifications), sounds=COALESCE($3,sounds), privacy=COALESCE($4,privacy), compact=COALESCE($5,compact), language=COALESCE($6,language), theme=COALESCE($7,theme), updated_at=NOW() WHERE user_id=$1 RETURNING *`, [req.userId, bool('notifications'), bool('sounds'), bool('privacy'), bool('compact'), language, theme]);
  res.json({ settings: result.rows[0] });
}));

app.get('/api/music/tracks', requireDatabase, authRequired, asyncRoute(async (_req, res) => {
  const result = await pool.query('SELECT id, title, artist, cover_url, external_url, source_type FROM music_tracks WHERE active=true ORDER BY sort_order, title');
  res.json({ tracks: result.rows, note: 'Tracks open their authorized source pages; this API does not redistribute audio.' });
}));

app.get('/api/empire/state', requireDatabase, authRequired, asyncRoute(async (req, res) => {
  const [game, territories, buildings] = await Promise.all([
    pool.query('SELECT balance, level, experience, last_income_at FROM game_profiles WHERE user_id=$1', [req.userId]),
    pool.query(`SELECT id, name, status, owner_id, price, income_per_hour FROM territories ORDER BY sort_order`),
    pool.query(`SELECT b.id, b.territory_id, b.kind, b.level, b.owner_id FROM buildings b ORDER BY b.created_at`)
  ]);
  res.json({ game: game.rows[0], territories: territories.rows, buildings: buildings.rows, buildingCatalog });
}));
app.post('/api/empire/collect', requireDatabase, authRequired, asyncRoute(async (req, res) => {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    const locked = await client.query('SELECT balance, last_income_at FROM game_profiles WHERE user_id=$1 FOR UPDATE', [req.userId]);
    if (!locked.rowCount) throw Object.assign(new Error('Game profile not found.'), { status: 404 });
    const seconds = Math.max(0, Math.floor((Date.now() - new Date(locked.rows[0].last_income_at).getTime()) / 1000));
    const accrued = await client.query('SELECT COALESCE(SUM(t.income_per_hour),0)::int AS income FROM territories t WHERE t.owner_id=$1', [req.userId]);
    const income = Math.min(100_000, Math.floor(Number(accrued.rows[0].income) * Math.min(seconds, 86400) / 3600));
    await client.query('UPDATE game_profiles SET balance=balance+$2, last_income_at=NOW() WHERE user_id=$1', [req.userId, income]);
    if (income) await client.query("INSERT INTO transactions (user_id, kind, amount, description) VALUES ($1,'income',$2,'Collected territory income')", [req.userId, income]);
    const updated = await client.query('SELECT balance, level, experience, last_income_at FROM game_profiles WHERE user_id=$1', [req.userId]);
    await client.query('COMMIT');
    res.json({ game: updated.rows[0], collected: income });
  } catch (error) { await client.query('ROLLBACK'); throw error; } finally { client.release(); }
}));
app.post('/api/empire/territories/:id/purchase', requireDatabase, authRequired, asyncRoute(async (req, res) => {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    const territory = await client.query('SELECT id, price, owner_id FROM territories WHERE id=$1 FOR UPDATE', [req.params.id]);
    if (!territory.rowCount) throw Object.assign(new Error('Territory not found.'), { status: 404 });
    if (territory.rows[0].owner_id) throw Object.assign(new Error('Territory is not available.'), { status: 409 });
    const game = await client.query('SELECT balance FROM game_profiles WHERE user_id=$1 FOR UPDATE', [req.userId]);
    if (!game.rowCount || Number(game.rows[0].balance) < Number(territory.rows[0].price)) throw Object.assign(new Error('Not enough in-game currency.'), { status: 409 });
    await client.query('UPDATE game_profiles SET balance=balance-$2, experience=experience+25 WHERE user_id=$1', [req.userId, territory.rows[0].price]);
    await client.query('UPDATE territories SET owner_id=$2, status=\'owned\' WHERE id=$1', [req.params.id, req.userId]);
    await client.query("INSERT INTO transactions (user_id, territory_id, kind, amount, description) VALUES ($1,$2,'purchase',-$3,'Territory purchase')", [req.userId, req.params.id, territory.rows[0].price]);
    const updated = await client.query('SELECT balance, level, experience FROM game_profiles WHERE user_id=$1', [req.userId]);
    await client.query('COMMIT');
    res.json({ game: updated.rows[0], territoryId: req.params.id });
  } catch (error) { await client.query('ROLLBACK'); throw error; } finally { client.release(); }
}));
app.post('/api/empire/territories/:id/buildings', requireDatabase, authRequired, asyncRoute(async (req, res) => {
  const { kind } = req.body || {};
  const definition = buildingCatalog[kind];
  if (!definition || kind === 'hq') return res.status(400).json({ error: 'Unknown building type.' });
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    const territory = await client.query('SELECT id FROM territories WHERE id=$1 AND owner_id=$2 FOR UPDATE', [req.params.id, req.userId]);
    if (!territory.rowCount) throw Object.assign(new Error('You must own this territory.'), { status: 403 });
    const game = await client.query('SELECT balance FROM game_profiles WHERE user_id=$1 FOR UPDATE', [req.userId]);
    if (Number(game.rows[0].balance) < definition.cost) throw Object.assign(new Error('Not enough in-game currency.'), { status: 409 });
    await client.query('UPDATE game_profiles SET balance=balance-$2 WHERE user_id=$1', [req.userId, definition.cost]);
    const building = await client.query('INSERT INTO buildings (territory_id, owner_id, kind) VALUES ($1,$2,$3) RETURNING id, territory_id, kind, level', [req.params.id, req.userId, kind]);
    await client.query("INSERT INTO transactions (user_id, territory_id, kind, amount, description) VALUES ($1,$2,'building',-$3,$4)", [req.userId, req.params.id, definition.cost, `Built ${definition.name}`]);
    await client.query('COMMIT');
    res.status(201).json({ building: building.rows[0] });
  } catch (error) { await client.query('ROLLBACK'); throw error; } finally { client.release(); }
}));

app.get('/api/community/users', requireDatabase, authRequired, asyncRoute(async (req, res) => {
  const query = String(req.query.q || '').trim().slice(0, 64);
  const result = await pool.query(`SELECT u.id, p.display_name, p.nickname, p.status, p.level, p.experience, u.photo_url FROM profiles p JOIN users u ON u.id=p.user_id WHERE u.id<>$1 AND ($2='' OR p.display_name ILIKE '%'||$2||'%' OR p.nickname ILIKE '%'||$2||'%') ORDER BY p.level DESC, p.experience DESC LIMIT 50`, [req.userId, query]);
  res.json({ users: result.rows });
}));
app.get('/api/community/leaderboard', requireDatabase, authRequired, asyncRoute(async (_req, res) => {
  const result = await pool.query('SELECT u.id, p.display_name, p.nickname, p.level, p.experience, u.photo_url FROM profiles p JOIN users u ON u.id=p.user_id ORDER BY p.level DESC, p.experience DESC LIMIT 100');
  res.json({ users: result.rows });
}));
app.get('/api/community/friends', requireDatabase, authRequired, asyncRoute(async (req, res) => {
  const result = await pool.query(`SELECT f.status, f.created_at, u.id AS user_id, p.display_name, p.nickname, p.level, u.photo_url FROM friends f JOIN users u ON u.id=CASE WHEN f.user_id=$1 THEN f.friend_id ELSE f.user_id END JOIN profiles p ON p.user_id=u.id WHERE (f.user_id=$1 OR f.friend_id=$1) ORDER BY f.created_at DESC`, [req.userId]);
  res.json({ friends: result.rows });
}));
app.post('/api/community/friend-requests', requireDatabase, authRequired, asyncRoute(async (req, res) => {
  const targetId = String(req.body && req.body.userId || '');
  if (!targetId || targetId === String(req.userId)) return res.status(400).json({ error: 'Choose another user.' });
  const result = await pool.query(`INSERT INTO friend_requests (sender_id, receiver_id) VALUES ($1,$2) ON CONFLICT (sender_id, receiver_id) DO UPDATE SET created_at=NOW() RETURNING id, status`, [req.userId, targetId]);
  res.status(201).json({ request: result.rows[0] });
}));
app.post('/api/community/friend-requests/:id/respond', requireDatabase, authRequired, asyncRoute(async (req, res) => {
  const accept = req.body && req.body.accept;
  if (typeof accept !== 'boolean') return res.status(400).json({ error: 'accept must be boolean.' });
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    const request = await client.query("SELECT id, sender_id, receiver_id FROM friend_requests WHERE id=$1 AND receiver_id=$2 AND status='pending' FOR UPDATE", [req.params.id, req.userId]);
    if (!request.rowCount) throw Object.assign(new Error('Pending request not found.'), { status: 404 });
    if (accept) {
      const { sender_id: senderId, receiver_id: receiverId } = request.rows[0];
      await client.query("INSERT INTO friends (user_id, friend_id, status) VALUES ($1,$2,'accepted') ON CONFLICT DO NOTHING", [senderId, receiverId]);
      await client.query("INSERT INTO friends (user_id, friend_id, status) VALUES ($1,$2,'accepted') ON CONFLICT DO NOTHING", [receiverId, senderId]);
      await client.query("UPDATE friend_requests SET status='accepted', updated_at=NOW() WHERE id=$1", [req.params.id]);
    } else await client.query("UPDATE friend_requests SET status='declined', updated_at=NOW() WHERE id=$1", [req.params.id]);
    await client.query('COMMIT');
    res.json({ status: accept ? 'accepted' : 'declined' });
  } catch (error) { await client.query('ROLLBACK'); throw error; } finally { client.release(); }
}));
app.delete('/api/community/friends/:userId', requireDatabase, authRequired, asyncRoute(async (req, res) => {
  await pool.query('DELETE FROM friends WHERE (user_id=$1 AND friend_id=$2) OR (user_id=$2 AND friend_id=$1)', [req.userId, req.params.userId]);
  res.status(204).end();
}));

app.get('/api/ai/conversations', requireDatabase, authRequired, asyncRoute(async (req, res) => {
  const result = await pool.query('SELECT id, title, mode, updated_at FROM ai_conversations WHERE user_id=$1 ORDER BY updated_at DESC LIMIT 100', [req.userId]);
  res.json({ conversations: result.rows });
}));
app.post('/api/ai/conversations', requireDatabase, authRequired, asyncRoute(async (req, res) => {
  const mode = modes.has(req.body && req.body.mode) ? req.body.mode : 'обычный';
  const result = await pool.query('INSERT INTO ai_conversations (user_id, title, mode) VALUES ($1,$2,$3) RETURNING id, title, mode, updated_at', [req.userId, 'Новый диалог', mode]);
  res.status(201).json({ conversation: result.rows[0] });
}));
app.get('/api/ai/conversations/:id/messages', requireDatabase, authRequired, asyncRoute(async (req, res) => {
  const owns = await pool.query('SELECT id FROM ai_conversations WHERE id=$1 AND user_id=$2', [req.params.id, req.userId]);
  if (!owns.rowCount) return res.status(404).json({ error: 'Conversation not found.' });
  const result = await pool.query('SELECT id, role, content, created_at FROM ai_messages WHERE conversation_id=$1 ORDER BY created_at', [req.params.id]);
  res.json({ messages: result.rows });
}));
app.delete('/api/ai/conversations/:id', requireDatabase, authRequired, asyncRoute(async (req, res) => {
  const result = await pool.query('DELETE FROM ai_conversations WHERE id=$1 AND user_id=$2', [req.params.id, req.userId]);
  if (!result.rowCount) return res.status(404).json({ error: 'Conversation not found.' });
  res.status(204).end();
}));
app.post('/api/ai/conversations/:id/messages', requireDatabase, authRequired, asyncRoute(async (req, res) => {
  const { message } = req.body || {};
  const mode = modes.has(req.body && req.body.mode) ? req.body.mode : 'обычный';
  if (!validText(message, 6000)) return res.status(400).json({ error: 'Message must contain 1–6000 characters.' });
  if (!process.env.AI_API_KEY || !process.env.AI_MODEL) return res.status(503).json({ error: 'AI provider is not configured. Set AI_API_KEY and AI_MODEL on the server.' });
  const conversation = await pool.query('SELECT id FROM ai_conversations WHERE id=$1 AND user_id=$2', [req.params.id, req.userId]);
  if (!conversation.rowCount) return res.status(404).json({ error: 'Conversation not found.' });
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    await client.query("INSERT INTO ai_messages (conversation_id, role, content) VALUES ($1,'user',$2)", [req.params.id, message.trim()]);
    const history = await client.query('SELECT role, content FROM ai_messages WHERE conversation_id=$1 ORDER BY created_at DESC LIMIT 20', [req.params.id]);
    const systemPrompt = `${process.env.AI_SYSTEM_PROMPT || 'You are a helpful assistant.'}\nResponse mode: ${mode}.`;
    const response = await fetch(`${(process.env.AI_BASE_URL || 'https://api.openai.com/v1').replace(/\/$/, '')}/chat/completions`, {
      method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${process.env.AI_API_KEY}` },
      body: JSON.stringify({ model: process.env.AI_MODEL, messages: [{ role: 'system', content: systemPrompt }, ...history.rows.reverse()] }), signal: AbortSignal.timeout(45_000)
    });
    if (!response.ok) { await client.query('ROLLBACK'); return res.status(502).json({ error: 'AI provider request failed. Check server configuration and provider availability.' }); }
    const data = await response.json();
    const answer = data && data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content;
    if (typeof answer !== 'string' || !answer.trim()) { await client.query('ROLLBACK'); return res.status(502).json({ error: 'AI provider returned an empty response.' }); }
    const saved = await client.query("INSERT INTO ai_messages (conversation_id, role, content) VALUES ($1,'assistant',$2) RETURNING id, role, content, created_at", [req.params.id, answer.trim()]);
    await client.query("UPDATE ai_conversations SET mode=$2, title=CASE WHEN title='Новый диалог' THEN LEFT($3,60) ELSE title END, updated_at=NOW() WHERE id=$1", [req.params.id, mode, message.trim()]);
    await client.query('COMMIT');
    res.json({ message: saved.rows[0] });
  } catch (error) { await client.query('ROLLBACK'); throw error; } finally { client.release(); }
}));

// Serve the existing design unchanged and inject only the Telegram auth bridge.
app.get(['/', '/index.html'], asyncRoute(async (_req, res) => {
  const file = await fs.readFile(path.join(__dirname, '..', 'index', 'index.html'), 'utf8');
  const bridge = '<script src="https://telegram.org/js/telegram-web-app.js"></script><script defer src="/telegram-bridge.js"></script>';
  res.type('html').send(file.replace('</head>', `${bridge}</head>`));
}));
app.use(express.static(path.join(__dirname, '..', 'index'), { index: false, fallthrough: true }));
app.use('/assets', express.static(path.join(__dirname, '..', 'assets')));
app.use((req, res) => res.status(404).json({ error: 'Not found.' }));
app.use((error, _req, res, _next) => {
  if (res.headersSent) return;
  if (error && error.message === 'Origin is not allowed.') return res.status(403).json({ error: error.message });
  const status = Number(error && error.status) || (error && error.type === 'entity.parse.failed' ? 400 : 500);
  if (status >= 500) console.error('Request failed:', error && error.message);
  res.status(status).json({ error: status >= 500 ? 'Unexpected server error.' : (error.message || 'Request failed.') });
});

const server = app.listen(port, () => console.log(`DARK PROTOCOL preview/API listening on http://localhost:${port}`));
async function shutdown() { server.close(); if (pool) await pool.end(); }
process.on('SIGINT', () => shutdown().finally(() => process.exit(0)));
process.on('SIGTERM', () => shutdown().finally(() => process.exit(0)));
