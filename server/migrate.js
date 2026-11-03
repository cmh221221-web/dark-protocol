const fs = require('node:fs/promises');
const path = require('node:path');
require('dotenv').config();
const { Pool } = require('pg');

async function main() {
  if (!process.env.DATABASE_URL) throw new Error('DATABASE_URL is required. Copy .env.example to .env and configure PostgreSQL.');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, ssl: process.env.DATABASE_SSL === 'true' ? { rejectUnauthorized: true } : undefined });
  try {
    const sql = await fs.readFile(path.join(__dirname, '..', 'db', 'migrations', '001_initial.sql'), 'utf8');
    await pool.query(sql);
    console.log('DARK PROTOCOL database migration applied.');
  } finally { await pool.end(); }
}
main().catch(error => { console.error(error.message); process.exitCode = 1; });
