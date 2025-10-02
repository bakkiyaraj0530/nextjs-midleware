import React, { useEffect } from 'react';
import { Typography } from '@mui/material';

export default function Contact() {
   useEffect(() => {
     alert('Contact us')
   }, [])
  return (
    <div style={{ padding: 20 }}>
      <Typography variant="h4">Contact Page</Typography>
      <Typography>You can reach us at contact@example.com.</Typography>
    </div>
  );
}
