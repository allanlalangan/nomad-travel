import { FormControlLabel, Checkbox } from '@mui/material';
import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { FilterContext } from '../../../store/FilterContext/FilterContextProvider';

import style from './style';

const FilterOption = ({ field, value }) => {
  const { filterFields, setCheckedOptions } = useContext(FilterContext);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    filterFields.forEach((f) => {
      if (f === field) {
        f.options.forEach((option) => {
          if (option.value === value) {
            setChecked(option.checked);
          }
        });
      }
    });
  }, [field, value, filterFields]);

  const onChange = (e) => {
    setCheckedOptions(field, value, e.target.checked);
  };

  return (
    <FormControlLabel
      sx={style.checkboxLabel}
      control={
        <Checkbox
          checked={checked}
          color='secondary'
          onChange={(e) => onChange(e)}
          value={value}
          sx={style.checkbox}
          disableRipple
        />
      }
      label={value}
    />
  );
};
export default FilterOption;
