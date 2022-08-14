import { Drawer } from '@mui/material';
import style from './style';

const FilterDrawer = ({ children, isOpen }) => {
  return (
    <Drawer
      variant='persistent'
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
