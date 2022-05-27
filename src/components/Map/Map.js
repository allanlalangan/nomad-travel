import { useEffect, useCallback, useRef, useContext } from 'react';
import { MapContext } from '../../store/MapContext/MapContextProvider';
import { PlacesContext } from '../../store/PlacesContext/PlacesContextProvider';
import { getPlaces } from '../../api/placesAPI';
import {
  GoogleMap,
  Marker,
  InfoWindow,
  GoogleMarkerClusterer,
} from '@react-google-maps/api';

// styles and ui
import styles from './Map.module.css';
import { mapStyles } from './mapStyles';
import axios from 'axios';

const Map = () => {
  const {
    status,
    setIsUpdating: setMapIsUpdating,
    setIsSuccess: setMapIsSuccess,
    coordinates,
    bounds,
    hoveredMarker,
    setCoordinates,
    setBounds,
    setHoveredMarker,
  } = useContext(MapContext);

  useEffect(() => {
    console.log(status);
  }, [status]);

  const {
    category,
    places,
    setIsLoading: fetchPlacesLoading,
    setIsError: fetchPlacesError,
    fetchSuccess: fetchPlacesSuccess,
    placeCardRefs,
  } = useContext(PlacesContext);

  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
    setMapIsSuccess();
  }, []);

  useEffect(() => {
    const source = axios.CancelToken.source();
    if (category !== '' && bounds) {
      fetchPlacesLoading();
      getPlaces(bounds, category, source)
        .then((data) => {
          fetchPlacesSuccess(data);
        })
        .catch((error) => {
          fetchPlacesError(error.message);
        });
    } else return;
    return () => {
      source.cancel();
    };
  }, [bounds, category]);

  const onIdle = useCallback(() => {
    setMapIsUpdating();
    const {
      Ab: { h: bl_latitude },
      Ab: { j: tr_latitude },
      Ua: { h: bl_longitude },
      Ua: { j: tr_longitude },
    } = mapRef.current.getBounds();

    setBounds({
      bl_latitude,
      tr_latitude,
      bl_longitude,
      tr_longitude,
    });
    setMapIsSuccess();
  }, [setBounds]);

  const onDragEnd = () => {
    setMapIsUpdating();
    setCoordinates({
      lat: mapRef.current.center.lat(),
      lng: mapRef.current.center.lng(),
    });
    setMapIsSuccess();
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
