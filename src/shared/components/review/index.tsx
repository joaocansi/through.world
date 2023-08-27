import { useMarker } from '@/shared/hooks/markers';
import { FaTimes } from 'react-icons/fa';

import styles from './styles.module.scss';
import Logo from '../logo';
import RichText from '../rich-text';

export default function Review() {
  const { selectedMarker, isMarkerSelected, setSelectedMarker } = useMarker();
  return (
    <div className={`${styles.container} ${isMarkerSelected() ? styles.visible : ''}`}>
      {isMarkerSelected() && (
        <div className={styles.content}>
          <FaTimes
            size={32}
            cursor="pointer"
            onClick={() => setSelectedMarker(undefined)}
          />
          <Logo />
          <div className={styles.information}>
            <h3>{selectedMarker?.data.title}</h3>
            <div>
              <img src="/marker.png" alt="Place" />
              <h6>{`${selectedMarker?.data.state}, ${selectedMarker?.data.country}`}</h6>
            </div>
          </div>
          <RichText document={selectedMarker?.data.review} />
        </div>
      )}
    </div>
  );
}
