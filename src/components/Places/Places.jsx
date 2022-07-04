import { useEffect, useRef, useContext, useState } from 'react';

// components
import PlaceCard from './PlaceCard/PlaceCard';
// styles and ui
import style from './style';
import { Typography, IconButton, Box, List } from '@mui/material';
import { Tune, Close } from '@mui/icons-material';

import useFilter from '../../hooks/useFilter';
import SkeletonCard from '../ui/Skeleton/SkeletonCard';

const Places = ({
  cardRefs,
  setCardRefs,
  category,
  status,
  places,
  filterOpen,
  filterActive,
  toggleFilter,
}) => {
  // const [cardRefs, setCardRefs] = useState([]);

  const { filteredPlaces } = useFilter(places, filterActive);

  useEffect(() => {
    console.log(filteredPlaces);
  }, [filteredPlaces]);

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
      {status.loading && (
        <List sx={style.placesList}>
          <SkeletonCard />
        </List>
      )}

      {status.success && (
        <List disablePadding sx={style.placesList}>
          {places?.map((place, i) => (
            <PlaceCard
              category={category}
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
