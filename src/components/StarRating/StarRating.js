import styles from './StarRating.module.css';

import { FaStar, FaStarHalf } from 'react-icons/fa';

const StarRating = ({ rating }) => {
  const starRating = rating.replace('.', '').split('');
  return (
    <div className={styles.container}>
      <aside className={styles['bg-container']}>
        <FaStar className={`${styles['star']} ${styles['star-bg']}`} />
        <FaStar className={`${styles['star']} ${styles['star-bg']}`} />
        <FaStar className={`${styles['star']} ${styles['star-bg']}`} />
        <FaStar className={`${styles['star']} ${styles['star-bg']}`} />
        <FaStar className={`${styles['star']} ${styles['star-bg']}`} />
      </aside>
      <aside className={styles['stars-container']}>
        {[...Array(Number(starRating[0]))].map((star) => (
          <FaStar className={`${styles['star']} ${styles['star-active']}`} />
        ))}
        {starRating[1] === '5' && (
          <FaStarHalf
            className={`${styles['star']} ${styles['star-active']}`}
          />
        )}
      </aside>
    </div>
  );
};
export default StarRating;
