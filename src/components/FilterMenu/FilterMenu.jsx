import { useContext, useEffect } from 'react';
import { PlacesContext } from '../../store/PlacesContext/PlacesContextProvider';

import style from './style';
import {
  Button,
  Container,
  Box,
  Divider,
  FormControl,
  Rating,
  InputLabel,
  Select,
  MenuItem,
  Typography,
} from '@mui/material';

import PriceSlider from './PriceSlider/PriceSlider';
import SortButton from './SortButton/SortButton';
import useFilter from '../../hooks/useFilter';
import FilterField from './FilterField/FilterField';

const FilterMenu = ({ isLoaded }) => {
  const {
    status: placesStatus,
    places,
    category,
    selectCategory,
  } = useContext(PlacesContext);

  const { priceLevels, filterFields } = useFilter();

  useEffect(() => {
    console.log(filterFields);
  }, [filterFields]);

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
              onChange={(e) => selectCategory(e.target.value)}
              disabled={!isLoaded}
            >
              <MenuItem value={'restaurant'}>Restaurants</MenuItem>
              <MenuItem value={'hotel'}>Hotels</MenuItem>
              <MenuItem value={'attraction'}>Attractions</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth sx={style.categorySelectInput}>
            <InputLabel color='secondary' id='sortBy-select-label'>
              Sort By
            </InputLabel>
            <Select
              color='secondary'
              labelId='sortBy-select-label'
              id='sortBy-select'
              label='Sort By'
              disabled={
                !isLoaded || places.length < 1 || placesStatus.isLoading
              }
              defaultValue='rank'
            >
              <MenuItem value={'rank'}>Rank</MenuItem>
              <MenuItem value={'rating'}>Rating</MenuItem>
              <MenuItem value={'price'}>Price</MenuItem>
            </Select>
          </FormControl>
          <SortButton />
        </Box>

        {placesStatus.isSuccess && (
          <>
            <Typography variant='h5'>Filters</Typography>
            <Box sx={style.filterButtons}>
              <Button variant='container' disabled={!isLoaded}>
                Apply Filters
              </Button>
              <Button variant='outlined' disabled={!isLoaded}>
                Reset
              </Button>
            </Box>
          </>
        )}
      </Box>

      {placesStatus.isSuccess && (
        <Container sx={style.filterForm}>
          <Box sx={style.fieldContainer} component='fieldset'>
            <Typography variant='h6'>Rating</Typography>
            <Box sx={{ ...style.filterField, ...style.ratingField }}>
              <Rating
                sx={style.rating}
                size='large'
                name='placeRating'
                precision={0.5}
              />
            </Box>
          </Box>
          <Divider />
          {category !== 'attraction' && (
            <>
              <Box sx={style.fieldContainer} component='fieldset'>
                <Typography variant='h6'>Price Range</Typography>
                <Box sx={style.filterField}>
                  <PriceSlider priceLevels={priceLevels} />
                </Box>
              </Box>
              <Divider />
            </>
          )}

          {filterFields?.length >= 1 &&
            filterFields.map((field) => (
              <>
                <FilterField field={field} />
                <Divider />
              </>
            ))}
        </Container>
      )}
    </Box>
  );
};
export default FilterMenu;