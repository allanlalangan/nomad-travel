import styles from './FilterBar.module.css';

import PriceRange from '../input/PriceRange/PriceRange';

const FilterBar = ({ onCategoryChange }) => {
  return (
    <aside className={`${styles['filter-bar']}`}>
      <div className={`${styles['category-select-container']}`}>
        <select
          onChange={(e) => onCategoryChange(e.target.value)}
          className={`${styles['category-select']}`}
        >
          <option value=''>Select a category</option>
          <option value='restaurant'>Restaurants</option>
          <option value='hotel'>Hotels</option>
          <option value='attraction'>Attractions</option>
        </select>
      </div>
      <PriceRange />
      <h2 className={styles['places-heading']}>Popular in this area:</h2>
    </aside>
  );
};
export default FilterBar;
