import { forwardRef } from 'react';
import { FaAward, FaMapMarkerAlt } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';
import { BsTelephoneFill } from 'react-icons/bs';

import styles from './PlaceCard.module.css';
import style from './style';
import StarRating from '../../StarRating/StarRating';
// import Chip from '../../FilterMenu/Chip/Chip';

import { Box, List, ListItem, Typography, Rating, Chip } from '@mui/material';

const PlaceCard = forwardRef(({ place }, ref) => {
  return (
    <ListItem disableGutters disablePadding ref={ref} sx={style.placeCard}>
      <Box component='figure' sx={style.imageContainer}>
        <Box sx={style.placeHeading}>
          <Typography variant='h5'>{place.name}</Typography>
          <Box sx={style.contactInfo}>
            <Typography variant='subtitle1'>{place.phone}</Typography>
            <Typography variant='subtitle1'>{place.email}</Typography>
          </Box>
        </Box>
        {place.photo &&
        place.photo.images &&
        place.photo.images.large &&
        place.photo.images.large.url ? (
          <img
            className={`${styles['place-image']}`}
            src={place.photo.images.large.url}
            alt={`Place card img of ${place.name}`}
          />
        ) : (
          <Typography variant='body2'>Image unavailable</Typography>
        )}
      </Box>

      <Box component='article' sx={style.placeSummary}>
        <Box sx={style.summaryCustomers}>
          <Typography variant='body1' sx={style.placeRanking}>
            {place.ranking}
          </Typography>
          {Number(place.num_reviews) >= 1 ? (
            <Box sx={style.ratingContainer}>
              {place.rating && (
                <Rating
                  name='half-rating-read'
                  value={Number(place.rating)}
                  precision={0.5}
                  readOnly
                  sx={style.starRating}
                />
              )}
              <Typography variant='body1' sx={style.totalReviews}>
                {Number(place.num_reviews) +
                  ' ' +
                  (Number(place.num_reviews) === 1 ? 'review' : 'reviews')}
              </Typography>
            </Box>
          ) : (
            <Typography variant='body2'>
              Hmm...this place doesn't appear to have any reviews. Would you
              like to leave a review?
            </Typography>
          )}
        </Box>

        <Box component='article' sx={style.summaryAddress}>
          {place.address_obj &&
          place.address_obj &&
          place.address_obj.street1 &&
          place.address_obj.city &&
          place.address_obj.state &&
          place.address_obj.postalcode ? (
            <Box sx={style.addressStreet}>
              <Typography variant='body1'>{`${place.address_obj.street1}`}</Typography>
              <Typography variant='body1'>{`${place.address_obj.city}, ${place.address_obj.state} ${place.address_obj.postalcode}`}</Typography>
            </Box>
          ) : (
            ''
          )}
        </Box>

        <List sx={style.tagsList}>
          {place.cuisine &&
            place.cuisine.length >= 1 &&
            place.cuisine.map((cuisine) => (
              <ListItem disablePadding disableGutters>
                <Chip label={cuisine.name} />
              </ListItem>
            ))}
        </List>
      </Box>
    </ListItem>
  );
});

export default PlaceCard;
