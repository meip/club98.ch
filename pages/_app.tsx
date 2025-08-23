import type { AppProps } from 'next/app';
import '../styles/globals.css';
import { Barlow } from 'next/font/google';

const barlow = Barlow({ subsets: ['latin'], weight: ['300', '400', '700'], variable: '--font-barlow' });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${barlow.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
