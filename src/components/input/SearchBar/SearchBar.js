import styles from './SearchBar.module.css';
import { FaSearch } from 'react-icons/fa';
import { MdArrowForwardIos } from 'react-icons/md';

const SearchBar = () => {
  return (
    <div className={styles.container}>
      {/* <p className={styles['search-heading']}>Search</p> */}
      <FaSearch className={styles['search_icon']} />
      <input
        type='text'
        placeholder='Search'
        name='search'
        id='search'
        className={styles.input}
      ></input>
      <button className={styles['search-btn']}>
        <MdArrowForwardIos className={styles['arrow-icon']} />
      </button>
    </div>
  );
};
export default SearchBar;
