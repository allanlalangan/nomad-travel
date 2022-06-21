import { useEffect, useRef, useContext } from 'react';
import { PlacesContext } from '../../store/PlacesContext/PlacesContextProvider';
// components
import PlaceCard from './PlaceCard/PlaceCard';
// styles and ui
import style from './style';
import { Typography, IconButton, Box, List } from '@mui/material';
import { Tune } from '@mui/icons-material';

const Places = ({ openFilter }) => {
  const { category, status, places, placeCardRefs, setPlaceCardRefs } =
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
    <>
      <Box sx={style.header}>
        {status.isSuccess ? (
          <Typography sx={style.heading} variant='subtitle' component='h3'>
            Top {category}s in the area
          </Typography>
        ) : (
          <Typography sx={style.heading} variant='subtitle' component='h3'>
            Select a category
          </Typography>
        )}
        <Box sx={style.buttonContainer}>
          <Typography sx={style.buttonText} variant='caption'>
            Filters
          </Typography>
          <IconButton onClick={openFilter} sx={style.filterButton}>
            <Tune />
          </IconButton>
        </Box>
      </Box>

      {status.isSuccess && (
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
      )}
    </>
  );
};

export default Places;
