import { useEffect, useState } from 'react';
// styles and ui
import styles from './Places.module.css';
// components
import PriceRange from '../input/PriceRange/PriceRange';
import PlaceCard from './PlaceCard/PlaceCard';

const Places = ({ places, category, onCategoryChange }) => {
  return (
    <section className={`${styles['places-section']}`}>
      <h2>Places Nearby</h2>
      <fieldset>
        <div className={`${styles['category-select-container']}`}>
          <select onChange={(e) => onCategoryChange(e.target.value)}>
            <option value=''>Select a category</option>
            <option value='restaurants'>Restaurants</option>
            <option value='hotels'>Hotels</option>
            <option value='attractions'>Attractions</option>
          </select>
        </div>
        <PriceRange />
      </fieldset>
      <ul>
        {places?.map((place, i) => (
          <PlaceCard key={i} place={place} />
        ))}
      </ul>
    </section>
  );
};

export default Places;
