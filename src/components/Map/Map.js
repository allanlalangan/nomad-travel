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

const Map = ({
  places,
  setPlaces,
  placeRefs,
  selectedPlace,
  setSelectedPlace,
  setBounds,
  center,
  setCenter,
}) => {
  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  const [markers, setMarkers] = useState([]);
  const [hoveredMarker, setHoveredMarker] = useState(null);

  // re-render and print hoveredMarker
  useEffect(() => {
    console.log('hoveredMarker = ', hoveredMarker);
  }, [hoveredMarker]);

  // print places and markers in boundsd
  useEffect(() => {
    console.log('Places:', places);
  }, [places]);

  useEffect(() => {
    console.log('selectedPlace = ', selectedPlace);
  }, [selectedPlace]);

  useEffect(() => {
    console.log('markers = ', markers);
  }, [markers]);

  const onIdle = useCallback(() => {
    setHoveredMarker(null);
    setSelectedPlace(null);
    setMarkers([]);
    setPlaces([]);
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
  }, [setMarkers, setPlaces, setBounds, setHoveredMarker, setSelectedPlace]);

  const onDragEnd = () => {
    setCenter({
      lat: mapRef.current.center.lat(),
      lng: mapRef.current.center.lng(),
    });
  };

  const onMarkerLoad = (marker) => {
    setMarkers((prevState) => [...prevState, marker]);
  };

  const onMarkerHover = useCallback(
    (marker, place) => {
      setHoveredMarker({ marker, place });
      console.log('markers = ', markers);
      console.log('Hovering place:', places.indexOf(place), place);
    },
    [markers, places]
  );

  const onMarkerClick = useCallback(
    (marker, place, i) => {
      setSelectedPlace({ marker, place, ref: placeRefs[i] });
      placeRefs[i].scrollIntoView({ behavior: 'smooth', block: 'start' });
    },
    [placeRefs, setSelectedPlace]
  );

  const onMarkerExitHover = useCallback(() => {
    setHoveredMarker(null);
  }, []);

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

  const markerOptions = (place) => ({
    position: {
      lat: Number(place.latitude),
      lng: Number(place.longitude),
    },
  });

  const markerShape = (place) => ({
    coords: [
      Number(place.longitude) - 0.01,
      Number(place.latitude) + 0.01,
      Number(place.longitude) + 0.01,
      Number(place.latitude) - 0.01,
    ],
    type: 'rect',
  });

  const infoWindowOptions = {
    pixelOffset: new window.google.maps.Size(0, -35),
    // disableAutoPan: true,
    position: {
      lat: hoveredMarker?.marker.latLng.lat(),
      lng: hoveredMarker?.marker.latLng.lng(),
    },
    maxWidth: 200,
  };

  return (
    <GoogleMap
      onLoad={onMapLoad}
      onIdle={onIdle}
      onDragEnd={onDragEnd}
      mapContainerStyle={mapContainerStyle}
      center={center}
      options={options}
      zoom={15}
    >
      <MarkerClusterer>
        {(clusterer) =>
          places?.map((place, i) => (
            <>
              <Marker
                onLoad={(marker) => onMarkerLoad(marker)}
                onClick={(marker) => onMarkerClick(marker, place, i)}
                onMouseOver={(marker) => onMarkerHover(marker, place)}
                onMouseOut={onMarkerExitHover}
                options={markerOptions(place)}
                clusterer={clusterer}
                key={i}
              />

              {hoveredMarker &&
                places.indexOf(hoveredMarker.place) ===
                  places.indexOf(place) && (
                  <InfoWindow options={infoWindowOptions}>
                    <div className={styles['info-window']}>
                      <p>{hoveredMarker.place.name}</p>
                      <p>{hoveredMarker.place.address}</p>
                    </div>
                  </InfoWindow>
                )}
            </>
          ))
        }
      </MarkerClusterer>
      {selectedPlace && (
        <InfoWindow options={infoWindowOptions}>
          <div className={styles['info-window']}>
            <p>selected</p>
            <p>{selectedPlace.place.name}</p>
            <p>{selectedPlace.place.address}</p>
          </div>
        </InfoWindow>
      )}

      {/* {hoveredMarker && (
        <InfoWindow options={infoWindowOptions}>
          <div className={styles['info-window']}>
            <p>{hoveredMarker.place.name}</p>
            <p>{hoveredMarker.place.address}</p>
          </div>
        </InfoWindow>
      )} */}
    </GoogleMap>
  );
};

export default Map;
