import type { AppProps } from 'next/app';

import 'leaflet/dist/leaflet.css';
import '@/shared/styles/globals.scss';
import '@/shared/styles/variables.scss';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/roboto/900.css';
import Head from 'next/head';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/earth-globe.png" type="image/x-icon" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Explore minhas aventuras ao redor do mundo enquanto compartilho minhas experiências de viagem por diversos países. Descubra culturas únicas, paisagens deslumbrantes e dicas valiosas para suas próprias jornadas." />
        <meta name="keywords" content="viagens internacionais, países visitados, culturas globais, experiências de viagem, aventuras pelo mundo, dicas de viagem, destinos turísticos, explorando culturas, paisagens globais, itinerários de viagem" />
        <title>Through.World - Conheça as Minhas Viagens</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
