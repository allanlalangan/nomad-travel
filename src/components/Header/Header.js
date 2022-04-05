// styles and ui
import styles from './Header.module.css';

import { MdOutlineTravelExplore } from 'react-icons/md';

const Header = () => {
  return (
    <header className={`${styles['main-header']}`}>
      <div className={styles.logo}>
        <MdOutlineTravelExplore className={styles['logo-icon']} />
        <h1 className={`${styles['title']}`}>Nomad</h1>
      </div>
    </header>
  );
};

export default Header;
