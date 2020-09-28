import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class CustomDocument extends Document {
  render () {
    return (
      <Html lang='en-US'>
        <Head />
        <body className='bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50 transition ease-in-out'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
