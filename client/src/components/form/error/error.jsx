import styles from "./style.module.css";

export const Error = ({ errors }) => {
  return <p className={styles.error}>{errors ? errors.message : ""}</p>;
};
