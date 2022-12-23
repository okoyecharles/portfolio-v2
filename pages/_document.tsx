import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html>
      <Head>
        <Script id="light-dark-enabler" strategy='beforeInteractive'>
          {`
            const webConfig = JSON.parse(localStorage.getItem('okoye-charles-web-config') || '{}'),root=document.querySelector(':root');
            webConfig.darkMode && root?.classList.add('dark');
          `}
        </Script>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-T9973SH7JN"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            gtag('config', 'G-T9973SH7JN');
          `}
        </Script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
