import { useLoadScript } from '@react-google-maps/api';
import { useState } from 'react';
import { IoLocationSharp } from 'react-icons/io5';

// styles and ui
import styles from './Map.module.css';
// components
import Marker from './Marker/Marker';
import PlaceMarker from './PlaceMarker/PlaceMarker';

const Map = () => {
  return <div className={styles.map}></div>;
};

export default Map;
