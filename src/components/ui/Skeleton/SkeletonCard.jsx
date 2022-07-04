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
      <Box
        component='figure'
        sx={{ ...style.imageContainer, ...style.fullWidth }}
      >
        <Skeleton sx={style.skeletonImage} variant='rectangular' />
      </Box>

      <Box
        component='article'
        sx={{ ...style.placeSummary, ...style.fullWidth }}
      >
        <Skeleton width={'100%'} variant='text' />
        <Skeleton width={'100%'} variant='text' />
        <Skeleton width={'100%'} variant='text' />
        <Skeleton width={'100%'} variant='text' />
        <Skeleton width={'100%'} variant='text' />
        <Skeleton width={'100%'} variant='text' />
        <Skeleton width={'100%'} variant='text' />
      </Box>

      <Box component='article' sx={style.cardActions}>
        <Skeleton width={'100%'} height={100} variant='rectangular' />
      </Box>
    </ListItem>
  );
};
export default SkeletonCard;
