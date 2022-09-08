import style from './style';
import {
  Button,
  Container,
  Box,
  Divider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  List,
  FormGroup,
  ListItemButton,
} from '@mui/material';

import useFilter from '../../hooks/useFilter';

import FilterOption from './FilterOption/FilterOption';
import { FaMapMarkedAlt } from 'react-icons/fa';

const FilterMenu = ({
  active,
  setActive,
  setFilteredPlaces,
  category,
  setCategory,
  placesStatus,
  places,
}) => {
  const { fields, clearFilter, setCheckedOptions } = useFilter(
    places,
    active,
    setActive,
    setFilteredPlaces
  );

  const handleClearFilter = () => {
    clearFilter(fields);
    setFilteredPlaces(null);
  };

  return (
    <Box component='section' sx={style.filterMenu}>
      <Box component='header' sx={style.filterHeader}>
        <Box component='fieldset' sx={style.categorySelect}>
          <FormControl fullWidth sx={style.categorySelectInput}>
            <InputLabel color='secondary' id='category-select-label'>
              Category
            </InputLabel>
            <Select
              color='secondary'
              labelId='category-select-label'
              id='category-select'
              label='Category'
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <MenuItem value={'restaurant'}>Restaurants</MenuItem>
              <MenuItem value={'hotel'}>Hotels</MenuItem>
              <MenuItem value={'attraction'}>Attractions</MenuItem>
            </Select>
          </FormControl>
        </Box>

        {placesStatus.success && (
          <Box sx={style.filterButtons}>
            <Button
              onClick={handleClearFilter}
              variant='contained'
              disableElevation
              sx={style.clearFilterButton}
              disabled={!active || !placesStatus.success}
            >
              Clear Filter
            </Button>
          </Box>
        )}
      </Box>
      {places.length === 0 && (
        <Box
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: (theme) => theme.palette.background.default,
            borderRadius: (theme) => ({
              sm: '0 0.5rem 0.5rem 0.5rem',
            }),
          }}
          variant='span'
        >
          <FaMapMarkedAlt sx={{ opacity: '0.5' }} fontSize='10rem' />
          <Typography sx={{ fontWeight: 600 }} variant='h5' component='h2'>
            Select a Category Find Places
          </Typography>
        </Box>
      )}
      {placesStatus.success && (
        <Container sx={style.filterForm}>
          {fields?.length >= 1 &&
            fields.map((field) => (
              <Box
                key={field.field}
                sx={style.fieldContainer}
                component='fieldset'
              >
                <Typography variant='h6'>{field.label}</Typography>
                <List sx={style.filterField}>
                  <FormGroup key={field.field}>
                    {field.options?.map((option, i) => (
                      <FormControl key={i}>
                        <ListItemButton
                          sx={style.checkboxLiItem}
                          disableGutters
                        >
                          <FilterOption
                            setCheckedOptions={setCheckedOptions}
                            allFields={fields}
                            selectedField={field}
                            value={option.value}
                          />
                        </ListItemButton>
                      </FormControl>
                    ))}
                  </FormGroup>
                </List>
                <Divider />
              </Box>
            ))}
        </Container>
      )}
    </Box>
  );
};
export default FilterMenu;
