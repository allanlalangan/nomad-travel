// styles and ui
import styles from './Header.module.css';
import SearchBar from '../input/SearchBar/SearchBar';
import { GiCompass } from 'react-icons/gi';
import { Box, AppBar, Toolbar, Typography } from '@mui/material';
import style from './style';

const Header = ({ isLoaded }) => {
  return (
    <AppBar sx={style.appBar}>
      <Toolbar sx={style.toolBar}>
        <Box sx={style.logo}>
          <Typography variant='h1' sx={style.mainTitle}>
            Nomad
          </Typography>
        </Box>
        {isLoaded ? <SearchBar /> : ''}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
