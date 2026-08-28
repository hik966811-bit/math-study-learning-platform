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

  const { userId, profileData } = req.body;
  if (!userId) return res.status(400).json({ error: 'UserId required' });

  try {
    const client = await connectToDatabase();
    const db = client.db('mathstudydb');
    const users = db.collection('users');

    const result = await users.findOneAndUpdate(
      { id: userId },
      { $set: profileData },
      { returnDocument: 'after' }
    );

    if (!result) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json({ success: true, user: result });
  } catch (error) {
    console.error('Update profile error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
