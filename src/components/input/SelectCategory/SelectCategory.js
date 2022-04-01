import { useState } from 'react';
import styles from './SelectCategory.module.css';

const SelectCategory = () => {
  const [category, selectCategory] = useState(null);

  return (
    <div className={`${styles['category-select-container']}`}>
      <select>
        <option value='restaurants'>Restaurants</option>
        <option value='hotels'>Hotels</option>
        <option value='bars'>Bars</option>
        <option value='attractions'>Attractions</option>
      </select>
    </div>
  );
};

export default SelectCategory;
