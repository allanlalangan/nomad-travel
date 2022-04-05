// styles and ui
import styles from './Places.module.css';
// components
import PlaceCard from './PlaceCard/PlaceCard';

const Places = ({ places, category }) => {
  return (
    <ul className={`${styles['places-list']}`}>
      {places?.map((place, i) => (
        <PlaceCard key={i} place={place} />
      ))}
    </ul>
  );
};

export default Places;
