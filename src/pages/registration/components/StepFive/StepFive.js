import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";

import ctaSrc from "@public/img/registration/cta.png";

const StepTwo = ({ handleContinue }) => {
  return (
    <div className={styles.step}>
      <h1>Create your password</h1>
      <div className={styles.inputWrapper}>
        <input type="password" placeholder="Password" />
        <span>SHOW</span>
      </div>
      <h1>Repeat your password</h1>
      <div className={styles.inputWrapper}>
        <input type="password" placeholder="Password" />
        <span>SHOW</span>
      </div>
      <label>
        <input type="checkbox" />
        <p>
          I agree to the terms and conditions, privacy policy, and consent to
          telehealth policy
        </p>
      </label>
      <button onClick={handleContinue}>
        <Image src={ctaSrc} alt="" fill />
      </button>
    </div>
  );
};

export default StepTwo;
