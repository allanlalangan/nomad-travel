import React, { useState, createContext } from 'react';

export const MapContext = createContext();

export const MapContextProvider = ({ children }) => {
  const initStatus = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: '',
  };
  const [status, setStatus] = useState(initStatus);
  const [coordinates, setCoordinates] = useState({
    lat: 40.7831,
    lng: -73.9712,
  });
  const [bounds, setBounds] = useState({});
  const context = {
    status,
    coordinates,
  };
  return <MapContext.Provider value={context}>{children}</MapContext.Provider>;
};
