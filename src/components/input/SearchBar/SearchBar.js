import styles from './SearchBar.module.css';
import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
  return (
    <div className={styles.container}>
      {/* <p className={styles['search-heading']}>Search</p> */}
      <input
        type='text'
        placeholder='Search'
        name='search'
        id='search'
        className={styles.input}
      />
      <button className={styles['search-btn']}>
        <FaSearch className={styles['search-icon']} />
      </button>
    </div>
  );
};
export default SearchBar;
