import { useEffect, useRef, useContext } from 'react';
import { PlacesContext } from '../../store/PlacesContextProvider';
import { MapContext } from '../../store/MapContextProvider';
// styles and ui
import styles from './Places.module.css';
// components
import PlaceCard from './PlaceCard/PlaceCard';

const Places = () => {
  const { category, places, fetchPlaces, placeCardRefs, setPlaceCardRefs } =
    useContext(PlacesContext);
  const { bounds } = useContext(MapContext);
  const liRefs = useRef([]);

  // context useEffect
  // create new array of Place refs and setPlaceRefs state
  useEffect(() => {
    if (category !== '' && bounds) {
      fetchPlaces(bounds, category);
    }
  }, [fetchPlaces, category, bounds]);

  // useEffect(() => {
  //   const refs = [];
  //   // if (places.length > 0) {
  //   places.forEach((place, i) => {
  //     refs.push(liRefs.current[i]);
  //   });
  //   setPlaceCardRefs(refs);
  //   // }
  // }, [places, setPlaceCardRefs]);

  // print placeRefs state on update
  useEffect(() => {
    console.log(places);
  }, [places]);

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
