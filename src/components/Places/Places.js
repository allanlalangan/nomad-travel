import { useState, useEffect, useRef } from 'react';
// styles and ui
import styles from './Places.module.css';
// components
import PlaceCard from './PlaceCard/PlaceCard';

const Places = ({ places }) => {
  const [placeRefs, setPlaceRefs] = useState([]);
  const liRefs = useRef([]);

  // create new array of Place refs and setPlaceRefs state
  useEffect(() => {
    console.log('Create refs for: ', places);
    const refs = [];
    places.forEach((place, i) => {
      refs.push(liRefs.current[i]);
    });
    setPlaceRefs(refs);
  }, [places]);

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
          key={i}
          place={place}
        />
      ))}
    </ul>
  );
};

export default Places;
