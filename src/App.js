import styles from "./App.module.css";
import { Route, Routes } from "react-router-dom";
import AboutPage from "./containers/AboutPage/AboutPage";
import HomePage from "./containers/HomePage/HomePage";
import logo from "./assets/logo.png";
import ServicesPage from "./containers/ServicesPage/ServicesPage";
import DedicatedTeamPage from "./containers/DedicatedTeamPage/DedicatedTeamPage";
import CustomSoftwarePage from "./containers/CustomSoftwarePage/CustomSoftwarePage";
function App() {
  return (
    <div>
      <div className={styles.navBar}>
        <nav>
          <img src={logo} alt="metergram logo" />
          <a className={styles.navBarLink} href="/">
            Home
          </a>
          <a className={styles.navBarLink} href="/about-us">
            About
          </a>
          <a className={styles.navBarLink} href="/services">
            Services
          </a>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route
          path="/services/custom-software"
          element={<CustomSoftwarePage />}
        />
        <Route path="/services/dedicated-team" element={<DedicatedTeamPage />} />
      </Routes>
    </div>
  );
}

export default App;
