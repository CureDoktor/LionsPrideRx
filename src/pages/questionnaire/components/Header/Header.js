import React from "react";
import styles from "./styles.module.scss";
import { CheckCircleFill } from "react-bootstrap-icons";
import { Container } from "react-bootstrap";

const Steps = ({ total, currentQuestion }) => {
  const renderIndicators = () => {
    for (let i = 1; i <= total; i++) {
      return (
        <span
          key={i}
          className={`${styles.indicator} ${
            parseInt(i) <= parseInt(currentQuestion) ? styles.active : ""
          }`}
        />
      );
    }
  };

  return (
    <div className={styles.container}>
      <p>
        <span>STEP 2:</span> Complete Health Questionnaire
      </p>
      <div className={styles.order}>
        <h2>
          Your order WILL NOT ship without completing health questionnaire
        </h2>
      </div>
      <h1>Please Complete your Medical Profile</h1>
      <div className={styles.indicators}>{renderIndicators()}</div>
    </div>
  );
};

export default Steps;
