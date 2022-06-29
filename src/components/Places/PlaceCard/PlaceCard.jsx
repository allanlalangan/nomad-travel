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

const PlaceCard = forwardRef(({ category, place }, ref) => {
  return (
    <ListItem disableGutters disablePadding ref={ref} sx={style.placeCard}>
      <Box
        component='figure'
        sx={{ ...style.imageContainer, ...style.fullWidth }}
      >
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
          sx={{ ...style.contactInfo, ...style.fullWidth }}
        >
          {category !== 'hotel' && (
            <>
              <ListItemButton
                disabled={!place.phone}
                dense
                disableGutters
                sx={style.contactInfoEntry}
              >
                <LocalPhone />
                <Typography sx={style.entryText} variant='body1'>
                  {place.phone || 'Phone unavailable'}
                </Typography>
              </ListItemButton>

              <ListItemButton
                disabled={!place.email}
                dense
                disableGutters
                sx={style.contactInfoEntry}
              >
                <Email />
                <Typography sx={style.entryText} variant='body1'>
                  {place.email?.toLowerCase() || 'Email unavailable'}
                </Typography>
              </ListItemButton>

              <ListItemButton
                disabled={!place.website}
                dense
                disableGutters
                sx={style.contactInfoEntry}
              >
                <Language />
                <Typography sx={style.entryText} variant='body1'>
                  {(place.website?.toLowerCase().includes('https://') &&
                    place.website
                      .toLowerCase()
                      .replace('https://', '')
                      .replace('/', '')
                      .split('.com')[0] + '.com') ||
                    (place.website?.toLowerCase().includes('http://') &&
                      place.website
                        .toLowerCase()
                        .replace('http://', '')
                        .replace('/', '')
                        .split('.com')[0] + '.com') ||
                    'Website unavailable'}
                </Typography>
              </ListItemButton>
            </>
          )}
        </Box>

        {place.photo?.images?.large?.url ? (
          <CardMedia
            component='img'
            sx={{ ...style.placeImage, ...style.fullWidth }}
            src={place.photo.images.large.url}
            alt={`Place card img of ${place.name}`}
          />
        ) : (
          <Typography sx={style.imageErrorMessage} variant='body2'>
            Image unavailable
          </Typography>
        )}
      </Box>

      <Box
        component='article'
        sx={{ ...style.placeSummary, ...style.fullWidth }}
      >
        <Box sx={style.summaryCustomers}>
          <Typography
            variant='h6'
            sx={{ ...style.placeRanking, ...style.fullWidth }}
          >
            {place.ranking}
          </Typography>
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

        <Box
          component='article'
          sx={{ ...style.summaryAddress, ...style.fullWidth }}
        >
          {place.address_obj ? (
            <>
              <Box sx={style.addressStreet}>
                <Typography variant='body1'>{`${place.address_obj?.street1}`}</Typography>
                <Typography variant='body1'>{`${place.address_obj?.city}, ${
                  place.address_obj?.state || place.address_obj?.country
                } ${place.address_obj?.postalcode}`}</Typography>
              </Box>
              <Button variant='outlined'>
                <LocationOn />
              </Button>
            </>
          ) : (
            ''
          )}
        </Box>
        <Divider sx={{ width: '100%' }} />

        <Box sx={{ ...style.summaryLists, ...style.fullWidth }}>
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
      </Box>
      <Box component='article' sx={style.cardActions}>
        <Divider sx={{ width: '100%' }} />
        {place.reserve_info?.button_text && (
          <Box sx={style.__booking}>
            <Typography sx={style.__booking__actionText} variant='body1'>
              {(place.reserve_info.button_text
                .toLowerCase()
                .includes('online') &&
                'Online Orders Available') ||
                (place.reserve_info.button_text
                  .toLowerCase()
                  .includes('reserve') &&
                  'Taking Reservations')}
            </Typography>
            <Button
              color='secondary'
              variant='contained'
              sx={style.cardActionButton}
            >
              <Typography sx={style.cardActionButton__text} variant='button'>
                {place.reserve_info.button_text
                  ?.toLowerCase()
                  .includes('online')
                  ? `Order On ${place.reserve_info.provider}`
                  : `Book On ${place.reserve_info.provider}`}
              </Typography>
            </Button>
          </Box>
        )}
        <Button sx={style.tripAdvisorLink} variant='outlined'>
          <Typography sx={style.cardActionButton__text} variant='body1'>
            View on TripAdvisor
          </Typography>
        </Button>
      </Box>
    </ListItem>
  );
});

export default PlaceCard;
