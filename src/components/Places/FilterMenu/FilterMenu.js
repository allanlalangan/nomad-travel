import { useContext, useEffect, useMemo } from 'react';
import { PlacesContext } from '../../../store/PlacesContextProvider';

import Chip from './Chip/Chip';
import styles from './FilterMenu.module.css';

const FilterMenu = ({ onCategoryChange }) => {
  const { category, setCategory, places } = useContext(PlacesContext);

  const cuisinesData = useMemo(() => [], [places]);
  if (category === 'restaurant' && places.length >= 1) {
    places.forEach((place) => {
      place.cuisine.forEach((cuisine) => {
        if (!cuisinesData.includes(cuisine.name)) {
          cuisinesData.push(cuisine.name);
        }
      });
    });

    createFilters();
  }

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

    console.log(cuisines);
    console.log(diets);
  }

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

      <fieldset className={`${styles['category_filter']} ${styles['filter']}`}>
        <h4>Category</h4>
        <div
          className={`${styles['category_filter-checkbox']} ${styles['filter-checkbox']}`}
        >
          <label htmlFor='restaurant'>Restaurant</label>
          <input
            type='checkbox'
            id='restaurant'
            name='category'
            value='restaurants'
          ></input>
        </div>
        <div
          className={`${styles['category_filter-checkbox']} ${styles['filter-checkbox']}`}
        >
          <label htmlFor='hotel'>Hotel</label>
          <input
            type='checkbox'
            id='hotel'
            name='category'
            value='hotels'
          ></input>
        </div>
        <div
          className={`${styles['category_filter-checkbox']} ${styles['filter-checkbox']}`}
        >
          <label htmlFor='attraction'>Attraction</label>
          <input
            type='checkbox'
            id='attraction'
            name='category'
            value='attractions'
          ></input>
        </div>
      </fieldset>

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
            <h4>Cuisine</h4>
            <div
              className={`${styles['cuisine_filter-checkbox']} ${styles['filter-checkbox']}`}
            >
              <label htmlFor='asian'>Asian</label>
              <input
                type='checkbox'
                id='asian'
                name='cuisine'
                value='asian'
              ></input>
            </div>
          </fieldset>
        </>
      )}
    </div>
  );
};
export default FilterMenu;
