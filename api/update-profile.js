import { Redis } from '@upstash/redis';

const redis = new Redis({
  url: process.env.KV_REST_API_URL || '',
  token: process.env.KV_REST_API_TOKEN || '',
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { userId, profileData } = req.body;
  if (!userId) return res.status(400).json({ error: 'UserId required' });

  try {
    const users = await redis.hgetall('users') || {};
    const userData = users[userId];

    if (!userData) {
      return res.status(404).json({ error: 'User not found' });
    }

    const user = typeof userData === 'string' ? JSON.parse(userData) : userData;
    const updatedUser = { ...user, ...profileData };

    await redis.hset('users', { [userId]: JSON.stringify(updatedUser) });
    res.json({ success: true, user: updatedUser });
  } catch (error) {
    console.error('Update profile error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
