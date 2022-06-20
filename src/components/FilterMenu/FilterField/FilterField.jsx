import {
  Box,
  FormControl,
  FormGroup,
  List,
  ListItemButton,
  Typography,
} from '@mui/material';
import FilterOption from './FilterOption/FilterOption';
import style from './style';

const FilterField = ({ field }) => {
  return (
    <Box sx={style.fieldContainer} component='fieldset'>
      <Typography variant='h6'>{field.fieldLabel}</Typography>
      <List sx={style.filterField}>
        <FormGroup key={field.fieldLabel}>
          {field?.inputControls?.map((option, i) => (
            <FormControl key={i}>
              <ListItemButton
                // key={i.toString()}
                sx={style.checkboxLiItem}
                disableGutters
              >
                <FilterOption
                  field={field}
                  label={option.name}
                  value={option.name}
                />
              </ListItemButton>
            </FormControl>
          ))}
        </FormGroup>
      </List>
    </Box>
  );
};
export default FilterField;
