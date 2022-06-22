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
      <Typography variant='h6'>{field.label}</Typography>
      <List sx={style.filterField}>
        <FormGroup key={field.field}>
          {field?.options?.map((option, i) => (
            <FormControl key={i}>
              <ListItemButton sx={style.checkboxLiItem} disableGutters>
                <FilterOption
                  field={field}
                  label={option.value}
                  value={option.value}
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
