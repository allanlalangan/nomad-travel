import { useEffect, useRef, useContext, useState } from 'react';

// components
import PlaceCard from './PlaceCard/PlaceCard';
// styles and ui
import style from './style';
import { Typography, IconButton, Box, List, Button } from '@mui/material';
import { Tune, Close } from '@mui/icons-material';

import useFilter from '../../hooks/useFilter';
import SkeletonCard from '../ui/Skeleton/SkeletonCard';

const Places = ({
  handleOpenModal,
  cardRefs,
  setCardRefs,
  category,
  status,
  places,
  filterOpen,
  filterActive,
  toggleFilter,
}) => {
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
            No Places Currently Listed
          </Typography>
        )}
        <Box sx={style.buttonContainer}>
          <Button
            variant='contained'
            onClick={toggleFilter}
            sx={style.filterButton}
          >
            <Typography sx={style.buttonText} variant='body1'>
              Filters
            </Typography>
            {filterOpen ? <Close /> : <Tune />}
          </Button>
        </Box>
      </Box>
      {status.loading && window.innerWidth >= 700 && (
        <List sx={style.placesList}>
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </List>
      )}

      {status.success && window.innerWidth >= 700 && (
        <List disablePadding sx={style.placesList}>
          {places?.map((place, i) => (
            <PlaceCard
              openModal={handleOpenModal}
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
