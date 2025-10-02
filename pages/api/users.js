export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json([
      { id: 1, name: 'Alice', role: 'Developer' },
      { id: 2, name: 'Bob', role: 'Designer' },
      { id: 3, name: 'Charlie', role: 'Manager' },
      { id: 4, name: 'Diana', role: 'Tester' },
    ]);
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
