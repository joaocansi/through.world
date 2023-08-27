import Document, {
  Html, Head, NextScript, Main,
} from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <link rel="shortcut icon" href="/earth-globe.png" type="image/x-icon" />
          <meta name="keywords" content="trips,world,flights,eurotrip,my trips,about my trips,travel,travelling around the world" />
          <title>Through.World - Conheça as Minhas Viagens</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
