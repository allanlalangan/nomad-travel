import styles from './PriceRange.module.css';

const PriceRange = () => {
  return (
    <div className={`${styles['pricerange-container']}`}>
      <p>Price Range</p>
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
