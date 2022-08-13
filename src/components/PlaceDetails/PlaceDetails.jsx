import { Close, Email, Language, LocalPhone } from '@mui/icons-material';
import {
  CardMedia,
  Box,
  Typography,
  IconButton,
  Chip,
  List,
  ListItem,
  Rating,
  ListItemButton,
  Button,
} from '@mui/material';
import Modal from '../ui/Modal/Modal';

import { FaAward } from 'react-icons/fa';

import style from './style';

const PlaceDetails = ({ category, place, onClose }) => {
  return (
    <Modal onBackdropClick={onClose}>
      <Box
        sx={{
          borderRadius: 2,
          position: 'relative',
          width: 1,
          height: 1,
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gridTemplateRows: 'repeat(12, 1fr)',
          gap: '0.5rem',
          p: (theme) => theme.spacing(2),
          backgroundColor: (theme) => theme.palette.background.default,
        }}
        component='article'
      >
        <Box sx={{ position: 'absolute', right: 0 }}>
          <IconButton sx={style.closeButton} onClick={onClose}>
            <Close />
          </IconButton>
        </Box>
        <Box
          sx={{
            ...style.section,
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gridColumn: '1 / 13',
            padding: 0,
            backgroundColor: (theme) => theme.palette.primary.dark,
          }}
        >
          <Box
            sx={{
              color: 'white',
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
              gridColumn: '1 / 13',
            }}
          >
            <Typography
              variant='h3'
              component='h1'
              sx={{
                fontWeight: 700,
                fontSize: { xs: '1.5rem', lg: '2rem' },
              }}
            >
              {place.name}
            </Typography>
            {place.ranking && (
              <Typography
                variant='h6'
                component='h2'
                sx={{
                  fontWeight: 600,
                  paddingRight: '1.5rem',
                }}
              >
                {place.ranking}
              </Typography>
            )}
          </Box>
          <Box
            sx={{
              // height: '100%',
              display: 'inline-flex',
              alignItems: 'center',
              overflowX: 'scroll',
              gridColumn: '1 / 13',
            }}
          >
            <List
              sx={{
                display: 'flex',
                p: 0,
                w: 1,
                m: 0,
              }}
            >
              {place.price_level?.map((price) => (
                <Chip
                  sx={{
                    fontWeight: 600,
                    backgroundColor: (theme) => theme.palette.primary.light,
                  }}
                  component='li'
                  key={price}
                  label={price}
                />
              ))}
            </List>
            <List
              sx={{
                display: 'flex',
                p: 0,
                w: 1,
                m: 0,
              }}
            >
              {place.subcategory.map((sub) => (
                <Chip
                  sx={{
                    fontWeight: 600,
                    backgroundColor: (theme) => theme.palette.primary.light,
                  }}
                  component='li'
                  key={sub}
                  label={sub}
                />
              ))}
            </List>
            <List
              sx={{
                display: 'flex',
                p: 0,
                w: 1,
                m: 0,
              }}
            >
              {place.dietary_restrictions?.map((diet) => (
                <Chip
                  sx={{
                    fontWeight: 600,
                    backgroundColor: (theme) => theme.palette.primary.light,
                  }}
                  component='li'
                  key={diet}
                  label={diet}
                />
              ))}
            </List>
            <List
              sx={{
                display: 'flex',
                p: 0,
                w: 1,
                m: 0,
              }}
            >
              {place.cuisine?.map((cuisine) => (
                <Chip
                  sx={{
                    fontWeight: 600,
                    backgroundColor: (theme) => theme.palette.primary.light,
                  }}
                  component='li'
                  key={cuisine}
                  label={cuisine}
                />
              ))}
            </List>
          </Box>
        </Box>

        <Box
          component='figure'
          sx={{
            borderRadius: 1,
            gridColumn: { xs: '1 / 13', sm: '1 / 7' },
            gridRow: { xs: '2 / 7', sm: '2 / 10' },
            boxShadow: (theme) => theme.shadows[1],
          }}
        >
          {place.photo?.images?.large?.url ? (
            <CardMedia
              component='img'
              sx={style.image}
              src={place.photo.images.large.url}
              alt={`Place card img of ${place.name}`}
            />
          ) : (
            <Typography sx={{ width: '100%', height: '100%' }} variant='body2'>
              Image unavailable
            </Typography>
          )}
        </Box>
        <Box
          component='article'
          sx={{
            ...style.section,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gridColumn: { xs: '7 / 13', sm: '7 / 13' },
            gridRow: { xs: '9 / 11', sm: '2 / 3' },
          }}
        >
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
        </Box>
        <Box
          component='article'
          sx={{
            ...style.section,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            gridColumn: { xs: '1 / 7', sm: '7 / 13' },
            gridRow: { xs: '7 / 11', sm: '3 / 10' },
            width: '100%',
          }}
        >
          <Typography
            variant='h6'
            component='h2'
            sx={{ fontWeight: 600, width: '100%' }}
          >
            Awards
          </Typography>
          {place.awards?.length >= 1 && (
            <List
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
                overflowY: 'scroll',
              }}
            >
              {place.awards.map((award) => (
                <ListItem
                  sx={{
                    width: '100%',
                    p: 0,
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                  key={award.display_name}
                >
                  <FaAward />
                  <Typography variant='body1'>{award.display_name}</Typography>
                </ListItem>
              ))}
            </List>
          )}
        </Box>
        <Box
          sx={{
            ...style.section,
            w: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            gridColumn: { xs: '7 / 13', sm: '7 / 13' },
            gridRow: { xs: '7 / 9', sm: '10 / 13' },
            overflow: 'hidden',
          }}
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
        <Box
          sx={{
            ...style.section,
            gridColumn: { xs: '1 / 13', sm: '1 / 7' },
            gridRow: { xs: '11 / 13', sm: '10 / 13' },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'space-between',
            justifyContent: 'center',
          }}
        >
          {/* <Typography>Actions</Typography> */}
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
      </Box>
    </Modal>
  );
};
export default PlaceDetails;
