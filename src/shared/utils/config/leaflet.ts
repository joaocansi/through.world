import { MapContainerProps } from 'react-leaflet';

const userId = process.env.NEXT_PUBLIC_MBOX_USER_ID;
const styleId = process.env.NEXT_PUBLIC_MBOX_STYLE_ID;
const accessToken = process.env.NEXT_PUBLIC_MBOX_ACCESS_TOKEN;

export const tileLayerHref = `https://api.mapbox.com/styles/v1/${userId}/${styleId}/tiles/256/{z}/{x}/{y}@2x?access_token=${accessToken}`;
export const initialMapProps = {
  maxBounds: [[-180, 180], [180, -180]],
  zoom: 3,
  minZoom: 3,
  center: [0, 0],
} as MapContainerProps;
