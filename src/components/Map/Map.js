import { useState, useEffect, useCallback, useRef } from 'react';
import {
  GoogleMap,
  Marker,
  InfoWindow,
  MarkerClusterer,
} from '@react-google-maps/api';
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
  bounds,
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

  const onMarkerHover = useCallback((marker, place) => {
    setHoveredMarker({ place: place, placeMarker: marker });
  }, []);

  const onMarkerExitHover = useCallback(() => {
    setHoveredMarker(null);
  }, []);

  const onIdle = useCallback(() => {
    setHoveredMarker(null);
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
  }, [setBounds, setPlaces, bounds, places]);

  const options = {
    styles: mapStyles,
    clickableIcons: false,
    disableDefaultUI: true,
    zoomControl: true,
  };

  const infoWindowOptions = {
    pixelOffset: new window.google.maps.Size(0, -40),
    disableAutoPan: true,
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
      <MarkerClusterer>
        {(clusterer) =>
          places?.map((place, i) => (
            <Marker
              clusterer={clusterer}
              onLoad={(marker) =>
                setMarkers((prevState) => [...prevState, marker])
              }
              onMouseOver={(marker) => onMarkerHover(marker, place)}
              onMouseOut={onMarkerExitHover}
              key={place.location_id}
              position={{
                lat: Number(place.latitude),
                lng: Number(place.longitude),
              }}
            />
          ))
        }
      </MarkerClusterer>
      {hoveredMarker && (
        <InfoWindow
          options={infoWindowOptions}
          position={{
            lat: hoveredMarker.placeMarker.latLng.lat(),
            lng: hoveredMarker.placeMarker.latLng.lng(),
          }}
        >
          <div className={styles['info-window']}>
            <p>{hoveredMarker.place.name}</p>
            <p>{hoveredMarker.place.address}</p>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
};

export default Map;
