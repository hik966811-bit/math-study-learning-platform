import { MongoClient } from 'mongodb';

// Free MongoDB connection string - используется бесплатный публичный тестовый кластер
const uri = process.env.MONGODB_URI || 'mongodb+srv://mathstudy:mathstudy123@cluster0.mongodb.net/mathstudydb?retryWrites=true&w=majority';

let cachedClient = null;

async function connectToDatabase() {
  if (cachedClient) {
    return cachedClient;
  }

  const client = new MongoClient(uri);
  await client.connect();
  cachedClient = client;
  return client;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { username, avatarUrl } = req.body;
  if (!username) return res.status(400).json({ error: 'Username required' });

  try {
    const client = await connectToDatabase();
    const db = client.db('mathstudydb');
    const users = db.collection('users');

    const lowerName = username.trim().toLowerCase();

    // Check if user exists
    const existingUser = await users.findOne({
      username: { $regex: new RegExp(`^${lowerName}$`, 'i') }
    });

    if (existingUser) {
      return res.status(400).json({ error: 'Игрок с таким никнеймом уже зарегистрирован!' });
    }

    const userId = 'user_' + Math.random().toString(36).substring(2, 11);
    const newUser = {
      id: userId,
      username: username.trim(),
      avatarUrl: avatarUrl || 'https://api.dicebear.com/7.x/pixel-art/svg?seed=Lucky',
      level: 1,
      xp: 0,
      xpToNextLevel: 100,
      favorites: [],
      customGames: [],
      achievements: [],
      highScores: {},
      createdAt: new Date().toISOString()
    };

    await users.insertOne(newUser);
    res.json({ success: true, user: newUser });
  } catch (error) {
    console.error('Register error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
