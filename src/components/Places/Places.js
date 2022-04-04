import { useEffect, useState } from 'react';
// styles and ui
import styles from './Places.module.css';
// components
import { getPlaces } from '../../api/placesAPI';
import PriceRange from '../input/PriceRange/PriceRange';
import PlaceCard from './PlaceCard/PlaceCard';

const Places = ({ boundary, places, setPlaces }) => {
  const [category, setCategory] = useState('');
  useEffect(() => {
    if (category !== '') {
      getPlaces(boundary, category).then((data) => {
        setPlaces(data);
      });
    }
    console.log(category);
  }, [category, boundary, setPlaces]);

  return (
    <section className={`${styles['places-section']}`}>
      <h2>Places Nearby</h2>
      <fieldset>
        <div className={`${styles['category-select-container']}`}>
          <select onChange={(e) => setCategory(e.target.value)}>
            <option value=''>Select a restaurant</option>
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
