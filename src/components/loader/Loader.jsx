import React from "react";
import styles from "./index.module.scss";

const Loader = () => {
  return (
    <div className={styles.loaderContainer}>
      <span className={styles.loader}></span>
      <h3 className={styles.text}>Loading...</h3>
    </div>
  );
};

export default Loader;
