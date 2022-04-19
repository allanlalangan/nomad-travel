import { getPlaces } from '../../../api/placesAPI';
import styles from './PlaceCard.module.css';

const PlaceCard = ({ place }) => {
  return (
    <li className={`${styles['place-card']}`}>
      <div className={`${styles['place-details']}`}>
        <h3>{place.name}</h3>
        {/* <div className={styles['place-address']}>
          <p
            className={styles['address-field']}
          >{`${place.address_obj.street1}`}</p>
          <p
            className={styles['address-field']}
          >{`${place.address_obj.city}, ${place.address_obj.state}`}</p>
          <p
            className={styles['address-field']}
          >{`${place.address_obj.postalcode}`}</p>
        </div> */}
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
