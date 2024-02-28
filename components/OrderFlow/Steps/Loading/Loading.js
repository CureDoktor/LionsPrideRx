import Image from "next/image";
import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import styles from "./styles.module.scss";

import loadingSrc from "@public/img/loading.png";
import checkmarkIcon from "@public/img/checkmark-green.png";

const Loading = ({ setCurrentStep }) => {
  useEffect(() => {
    const timeout = setTimeout(() => setCurrentStep((s) => s + 1), [3000]);
    return () => clearTimeout(timeout);
  }, [setCurrentStep]);

  return (
    <Container className={styles.container}>
      <div className={styles.content}>
        <Image src={loadingSrc} alt="" width={125} height={125} />
        <h1>Loading...</h1>
      </div>
      <p>
        Reviewing your responses{" "}
        <Image src={checkmarkIcon} alt="" width={10} height={10} />
      </p>
    </Container>
  );
};

export default Loading;
