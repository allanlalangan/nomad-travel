import React, { createContext, useReducer, useCallback } from 'react';
import placesReducer from './placesReducer';

export const PlacesContext = createContext();

const initState = {
  status: {
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: '',
  },
  category: 'restaurant',
  places: [],
  placeCardRefs: [],
};

const PlacesContextProvider = ({ children }) => {
  // useReducer
  const [state, dispatch] = useReducer(placesReducer, initState);

  const setCategory = (category) => {
    dispatch({ type: 'SELECT_CATEGORY', payload: { category } });
  };

  const setIsLoading = useCallback(() => {
    dispatch({ type: 'IS_LOADING' });
  }, []);

  const setIsError = useCallback((message) => {
    dispatch({ type: 'IS_ERROR', payload: { message } });
  }, []);

  const fetchSuccess = useCallback((data) => {
    dispatch({ type: 'IS_SUCCESS', payload: { places: data } });
  }, []);

  const setPlaceCardRefs = useCallback((refs) => {
    dispatch({ type: 'SET_PLACE_CARD_REFS', payload: { refs } });
  }, []);

  const context = {
    status: state.status,
    category: state.category,
    places: state.places,
    placeCardRefs: state.placeCardRefs,
    selectCategory: setCategory,
    setIsLoading,
    setIsError,
    fetchSuccess,
    setPlaceCardRefs,
  };

  return (
    <PlacesContext.Provider value={context}>{children}</PlacesContext.Provider>
  );
};

export default PlacesContextProvider;
