// styles and ui
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={`${styles['main-header']}`}>
      <h1 className={`${styles['title']}`}>Nomad</h1>
    </header>
  );
};

export default Header;
