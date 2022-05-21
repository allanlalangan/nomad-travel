import { useEffect, useCallback, useRef, useContext } from 'react';
import { MapContext } from '../../store/MapContextProvider';
import { PlacesContext } from '../../store/PlacesContextProvider';
import {
  GoogleMap,
  Marker,
  InfoWindow,
  GoogleMarkerClusterer,
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
    markers,
    setMarkers,
    hoveredMarker,
    setHoveredMarker,
  } = useContext(MapContext);

  useEffect(() => {
    console.log(status);
  }, [status]);

  const {
    setIsLoading: setPlacesIsLoading,
    setIsSuccess: setPlacesIsSuccess,
    category,
    places,
    fetchPlaces,
    placeCardRefs,
    setPlaces,
  } = useContext(PlacesContext);

  const mapRef = useRef();
  const onMapLoad = useCallback(
    (map) => {
      mapRef.current = map;
      setIsSuccess();
    },
    [setIsSuccess]
  );

  useEffect(() => {
    const source = axios.CancelToken.source();
    if (category !== '' && bounds) {
      fetchPlaces(bounds, category, source);
    } else return;
    return () => {
      source.cancel();
    };
  }, [bounds, category]);

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
      {places && places.length >= 1 && (
        <GoogleMarkerClusterer averageCenter={true}>
          {(clusterer) =>
            places.map((place, i) => (
              <>
                <Marker
                  onClick={() => {
                    placeCardRefs[i].scrollIntoView({
                      behavior: 'smooth',
                      block: 'center',
                    });
                  }}
                  onMouseOver={(marker) => {
                    setHoveredMarker({ marker: marker, place: place });
                  }}
                  onMouseOut={() => setHoveredMarker(null)}
                  position={{
                    lat: Number(place.latitude),
                    lng: Number(place.longitude),
                  }}
                  clusterer={clusterer}
                  key={place.location_id}
                  options={markerOptions}
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
                      key={Math.random()}
                    >
                      <div
                        key={Math.random()}
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
        </GoogleMarkerClusterer>
      )}
    </GoogleMap>
  );
};

export default Map;
