import { useEffect, useCallback, useRef, useContext } from 'react';
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

const Map = ({ isLoaded }) => {
  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  const {
    status: mapStatus,
    setIsSuccess,
    coordinates,
    setCoordinates,
    bounds,
    setBounds,
    hoveredMarker,
    setHoveredMarker,
  } = useContext(MapContext);

  const {
    status: placesStatus,
    setIsLoading: setPlacesIsLoading,
    setIsSuccess: setPlacesIsSuccess,
    category,
    places,
    placeCardRefs,
    setPlaces,
  } = useContext(PlacesContext);

  // set map context status when googlemaps isLoaded
  useEffect(() => {
    isLoaded && setIsSuccess();
  }, [isLoaded]);

  // print status state on update
  useEffect(() => {
    console.log(placesStatus);
  }, [placesStatus]);
  useEffect(() => {
    console.log(mapStatus);
  }, [mapStatus]);

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

  const onIdle = useCallback(() => {
    const {
      Ab: { h: bl_latitude },
      Ab: { j: tr_latitude },
      Va: { h: bl_longitude },
      Va: { j: tr_longitude },
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
      onLoad={onMapLoad}
      onIdle={onIdle}
      onDragEnd={onDragEnd}
      mapContainerStyle={mapContainerStyle}
      center={coordinates}
      options={options}
      zoom={15}
    >
      {places && (
        <MarkerClusterer key={Math.random()} averageCenter={true}>
          {(clusterer) =>
            places?.map((place, i) => (
              <>
                <Marker
                  onClick={() => {
                    placeCardRefs[i].scrollIntoView({
                      behavior: 'smooth',
                      block: 'center',
                    });
                  }}
                  onMouseOver={(marker) => {
                    setHoveredMarker({ marker, place });
                  }}
                  onMouseOut={() => setHoveredMarker(null)}
                  position={{
                    lat: Number(place.latitude),
                    lng: Number(place.longitude),
                  }}
                  clusterer={clusterer}
                  key={place.location_id}
                />

                {hoveredMarker &&
                  places.indexOf(hoveredMarker.place) ===
                    places.indexOf(place) && (
                    <InfoWindow
                      position={{
                        lat: Number(place.latitude),
                        lng: Number(place.longitude),
                      }}
                      options={infoWindowOptions}
                      key={place.location_id}
                    >
                      <div
                        key={place.location_id}
                        className={styles['info-window']}
                      >
                        <p>{hoveredMarker.place.name}</p>
                        <p>{hoveredMarker.place.address}</p>
                      </div>
                    </InfoWindow>
                  )}
              </>
            ))
          }
        </MarkerClusterer>
      )}
    </GoogleMap>
  );
};

export default Map;
