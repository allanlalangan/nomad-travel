import React, { useReducer, createContext } from 'react';
import mapReducer from './mapReducer';

export const MapContext = createContext();

const initState = {
  status: {
    isLoading: true,
    isError: false,
    isSuccess: false,
    message: 'Loading Map',
  },
  coordinates: {
    lat: 45.5252,
    lng: -122.6584,
  },
  bounds: null,
  places: [],
  placeCardRefs: [],
  hoveredMarker: null,
};

const MapContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(mapReducer, initState);

  const setIsUpdating = () => {
    dispatch({ type: 'IS_UPDATING' });
  };
  const setIsError = (message) => {
    dispatch({ type: 'IS_ERROR', payload: { message } });
  };
  const setIsSuccess = () => {
    dispatch({ type: 'IS_LOADED' });
  };

  const setCoordinates = (coordinates) => {
    dispatch({ type: 'SET_COORDINATES', payload: { coordinates } });
  };

  const setBounds = (bounds) => {
    dispatch({ type: 'SET_BOUNDS', payload: { bounds } });
  };

  const setHoveredMarker = (hovered) => {
    dispatch({ type: 'SET_HOVERED_MARKER', payload: { hovered } });
  };

  const context = {
    status: state.status,
    coordinates: state.coordinates,
    bounds: state.bounds,
    hoveredMarker: state.hoveredMarker,
    // functions
    setCoordinates,
    setBounds,
    setHoveredMarker,
    setIsUpdating,
    setIsSuccess,
  };
  return <MapContext.Provider value={context}>{children}</MapContext.Provider>;
};

export default MapContextProvider;
