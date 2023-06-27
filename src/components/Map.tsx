import { MapContainer, TileLayer } from "react-leaflet";
import styles from '@/styles/components/map.module.css';

const Map = () => {
  return (
    <MapContainer
      center={[40.8054, -74.0241]}
      zoom={13}
      className={styles.mapContainer}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
    </MapContainer>
  );
};

export default Map;