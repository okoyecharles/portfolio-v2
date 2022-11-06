import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <script dangerouslySetInnerHTML={{ __html: "const webConfig=JSON.parse(localStorage.getItem('okoye-charles-web-config')||'{}'),root=document.querySelector(':root');webConfig.darkMode&&root?.classList.add('dark');" }}/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
