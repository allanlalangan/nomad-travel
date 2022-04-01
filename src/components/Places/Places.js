import { useState } from 'react';
// styles and ui
import styles from './Places.module.css';
// components
import SelectCategory from '../input/SelectCategory/SelectCategory';
import PriceRange from '../input/PriceRange/PriceRange';
import PlaceCard from './PlaceCard/PlaceCard';

const Places = ({ places }) => {
  const hotelsURL =
    'https://travel-advisor.p.rapidapi.com/hotels/list-in-boundary';

  const restaurantsUrl =
    'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

  const attractionsUrl =
    'https://travel-advisor.p.rapidapi.com/attractions/list-in-boundary';

  return (
    <section className={`${styles['places-section']}`}>
      <h2>Places Nearby</h2>
      <SelectCategory />
      <PriceRange />
      <ul>
        {places?.map((place, i) => (
          <PlaceCard key={i} place={place} />
        ))}
      </ul>
    </section>
  );
};

export default Places;
