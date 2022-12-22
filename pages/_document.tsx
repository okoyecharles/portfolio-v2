import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-T9973SH7JN"></script>
        <script dangerouslySetInnerHTML={{__html: "window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-T9973SH7JN');"}} />
        <script dangerouslySetInnerHTML={{ __html: "const webConfig=JSON.parse(localStorage.getItem('okoye-charles-web-config')||'{}'),root=document.querySelector(':root');webConfig.darkMode&&root?.classList.add('dark');" }}/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
