import SearchBar from './SearchBar/SearchBar';
import { GiCompass } from 'react-icons/gi';
import { Box, AppBar, Toolbar, Typography } from '@mui/material';
import style from './style';

const Header = ({ isLoaded }) => {
  return (
    <AppBar sx={style.appBar}>
      <Toolbar sx={style.toolBar}>
        <Box sx={style.logo}>
          <Typography variant='h1' sx={style.mainTitle}>
            N
            <Box component='span' sx={style.iconContainer}>
              <GiCompass />o
            </Box>
            mad
          </Typography>
        </Box>
        {isLoaded ? <SearchBar /> : ''}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
