import { useEffect, useRef, useContext, useState } from 'react';
import { PlacesContext } from '../../store/PlacesContext/PlacesContextProvider';
// components
import PlaceCard from './PlaceCard/PlaceCard';
// styles and ui
import style from './style';
import { Typography, IconButton, Box, List } from '@mui/material';
import { Tune, Close } from '@mui/icons-material';
import { FilterContext } from '../../store/FilterContext/FilterContextProvider';
import useFilter from '../../hooks/useFilter';

const Places = ({ category, status, places, filterOpen, toggleFilter }) => {
  const [cardRefs, setCardRefs] = useState([]);
  // const { category, status, places, placeCardRefs, setCardRefs } =
  //   useContext(PlacesContext);

  const { filteredPlaces } = useFilter(places);
  // const { filteredPlaces } = useContext(FilterContext);
  const displayedPlaces = filteredPlaces.length >= 1 ? filteredPlaces : places;
  useEffect(() => {
    console.log('places state', places);
  }, [places]);

  const liRefs = useRef([]);

  useEffect(() => {
    if (places && places.length >= 1) {
      const refs = [];
      places.forEach((place, i) => {
        refs.push(liRefs.current[i]);
      });
      setCardRefs(refs);
    }
  }, [places, setCardRefs]);

  return (
    <>
      <Box sx={style.header}>
        {status.success ? (
          <Typography sx={style.heading} variant='subtitle1' component='h3'>
            Top {places.length} {category}s in the area
          </Typography>
        ) : (
          <Typography sx={style.heading} variant='subtitle1' component='h3'>
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

      {status.success && (
        <List disablePadding sx={style.placesList}>
          {displayedPlaces?.map((place, i) => (
            <PlaceCard
              ref={(element) => {
                liRefs.current[i] = element;
              }}
              liRef={cardRefs.length >= 1 ? cardRefs[i] : null}
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
