import React, { useState } from "react";

import styles from "./styles.module.scss";
import First from "./components/Steps/First";
import Second from "./components/Steps/Second";
import Third from "./components/Steps/Third";
import Fourth from "./components/Steps/Fourth";
import Fifth from "./components/Steps/Fifth";
import Sixth from "./components/Steps/Sixth";
import Seventh from "./components/Steps/Seventh";

const TransitionPage = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const stepsMap = {
    0: First,
    1: Second,
    2: Third,
    3: Fourth,
    4: Fifth,
    5: Sixth,
    6: Seventh,
  };

  const Step = stepsMap[currentStep];

  return (
    <div className={styles.transitionPage}>
      <Step setCurrentStep={setCurrentStep} />
    </div>
  );
};

export default TransitionPage;
