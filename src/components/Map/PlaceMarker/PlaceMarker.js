import styles from './PlaceMarker.module.css';

const PlaceMarker = ({ place }) => {
  return (
    <div className={`${styles['marker-card']} ${styles['marker-hover']}`}>
      <span className={`${styles['marker-name']}`}>{place.name}</span>
      <span className={`${styles['marker-image-container']}`}>
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
      </span>
    </div>
  );
};
export default PlaceMarker;
