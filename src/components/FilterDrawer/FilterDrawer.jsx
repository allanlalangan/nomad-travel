import { Drawer } from '@mui/material';
import style from './style';

const FilterDrawer = ({ children, isOpen }) => {
  return (
    <Drawer
      // transitionDuration={{ enter: 600, exit: 550 }}
      variant='persistent'
      // anchor={{ xs: 'top', sm: 'left' }}
      anchor='left'
      open={isOpen}
      role='presentation'
      sx={style.drawer}
    >
      {children}
    </Drawer>
  );
};
export default FilterDrawer;
