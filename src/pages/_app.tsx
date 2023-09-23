import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Space_Grotesk } from 'next/font/google';

import Header from "../components/header/index";
import Script from 'next/script'

const font = Space_Grotesk({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
    // location.host.split('.')[0] == amirkhan
  return (
    <section style={{
        // alignItems: 'center',
        height: '100vh', display: 'flex'}} className={`bg-[#744dde] ${font.className}`}>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-2X3YCZ0ZJ8" />
        <Script id="google-analytics">
            {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-2X3YCZ0ZJ8');
        `}
        </Script>

      {/*<Header />*/}
      <Component {...pageProps} />
    </section>
  );

}
