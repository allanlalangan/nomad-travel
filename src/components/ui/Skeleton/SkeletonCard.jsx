import {
  Skeleton,
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

import style from './style';

const SkeletonCard = () => {
  return (
    <ListItem disableGutters disablePadding sx={style.placeCard}>
      <Skeleton sx={style.skeletonRectangle} variant='rectangular' />

      <Box
        component='article'
        sx={{ ...style.placeSummary, ...style.fullWidth }}
      >
        <Skeleton width={'100%'} variant='text' />
        <Skeleton width={'100%'} variant='text' />
        <Skeleton width={'100%'} variant='text' />
      </Box>

      <Box component='article' sx={style.cardActions}>
        <Skeleton sx={style.skeletonRectangle} variant='rectangular' />
      </Box>
    </ListItem>
  );
};
export default SkeletonCard;
