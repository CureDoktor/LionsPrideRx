import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";

import ctaSrc from "@public/img/registration/cta.png";

const StepFour = ({ handleContinue }) => {
  return (
    <div className={styles.step}>
      <h1>What&apos;s your phone number?</h1>
      <input type="tel" />
      <p>Just one more step!</p>
      <button onClick={handleContinue}>
        <Image src={ctaSrc} alt="" fill />
      </button>
    </div>
  );
};

export default StepFour;
