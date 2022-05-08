import styles from "./App.module.css";
import { Route, Routes } from "react-router-dom";
import AboutPage from "./containers/AboutPage/AboutPage";
import HomePage from "./containers/HomePage/HomePage";
import logo from "./assets/logo.png";
import ServicesPage from "./containers/ServicesPage/ServicesPage";
import DedicatedTeamPage from "./containers/DedicatedTeamPage/DedicatedTeamPage";
import CustomSoftwarePage from "./containers/CustomSoftwarePage/CustomSoftwarePage";
import { useNavigate } from "react-router-dom";
const App = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className={styles.navBar}>
        <nav>
          <img src={logo} alt="metergram logo" />
          <button className={styles.navBarLink} onClick={() => navigate("/")}>
            Home
          </button>
          <button
            className={styles.navBarLink}
            onClick={() => navigate("/about-us")}
          >
            About
          </button>
          <button
            className={styles.navBarLink}
            onClick={() => navigate("/services")}
          >
            Services
          </button>
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
        <Route
          path="/services/dedicated-team"
          element={<DedicatedTeamPage />}
        />
      </Routes>
    </div>
  );
};

export default App;
