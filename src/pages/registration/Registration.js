import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./styles.module.scss";
import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import StepThree from "./components/StepThree";
import StepFour from "./components/StepFour";
import StepFive from "./components/StepFive";

const Registration = () => {
  const [step, setStep] = useState(0);

  const handleContinue = () =>
    setStep((prevStep) => (prevStep < 4 ? ++prevStep : 0));

  const stepsMap = {
    0: <StepOne handleContinue={handleContinue} />,
    1: <StepTwo handleContinue={handleContinue} />,
    2: <StepThree handleContinue={handleContinue} />,
    3: <StepFour handleContinue={handleContinue} />,
    4: <StepFive handleContinue={handleContinue} />,
  };

  return (
    <div className={styles.registration}>
      <Container style={{ height: "100%" }}>
        <Row style={{ height: "100%" }}>
          <Col>
            <div className={styles.progress}>
              <div
                className={`${styles.step} ${step >= 0 ? styles.active : ""}`}
              />
              <div
                className={`${styles.step} ${step >= 1 ? styles.active : ""}`}
              />
              <div
                className={`${styles.step} ${step >= 2 ? styles.active : ""}`}
              />
              <div
                className={`${styles.step} ${step >= 3 ? styles.active : ""}`}
              />
              <div
                className={`${styles.step} ${step == 4 ? styles.active : ""}`}
              />
            </div>
            <div className={styles.content}>{stepsMap[step]}</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Registration;
