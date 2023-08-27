import dynamic from 'next/dynamic';

import styles from './styles.module.scss';
import Review from '../review';

const Map = dynamic(() => import('@/shared/components/map'), { ssr: false });

export default function Container() {
  return (
    <div className={styles.container}>
      <Map />
      <Review />
    </div>
  );
}
