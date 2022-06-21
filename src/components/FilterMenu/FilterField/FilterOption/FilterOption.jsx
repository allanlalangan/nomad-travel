import { FormControlLabel, Checkbox } from '@mui/material';
import { useContext } from 'react';
import { PlacesContext } from '../../../../store/PlacesContext/PlacesContextProvider';
import { FilterContext } from '../../../../store/FilterContext/FilterContextProvider';

import style from './style';

const FilterOption = ({ field, label, value }) => {
  const { category, places } = useContext(PlacesContext);
  const { setSelectedOption } = useContext(FilterContext);
  const onChange = (e) => {
    const filteredPlaces = places.filter((place) =>
      place[field.field].includes(`${e.target.value}`)
    );

    console.log(filteredPlaces);

    setSelectedOption({
      field: field.field,
      option: e.target.value,
      selected: e.target.checked,
    });
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
