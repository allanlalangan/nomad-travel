import { useEffect, useCallback, useRef, useContext, useMemo } from 'react';
import { MapContext } from '../../store/MapContextProvider';
import { PlacesContext } from '../../store/PlacesContextProvider';
import {
  GoogleMap,
  Marker,
  InfoWindow,
  MarkerClusterer,
} from '@react-google-maps/api';
// styles and ui
import styles from './Map.module.css';
import { mapStyles } from './mapStyles';
import { getPlaces } from '../../api/placesAPI';
import axios from 'axios';
import { GiConsoleController } from 'react-icons/gi';

const Map = ({ isLoaded }) => {
  const {
    status,
    setIsSuccess,
    coordinates,
    setCoordinates,
    bounds,
    setBounds,
    markerRefs: mapMarkerRefs,
    setMarkerRefs,
    hoveredMarker,
    setHoveredMarker,
  } = useContext(MapContext);

  const {
    setIsLoading: setPlacesIsLoading,
    setIsSuccess: setPlacesIsSuccess,
    category,
    places,
    placeCardRefs,
    setPlaces,
  } = useContext(PlacesContext);

  console.log('render');
  const mapRef = useRef();
  const onMapLoad = useCallback(
    (map) => {
      mapRef.current = map;
      setIsSuccess();
    },
    [setIsSuccess]
  );

  const markerRefs = useRef([]);

  // request function with cancel
  useEffect(() => {
    const source = axios.CancelToken.source();
    if (category !== '' && bounds) {
      setPlacesIsLoading();
      getPlaces(bounds, category, source).then((data) => {
        setPlaces(data);
        setPlacesIsSuccess();
      });
    }

    return () => {
      source.cancel();
    };
  }, [category, bounds, setPlaces]);

  useEffect(() => {
    const refs = [];
    places?.forEach((place, i) => {
      refs.push(markerRefs.current[i]);
    });
    setMarkerRefs(refs);
  }, [places]);

  const onIdle = useCallback(() => {
    const {
      yb: { h: bl_latitude },
      yb: { j: tr_latitude },
      Ta: { h: bl_longitude },
      Ta: { j: tr_longitude },
    } = mapRef.current.getBounds();

    setBounds({
      bl_latitude,
      tr_latitude,
      bl_longitude,
      tr_longitude,
    });
  }, [setBounds]);

  const onDragEnd = () => {
    setCoordinates({
      lat: mapRef.current.center.lat(),
      lng: mapRef.current.center.lng(),
    });
  };

  const options = {
    styles: mapStyles,
    clickableIcons: false,
    disableDefaultUI: true,
    zoomControl: true,
  };
  const markerOptions = {
    optimized: true,
  };

  const onMarkerLoad = useCallback((marker) => {
    console.log(marker);
  });

  const onMarkerHover = useCallback(
    (marker, place) => {
      if (hoveredMarker === null || hoveredMarker.place !== place) {
        setHoveredMarker({ marker: marker, place: place });
      }
    },
    [hoveredMarker]
  );

  const mapContainerStyle = {
    width: '100%',
    height: '100%',
  };

  const infoWindowOptions = {
    pixelOffset: new window.google.maps.Size(0, -35),
    maxWidth: 200,
  };

  return (
    <GoogleMap
      onLoad={(map) => onMapLoad(map)}
      onIdle={onIdle}
      onDragEnd={onDragEnd}
      mapContainerStyle={mapContainerStyle}
      center={coordinates}
      options={options}
      zoom={15}
    >
      {places?.map((place, i) => (
        <>
          <Marker
            ref={(element) => {
              markerRefs.current[i] = element;
            }}
            onLoad={(marker) => onMarkerLoad(marker)}
            onClick={() => {
              placeCardRefs[i].scrollIntoView({
                behavior: 'smooth',
                block: 'center',
              });
            }}
            onMouseOver={(marker) => onMarkerHover(marker, place)}
            onMouseOut={() => setHoveredMarker(null)}
            position={{
              lat: Number(place.latitude),
              lng: Number(place.longitude),
            }}
            options={markerOptions}
            key={place.location_id + Math.random()}
          />

          {hoveredMarker?.place &&
            places.indexOf(hoveredMarker.place) === places.indexOf(place) && (
              <InfoWindow
                position={{
                  lat: Number(place.latitude),
                  lng: Number(place.longitude),
                }}
                options={infoWindowOptions}
              >
                <div
                  key={place.location_id + Math.random()}
                  className={styles['info-window']}
                >
                  <p>{hoveredMarker.place.name}</p>
                  <p>{hoveredMarker.place.address}</p>
                </div>
              </InfoWindow>
            )}
        </>
      ))}
    </GoogleMap>
  );
};

export default Map;
