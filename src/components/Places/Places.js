import { useEffect, useRef, useContext } from 'react';
import { PlacesContext } from '../../store/PlacesContextProvider';
// components
import PlaceCard from './PlaceCard/PlaceCard';
// styles and ui
import styles from './Places.module.css';

const Places = () => {
  const { status, places, placeCardRefs, setPlaceCardRefs } =
    useContext(PlacesContext);
  const liRefs = useRef([]);

  useEffect(() => {
    console.log(places);
  }, [places]);

  useEffect(() => {
    if (places && places.length >= 1) {
      const refs = [];
      places.forEach((place, i) => {
        refs.push(liRefs.current[i]);
      });
      setPlaceCardRefs(refs);
    }
  }, [places, setPlaceCardRefs]);

  // print placeRefs state on update
  useEffect(() => {
    console.log(placeCardRefs);
  }, [placeCardRefs]);
  useEffect(() => {
    console.log(status);
  }, [status]);
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
