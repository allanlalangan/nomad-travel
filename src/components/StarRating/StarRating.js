import styles from './StarRating.module.css';
import { BsStar, BsStarHalf, BsStarFill } from 'react-icons/bs';

const StarRating = () => {
  return (
    <div className={styles.container}>
      <BsStar />
      <BsStar />
      <BsStar />
      <BsStar />
      <BsStar />
    </div>
  );
};
export default StarRating;
