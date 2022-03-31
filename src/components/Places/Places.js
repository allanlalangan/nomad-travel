// styles and ui
import styles from './Places.module.css';
// components
import SelectCategory from '../input/SelectCategory/SelectCategory';
import PlaceCard from './PlaceCard/PlaceCard';

const Places = ({ places }) => {
  return (
    <section className={`${styles['places-section']}`}>
      <h2>Places Nearby</h2>
      <SelectCategory />
      <ul>
        {places?.map((place) => (
          <PlaceCard place={place} />
        ))}
      </ul>
    </section>
  );
};

export default Places;
