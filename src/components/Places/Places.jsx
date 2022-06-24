import { useEffect, useRef, useContext } from 'react';
import { PlacesContext } from '../../store/PlacesContext/PlacesContextProvider';
// components
import PlaceCard from './PlaceCard/PlaceCard';
// styles and ui
import style from './style';
import { Typography, IconButton, Box, List } from '@mui/material';
import { Tune, Close } from '@mui/icons-material';
import { FilterContext } from '../../store/FilterContext/FilterContextProvider';

const Places = ({ filterOpen, toggleFilter }) => {
  const { category, status, places, placeCardRefs, setPlaceCardRefs } =
    useContext(PlacesContext);

  const displayedPlaces = places;
  useEffect(() => {
    console.log('places state', places);
  }, [places]);

  useEffect(() => {
    console.log('displayed places', displayedPlaces);
  }, [displayedPlaces, places]);

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
          <Typography sx={style.heading} variant='subtitle1' component='h3'>
            Top {places.length} {category}s in the area
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
          <IconButton onClick={toggleFilter} sx={style.filterButton}>
            {filterOpen ? <Close /> : <Tune />}
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
