import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";

import ctaSrc from "@public/img/registration/cta.png";

const StepThree = ({ handleContinue }) => {
  return (
    <div className={styles.step}>
      <h1>What&apos;s your email address?</h1>
      <input type="email" placeholder="yourname@email.com" />
      <button onClick={handleContinue}>
        <Image src={ctaSrc} alt="" fill />
      </button>
    </div>
  );
};

export default StepThree;
