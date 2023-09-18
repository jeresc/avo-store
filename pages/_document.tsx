import { Html, Head, Main, NextScript } from 'next/document'

function Document() {
  return (
    <Html lang="en">
      <Head>
        {/*favicon*/}
        {/*webfonts*/}
        {/*stylesheet*/}
        {/*script/js*/}
      </Head>
      <body className="dark w-full max-w-3xl mx-auto lg:max-w-5xl">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
