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

  const { userId, profileData } = req.body;
  if (!userId) return res.status(400).json({ error: 'UserId required' });

  try {
    const updates = [];
    const values = [];
    let paramIndex = 1;

    if (profileData.avatarUrl !== undefined) {
      updates.push(`avatar_url = $${paramIndex++}`);
      values.push(profileData.avatarUrl);
    }
    if (profileData.level !== undefined) {
      updates.push(`level = $${paramIndex++}`);
      values.push(profileData.level);
    }
    if (profileData.xp !== undefined) {
      updates.push(`xp = $${paramIndex++}`);
      values.push(profileData.xp);
    }
    if (profileData.favorites !== undefined) {
      updates.push(`favorites = $${paramIndex++}`);
      values.push(JSON.stringify(profileData.favorites));
    }

    if (updates.length === 0) {
      return res.status(400).json({ error: 'No updates provided' });
    }

    values.push(userId);
    const query = `UPDATE users SET ${updates.join(', ')} WHERE id = $${paramIndex} RETURNING *`;

    const result = await pool.query(query, values);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'User not found' });
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
    console.error('Update profile error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
