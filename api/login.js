import { MongoClient } from 'mongodb';

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

  const { username } = req.body;
  if (!username) return res.status(400).json({ error: 'Username required' });

  try {
    const client = await connectToDatabase();
    const db = client.db('mathstudydb');
    const users = db.collection('users');

    const lowerName = username.trim().toLowerCase();

    const foundUser = await users.findOne({
      username: { $regex: new RegExp(`^${lowerName}$`, 'i') }
    });

    if (!foundUser) {
      return res.status(404).json({ error: 'Пользователь не найден!' });
    }

    res.json({ success: true, user: foundUser });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
