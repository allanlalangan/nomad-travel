import { useCallback, useRef } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
// styles and ui
import styles from './Map.module.css';
import { mapStyles } from './mapStyles';
// components
import PlaceMarker from './PlaceMarker/PlaceMarker';

const Map = ({ places, setBounds, center }) => {
  const mapContainerStyle = {
    width: '100%',
    height: '100%',
  };

  const mapRef = useRef();
  const markerRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);
  const onMarkerLoad = useCallback((marker) => {
    markerRef.current = marker;
  }, []);

  const onIdle = () => {
    const {
      Ab: { h: bl_latitude },
      Ua: { h: bl_longitude },
      Ua: { j: tr_longitude },
      Ab: { j: tr_latitude },
    } = mapRef.current.getBounds();

    setBounds({
      bl_latitude,
      bl_longitude,
      tr_longitude,
      tr_latitude,
    });
  };

  const options = {
    styles: mapStyles,
    clickableIcons: false,
    disableDefaultUI: true,
    zoomControl: true,
  };

  return (
    <GoogleMap
      onLoad={onMapLoad}
      onIdle={onIdle}
      onClick={(e) => console.log(e)}
      mapContainerStyle={mapContainerStyle}
      center={center}
      options={options}
      zoom={15}
    >
      {places?.map(({ location_id, latitude, longitude }) => (
        <Marker
          ref={markerRef}
          key={location_id}
          position={{
            lat: Number(latitude),
            lng: Number(longitude),
          }}
        />
      ))}
    </GoogleMap>
  );
};

export default Map;
