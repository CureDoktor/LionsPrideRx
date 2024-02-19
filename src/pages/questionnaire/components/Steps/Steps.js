import React from "react";
import styles from "./styles.module.scss";
import { CheckCircleFill } from "react-bootstrap-icons";

const Steps = () => {
  return (
    <div className={styles.container}>
      <div className={styles.step}>
        <span>
          <CheckCircleFill fontSize={27} fill="#00D900" />
        </span>
      </div>
      <div className={styles.step}>
        <span>2</span>
      </div>
      <div className={styles.step}>
        <span>3</span>
      </div>
      <div className={styles.step}>
        <span>4</span>
      </div>
    </div>
  );
};

export default Steps;
