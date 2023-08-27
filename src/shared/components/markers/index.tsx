import { useMarker } from '@/shared/hooks/markers';
import Marker from '../marker';

export default function Markers() {
  const { markers } = useMarker();
  return (
    <>
      {markers.map((marker, index) => <Marker key={`travel-marker-${index}`} {...marker} />)}
    </>
  );
}
