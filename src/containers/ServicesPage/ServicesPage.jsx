import styles from "./ServicesPage.module.css";
const ServicesPage = () => {
  return (
    <div className={styles.servicesPageWrapper}>
      <a className={styles.menuLink} href="/services/dedicated-team">
        Dedicated Team
      </a>

      <a className={styles.menuLink} href="services/custom-software">
        Custom Software
      </a>
    </div>
  );
};
export default ServicesPage;
