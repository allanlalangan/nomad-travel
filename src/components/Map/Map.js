import { useCallback, useRef } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
// styles and ui
import styles from './Map.module.css';
// components
// import Marker from './Marker/Marker';
import PlaceMarker from './PlaceMarker/PlaceMarker';

const Map = ({ onLoad, coordinates }) => {
  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  const onBoundsChange = () => {
    console.log(mapRef.current.getBounds());
  };
  const mapContainerStyle = {
    width: '100%',
    height: '100%',
  };

  const options = {
    clickableIcons: false,
    disableDefaultUI: true,
    zoomControl: true,
  };

  return (
    <GoogleMap
      onLoad={onMapLoad}
      onIdle={onBoundsChange}
      mapContainerStyle={mapContainerStyle}
      center={coordinates}
      options={options}
      zoom={15}
    ></GoogleMap>
  );
};

export default Map;
