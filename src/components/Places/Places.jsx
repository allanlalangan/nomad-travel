import { useEffect, useRef, useState, useContext } from 'react';
import { PlacesContext } from '../../store/PlacesContext/PlacesContextProvider';
// components
import PlaceCard from './PlaceCard/PlaceCard';
// styles and ui
import style from './style';
import { Drawer, List } from '@mui/material';

const Places = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { status, places, placeCardRefs, setPlaceCardRefs } =
    useContext(PlacesContext);

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
    <Drawer
      sx={style.drawer}
      anchor='left'
      variant='permanent'
      open={isOpen}
      onClose={() => setIsOpen(false)}
    >
      <List disablePadding sx={style.placesList}>
        {status.isSuccess &&
          places?.map((place, i) => (
            <PlaceCard
              ref={(element) => {
                liRefs.current[i] = element;
              }}
              liRef={placeCardRefs.length >= 1 ? placeCardRefs[i] : null}
              key={place.location_id}
              place={place}
            />
          ))}
      </List>
    </Drawer>
  );
};

export default Places;
