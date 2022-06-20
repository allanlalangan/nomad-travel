import { FormControlLabel, Checkbox } from '@mui/material';
import { useContext } from 'react';
import { PlacesContext } from '../../../../store/PlacesContext/PlacesContextProvider';

import style from './style';

const FilterOption = ({ field, label, value }) => {
  const { category, places } = useContext(PlacesContext);
  const onChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <FormControlLabel
      sx={style.checkboxLabel}
      control={
        <Checkbox
          color='secondary'
          onChange={(e) => onChange(e)}
          value={value}
          sx={style.checkbox}
          disableRipple
        />
      }
      label={label}
    />
  );
};
export default FilterOption;
