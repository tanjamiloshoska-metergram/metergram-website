import styles from "./ServicesPage.module.css";
import { useNavigate } from "react-router-dom";
const ServicesPage = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.servicesPageWrapper}>
      <button
        className={styles.menuLink}
        onClick={() => navigate("/services/dedicated-team")}
      >
        Dedicated Team
      </button>

      <button
        className={styles.menuLink}
        onClick={() => navigate("/services/custom-software")}
      >
        Custom Software
      </button>
    </div>
  );
};
export default ServicesPage;
