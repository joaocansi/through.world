import Travel, { Coordinates } from '@/shared/models/travel';
import {
  createContext, useContext, ReactNode, useState, useMemo, Dispatch, SetStateAction,
} from 'react';

export type Marker = {
  data: Omit<Travel, 'coordinates'>;
  position: Coordinates;
};

type MarkerContextData = {
  markers: Marker[];
  selectedMarker: Marker | undefined;
  setSelectedMarker: Dispatch<SetStateAction<Marker | undefined>>;
  isMarkerSelected: () => boolean;
};

type MarkerProviderProps = {
  children: ReactNode;
  data: Travel[];
};

function toMarker(data: Travel[]) {
  return data.map((item: Travel) => ({ data: item, position: item.coordinates }));
}

export const MarkerContext = createContext({} as MarkerContextData);
export function MarkerProvider({ data, children }: MarkerProviderProps) {
  const [selectedMarker, setSelectedMarker] = useState<Marker | undefined>();
  const [markers] = useState<Marker[]>(toMarker(data));

  const isMarkerSelected = () => !!selectedMarker;

  const value = useMemo(() => ({
    markers,
    selectedMarker,
    setSelectedMarker,
    isMarkerSelected,
  }), [markers, selectedMarker]);

  return (
    <MarkerContext.Provider value={value}>
      {children}
    </MarkerContext.Provider>
  );
}

export const useMarker = () => useContext(MarkerContext);
