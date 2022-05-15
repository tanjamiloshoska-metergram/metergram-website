import { Link } from "react-router-dom";
import styles from "./Menu.module.css";
import logo from "../../assets/logo.png";
const Menu = () => {
  return (
    <nav className={styles.navBar}>
      <img src={logo} alt="metergram logo" />
      <Link to="/" className={styles.navBarLink}>
        Home
      </Link>
      <Link to="/about-us" className={styles.navBarLink}>
        About
      </Link>
      <Link to="/services" className={styles.navBarLink}>
        Services
      </Link>
    </nav>
  );
};

export default Menu;
