import styles from './PlaceMarker.module.css';

const PlaceMarker = ({ place }) => {
  return (
    <div className={`${styles['marker-card']}`}>
      <h3 className={`${styles['marker-name']}`}>{place.name}</h3>
      <div className={`${styles['marker-image-container']}`}>
        {place.photo &&
        place.photo.images &&
        place.photo.images.medium &&
        place.photo.images.medium.url ? (
          <img
            className={`${styles['marker-image']}`}
            src={place.photo.images.medium.url}
            alt={`Place card img of ${place.name}`}
          />
        ) : (
          <span>Image unavailable</span>
        )}
      </div>
    </div>
  );
};
export default PlaceMarker;
