import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";

import ctaSrc from "@public/img/registration/cta.png";

const StepOne = ({ handleContinue }) => {
  return (
    <div className={styles.step}>
      <h1>What&apos;s your first and last name?</h1>
      <div>
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
      </div>
      <button onClick={handleContinue}>
        <Image src={ctaSrc} alt="" fill />
      </button>
    </div>
  );
};

export default StepOne;
