import React from 'react';
('use client');

// import Image from 'next/image';

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

      {/* <Image src="/profile.png" width={200} height={200} alt="Profile" /> */}

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
