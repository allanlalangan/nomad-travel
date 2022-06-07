import { useState, useCallback, useContext } from 'react';
import { MapContext } from '../../../store/MapContext/MapContextProvider';
import styles from './SearchBar.module.css';
import { Autocomplete } from '@react-google-maps/api';
import { TextField } from '@mui/material';
import style from './style';

const SearchBar = () => {
  const {
    setIsUpdating: setMapIsUpdating,
    setIsSuccess: setMapUpdateSuccess,
    setCoordinates,
  } = useContext(MapContext);
  const [autocomplete, setAutocomplete] = useState(null);
  const onLoad = (ac) => {
    setAutocomplete(ac);
  };

  const onPlaceChanged = useCallback(() => {
    setMapIsUpdating();
    setCoordinates({
      lat: autocomplete.getPlace().geometry.location.lat(),
      lng: autocomplete.getPlace().geometry.location.lng(),
    });
    setMapUpdateSuccess();
  }, [autocomplete, setMapIsUpdating, setCoordinates, setMapUpdateSuccess]);
  return (
    <div className={styles.container}>
      <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
        <TextField variant='outlined' size='small' sx={style.textField} />
      </Autocomplete>
    </div>
  );
};
export default SearchBar;
