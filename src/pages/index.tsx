import { GetStaticProps } from 'next';
import { MarkerProvider } from '@/shared/hooks/markers';

import api from '@/shared/utils/api';
import Container from '@/shared/components/container';

export default function Home({ travels }: any) {
  return (
    <MarkerProvider data={travels}>
      <Container />
    </MarkerProvider>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const travels = await api.getTravels();

  return {
    props: { travels },
    revalidate: 3 * 60,
  };
};
