import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Space_Grotesk } from 'next/font/google';

import Header from "../components/header/index";

const font = Space_Grotesk({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
    // location.host.split('.')[0] == amirkhan
  return (
    <section className={` ${font.className}`}>
      <Header />
      <Component {...pageProps} />
    </section>
  );

}
