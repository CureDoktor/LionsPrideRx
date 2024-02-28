import React, { useEffect } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";

import iconSrc from "@public/img/checkmark-loading-icon.png";
import loadingSrc from "@public/img/loading-dots.png";

const LoadingSecond = ({ setCurrentStep }) => {
  useEffect(() => {
    const timeout = setTimeout(() => setCurrentStep((s) => s + 1), [3000]);
    return () => clearTimeout(timeout);
  }, [setCurrentStep]);

  return (
    <div className={styles.card}>
      <h2>We&apos;re on it</h2>
      <h1>Let&apos;s help you find the right treatment</h1>
      <Image
        src={iconSrc}
        alt=""
        className={styles.icon}
        width={108}
        height={108}
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
