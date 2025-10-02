import '../styles/globals.css';
import Navbar from '../components/Navbar';
import { CssBaseline } from '@mui/material';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
