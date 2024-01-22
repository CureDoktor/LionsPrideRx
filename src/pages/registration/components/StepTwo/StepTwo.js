import React, { useState } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";

import ctaSrc from "@public/img/registration/cta.png";
import checkmarkSrc from "@public/img/registration/checkmark.png";
import likeSrc from "@public/img/registration/like.png";

const StepTwo = ({ handleContinue }) => {
  const [verified, setVerified] = useState(false);
  const handleInput = (e) => {
    if (e.target.value) setTimeout(() => setVerified(true), 1000);
    else setVerified(false);
  };
  return (
    <div className={styles.step}>
      <h1>Which state do you live in?</h1>
      <div className={styles.inputWrapper}>
        <input type="text" onInput={handleInput} />
        {verified && <Image src={checkmarkSrc} alt="" width={42} height={42} />}
      </div>
      <p>(to see if your state qualifies for telehealth medication)</p>
      {verified && (
        <div className={styles.verified}>
          <Image src={likeSrc} alt="" width={77} height={77} />
          <h1>Great news!</h1>
          <p>Your state qualifies for telehealth treatment!</p>
        </div>
      )}
      <button onClick={handleContinue}>
        <Image src={ctaSrc} alt="" fill />
      </button>
    </div>
  );
};

export default StepTwo;
