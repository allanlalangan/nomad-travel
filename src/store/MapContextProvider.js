import React, { useState, createContext } from 'react';

export const MapContext = createContext({});

const MapContextProvider = ({ children }) => {
  const initStatus = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: '',
  };
  const defaultCenter = {
    lat: 45.5252,
    lng: -122.6584,
  };

  // states
  const [status, setStatus] = useState(initStatus);
  const [coordinates, setCoordinates] = useState(defaultCenter);
  const [bounds, setBounds] = useState(null);
  const [hoveredMarker, setHoveredMarker] = useState(null);
  // global Map state
  const context = {
    status,
    coordinates,
    bounds,
    hoveredMarker,
    // functions
    setHoveredMarker: (marker) => {
      setHoveredMarker(marker);
    },
    setCoordinates: (coordinates) => {
      setStatus({
        isLoading: true,
        isError: false,
        isSuccess: false,
        message: 'Setting coordinates',
      });
      setCoordinates(coordinates);
      setStatus({
        isLoading: false,
        isError: false,
        isSuccess: true,
        message: `Displaying map at ${coordinates.lat}, ${coordinates.lng}`,
      });
    },
    setBounds: (bounds) => {
      setStatus({
        isLoading: true,
        isError: false,
        isSuccess: false,
        message: 'Setting bounds',
      });
      setBounds(bounds);
      setStatus({
        isLoading: false,
        isError: false,
        isSuccess: true,
        message: `Bounds set for center: ${coordinates.lat}, ${coordinates.lng}`,
      });
    },
  };
  return <MapContext.Provider value={context}>{children}</MapContext.Provider>;
};

export default MapContextProvider;
