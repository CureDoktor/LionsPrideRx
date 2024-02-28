import React, { useEffect } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";

import iconSrc from "@public/img/banana-icon.png";
import loadingSrc from "@public/img/loading-dots.png";

const LoadingFirst = ({ setCurrentStep }) => {
  useEffect(() => {
    const timeout = setTimeout(() => setCurrentStep((s) => s + 1), [3000]);
    return () => clearTimeout(timeout);
  }, [setCurrentStep]);

  return (
    <div className={styles.card}>
      <h2>You&apos;re not alone</h2>
      <h1>40% of men experience Symptoms like this by age 40</h1>
      <Image
        src={iconSrc}
        alt=""
        className={styles.icon}
        width={166}
        height={166}
      />
      <Image
        src={loadingSrc}
        alt=""
        className={styles.loading}
        width={163}
        height={33}
      />
    </div>
  );
};

export default LoadingFirst;
