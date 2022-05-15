import styles from "./AboutPage.module.css";
const AboutPage = () => {
  return (
    <div>
      <h1 className={styles.aboutHeader}>
        Great people, doing their life's work
      </h1>
      <p className={styles.description}>
        As a fully remote company with hubs in New York and Florida, we're able
        to hire the best developers from anywhere in the world.
      </p>
      <p className={styles.description}>
        This allows us to be uncompromising in the quality of the work we
        produce, while still providing the best value possible to our clients
      </p>
    </div>
  );
};

export default AboutPage;
