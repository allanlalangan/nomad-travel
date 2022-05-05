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

const Map = () => {
  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  const {
    coordinates,
    setCoordinates,
    bounds,
    setBounds,
    hoveredMarker,
    setHoveredMarker,
  } = useContext(MapContext);

  const { places, placeCardRefs } = useContext(PlacesContext);

  useEffect(() => {
    console.log(bounds);
  }, [bounds]);
  // re-render and print hoveredMarker
  useEffect(() => {
    console.log('hoveredMarker = ', hoveredMarker);
  }, [hoveredMarker]);

  // print places and markers in boundsd
  useEffect(() => {
    console.log('Places:', places);
  }, [places]);

  const onIdle = useCallback(() => {
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
      <MarkerClusterer>
        {(clusterer) =>
          places?.map((place, i) => (
            <>
              <Marker
                onClick={() => {
                  placeCardRefs[i].scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                  });
                }}
                onMouseOver={(place) => setHoveredMarker(place)}
                onMouseOut={() => setHoveredMarker(null)}
                // options={markerOptions(place)}
                position={{
                  lat: Number(place.latitude),
                  lng: Number(place.longitude),
                }}
                clusterer={clusterer}
                key={i}
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
                  >
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
    </GoogleMap>
  );
};

export default Map;
