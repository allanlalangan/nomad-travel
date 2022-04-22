import { useState, useEffect, useCallback, useRef } from 'react';
import { GoogleMap, Marker, InfoWindow } from '@react-google-maps/api';
// styles and ui
import styles from './Map.module.css';
import { mapStyles } from './mapStyles';
// components
import PlaceMarker from './PlaceMarker/PlaceMarker';

const Map = ({
  selectedPlace,
  selectPlace,
  setPlaces,
  places,
  setBounds,
  center,
}) => {
  const [markers, setMarkers] = useState([]);
  const [hoveredMarker, setHoveredMarker] = useState(null);

  useEffect(() => {
    console.log(hoveredMarker);
  }, [hoveredMarker]);

  useEffect(() => {
    console.log(markers);
  }, [markers]);

  const mapRef = useRef();

  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  const onMarkerHover = useCallback((marker) => {
    console.log(marker.latLng.lat(), marker.latLng.lng());
  }, []);

  const onMarkerExitHover = useCallback(() => {
    setHoveredMarker(null);
  }, []);

  const onIdle = () => {
    setPlaces([]);
    setMarkers([]);

    const {
      Ab: { h: bl_latitude },
      Va: { h: bl_longitude },
      Va: { j: tr_longitude },
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

  const mapContainerStyle = {
    width: '100%',
    height: '100%',
  };

  return (
    <GoogleMap
      onLoad={onMapLoad}
      onIdle={onIdle}
      mapContainerStyle={mapContainerStyle}
      center={center}
      options={options}
      zoom={15}
    >
      {places?.map((place, i) => (
        <Marker
          onLoad={(marker) => setMarkers((prevState) => [...prevState, marker])}
          onMouseOver={(marker) => onMarkerHover(marker)}
          onMouseOut={onMarkerExitHover}
          onClick={() => selectPlace(place)}
          key={place.location_id}
          position={{
            lat: Number(place.latitude),
            lng: Number(place.longitude),
          }}
        />
      ))}
    </GoogleMap>
  );
};

export default Map;
