import { CardMedia, Box, Typography } from '@mui/material';
import Modal from '../ui/Modal/Modal';

import style from './style';

const PlaceDetails = ({ place, onClose }) => {
  return (
    <Modal onBackdropClick={onClose}>
      <Box
        sx={{
          width: 1,
          height: 1,
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          p: (theme) => theme.spacing(2),
          backgroundColor: (theme) => theme.palette.background.default,
        }}
        component='article'
      >
        <Typography variant='h4'>{place.name}</Typography>
        <Box component='figure' sx={style.imageContainer}>
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
      </Box>
    </Modal>
  );
};
export default PlaceDetails;
