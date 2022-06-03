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
      <Box sx={style.imageContainer}>
        <Box sx={style.placeHeading}>
          <Typography variant='h5'>{place.name}</Typography>
          <Box sx={style.contactInfo}>
            <BsTelephoneFill className={styles['contact_info-icon']} />
            <MdMail className={styles['contact_info-icon']} />
            <FaMapMarkerAlt className={styles['contact_info-icon']} />
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

      <Box sx={style.placeSummary}>
        <Box sx={style.summaryCustomers}>
          <Typography variant='body1' sx={style.placeRanking}>
            {place.ranking}
          </Typography>
          {Number(place.num_reviews) >= 1 ? (
            <>
              {place.rating && (
                <Rating
                  name='half-rating-read'
                  value={Number(place.rating)}
                  precision={0.5}
                  readOnly
                />
              )}
              <Typography variant='body1'>{`${place.rating} out of 5 stars`}</Typography>
              <Typography variant='body1'>
                {Number(place.num_reviews) +
                  ' ' +
                  (Number(place.num_reviews) === 1 ? 'review' : 'reviews')}
              </Typography>
            </>
          ) : (
            <Typography variant='body2'>
              Hmm...this place doesn't appear to have any reviews. Would you
              like to leave a review?
            </Typography>
          )}
        </Box>

        <Box sx={style.summaryAddress}>
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

        <Box sx={style.summaryTags}>
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
      </Box>
    </ListItem>
  );
});

export default PlaceCard;
