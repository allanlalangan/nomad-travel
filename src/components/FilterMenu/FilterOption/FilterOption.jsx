import { FormControlLabel, Checkbox } from '@mui/material';
import { useState, useEffect } from 'react';

import style from './style';

const FilterOption = ({
  allFields,
  selectedField,
  setCheckedOptions,
  value,
}) => {
  // const { filterFields, setCheckedOptions } = useContext(FilterContext);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    allFields.forEach((f) => {
      if (f === selectedField) {
        f.options.forEach((option) => {
          if (option.value === value) {
            setChecked(option.checked);
          }
        });
      }
    });
  }, [selectedField, value, allFields]);

  const onChange = (e) => {
    setCheckedOptions(selectedField, value, e.target.checked);
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
