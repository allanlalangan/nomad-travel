import { forwardRef } from 'react';
import style from './style';
import {
  CardMedia,
  Box,
  List,
  ListItem,
  ListItemButton,
  Typography,
  Rating,
  Chip,
} from '@mui/material';

import { LocalPhone, Email, Language } from '@mui/icons-material';

const PlaceCard = forwardRef(({ place }, ref) => {
  return (
    <ListItem disableGutters disablePadding ref={ref} sx={style.placeCard}>
      <Box sx={style.placeHeading}>
        <Typography sx={style.placeTitle} variant='h5'>
          {place.name}
        </Typography>
      </Box>
      <Box component='figure' sx={style.imageContainer}>
        {place.photo &&
        place.photo.images &&
        place.photo.images.large &&
        place.photo.images.large.url ? (
          <CardMedia
            component='img'
            sx={style.placeImage}
            src={place.photo.images.large.url}
            alt={`Place card img of ${place.name}`}
          />
        ) : (
          <Typography variant='body2'>Image unavailable</Typography>
        )}
      </Box>

      <Box component='article' sx={style.placeSummary}>
        {place.category && place.category.name.toLowerCase() === 'restaurant' && (
          <>
            <Box component='article' sx={style.contactInfo}>
              {place.phone && (
                <ListItemButton
                  dense
                  disableGutters
                  sx={style.contactInfoEntry}
                >
                  <LocalPhone />
                  <Typography sx={style.entryText} variant='body1'>
                    {place.phone}
                  </Typography>
                </ListItemButton>
              )}
              {place.email && (
                <ListItemButton
                  dense
                  disableGutters
                  sx={style.contactInfoEntry}
                >
                  <Email />
                  <Typography sx={style.entryText} variant='body1'>
                    {place.email.toLowerCase()}
                  </Typography>
                </ListItemButton>
              )}
              {place.website && (
                <ListItemButton
                  dense
                  disableGutters
                  sx={style.contactInfoEntry}
                >
                  <Language />
                  <Typography sx={style.entryText} variant='body1'>
                    {(place.website.toLowerCase().includes('https://') &&
                      place.website
                        .toLowerCase()
                        .replace('https://', '')
                        .replace('/', '')
                        .split('.com')[0] + '.com') ||
                      (place.website.toLowerCase().includes('http://') &&
                        place.website
                          .toLowerCase()
                          .replace('http://', '')
                          .replace('/', '')
                          .split('.com')[0] + '.com')}
                  </Typography>
                </ListItemButton>
              )}
            </Box>
          </>
        )}
        <Box sx={style.summaryCustomers}>
          <Typography variant='body1' sx={style.placeRanking}>
            {place.ranking}
          </Typography>
          {Number(place.num_reviews) >= 1 ? (
            <Box sx={style.ratingContainer}>
              {place.rating && (
                <Rating
                  key={place.location_id}
                  name='place-rating'
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
          place.address_obj.postalcode ? (
            <Box sx={style.addressStreet}>
              <Typography variant='body1'>{`${place.address_obj.street1}`}</Typography>
              <Typography variant='body1'>{`${place.address_obj.city}, ${
                place.address_obj.state ? place.address_obj.state : ''
              } ${place.address_obj.postalcode}`}</Typography>
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
