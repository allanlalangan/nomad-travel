import { useContext } from 'react';
import { PlacesContext } from '../../store/PlacesContext/PlacesContextProvider';

import style from './style';
import {
  Button,
  Container,
  Box,
  Divider,
  List,
  ListItemButton,
  FormGroup,
  FormControl,
  Rating,
  InputLabel,
  Select,
  MenuItem,
  Typography,
} from '@mui/material';

import PriceSlider from './PriceSlider/PriceSlider';
import FilterOption from './FilterOption/FilterOption';
import SortButton from './SortButton/SortButton';
import useFilter from '../../hooks/useFilter';

const FilterMenu = ({ isLoaded }) => {
  const { category, selectCategory } = useContext(PlacesContext);
  const {
    tagFilterOptions,
    dietFilterOptions,
    reserveFilterOptions,
    priceLevels,
  } = useFilter();

  return (
    <Box component='section' sx={style.filterMenu}>
      <Box component='header' sx={style.filterHeader}>
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
      </Box>
      <Container sx={style.filterForm}>
        <Box component='fieldset'>
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
            <Box component='fieldset'>
              <Typography variant='h6'>Price Range</Typography>
              <Box sx={style.filterField}>
                <PriceSlider priceLevels={priceLevels} />
              </Box>
            </Box>
            <Divider />
          </>
        )}
        {category === 'restaurant' && (
          <>
            <Box component='fieldset'>
              <Typography variant='h6'>Reservations / Booking</Typography>
              <List key={'tagFilter'} sx={style.filterField}>
                <FormGroup>
                  {reserveFilterOptions?.map((option, i) => (
                    <>
                      <ListItemButton
                        key={option}
                        dense
                        sx={style.checkboxLiItem}
                        disableGutters
                      >
                        <FilterOption
                          key={i}
                          label={
                            option.includes('Reserve')
                              ? `${option} Online`
                              : option
                          }
                          value={option}
                        />
                      </ListItemButton>
                    </>
                  ))}
                </FormGroup>
              </List>
            </Box>
            <Divider />
            <Box component='fieldset'>
              <Typography variant='h6'>Dietary Restrictions</Typography>
              <List key={'dietFilter'} sx={style.filterField}>
                <FormGroup>
                  {dietFilterOptions?.map((diet, i) => (
                    <>
                      <ListItemButton
                        key={diet}
                        dense
                        sx={style.checkboxLiItem}
                        disableGutters
                      >
                        <FilterOption key={i} label={diet} value={diet} />
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
                  {tagFilterOptions?.map((tag, i) => (
                    <>
                      <ListItemButton
                        key={tag}
                        dense
                        sx={style.checkboxLiItem}
                        disableGutters
                      >
                        <FilterOption key={i} label={tag} value={tag} />
                      </ListItemButton>
                    </>
                  ))}
                </FormGroup>
              </List>
            </Box>
          </>
        )}
      </Container>
    </Box>
  );
};
export default FilterMenu;
