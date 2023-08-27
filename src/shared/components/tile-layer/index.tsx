/* eslint-disable consistent-return */
import { useMarker } from '@/shared/hooks/markers';
import { tileLayerHref } from '@/shared/utils/config/leaflet';
import { useEffect } from 'react';
import { TileLayer as LeafletTileLayer, useMap } from 'react-leaflet';

export default function TileLayer() {
  const map = useMap();
  const { selectedMarker } = useMarker();

  useEffect(() => {
    const element = document.getElementById('map');
    if (!element) { return; }

    const observer = new ResizeObserver(() => { map.invalidateSize({ animate: true }); });
    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [selectedMarker]);

  return (
    <LeafletTileLayer
      attribution='© <a href="https://apps.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      url={tileLayerHref}
    />
  );
}
