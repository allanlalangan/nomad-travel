import {
  Box,
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
      <List key={'tagFilter'} sx={style.filterField}>
        <FormGroup>
          {field?.options?.map((option, i) => (
            <>
              <ListItemButton
                key={option}
                sx={style.checkboxLiItem}
                disableGutters
              >
                <FilterOption key={i} label={option} value={option} />
              </ListItemButton>
            </>
          ))}
        </FormGroup>
      </List>
    </Box>
  );
};
export default FilterField;
