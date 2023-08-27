import Document, {
  Html, Head, NextScript, Main,
} from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <link rel="shortcut icon" href="/earth-globe.png" type="image/x-icon" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="description" content="Explore minhas aventuras ao redor do mundo enquanto compartilho minhas experiências de viagem por diversos países. Descubra culturas únicas, paisagens deslumbrantes e dicas valiosas para suas próprias jornadas." />
          <meta name="keywords" content="viagens internacionais, países visitados, culturas globais, experiências de viagem, aventuras pelo mundo, dicas de viagem, destinos turísticos, explorando culturas, paisagens globais, itinerários de viagem" />
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
