import styles from './PlaceMarker.module.css';

const PlaceMarker = ({ place }) => {
  return (
    <div className={styles['marker-card']}>
      <h3 className={`${styles['marker-name']}`}>{place.name}</h3>
      <div className={`${styles['marker-image-container']}`}>
        {place.photo &&
        place.photo.images &&
        place.photo.images.small &&
        place.photo.images.small.url ? (
          <img
            className={`${styles['marker-image']}`}
            src={place.photo.images.small.url}
            alt={`card img of ${place.name}`}
          />
        ) : (
          <span>Image unavailable</span>
        )}
      </div>
    </div>
  );
};
export default PlaceMarker;
