import styles from './Chip.module.css';

const Chip = ({ className, cuisine }) => {
  return <li className={`${styles['chip']} ${className}`}>{cuisine}</li>;
};
export default Chip;
