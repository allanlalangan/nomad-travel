import styles from './Chip.module.css';

const Chip = ({ cuisine }) => {
  return <li className={styles['chip']}>{cuisine}</li>;
};
export default Chip;
