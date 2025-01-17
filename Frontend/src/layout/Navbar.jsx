import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.classList.add("menuOpen");
    } else {
      document.body.classList.remove("menuOpen");
    }
  };

  // Remove a classe do body caso o componente seja desmontado
  useEffect(() => {
    return () => {
      document.body.classList.remove("menuOpen");
    };
  }, []);

  return (
    <header className={styles.navbar}>
      <nav className={styles.navContainer}>
        <button
          className={styles.buttonCollapse}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <i className="material-icons">menu</i>
        </button>
        <ul className={`${styles.list} ${isMenuOpen ? styles.menuMobile : ""}`}>
          <li className={styles.item}>
            <Link to="/" onClick={toggleMenu}>Home</Link>
          </li>
          <li className={styles.item}>
            <Link to="/portfolio" onClick={toggleMenu}>Portfólio</Link>
          </li>
          <li className={styles.item}>
            <Link to="/gallery" onClick={toggleMenu}>Galeria</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
