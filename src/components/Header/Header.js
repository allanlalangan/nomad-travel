// styles and ui
import styles from './Header.module.css';
import SearchBar from '../input/SearchBar/SearchBar';
import { MdOutlineTravelExplore } from 'react-icons/md';

const Header = () => {
  return (
    <header className={`${styles['main-header']}`}>
      <div className={styles.logo}>
        <MdOutlineTravelExplore className={styles['logo-icon']} />
        <h1 className={`${styles['title']}`}>Nomad</h1>
      </div>
      <SearchBar />
    </header>
  );
};

export default Header;
