export default interface Travel {
  country: string;
  state: string;
  title: string;
  review: any;
  rating: number;
  coordinates: Coordinates;
  travel_date: Date;
  travel_days: number;
}

export interface Coordinates {
  lon: number;
  lat: number;
}
