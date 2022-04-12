import { useCallback } from 'react';
import GoogleMapReact from 'google-map-react';
import { Marker } from '@react-google-maps/api';
import { IoLocationSharp } from 'react-icons/io5';
// styles and ui
import styles from './Map.module.css';
// components
// import Marker from './Marker/Marker';
import PlaceMarker from './PlaceMarker/PlaceMarker';

const Map = ({ coordinates, places, setCoordinates, setBoundary }) => {
  const apiKey = { key: process.env.REACT_APP_MAPS_API_KEY };
  const onChange = useCallback((e) => {
    setCoordinates({ lat: e.center.lat, lng: e.center.lng });
    setBoundary({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
  }, []);

  return (
    <GoogleMapReact
      onChange={onChange}
      bootstrapURLKeys={apiKey}
      center={coordinates}
      defaultZoom={14}
      margin={[50, 50, 50, 50]}
      onChildClick={(child) => console.log(child)}
    >
      {places?.map((place) => {
        const markerPosition = {
          lat: Number(place.latitude),
          lng: Number(place.longitude),
        };
        return (
          <div
            className={`${styles['marker-container']}`}
            lat={markerPosition.lat}
            lng={markerPosition.lng}
          >
            <IoLocationSharp
              className={styles['marker-icon']}
              fontSize={'large'}
            />
          </div>
        );
      })}
    </GoogleMapReact>
  );
};

export default Map;
