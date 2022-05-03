import { useEffect, useRef, useContext } from 'react';
import { PlacesContext } from '../../store/PlacesContextProvider';
// styles and ui
import styles from './Places.module.css';
// components
import PlaceCard from './PlaceCard/PlaceCard';

const Places = ({ places, placeRefs, setPlaceRefs }) => {
  const placesContext = useContext(PlacesContext);
  const liRefs = useRef([]);

  // create new array of Place refs and setPlaceRefs state
  useEffect(() => {
    const refs = [];
    places.forEach((place, i) => {
      refs.push(liRefs.current[i]);
    });
    setPlaceRefs(refs);
  }, [setPlaceRefs, places]);

  // print placeRefs state on update
  useEffect(() => {
    console.log('PlaceRefs:', placeRefs);
  }, [placeRefs]);

  return (
    <ul className={`${styles['places-list']}`}>
      {places?.map((place, i) => (
        <PlaceCard
          ref={(element) => {
            liRefs.current[i] = element;
          }}
          liRef={placeRefs[i]}
          key={i}
          place={place}
        />
      ))}
    </ul>
  );
};

export default Places;
