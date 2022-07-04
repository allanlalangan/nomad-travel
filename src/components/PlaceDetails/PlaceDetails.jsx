import { Box, Typography } from '@mui/material';
import Modal from '../ui/Modal/Modal';

import style from './style';

const PlaceDetails = ({ onClose }) => {
  return (
    <Modal onBackdropClick={onClose}>
      <Box sx={style.container} component='article'>
        <Typography variant='h4'>Details</Typography>
      </Box>
    </Modal>
  );
};
export default PlaceDetails;
