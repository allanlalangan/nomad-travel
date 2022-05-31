// styles and ui
import styles from './Header.module.css';
import SearchBar from '../input/SearchBar/SearchBar';
import { GiCompass } from 'react-icons/gi';
import { AppBar, Toolbar } from '@mui/material';
import style from './style';

const Header = () => {
  return (
    <AppBar sx={style.appBar}>
      <Toolbar sx={style.toolBar}>
        <div className={styles.logo}>
          <a href='/'>
            <div className={styles['title-container']}>
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
      </Toolbar>
    </AppBar>
  );
};

export default Header;
