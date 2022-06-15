import { useState } from 'react';
import { Drawer, Box, Typography } from '@mui/material';
import style from './style';

const FilterDrawer = () => {
  return (
    <Drawer anchor='left' role='presentation'>
      <Box>
        <Typography variant='h6'>Filter Drawer</Typography>
      </Box>
    </Drawer>
  );
};
export default FilterDrawer;
