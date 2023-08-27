import React from 'react';
import { MapContainer } from 'react-leaflet';
import { initialMapProps } from '@/shared/utils/config/leaflet';
import { useMarker } from '@/shared/hooks/markers';

import Markers from '../markers';
import TileLayer from '../tile-layer';

import styles from './styles.module.scss';

export default function Map() {
  const { isMarkerSelected } = useMarker();

  return (
    <div className={`${styles.container} ${isMarkerSelected() ? styles.visible : ''}`}>
      <MapContainer
        {...initialMapProps}
        className={styles.map}
      >
        <TileLayer />
        <Markers />
      </MapContainer>
    </div>
  );
}
