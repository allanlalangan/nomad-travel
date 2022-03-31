import { useState } from 'react';
import styles from './SelectCategory.module.css';

const SelectCategory = () => {
  return (
    <select>
      <option value='restaurants'>Restaurants</option>
      <option value='hotels'>Hotels</option>
      <option value='bars'>Bars</option>
      <option value='attractions'>Attractions</option>
    </select>
  );
};

export default SelectCategory;
