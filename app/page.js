// export default function Home() {
//   return <h1>Welcome to the Home Page</h1>;
// }

// app/page.js
// export default async function Home() {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//   const post = await res.json();

//   return <h1>{post.title}</h1>;
// }

// export default function Home() {
//   return (
//     <div>
//       <h1>Welcome to the Home Page 🎉</h1>
//       <p>This is a Next.js App Router example with MUI.</p>
//     </div>
//   );
// }

'use client';

import { Grid, Paper, Typography } from '@mui/material';

const users = [
  { id: 1, name: 'Alice', role: 'Developer' },
  { id: 2, name: 'Bob', role: 'Designer' },
  { id: 3, name: 'Charlie', role: 'Manager' },
  { id: 4, name: 'Diana', role: 'Tester' },
];

export default function Home() {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        User List 👥
      </Typography>

      <Grid container spacing={2}>
        {users.map((user) => (
          <Grid item xs={12} sm={6} md={3} key={user.id}>
            <Paper
              elevation={3}
              sx={{
                padding: 2,
                textAlign: 'center',
                borderRadius: 2,
              }}
            >
              <Typography variant="h6">{user.name}</Typography>
              <Typography variant="body2" color="text.secondary">
                {user.role}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
