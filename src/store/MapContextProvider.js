import React, { useState, createContext } from 'react';

export const MapContext = createContext({});

const MapContextProvider = ({ children }) => {
  const initStatus = {
    isLoading: true,
    isError: false,
    isSuccess: false,
    message: 'Loading Map',
  };
  const defaultCenter = {
    lat: 45.5252,
    lng: -122.6584,
  };

  // states
  const [status, setStatus] = useState(initStatus);
  const [coordinates, setCoordinates] = useState(defaultCenter);
  const [bounds, setBounds] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [hoveredMarker, setHoveredMarker] = useState(null);
  // global Map state
  const context = {
    status,
    coordinates,
    bounds,
    markers,
    hoveredMarker,
    // functions
    setIsLoading: () => {
      setStatus({
        isLoading: true,
        isError: false,
        isSuccess: false,
        message: 'Loading Map',
      });
    },
    setIsSuccess: () => {
      setStatus({
        isLoading: false,
        isError: false,
        isSuccess: true,
        message: 'Map Loaded Successfully',
      });
    },
    setMarkers,
    setHoveredMarker,
    setCoordinates,
    setBounds,
    reset: () => {
      setStatus(initStatus);
    },
  };
  return <MapContext.Provider value={context}>{children}</MapContext.Provider>;
};

export default MapContextProvider;
