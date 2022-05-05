import React, { createContext, useState } from 'react';
import { getPlaces } from '../api/placesAPI';

export const PlacesContext = createContext({});

const PlacesContextProvider = ({ children }) => {
  const initStatus = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: '',
  };
  // states
  const [status, setStatus] = useState(initStatus);
  const [category, setCategory] = useState('');
  const [places, setPlaces] = useState([]);
  const [placeCardRefs, setPlaceCardRefs] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState(null);
  // global Places state
  const context = {
    status,
    category,
    places,
    selectedPlace,
    placeCardRefs,
    // functions
    setPlaceCardRefs: (refs) => {
      setPlaceCardRefs(refs);
    },

    selectCategory: (category) => {
      setCategory(category);
    },

    fetchPlaces: (bounds, category) => {
      setStatus({
        isLoading: true,
        isError: false,
        isSuccess: false,
        message: 'Fetching places',
      });

      getPlaces(bounds, category).then((data) => setPlaces(data));

      setStatus({
        isLoading: false,
        isError: false,
        isSuccess: true,
        message: 'Fetch Success',
      });
    },

    scrollToPlaceCard: (place) => {
      setSelectedPlace(place);
    },

    reset: () => {
      setStatus(initStatus);
    },
  };

  return (
    <PlacesContext.Provider value={context}>{children}</PlacesContext.Provider>
  );
};

export default PlacesContextProvider;
