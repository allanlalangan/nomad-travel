import { FormControlLabel, Checkbox } from '@mui/material';
import { useContext, useEffect } from 'react';
import { PlacesContext } from '../../../../store/PlacesContext/PlacesContextProvider';
import { FilterContext } from '../../../../store/FilterContext/FilterContextProvider';

import style from './style';

const FilterOption = ({ field, label, value }) => {
  const { category, places } = useContext(PlacesContext);
  const { selectedSubcategories, setSelectedSubcategories } =
    useContext(FilterContext);

  const allPlaces = places;
  const filteredPlaces = [];
  const onChange = (e) => {
    if (field.field === 'subcategory') {
      setSelectedSubcategories(value, e.target.checked);
    }
    if (field.field === 'price_level') {
    }
    if (field.field === 'dietary_restrictions') {
    }
    if (field.field === 'cuisine') {
    }
    if (field.field.includes('reserve')) {
    }
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
