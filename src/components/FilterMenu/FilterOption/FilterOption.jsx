import { FormControlLabel, Checkbox } from '@mui/material';
import { useContext } from 'react';
import { FilterContext } from '../../../store/FilterContext/FilterContextProvider';

import style from './style';

const FilterOption = ({ field, label, value }) => {
  const {
    active,
    setFilterActive,
    setSelectedSubcategories,
    setSelectedCuisines,
    setSelectedDiets,
    setSelectedOrderOptions,
    setSelectedPrices,
  } = useContext(FilterContext);

  const onChange = (e) => {
    !active && setFilterActive();
    if (field.field === 'subcategory') {
      setSelectedSubcategories(value, e.target.checked);
    }
    if (field.field === 'price_level') {
      setSelectedPrices(value, e.target.checked);
    }
    if (field.field === 'dietary_restrictions') {
      setSelectedDiets(value, e.target.checked);
    }
    if (field.field === 'cuisine') {
      setSelectedCuisines(value, e.target.checked);
    }
    if (field.field.includes('reserve')) {
      setSelectedOrderOptions(value, e.target.checked);
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
