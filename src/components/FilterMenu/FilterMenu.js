import { useContext, useEffect } from 'react';
import { FilterContext } from '../../store/FilterContext/FilterContextProvider';
import { PlacesContext } from '../../store/PlacesContext/PlacesContextProvider';

import Chip from './Chip/Chip';
import styles from './FilterMenu.module.css';
import style from './style';
import {
  Paper,
  Box,
  Divider,
  FormGroup,
  FormControl,
  FormControlLabel,
  InputLabel,
  Checkbox,
  Select,
  MenuItem,
  Typography,
} from '@mui/material';

const FilterMenu = () => {
  const { category, selectCategory, places } = useContext(PlacesContext);
  const { tags, setTags, diets, setDiets } = useContext(FilterContext);

  useEffect(() => {
    if (category === 'restaurant' && places && places.length >= 1) {
      // consolidate all cuisines from Places
      const cuisinesData = [];
      places.forEach((place) => {
        place.cuisine?.forEach((cuisine) => {
          if (!cuisinesData.includes(cuisine.name)) {
            cuisinesData.push(cuisine.name);
          }
        });
      });
      // remove duplicates and create filter tags
      const createFilters = () => {
        const cuisines = cuisinesData.filter(
          (cuisine) =>
            !cuisine.toLowerCase().includes('vegan') &&
            !cuisine.toLowerCase().includes('vegetarian') &&
            !cuisine.toLowerCase().includes('gluten')
        );

        const diets = cuisinesData.filter(
          (cuisine) =>
            cuisine.toLowerCase().includes('vegan') ||
            cuisine.toLowerCase().includes('vegetarian') ||
            cuisine.toLowerCase().includes('gluten')
        );
        // update FilterContext state
        setTags(cuisines);
        setDiets(diets);
      };

      createFilters();
    }
  }, [category, setTags, setDiets, places]);

  return (
    <Box sx={style.filterMenu}>
      <Box sx={style.categorySelect}>
        <FormControl fullWidth>
          <InputLabel id='demo-simple-select-label'>Category</InputLabel>
          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            label='Category'
            value={category}
            onChange={(e) => selectCategory(e.target.value)}
          >
            <MenuItem value={'restaurant'}>Restaurants</MenuItem>
            <MenuItem value={'hotel'}>Hotels</MenuItem>
            <MenuItem value={'attraction'}>Attractions</MenuItem>
          </Select>
        </FormControl>
      </Box>
      {/* <div className={`${styles['category-select-container']}`}>
        <select
          value={category}
          onChange={(e) => selectCategory(e.target.value)}
          className={`${styles['category-select']}`}
        >
          <option value={''}>Select a category</option>
          <option value='restaurant'>Restaurants</option>
          <option value='hotel'>Hotels</option>
          <option value='attraction'>Attractions</option>
        </select>
      </div> */}

      <Typography variant='h5' className={styles['places-heading']}>
        Filters
      </Typography>
      <Divider />
      {/* {category === 'restaurant' && ( */}
      <>
        <Box>
          <Typography variant='h6'>Dietary Restrictions</Typography>
          <ul className={styles['diets-list']}>
            <FormGroup>
              {diets?.map((diet, i) => (
                <>
                  <FormControlLabel
                    key={i}
                    control={<Checkbox />}
                    label={diet}
                  />
                </>
              ))}
            </FormGroup>
          </ul>
        </Box>
        <Divider />
        <Box>
          <Typography variant='h6'>Tags</Typography>
          <ul className={styles['chips-list']}>
            <FormGroup>
              {tags?.map((tag, i) => (
                <>
                  <FormControlLabel
                    key={i}
                    control={<Checkbox />}
                    label={tag}
                  />
                </>
              ))}
            </FormGroup>
          </ul>
        </Box>
      </>
      {/* )} */}
    </Box>
  );
};
export default FilterMenu;
