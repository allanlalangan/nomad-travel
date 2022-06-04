import { useContext, useEffect } from 'react';
import { FilterContext } from '../../store/FilterContext/FilterContextProvider';
import { PlacesContext } from '../../store/PlacesContext/PlacesContextProvider';

import Chip from './Chip/Chip';
import styles from './FilterMenu.module.css';
import style from './style';
import {
  Button,
  Box,
  Divider,
  List,
  ListItemButton,
  FormGroup,
  FormControl,
  FormControlLabel,
  InputLabel,
  Checkbox,
  Select,
  MenuItem,
  Typography,
} from '@mui/material';

const FilterMenu = ({ isLoaded }) => {
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
            disabled={!isLoaded}
          >
            <MenuItem value={'restaurant'}>Restaurants</MenuItem>
            <MenuItem value={'hotel'}>Hotels</MenuItem>
            <MenuItem value={'attraction'}>Attractions</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Typography variant='h5' className={styles['places-heading']}>
        Filters
      </Typography>
      <Box sx={style.filterButtons}>
        <Button variant='container' disabled={!isLoaded}>
          Apply Filters
        </Button>
        <Button variant='outlined' disabled={!isLoaded}>
          Reset
        </Button>
      </Box>
      <Divider />
      {/* {category === 'restaurant' && ( */}
      <>
        <Box>
          <Typography variant='h6'>Dietary Restrictions</Typography>
          <List sx={style.dietsList}>
            <FormGroup>
              {diets?.map((diet, i) => (
                <>
                  <ListItemButton dense sx={style.diet} disableGutters>
                    <FormControlLabel
                      sx={style.dietLabel}
                      key={i}
                      control={<Checkbox disableRipple />}
                      label={diet}
                    />
                  </ListItemButton>
                </>
              ))}
            </FormGroup>
          </List>
        </Box>
        <Divider />
        <Box>
          <Typography variant='h6'>Tags</Typography>
          <List sx={style.dietsList}>
            <FormGroup>
              {tags?.map((tag, i) => (
                <>
                  <ListItemButton dense sx={style.diet} disableGutters>
                    <FormControlLabel
                      sx={style.dietLabel}
                      key={i}
                      control={<Checkbox disableRipple />}
                      label={tag}
                    />
                  </ListItemButton>
                </>
              ))}
            </FormGroup>
          </List>
        </Box>
      </>
      {/* )} */}
    </Box>
  );
};
export default FilterMenu;
