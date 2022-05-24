import React, { createContext, useState } from 'react';
import { getPlaces } from '../../api/placesAPI';

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
  // global Places state
  const context = {
    status,
    category,
    places,
    placeCardRefs,
    // functions
    setIsLoading: () => {
      setStatus({
        isLoading: true,
        isError: false,
        isSuccess: false,
        message: 'Fetching places',
      });
    },
    setIsSuccess: () => {
      setStatus({
        isLoading: false,
        isError: false,
        isSuccess: true,
        message: 'Fetch Success',
      });
    },
    fetchPlaces: (bounds, category, source) => {
      setStatus({
        isLoading: true,
        isError: false,
        isSuccess: false,
        message: 'Fetching places',
      });
      getPlaces(bounds, category, source)
        .then((data) => setPlaces(data))
        .then(() => {
          setStatus({
            isLoading: false,
            isError: false,
            isSuccess: true,
            message: 'Fetch Success',
          });
        });
    },
    setCategory,
    setPlaces,
    setPlaceCardRefs,
    reset: () => {
      setStatus(initStatus);
    },
  };

  return (
    <PlacesContext.Provider value={context}>{children}</PlacesContext.Provider>
  );
};

export default PlacesContextProvider;
