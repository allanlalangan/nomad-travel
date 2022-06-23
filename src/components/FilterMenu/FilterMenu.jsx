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

import SortButton from './SortButton/SortButton';
import useFilter from '../../hooks/useFilter';
import FilterField from './FilterField/FilterField';
import { FilterContext } from '../../store/FilterContext/FilterContextProvider';

const FilterMenu = ({ isLoaded }) => {
  const {
    status: placesStatus,
    places,
    category,
    selectCategory,
  } = useContext(PlacesContext);
  const {
    active,
    minRating,
    setFilterActive,
    clearFilter,
    selectedSubcategories,
    selectedCuisines,
    selectedDiets,
    selectedOrderOptions,
    selectedPrices,
    setMinRating,
  } = useContext(FilterContext);

  useEffect(() => {
    console.log(active);
  }, [active]);

  const { filterFields } = useFilter();

  const onRatingChange = (e) => {
    setMinRating(Number(e.target.value));
  };

  const handleApplyFilter = () => {
    const allPlaces = places;
    const filteredPlaces = [];
    setFilterActive();

    minRating &&
      console.log(
        allPlaces.filter(
          (place) => place.rating && Number(place.rating) >= minRating
        )
      );

    selectedSubcategories?.length >= 1 &&
      selectedSubcategories.forEach((sub) => {
        console.log(
          allPlaces.filter((place) => place.subcategory?.includes(sub))
        );
      });

    selectedPrices?.length >= 1 &&
      selectedPrices.forEach((price) => {
        console.log(
          allPlaces.filter((place) => place.price_level?.includes(price))
        );
      });

    selectedCuisines?.length >= 1 &&
      selectedCuisines.forEach((cuisine) => {
        console.log(
          allPlaces.filter((place) => place.cuisine?.includes(cuisine))
        );
      });

    selectedDiets?.length >= 1 &&
      selectedDiets.forEach((diet) => {
        console.log(
          allPlaces.filter((place) =>
            place.dietary_restrictions?.includes(diet)
          )
        );
      });

    selectedOrderOptions?.length >= 1 &&
      selectedOrderOptions.forEach((option) => {
        console.log(
          allPlaces.filter((place) =>
            place.reserve_info?.button_text?.includes(option)
          )
        );
      });
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
              onChange={(e) => selectCategory(e.target.value)}
              disabled={!isLoaded}
            >
              <MenuItem value={'restaurant'}>Restaurants</MenuItem>
              <MenuItem value={'hotel'}>Hotels</MenuItem>
              <MenuItem value={'attraction'}>Attractions</MenuItem>
            </Select>
          </FormControl>
          <FormControl key={'sort'} fullWidth sx={style.categorySelectInput}>
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
              <Button
                // color='primary'
                onClick={handleApplyFilter}
                variant='contained'
                disableElevation
                disabled={!isLoaded}
                sx={style.applyFilterButton}
              >
                Apply Filters
              </Button>
              <Button
                onClick={clearFilter}
                variant='outlined'
                disabled={!isLoaded}
              >
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
                onChange={onRatingChange}
              />
            </Box>
          </Box>
          <Divider />
          {/* {category !== 'attraction' && (
            <>
              <Box sx={style.fieldContainer} component='fieldset'>
                <Typography variant='h6'>Price Range</Typography>
                <Box sx={style.filterField}>
                  <PriceSlider minMax={priceMinMax} />
                </Box>
              </Box>
              <Divider />
            </>
          )} */}

          {filterFields?.length >= 1 &&
            filterFields.map((field) => (
              <Box key={field.field}>
                <FilterField field={field} />
                <Divider />
              </Box>
            ))}
        </Container>
      )}
    </Box>
  );
};
export default FilterMenu;
