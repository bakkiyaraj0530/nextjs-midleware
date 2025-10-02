// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body>
//         <header>My Navbar</header>
//         <main>{children}</main>
//         <footer>© 2025 My App</footer>
//       </body>
//     </html>
//   );
// }

import Navbar from '../components/Navbar';
import { CssBaseline, Container } from '@mui/material';

export const metadata = {
  title: 'Next.js App Router Demo',
  description: 'Next.js + MUI + Navbar example',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CssBaseline />
        <Navbar />
        <Container sx={{ mt: 4 }}>{children}</Container>
      </body>
    </html>
  );
}
