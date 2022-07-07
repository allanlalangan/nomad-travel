import { Close, LocationOn } from '@mui/icons-material';
import { CardMedia, Box, Typography, IconButton, Chip } from '@mui/material';
import Modal from '../ui/Modal/Modal';

import style from './style';

const PlaceDetails = ({ place, onClose }) => {
  return (
    <Modal onBackdropClick={onClose}>
      <Box
        sx={{
          position: 'relative',
          width: 1,
          height: 1,
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gridTemplateRows: 'repeat(12, 1fr)',
          p: (theme) => theme.spacing(2),
          backgroundColor: (theme) => theme.palette.background.default,
        }}
        component='article'
      >
        <Box sx={{ position: 'absolute', right: 0 }}>
          <IconButton onClick={onClose}>
            <Close />
          </IconButton>
        </Box>
        <Typography sx={{ gridColumn: '1 / 13' }} variant='h4'>
          {place.name}
        </Typography>
        <Box
          component='article'
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gridColumn: '1 / 13',
          }}
        >
          <Typography>Details</Typography>
        </Box>
        <Box
          component='figure'
          sx={{
            gridColumn: { xs: '1 / 13', md: '1 / 7' },
            gridRow: { xs: '3 / 6', md: '3 / 11' },
            overflow: 'hidden',
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
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gridColumn: { xs: '1 / 13', md: '7 / 13' },
            gridRow: { xs: '6 / 8', md: '3 / 7' },
          }}
        >
          <Typography>Reviews</Typography>
        </Box>
        <Box
          component='article'
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gridColumn: { xs: '1 / 13', md: '7 / 13' },
            gridRow: { xs: '8 / 10', md: '7 / 11' },
          }}
        >
          <Typography>Awards</Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gridColumn: { xs: '1 / 13', md: '7 / 13' },
            gridRow: { xs: '11 / 12', md: '11 / 13' },
            overflow: 'hidden',
          }}
        >
          <Typography>Contact</Typography>
        </Box>
        <Box
          sx={{
            gridColumn: { xs: '1 / 13', md: '1 / 7' },
            gridRow: { xs: '12 / 13', md: '11 / 13' },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography>Actions</Typography>
        </Box>
      </Box>
    </Modal>
  );
};
export default PlaceDetails;
