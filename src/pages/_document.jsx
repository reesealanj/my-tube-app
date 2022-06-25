import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link rel='stylesheet' href='https://rsms.me/inter/inter.css' />
      </Head>
      <body className='bg-stone-200'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
