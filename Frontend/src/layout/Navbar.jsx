import { Link } from "react-router-dom";
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <header className={styles.navbar}>
      <nav className={styles.navContainer}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.item}>
            <Link to="/portfolio">Portfólio</Link>
          </li>
          <li className={styles.item}>
            <Link to="/gallery">Galeria</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
