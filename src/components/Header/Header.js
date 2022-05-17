// styles and ui
import styles from './Header.module.css';
import SearchBar from '../input/SearchBar/SearchBar';
import { GiCompass } from 'react-icons/gi';

const Header = () => {
  return (
    <header className={`${styles['main-header']}`}>
      <div className={styles.logo}>
        <a href='/'>
          <div className={styles['title-container']}>
            {/* <span className={styles['icon-container']}>
              <GiCompass className={styles['logo-icon']} />
            </span> */}
            <h1 className={`${styles['title']}`}>
              N<span className={styles['title-o']}>o</span>
              <span className={styles['icon-container']}>
                <GiCompass className={styles['logo-icon']} />
              </span>
              mad
            </h1>
          </div>
        </a>
      </div>
      <SearchBar />
    </header>
  );
};

export default Header;
