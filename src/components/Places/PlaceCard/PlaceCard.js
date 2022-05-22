import { forwardRef } from 'react';
import { FaAward, FaMapMarkerAlt } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';
import { BsTelephoneFill } from 'react-icons/bs';

import styles from './PlaceCard.module.css';
import StarRating from '../../StarRating/StarRating';
import Chip from '../FilterMenu/Chip/Chip';

const PlaceCard = forwardRef(({ place }, ref) => {
  return (
    <li ref={ref} className={`${styles['place-card']}`}>
      <div className={`${styles['image-container']}`}>
        <div className={styles['place-heading']}>
          <h3>{place.name}</h3>
          <div className={styles['place-contact_info']}>
            <BsTelephoneFill className={styles['contact_info-icon']} />
            <MdMail className={styles['contact_info-icon']} />
            <FaMapMarkerAlt className={styles['contact_info-icon']} />
          </div>
        </div>
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
      </div>

      <div className={`${styles['place-summary']}`}>
        <div className={styles['_summary-customers']}>
          <p className={styles['place-ranking']}>{place.ranking}</p>
          {Number(place.num_reviews) >= 1 ? (
            <>
              {place.rating && <StarRating rating={place.rating} />}
              <p>{`${place.rating} out of 5 stars`}</p>
              <span>
                {Number(place.num_reviews) +
                  ' ' +
                  (Number(place.num_reviews) === 1 ? 'review' : 'reviews')}
              </span>
            </>
          ) : (
            <span>
              Hmm...this place doesn't appear to have any reviews. Would you
              like to leave a review?
            </span>
          )}
        </div>

        <div className={styles['_summary-address']}>
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

        <div className={styles['_summary-tags']}>
          <ul className={styles['_tags-list']}>
            {place.cuisine &&
              place.cuisine.length >= 1 &&
              place.cuisine.map((cuisine) => (
                <Chip className={styles['tag']} cuisine={cuisine.name} />
              ))}
          </ul>
        </div>
      </div>
    </li>
  );
});

export default PlaceCard;
