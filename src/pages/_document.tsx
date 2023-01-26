import Document, { Head, Html, NextScript } from "next/document";

export default class Mydocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
          <body>
            <main />
            <NextScript />
          </body>
        </Head>
      </Html>
    );
  }
}
