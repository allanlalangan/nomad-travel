import { GiCompass } from 'react-icons/gi';
import { Link, Box, AppBar, Toolbar, Typography } from '@mui/material';
import style from './style';
import SearchBar from './SearchBar/SearchBar';

const Header = ({ isLoaded }) => {
  return (
    <AppBar sx={style.appBar}>
      <Toolbar sx={style.toolBar}>
        <Box sx={style.logo}>
          <Link sx={style.homeLink} underline='none' href='/'>
            <Typography variant='h1' sx={style.mainTitle}>
              N
              <Box component='span' sx={style.iconContainer}>
                <GiCompass />o
              </Box>
              mad
            </Typography>
          </Link>
        </Box>
        {isLoaded ? <SearchBar /> : ''}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
