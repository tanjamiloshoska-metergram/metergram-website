import styles from "./CustomSoftwarePage.module.css";
const CustomSoftwarePage = () => {
  return (
    <div>
      <h1 className={styles.customSoftwareHeader}>Custom Software</h1>
      <p className={styles.customSoftwareDescription}>
        We build products that not only solve real problems, but are intuitive,
        and scalable.
      </p>
    </div>
  );
};
export default CustomSoftwarePage;
