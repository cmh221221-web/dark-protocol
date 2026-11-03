const crypto = require('node:crypto');
const jwt = require('jsonwebtoken');

function verifyTelegramInitData(initData, botToken, maxAgeSeconds = 86400) {
  if (!initData || !botToken) throw new Error('Telegram authorization is not configured.');
  let params;
  try { params = new URLSearchParams(initData); } catch { throw new Error('Invalid Telegram initData.'); }
  const receivedHash = params.get('hash');
  if (!receivedHash || !/^[a-f0-9]{64}$/i.test(receivedHash)) throw new Error('Invalid Telegram initData hash.');
  const dataCheckString = [...params.entries()]
    .filter(([key]) => key !== 'hash')
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([key, value]) => `${key}=${value}`)
    .join('\n');
  const secretKey = crypto.createHmac('sha256', 'WebAppData').update(botToken).digest();
  const expectedHash = crypto.createHmac('sha256', secretKey).update(dataCheckString).digest();
  const actualHash = Buffer.from(receivedHash, 'hex');
  if (actualHash.length !== expectedHash.length || !crypto.timingSafeEqual(actualHash, expectedHash)) {
    throw new Error('Telegram initData signature verification failed.');
  }
  const authDate = Number(params.get('auth_date'));
  const now = Math.floor(Date.now() / 1000);
  if (!Number.isInteger(authDate) || authDate > now + 60 || now - authDate > maxAgeSeconds) {
    throw new Error('Telegram authorization has expired. Reopen the Mini App.');
  }
  let user;
  try { user = JSON.parse(params.get('user') || ''); } catch { throw new Error('Telegram user data is missing or invalid.'); }
  if (!user || !Number.isSafeInteger(Number(user.id))) throw new Error('Telegram user id is invalid.');
  return { user, authDate, queryId: params.get('query_id') || null };
}

function createAccessToken(userId, secret) {
  return jwt.sign({ sub: String(userId) }, secret, { expiresIn: '12h', issuer: 'dark-protocol', audience: 'dark-protocol-mini-app' });
}

function requireAuth(secret) {
  return (req, res, next) => {
    const [scheme, token] = String(req.get('authorization') || '').split(' ');
    if (scheme !== 'Bearer' || !token) return res.status(401).json({ error: 'Authentication required.' });
    try {
      const payload = jwt.verify(token, secret, { issuer: 'dark-protocol', audience: 'dark-protocol-mini-app' });
      req.userId = payload.sub;
      next();
    } catch {
      return res.status(401).json({ error: 'Session expired. Reopen the Mini App to sign in.' });
    }
  };
}

module.exports = { verifyTelegramInitData, createAccessToken, requireAuth };
