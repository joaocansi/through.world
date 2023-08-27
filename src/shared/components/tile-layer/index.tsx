import { tileLayerHref } from '@/shared/utils/config/leaflet';
import { TileLayer as LeafletTileLayer } from 'react-leaflet';

export default function TileLayer() {
  return (
    <LeafletTileLayer
      attribution='© <a href="https://apps.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      url={tileLayerHref}
    />
  );
}
