import { FormControlLabel, Checkbox } from '@mui/material';

import style from './style';

const FilterOption = ({ field, label, value }) => {
  return (
    <FormControlLabel
      sx={style.checkboxLabel}
      control={
        <Checkbox
          color='secondary'
          onChange={(e) =>
            console.log(field, { name: value, selected: e.target.checked })
          }
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
