import React, { createContext, useState } from 'react';
import { getPlaces } from '../api/placesAPI';

export const PlacesContext = createContext();

export const PlacesContextProvider = ({ children }) => {
  // state
  const initStatus = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: '',
  };
  const [status, setStatus] = useState(initStatus);
  const [places, setPlaces] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [hoveredPlace, setHoveredPlace] = useState(null);

  const context = {
    status,
    places,
    selectedPlace,
    hoveredPlace,
    fetchPlaces: (bounds, category) => {
      setStatus({
        isLoading: true,
        isError: false,
        isSuccess: false,
        message: 'Fetching data',
      });
      getPlaces(bounds, category).then((data) => setPlaces(data));
    },
    scrollToPlaceCard: (place) => {
      setSelectedPlace(place);
    },
    hoverPlacePreview: (place) => {
      setHoveredPlace(place);
    },
    reset() {
      setStatus(initStatus);
    },
  };

  return (
    <PlacesContext.Provider value={context}>{children}</PlacesContext.Provider>
  );
};
