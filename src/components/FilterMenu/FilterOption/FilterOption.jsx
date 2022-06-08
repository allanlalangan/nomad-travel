import { FormControlLabel, Checkbox } from '@mui/material';
import style from './style';

const FilterOption = ({ label, value }) => {
  return (
    <FormControlLabel
      sx={style.checkboxLabel}
      control={
        <Checkbox
          color='secondary'
          onChange={(e) =>
            console.log(value, e.target.checked, e.target.labels[0].textContent)
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
