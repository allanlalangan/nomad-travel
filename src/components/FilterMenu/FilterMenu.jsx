import { useEffect, useState } from 'react';

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
  List,
  FormGroup,
  ListItemButton,
} from '@mui/material';

import SortButton from './SortButton/SortButton';
import useFilter from '../../hooks/useFilter';

import FilterOption from './FilterOption/FilterOption';

const FilterMenu = ({
  active,
  setActive,
  category,
  setCategory,
  placesStatus,
  isOpen,
  places,
}) => {
  const [minRating, setMinRating] = useState(null);
  const { fields, clearFilter, setCheckedOptions } = useFilter(
    places,
    active,
    setActive
  );
  // const {
  //   status: placesStatus,
  //   category,
  //   selectCategory,
  // } = useContext(PlacesContext);
  // const { active, clearFilter, setMinRating } = useContext(FilterContext);

  useEffect(() => {
    console.log(fields);
  }, [fields]);
  useEffect(() => {
    console.log(active);
  }, [active]);

  const onRatingChange = (e) => {
    setMinRating(Number(e.target.value));
  };

  // const handleApplyFilter = () => {
  //   const filteredPlaces = [];
  //   !active && setFilterActive();

  //   if (selectedSubcategories?.length >= 1) {
  //     selectedSubcategories.forEach((sub) => {
  //       places.forEach((place) => {
  //         if (
  //           !filteredPlaces.includes(place) &&
  //           place.subcategory?.includes(sub)
  //         ) {
  //           filteredPlaces.push(place);
  //         }
  //       });
  //     });
  //   }

  //   if (selectedCuisines.length >= 1) {
  //     selectedCuisines.forEach((cuisine) => {
  //       places.forEach((place) => {
  //         if (
  //           !filteredPlaces.includes(place) &&
  //           place.cuisine?.includes(cuisine)
  //         ) {
  //           filteredPlaces.push(place);
  //         }
  //       });
  //     });
  //   }

  //   if (selectedOrderOptions.length >= 1) {
  //     selectedOrderOptions.forEach((option) => {
  //       places.forEach((place) => {
  //         if (
  //           !filteredPlaces.includes(place) &&
  //           place.reserve_info.button_text.includes(option)
  //         ) {
  //           filteredPlaces.push(place);
  //         }
  //       });
  //     });
  //   }

  //   if (selectedPrices.length >= 1) {
  //     selectedPrices.forEach((price) => {
  //       places.forEach((place) => {
  //         if (
  //           !filteredPlaces.includes(place) &&
  //           place.price_level.includes(price)
  //         ) {
  //           filteredPlaces.push(place);
  //         }
  //       });
  //     });
  //   }

  //   if (minRating) {
  //     places.forEach((place) => {
  //       if (
  //         !filteredPlaces.includes(place) &&
  //         place.rating &&
  //         place.rating >= minRating
  //       ) {
  //         filteredPlaces.push(place);
  //       }
  //     });
  //   }

  //   if (selectedDiets.length >= 1) {
  //     selectedDiets.forEach((diet) => {
  //       places.forEach((place) => {
  //         if (
  //           !filteredPlaces.includes(place) &&
  //           place.dietary_restrictions?.includes(diet)
  //         ) {
  //           filteredPlaces.push(place);
  //         }
  //       });
  //     });
  //   }

  //   setFilteredPlaces(filteredPlaces);
  // };

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
          <FormControl key={'sort'} fullWidth sx={style.categorySelectInput}>
            <InputLabel color='secondary' id='sortBy-select-label'>
              Sort By
            </InputLabel>
            <Select
              color='secondary'
              labelId='sortBy-select-label'
              id='sortBy-select'
              label='Sort By'
              defaultValue='rank'
            >
              <MenuItem value={'rank'}>Rank</MenuItem>
              <MenuItem value={'rating'}>Rating</MenuItem>
              <MenuItem value={'price'}>Price</MenuItem>
            </Select>
          </FormControl>
          <SortButton />
        </Box>

        {placesStatus.success && (
          <Box sx={style.filterButtons}>
            <Button
              onClick={() => clearFilter(fields)}
              variant='contained'
              disableElevation
              sx={style.clearFilterButton}
            >
              Clear Filter
            </Button>
          </Box>
        )}
      </Box>

      {placesStatus.success && (
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
