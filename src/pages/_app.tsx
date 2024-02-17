import { Footer } from '@/components/footer';
import { NextHead } from '@/components/next-head';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextHead faviconUrl="/favicon.png" />

      <div className={`${inter.className} bg-black`}>
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}
