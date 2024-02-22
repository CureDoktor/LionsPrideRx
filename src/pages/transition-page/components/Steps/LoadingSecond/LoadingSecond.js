import React, { useEffect } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";

import iconSrc from "@public/img/nesto-icon.png";
import loadingSrc from "@public/img/loading-dots.png";

const LoadingSecond = ({ setCurrentStep }) => {
  useEffect(() => {
    const timeout = setTimeout(() => setCurrentStep((s) => s + 1), [1500]);
    return () => clearTimeout(timeout);
  }, [setCurrentStep]);

  return (
    <div className={styles.card}>
      <h2>You&apos;re not alone</h2>
      <h1>LionsPrideRx can help</h1>
      <Image
        src={iconSrc}
        alt=""
        className={styles.icon}
        width={124}
        height={124}
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

export default LoadingSecond;
