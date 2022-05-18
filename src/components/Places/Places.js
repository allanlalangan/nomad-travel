import { useEffect, useRef, useContext } from 'react';
import { PlacesContext } from '../../store/PlacesContextProvider';
import { MapContext } from '../../store/MapContextProvider';
// api
import { getPlaces } from '../../api/placesAPI';
// components
import PlaceCard from './PlaceCard/PlaceCard';
// styles and ui
import styles from './Places.module.css';

const Places = () => {
  const {
    // status,
    // category,
    places,
    // setPlaces,
    setIsLoading: setPlacesIsLoading,
    setIsSuccess: setPlacesIsSuccess,
    // fetchPlaces,
    placeCardRefs,
    setPlaceCardRefs,
  } = useContext(PlacesContext);
  const liRefs = useRef([]);

  useEffect(() => {
    const refs = [];
    places?.forEach((place, i) => {
      refs.push(liRefs.current[i]);
    });
    setPlaceCardRefs(refs);
  }, [places, setPlaceCardRefs]);

  // print placeRefs state on update
  // useEffect(() => {
  //   console.log(placeCardRefs);
  // }, [placeCardRefs]);
  // print status state on update
  // useEffect(() => {
  //   console.log(status);
  // }, [status]);
  // useEffect(() => {
  //   console.log(mapStatus);
  // }, [mapStatus]);

  return (
    <ul className={`${styles['places-list']}`}>
      {places?.map((place, i) => (
        <PlaceCard
          ref={(element) => {
            liRefs.current[i] = element;
          }}
          liRef={placeCardRefs[i]}
          key={i}
          place={place}
        />
      ))}
    </ul>
  );
};

export default Places;
