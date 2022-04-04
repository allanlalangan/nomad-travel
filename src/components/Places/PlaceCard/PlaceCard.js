import styles from './PlaceCard.module.css';

const PlaceCard = ({ place }) => {
  return (
    <li className={`${styles['place-card']}`}>
      <div className={`${styles['place-details']}`}>
        <h3>{place.name}</h3>
      </div>
      <div className={`${styles['image-container']}`}>
        {place.photo &&
        place.photo.images &&
        place.photo.images.medium &&
        place.photo.images.medium.url ? (
          <img
            className={`${styles['place-image']}`}
            src={place.photo.images.medium.url}
            alt={`Place card img of ${place.name}`}
          />
        ) : (
          <span>Image unavailable</span>
        )}
      </div>
    </li>
  );
};

export default PlaceCard;
