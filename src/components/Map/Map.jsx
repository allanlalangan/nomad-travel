import { useEffect, useCallback, useRef, useContext } from 'react';

import { getPlaces } from '../../api/placesAPI';
import {
  GoogleMap,
  Marker,
  InfoWindow,
  GoogleMarkerClusterer,
} from '@react-google-maps/api';
import axios from 'axios';

// styles and ui
import style from './style';
import { mapStyles } from './mapStyles';
import { Paper, Typography, Rating, Box } from '@mui/material/';

import useFilter from '../../hooks/useFilter';
import { useState } from 'react';

const Map = ({
  openModal,
  setFilterActive,
  setPlacesStatus,
  setMapStatus,
  placesStatus,
  places,
  placeCardRefs,
  setPlaces,
  category,
  googleMap,
  setGoogleMap,
  coordinates,
  bounds,
  setCoordinates,
  setBounds,
}) => {
  const [hoveredMarker, setHoveredMarker] = useState(null);

  const { filteredPlaces, clearFilter } = useFilter(places);

  const mapRef = useRef();
  const onMapLoad = useCallback(
    (map) => {
      mapRef.current = map;
      setGoogleMap(mapRef.current);
    },
    [setGoogleMap]
  );

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, [setCoordinates]);

  useEffect(() => {
    const source = axios.CancelToken.source();
    if (category !== '' && bounds) {
      setPlaces([]);
      setPlacesStatus({ loading: true, success: false, error: null });
      clearFilter();
      setFilterActive(false);
      getPlaces(bounds, category, source)
        .then((data) => {
          if (typeof data === 'object') {
            setPlacesStatus({ success: true, loading: false, error: null });
            setPlaces(data);
          } else return;
        })
        .catch((error) => {
          setPlacesStatus({
            error: error.message,
            loading: false,
            success: false,
          });
        });
    } else return;
    return () => {
      source.cancel();
    };
  }, [
    bounds,
    category,
    setPlacesStatus,
    clearFilter,
    setFilterActive,
    setPlaces,
  ]);

  const onTilesLoaded = () => {
    // getBounds
    const latLngBounds = googleMap.getBounds();
    // const neBound = latLngBounds.getNorthEast();
    // const swBound = latLngBounds.getSouthWest();

    const tr_latitude = latLngBounds.getNorthEast().lat();
    const tr_longitude = latLngBounds.getNorthEast().lng();
    const bl_latitude = latLngBounds.getSouthWest().lat();
    const bl_longitude = latLngBounds.getSouthWest().lng();

    // fetch within cropped map bounds (bypass geodata of map area behind FilterMenu)

    // convert the bounds in pixels
    // const neBoundInPx = googleMap.getProjection().fromLatLngToPoint(neBound);
    // const swBoundInPx = googleMap.getProjection().fromLatLngToPoint(swBound);

    // calculate width
    // const procX = (window.innerWidth * 0.3) / window.innerWidth;
    // const procY = window.innerHeight / window.innerHeight;
    // const newLngInPx = (neBoundInPx.x - swBoundInPx.x) * procX + swBoundInPx.x;
    // const newLatInPx = (swBoundInPx.y - neBoundInPx.y) * procY + neBoundInPx.y;

    // const newLatLng = mapRef
    //   .getProjection()
    //   .fromPointToLatLng(new window.google.maps.Point(newLngInPx, newLatInPx));

    // cropped bounds
    // const bl_latitude = newLatLng.lat();
    // const bl_longitude = newLatLng.lng();

    setBounds({
      bl_latitude,
      tr_latitude,
      bl_longitude,
      tr_longitude,
    });
  };

  const onDragStart = () => {
    // setMapIsUpdating();
  };

  const onDragEnd = () => {
    setCoordinates({
      lat: googleMap.center.lat(),
      lng: googleMap.center.lng(),
    });
    // setMapUpdateSuccess();
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
    pixelOffset: new window.google.maps.Size(-1, -25),
    maxWidth: 200,
  };

  return (
    <>
      {placesStatus.loading === true && (
        <Paper sx={style.statusMessage}>
          <Typography variant='body1'>
            Fetching most popular places in this area...
          </Typography>
        </Paper>
      )}
      {placesStatus.error && (
        <Paper sx={style.statusMessage}>
          <Typography variant='body1'>{placesStatus.error}</Typography>
        </Paper>
      )}
      <GoogleMap
        onLoad={(map) => onMapLoad(map)}
        onTilesLoaded={onTilesLoaded}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        mapContainerStyle={mapContainerStyle}
        center={coordinates}
        options={options}
        zoom={14}
      >
        {placesStatus.success && (
          <GoogleMarkerClusterer averageCenter={true}>
            {(clusterer) =>
              places.map((place, i) => (
                <Box key={i}>
                  <Marker
                    onClick={
                      //   () => {
                      //   placeCardRefs[i]?.scrollIntoView({
                      //     behavior: 'auto',
                      //     block: 'center',
                      //   });
                      // }
                      openModal
                    }
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
                        <Paper sx={style.hoverInfo} key={i + Math.random()}>
                          <Typography variant='body1'>
                            {hoveredMarker.place.name}
                          </Typography>
                          <Rating
                            name='place-rating'
                            value={Number(hoveredMarker.place.rating)}
                            precision={0.5}
                            readOnly
                            sx={style.starRating}
                          />
                          <Typography variant='body1'>
                            {hoveredMarker.place.address}
                          </Typography>
                        </Paper>
                      </InfoWindow>
                    )}
                </Box>
              ))
            }
          </GoogleMarkerClusterer>
        )}
      </GoogleMap>
    </>
  );
};

export default Map;
