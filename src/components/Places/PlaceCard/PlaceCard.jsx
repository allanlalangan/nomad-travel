import { forwardRef } from 'react';
import {
  CardMedia,
  Box,
  Button,
  Chip,
  List,
  ListItem,
  ListItemButton,
  Typography,
  Rating,
  Divider,
} from '@mui/material';
import { LocalPhone, Email, Language, LocationOn } from '@mui/icons-material';
import style from './style';

const PlaceCard = forwardRef(({ openModal, category, place }, ref) => {
  return (
    <ListItem disableGutters disablePadding ref={ref} sx={style.placeCard}>
      <Box sx={{ ...style.placeHeading, ...style.fullWidth }}>
        <Typography
          sx={{ ...style.placeTitle, ...style.fullWidth }}
          variant='h5'
        >
          {place.name}
        </Typography>
      </Box>

      <Box
        component='article'
        sx={{ ...style.placeSummary, ...style.fullWidth }}
      >
        <Box sx={style.summaryCustomers}>
          {Number(place.num_reviews) >= 1 ? (
            <Box sx={style.ratingContainer}>
              {place.rating && (
                <Rating
                  readOnly
                  key={place.location_id}
                  name='place-rating'
                  value={Number(place.rating)}
                  precision={0.5}
                  sx={style.starRating}
                />
              )}
              <Typography variant='caption' sx={style.totalReviews}>
                {`${Number(place.num_reviews)} ${
                  Number(place.num_reviews) === 1 ? 'review' : 'reviews'
                }`}
              </Typography>
            </Box>
          ) : (
            <Typography variant='body2'>
              Hmm...this place doesn't appear to have any reviews. Would you
              like to leave a review?
            </Typography>
          )}
          <Divider sx={{ width: '100%' }} />
        </Box>

        {place.dietary_restrictions?.length >= 1 && (
          <>
            <List sx={{ ...style.summaryLists.__tags, ...style.fullWidth }}>
              {place.dietary_restrictions.map((diet) => (
                <Chip key={diet} label={diet} />
              ))}
            </List>
            <List sx={{ ...style.summaryLists.__diets, ...style.fullWidth }}>
              {place.cuisine?.length >= 1 &&
                place.cuisine.map((cuisine) => (
                  <Chip key={cuisine} label={cuisine} />
                ))}
            </List>
          </>
        )}
      </Box>
      <Box component='article' sx={style.cardActions}>
        <Divider sx={{ width: '100%' }} />
        <Button
          onClick={() => openModal(place)}
          sx={style.tripAdvisorLink}
          variant='outlined'
        >
          <Typography sx={style.cardActionButton__text} variant='body1'>
            View More Info
          </Typography>
        </Button>
      </Box>
    </ListItem>
  );
});

export default PlaceCard;
