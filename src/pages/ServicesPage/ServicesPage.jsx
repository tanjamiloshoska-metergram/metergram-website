import styles from "./ServicesPage.module.css";
import { Link, Routes, Route } from "react-router-dom";
import DedicatedTeamPage from "../DedicatedTeamPage/DedicatedTeamPage";
import CustomSoftwarePage from "../CustomSoftwarePage/CustomSoftwarePage";
const ServicesPage = () => {
  return (
    <div className={styles.servicesPageWrapper}>
      <Link className={styles.menuLink} to="/services/dedicated-team">
        Dedicated Team
      </Link>
      <Link className={styles.menuLink} to="/services/custom-software">
        Custom Software
      </Link>

      <div className={styles.ServicesRoutes}>
        <Routes>
          <Route path="/dedicated-team" element={<DedicatedTeamPage />} />
          <Route path="/custom-software" element={<CustomSoftwarePage />} />
        </Routes>
      </div>
    </div>
  );
};
export default ServicesPage;
