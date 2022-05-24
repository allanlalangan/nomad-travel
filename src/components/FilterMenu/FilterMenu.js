import { useContext, useEffect } from 'react';
import { FilterContext } from '../../store/FilterContext/FilterContextProvider';
import { PlacesContext } from '../../store/PlacesContext/PlacesContextProvider';

import Chip from './Chip/Chip';
import styles from './FilterMenu.module.css';

const FilterMenu = () => {
  const { category, setCategory, places } = useContext(PlacesContext);
  const { chips, setChips, diets, setDiets } = useContext(FilterContext);

  useEffect(() => {
    // const cuisinesData = useMemo(() => [], [places]);
    const cuisinesData = [];
    if (category === 'restaurant' && places && places.length >= 1) {
      places.forEach((place) => {
        place.cuisine?.forEach((cuisine) => {
          if (!cuisinesData.includes(cuisine.name)) {
            cuisinesData.push(cuisine.name);
          }
        });
      });
    }

    createFilters();
    function createFilters() {
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

      setChips(cuisines);
      setDiets(diets);
    }
  }, [category, setChips, setDiets, places]);

  return (
    <div className={`${styles['filter-menu']}`}>
      <div className={`${styles['category-select-container']}`}>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className={`${styles['category-select']}`}
        >
          <option value={''}>Select a category</option>
          <option value='restaurant'>Restaurants</option>
          <option value='hotel'>Hotels</option>
          <option value='attraction'>Attractions</option>
        </select>
      </div>

      <h3 className={styles['places-heading']}>Filters</h3>

      {category === 'restaurant' && (
        <>
          <fieldset className={`${styles['diet_filter']} ${styles['filter']}`}>
            <h4>Dietary Restrictions</h4>
            <div
              className={`${styles['diet_filter-checkbox']} ${styles['filter-checkbox']}`}
            >
              <label htmlFor='vegetarian'>Vegetarian Friendly</label>
              <input
                type='checkbox'
                id='vegetarian'
                name='diet'
                value='vegetarian'
              ></input>
            </div>
            <div
              className={`${styles['diet_filter-checkbox']} ${styles['filter-checkbox']}`}
            >
              <label htmlFor='vegetarian'>Vegan Options</label>
              <input
                type='checkbox'
                id='vegan'
                name='diet'
                value='vegan'
              ></input>
            </div>
            <div
              className={`${styles['diet_filter-checkbox']} ${styles['filter-checkbox']}`}
            >
              <label htmlFor='vegetarian'>Gluten Free Options</label>
              <input type='checkbox' id='gf' name='diet' value='gf'></input>
            </div>
          </fieldset>
          <fieldset
            className={`${styles['cuisine_filter']} ${styles['filter']}`}
          >
            <h4>Tags</h4>
            <ul className={styles['chips-list']}>
              {chips?.map((chip, i) => (
                <Chip key={i} cuisine={chip} />
              ))}
            </ul>
          </fieldset>
        </>
      )}
    </div>
  );
};
export default FilterMenu;
