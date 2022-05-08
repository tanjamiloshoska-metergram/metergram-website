import styles from "./ServicesPage.module.css";
import triangle from "../../assets/triangle.png";
const ServicesPage = () => {
  return (
    <div className={styles.servicesPageWrapper}>
      <a className={styles.menuLink} href="/services/dedicated-team">
        <img className={styles.triangleImg} src={triangle} alt="option" />
        Dedicated Team
      </a>

      <a className={styles.menuLink} href="services/custom-software">
        <img className={styles.triangleImg} src={triangle} alt="option" />
        Custom Software
      </a>
    </div>
  );
};
export default ServicesPage;
