import dynamic from 'next/dynamic';
import Review from '../review';

const Map = dynamic(() => import('@/shared/components/map'), { ssr: false });

export default function Container() {
  return (
    <div>
      <Map />
      <Review />
    </div>
  );
}
