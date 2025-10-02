import React from 'react';
import Link from 'next/link';
import { AppBar, Toolbar, Tooltip, Button, Typography } from '@mui/material';

export default function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <ul
          style={{
            display: 'flex',
            gap: '20px',
            listStyle: 'none',
            justifyContent: 'left',
          }}
        >
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        {/* <Link href="/">
          <Button sx={{ color: '#fff' }}>Home</Button>
        </Link>
        <Link href="/about">
          <Button sx={{ color: '#fff' }}>About</Button>
        </Link>
        <Link href="/contact">
          <Button sx={{ color: '#fff' }}>Contact</Button>
        </Link> */}
      </Toolbar>
    </AppBar>
    // <>
    //   <AppBar position="static">
    //     <Toolbar>
    //       <Typography variant="h6" sx={{ flexGrow: 1 }}>
    //         MyApp
    //       </Typography>
    //       <Button color="inherit" component={Link} href="/">
    //         Home
    //       </Button>
    //       <Button color="inherit" component={Link} href="/about">
    //         About
    //       </Button>
    //       <Button color="inherit" component={Link} href="/contact">
    //         Contact
    //       </Button>
    //     </Toolbar>
    //   </AppBar>
    // </>
  );
}
