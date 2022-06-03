import { useEffect, useRef, useContext } from 'react';
import { PlacesContext } from '../../store/PlacesContext/PlacesContextProvider';
// components
import PlaceCard from './PlaceCard/PlaceCard';
// styles and ui
import styles from './Places.module.css';
import style from './style';
import { List } from '@mui/material';

const Places = () => {
  const { places, placeCardRefs, setPlaceCardRefs } = useContext(PlacesContext);

  useEffect(() => {
    console.log(places);
  }, [places]);

  const liRefs = useRef([]);

  useEffect(() => {
    if (places && places.length >= 1) {
      const refs = [];
      places.forEach((place, i) => {
        refs.push(liRefs.current[i]);
      });
      setPlaceCardRefs(refs);
    }
  }, [places, setPlaceCardRefs]);

  return (
    <List disablePadding sx={style.placesList}>
      {places?.map((place, i) => (
        <PlaceCard
          ref={(element) => {
            liRefs.current[i] = element;
          }}
          liRef={placeCardRefs.length >= 1 ? placeCardRefs[i] : null}
          key={i}
          place={place}
        />
      ))}
    </List>
  );
};

export default Places;
