'use client';

import { useEffect, useState } from 'react';
import { Grid, Paper, Typography } from '@mui/material';

export default function Home() {
  const [users, setUsers] = useState([]);

  // Fetch users on page load
  useEffect(() => {
    fetch('/api/users')
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
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
              sx={{ p: 2, textAlign: 'center', borderRadius: 2 }}
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
