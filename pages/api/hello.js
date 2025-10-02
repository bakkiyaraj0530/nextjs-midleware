// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json({ message: 'Hello from API 👋' });
  } else if (req.method === 'POST') {
    res.status(200).json({ message: 'Data received', body: req.body });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}

// export default (req, res) => {
//   // Open Chrome DevTools to step through the debugger!
//   // debugger;
//   res.status(200).json({ name: 'Hello, world!' });
// };

// // Handles GET request
// export async function GET() {
//   return Response.json({ message: 'Hello from API 👋' });
// }

// // Handles POST request
// export async function POST(request) {
//   const data = await request.json(); // parse body
//   return Response.json({ message: 'Data received', data });
// }
