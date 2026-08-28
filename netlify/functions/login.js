import pg from 'pg';
const { Pool } = pg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { username } = req.body;
  if (!username) return res.status(400).json({ error: 'Username required' });

  try {
    const lowerName = username.trim().toLowerCase();
    const result = await pool.query(
      'SELECT * FROM users WHERE LOWER(username) = $1',
      [lowerName]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Пользователь не найден!' });
    }

    const row = result.rows[0];
    const user = {
      id: row.id,
      username: row.username,
      avatarUrl: row.avatar_url,
      level: row.level,
      xp: row.xp,
      xpToNextLevel: row.xp_to_next_level,
      favorites: row.favorites,
      customGames: row.custom_games,
      achievements: row.achievements,
      highScores: row.high_scores,
      createdAt: row.created_at
    };

    res.json({ success: true, user });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
