import { useState } from 'react';
import styles from './PriceRange.module.css';

const PriceRange = () => {
  return (
    <div className={`${styles['pricerange-container']}`}>
      <span>Price Range</span>
      <fieldset className={`${styles['pricerange-fieldset']}`}>
        <label htmlFor='min'>Min</label>
        <input id='min' for='min' type='number' />
        <label htmlFor='min'>Max</label>
        <input id='max' for='max' type='number' />
      </fieldset>
    </div>
  );
};

export default PriceRange;
