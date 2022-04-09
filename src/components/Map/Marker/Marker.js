import styles from './Marker.module.css';

const Marker = (props) => {
  return (
    <div className={styles.marker}>
      <span className={`${styles['marker-name']}`}>{props.place.name}</span>
    </div>
  );
};
export default Marker;
