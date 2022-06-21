import { useState, useCallback, useContext } from 'react';
import { MapContext } from '../../../store/MapContext/MapContextProvider';

import { Autocomplete } from '@react-google-maps/api';
import { Box, TextField, InputAdornment } from '@mui/material';
import { Search } from '@mui/icons-material';
import style from './style';

const SearchBar = () => {
  const {
    setIsUpdating: setMapIsUpdating,
    setIsSuccess: setMapUpdateSuccess,
    setCoordinates,
    setBounds,
  } = useContext(MapContext);
  const [autocomplete, setAutocomplete] = useState(null);
  const onLoad = (ac) => {
    setAutocomplete(ac);
  };

  const onPlaceChanged = useCallback(() => {
    setMapIsUpdating();
    const {
      Ab: { h: bl_latitude },
      Ab: { j: tr_latitude },
      Ua: { h: bl_longitude },
      Ua: { j: tr_longitude },
    } = autocomplete.getPlace().geometry.viewport;

    setBounds({
      bl_latitude,
      tr_latitude,
      bl_longitude,
      tr_longitude,
    });

    setCoordinates({
      lat: autocomplete.getPlace().geometry.location.lat(),
      lng: autocomplete.getPlace().geometry.location.lng(),
    });
    setMapUpdateSuccess();
  }, [
    autocomplete,
    setMapIsUpdating,
    setCoordinates,
    setBounds,
    setMapUpdateSuccess,
  ]);
  return (
    <Box sx={style.container}>
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
          sx={style.textField}
        />
      </Autocomplete>
    </Box>
  );
};
export default SearchBar;
