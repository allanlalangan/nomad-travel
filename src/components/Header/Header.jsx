import { useCallback, useState } from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { Search } from '@mui/icons-material';
import { GiCompass } from 'react-icons/gi';
import {
  Link,
  Box,
  AppBar,
  Toolbar,
  Typography,
  TextField,
  InputAdornment,
} from '@mui/material';
import style from './style';

const Header = ({ setCoordinates, setMapStatus, isLoaded }) => {
  const [autocomplete, setAutocomplete] = useState(null);
  const onLoad = (ac) => {
    setAutocomplete(ac);
  };

  const onPlaceChanged = useCallback(() => {
    setMapStatus({ loading: true, success: false, error: null });

    setCoordinates({
      lat: autocomplete.getPlace().geometry.location.lat(),
      lng: autocomplete.getPlace().geometry.location.lng(),
    });
    setMapStatus({ loading: false, success: true, error: null });
  }, [autocomplete, setCoordinates, setMapStatus]);
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
        {isLoaded && (
          <Box sx={style.searchContainer}>
            <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
              <TextField
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <Search />
                    </InputAdornment>
                  ),
                }}
                color='secondary'
                variant='outlined'
                size='small'
                sx={style.searchTextField}
              />
            </Autocomplete>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
