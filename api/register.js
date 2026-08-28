import pg from 'pg';
const { Pool } = pg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
});

// Initialize tables
async function initDb() {
  const client = await pool.connect();
  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS users (
        id VARCHAR(50) PRIMARY KEY,
        username VARCHAR(100) UNIQUE NOT NULL,
        avatar_url TEXT,
        level INTEGER DEFAULT 1,
        xp INTEGER DEFAULT 0,
        xp_to_next_level INTEGER DEFAULT 100,
        favorites JSONB DEFAULT '[]',
        custom_games JSONB DEFAULT '[]',
        achievements JSONB DEFAULT '[]',
        high_scores JSONB DEFAULT '{}',
        created_at TIMESTAMP DEFAULT NOW()
      );

      CREATE TABLE IF NOT EXISTS global_chat (
        id VARCHAR(50) PRIMARY KEY,
        username VARCHAR(100) NOT NULL,
        avatar_url TEXT,
        text TEXT NOT NULL,
        timestamp TIMESTAMP DEFAULT NOW()
      );

      CREATE TABLE IF NOT EXISTS rooms (
        code VARCHAR(10) PRIMARY KEY,
        name VARCHAR(200) NOT NULL,
        created_at TIMESTAMP DEFAULT NOW()
      );

      CREATE TABLE IF NOT EXISTS room_messages (
        id VARCHAR(50) PRIMARY KEY,
        room_code VARCHAR(10) REFERENCES rooms(code),
        username VARCHAR(100) NOT NULL,
        avatar_url TEXT,
        text TEXT NOT NULL,
        timestamp TIMESTAMP DEFAULT NOW()
      );
    `);
  } finally {
    client.release();
  }
}

initDb().catch(console.error);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { username, avatarUrl } = req.body;
  if (!username) return res.status(400).json({ error: 'Username required' });

  try {
    const lowerName = username.trim().toLowerCase();

    // Check if user exists
    const checkUser = await pool.query(
      'SELECT * FROM users WHERE LOWER(username) = $1',
      [lowerName]
    );

    if (checkUser.rows.length > 0) {
      return res.status(400).json({ error: 'Игрок с таким никнеймом уже зарегистрирован!' });
    }

    const userId = 'user_' + Math.random().toString(36).substring(2, 11);
    const result = await pool.query(
      `INSERT INTO users (id, username, avatar_url)
       VALUES ($1, $2, $3) RETURNING *`,
      [userId, username.trim(), avatarUrl || 'https://api.dicebear.com/7.x/pixel-art/svg?seed=Lucky']
    );

    const user = {
      id: result.rows[0].id,
      username: result.rows[0].username,
      avatarUrl: result.rows[0].avatar_url,
      level: result.rows[0].level,
      xp: result.rows[0].xp,
      xpToNextLevel: result.rows[0].xp_to_next_level,
      favorites: result.rows[0].favorites,
      customGames: result.rows[0].custom_games,
      achievements: result.rows[0].achievements,
      highScores: result.rows[0].high_scores,
      createdAt: result.rows[0].created_at
    };

    res.json({ success: true, user });
  } catch (error) {
    console.error('Register error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
