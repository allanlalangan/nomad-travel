import { useState } from 'react';
import styles from './PriceRange.module.css';

const PriceRange = () => {
  return (
    <div className={`${styles['pricerange-container']}`}>
      <span>Price Range</span>
      <fieldset className={`${styles['pricerange-fieldset']}`}>
        <label htmlFor='min'>Min</label>
        <input
          id='min'
          name='min'
          type='number'
          className={`${styles['number-input']}`}
        />
        <label htmlFor='min'>Max</label>
        <input
          id='max'
          name='max'
          type='number'
          className={`${styles['number-input']}`}
        />
      </fieldset>
    </div>
  );
};

export default PriceRange;
