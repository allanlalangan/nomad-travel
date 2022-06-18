import { useEffect, useRef, useContext } from 'react';
import { PlacesContext } from '../../store/PlacesContext/PlacesContextProvider';
// components
import PlaceCard from './PlaceCard/PlaceCard';
// styles and ui
import style from './style';
import { Typography, IconButton, Box, List } from '@mui/material';
import { Tune } from '@mui/icons-material';

const Places = () => {
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
    status.isSuccess && (
      <>
        <Box sx={style.heading}>
          <Typography variant='h6' component='h3'>
            Most Popular Places In The Area
          </Typography>
          <IconButton sx={style.filterButton}>
            <Tune />
          </IconButton>
        </Box>
        <List disablePadding sx={style.placesList}>
          {places?.map((place, i) => (
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
      </>
    )
  );
};

export default Places;
