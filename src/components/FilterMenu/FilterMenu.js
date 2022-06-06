import { useContext } from 'react';
import { PlacesContext } from '../../store/PlacesContext/PlacesContextProvider';

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
  Rating,
  InputLabel,
  Checkbox,
  Select,
  MenuItem,
  Typography,
} from '@mui/material';

import PriceSlider from './PriceSlider/PriceSlider';
import SortButton from './SortButton/SortButton';
import useFilter from '../../hooks/useFilter';

const FilterMenu = ({ isLoaded }) => {
  const { category, selectCategory } = useContext(PlacesContext);
  const { tags, diets, priceLevels } = useFilter();

  return (
    <Box component='section' sx={style.filterMenu}>
      <Box component='fieldset' sx={style.categorySelect}>
        <FormControl fullWidth sx={style.categorySelectInput}>
          <InputLabel id='category-select-label'>Category</InputLabel>
          <Select
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
          <InputLabel id='sortBy-select-label'>Sort By</InputLabel>
          <Select
            labelId='sortBy-select-label'
            id='sortBy-select'
            label='Sort By'
            disabled={!isLoaded}
            defaultValue='rank'
          >
            <MenuItem value={'rank'}>Rank</MenuItem>
            <MenuItem value={'rating'}>Rating</MenuItem>
            <MenuItem value={'price'}>Price</MenuItem>
          </Select>
        </FormControl>
        <SortButton />
      </Box>

      <Typography variant='h5'>Filters</Typography>
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
        <Box component='fieldset'>
          <Typography variant='h6'>Rating</Typography>
          <Box sx={style.filterField}>
            <Rating name='placeRating' precision={0.5} />
          </Box>
        </Box>
        <Divider />
        <Box component='fieldset'>
          <Typography variant='h6'>Price Range</Typography>
          <Box sx={style.filterField}>
            <PriceSlider priceLevels={priceLevels} />
          </Box>
        </Box>
        <Divider />
        <Box component='fieldset'>
          <Typography variant='h6'>Dietary Restrictions</Typography>
          <List sx={style.filterField}>
            <FormGroup>
              {diets?.map((diet, i) => (
                <>
                  <ListItemButton
                    dense
                    sx={style.checkboxLiItem}
                    disableGutters
                  >
                    <FormControlLabel
                      sx={style.checkboxLabel}
                      key={i}
                      control={
                        <Checkbox
                          onChange={(e) =>
                            console.log(
                              diet,
                              e.target.checked,
                              e.target.labels[0].textContent
                            )
                          }
                          value={diet}
                          sx={style.checkbox}
                          disableRipple
                        />
                      }
                      label={diet}
                    />
                  </ListItemButton>
                </>
              ))}
            </FormGroup>
          </List>
        </Box>
        <Divider />
        <Box component='fieldset'>
          <Typography variant='h6'>Tags</Typography>
          <List sx={style.filterField}>
            <FormGroup>
              {tags?.map((tag, i) => (
                <>
                  <ListItemButton
                    dense
                    sx={style.checkboxLiItem}
                    disableGutters
                  >
                    <FormControlLabel
                      sx={style.checkboxLabel}
                      key={i}
                      control={
                        <Checkbox
                          onChange={(e) =>
                            console.log(
                              e.target.checked,
                              e.target.labels[0].textContent
                            )
                          }
                          value={tag}
                          sx={style.checkbox}
                          disableRipple
                        />
                      }
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
