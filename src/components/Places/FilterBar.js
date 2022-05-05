import { useContext } from 'react';
import { PlacesContext } from '../../store/PlacesContextProvider';
import styles from './FilterBar.module.css';

const FilterBar = ({ onCategoryChange }) => {
  const { category, setCategory } = useContext(PlacesContext);
  return (
    <aside className={`${styles['filter-bar']}`}>
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
      <h3 className={styles['places-heading']}>Popular in this area:</h3>
    </aside>
  );
};
export default FilterBar;
