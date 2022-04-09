import { useLoadScript } from '@react-google-maps/api';
import { useState } from 'react';
import { IoLocationSharp } from 'react-icons/io5';

// styles and ui
import styles from './Map.module.css';
// components
import Marker from './Marker/Marker';
import PlaceMarker from './PlaceMarker/PlaceMarker';

const Map = ({ places, coordinates, setCoordinates, setBoundary }) => {
  const apiKey = process.env.REACT_APP_MAPS_API_KEY;
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: apiKey,
  });

  if (!isLoaded) return <div>Loading...</div>;

  return <div className={styles.map}></div>;
};

export default Map;
