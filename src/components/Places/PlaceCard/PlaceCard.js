import { forwardRef } from 'react';
import styles from './PlaceCard.module.css';

const PlaceCard = forwardRef(({ place }, ref) => {
  return (
    <li ref={ref} className={`${styles['place-card']}`}>
      <div className={`${styles['image-container']}`}>
        {place.photo &&
        place.photo.images &&
        place.photo.images.large &&
        place.photo.images.large.url ? (
          <img
            className={`${styles['place-image']}`}
            src={place.photo.images.large.url}
            alt={`Place card img of ${place.name}`}
          />
        ) : (
          <span>Image unavailable</span>
        )}
        <h3 className={styles['place-heading']}>{place.name}</h3>
      </div>
      <div className={`${styles['place-summary']}`}>
        <div className={styles['place-details']}>
          <p>{`${place.rating} out of 5 stars`}</p>
          <p>{place.ranking}</p>

          {place.address_obj &&
          place.address_obj &&
          place.address_obj.street1 &&
          place.address_obj.city &&
          place.address_obj.state &&
          place.address_obj.postalcode ? (
            <div className={styles['place-contact']}>
              <p
                className={styles['address-field']}
              >{`${place.address_obj.street1}`}</p>
              <p
                className={styles['address-field']}
              >{`${place.address_obj.city}, ${place.address_obj.state} ${place.address_obj.postalcode}`}</p>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    </li>
  );
});

export default PlaceCard;
