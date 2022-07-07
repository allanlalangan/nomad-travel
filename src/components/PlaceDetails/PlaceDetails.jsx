import { Close, LocationOn } from '@mui/icons-material';
import { CardMedia, Box, Typography, Button, IconButton } from '@mui/material';
import Modal from '../ui/Modal/Modal';

import style from './style';

const gridColumns = 12;
const gridLines = gridColumns + 1;
const gridHeaderSpan = 1;

const PlaceDetails = ({ place, onClose }) => {
  return (
    <Modal onBackdropClick={onClose}>
      <Box
        sx={{
          position: 'relative',
          width: 1,
          height: 1,
          display: 'grid',
          gridTemplateColumns: `repeat(${gridColumns}, 1fr)`,
          gridTemplateRows: `repeat(${gridColumns}, 1fr)`,
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
        <Typography sx={{ gridColumn: `1 / span ${gridColumns}` }} variant='h4'>
          {place.name}
        </Typography>
        <Box
          component='article'
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gridColumn: `1 / span ${gridColumns}`,
          }}
        >
          <Typography>Details</Typography>
        </Box>
        <Box
          component='figure'
          sx={{
            gridColumn: `1 / span ${gridColumns / 2}`,
            gridRow: `3 / 11`,
            overflow: 'hidden',
          }}
        >
          {place.photo?.images?.large?.url ? (
            <CardMedia
              component='img'
              sx={{ ...style.image }}
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
            gridColumn: `7 / 13`,
            gridRow: `3 / 7`,
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
            gridColumn: `7 / 13`,
            gridRow: `7 / 11`,
          }}
        >
          <Typography>Awards</Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gridColumn: `7 / 13`,
            gridRow: `11 / 13`,
            overflow: 'hidden',
          }}
        >
          <Typography>Contact</Typography>
        </Box>
        <Box
          sx={{
            gridColumn: `1 / span ${gridColumns / 2}`,
            gridRow: `11 / 13`,
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
