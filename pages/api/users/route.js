// Mock user data
const users = [
  { id: 1, name: 'Alice', role: 'Developer' },
  { id: 2, name: 'Bob', role: 'Designer' },
  { id: 3, name: 'Charlie', role: 'Manager' },
  { id: 4, name: 'Diana', role: 'Tester' },
];

// GET /api/users
export async function GET() {
  return Response.json(users);
}

// POST /api/users
export async function POST(request) {
  const newUser = await request.json();
  users.push({ id: users.length + 1, ...newUser });
  return Response.json({ message: 'User added', user: newUser });
}
