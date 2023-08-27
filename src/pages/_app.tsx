import type { AppProps } from 'next/app';

import 'leaflet/dist/leaflet.css';
import '@/shared/styles/globals.scss';
import '@/shared/styles/variables.scss';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/roboto/900.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
