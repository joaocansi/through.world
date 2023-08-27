import { Marker as LeafletMarker, Tooltip, useMap } from 'react-leaflet';
import L from 'leaflet';
import { Marker as MarkerData, useMarker } from '@/shared/hooks/markers';

import styles from './styles.module.scss';

const LeafletMarkerIcon = L.icon({
  iconUrl: '/marker.png',
  iconSize: [33.4, 50],
  iconAnchor: [20, 50],
  tooltipAnchor: [-3, -55],
});

const SelectedLeafletMarkerIcon = L.icon({
  iconUrl: '/selected-marker.png',
  iconSize: [33.4, 50],
  iconAnchor: [20, 50],
  tooltipAnchor: [-3, -55],
});

export default function Marker(marker: MarkerData) {
  const { position, data } = marker;
  const { setSelectedMarker, selectedMarker } = useMarker();

  const map = useMap();

  const click = () => {
    setSelectedMarker(marker);
    setTimeout(() => {
      map.invalidateSize();
      map.flyTo([position.lat, position.lon]);
    }, 250);
  };

  return (
    <LeafletMarker
      position={[
        position.lat,
        position.lon,
      ]}
      icon={
        position === selectedMarker?.position
          ? SelectedLeafletMarkerIcon
          : LeafletMarkerIcon
}
      eventHandlers={{
        click,
      }}
    >
      <Tooltip direction="top">
        <div className={styles.tooltip}>
          <h6>{`${data.state}, ${data.country}`}</h6>
          <span>(Clique para ver mais)</span>
        </div>
      </Tooltip>
    </LeafletMarker>
  );
}
