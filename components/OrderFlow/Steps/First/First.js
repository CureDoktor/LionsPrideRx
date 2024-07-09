import Image from "next/image";
import React from "react";
import { Container } from "react-bootstrap";
import styles from "./styles.module.scss";
import arrowSrc from "@public/img/product-landing/carousel-arrow.png";

const First = ({ setCurrentStep }) => {
  return (
    <Container className={styles.container}>
      <h1>Choose your medication preference:</h1>
      <div className={styles.options}>
        <div
          className={styles.option}
          onClick={() => {
            setCurrentStep((s) => s + 1);
            localStorage.setItem("daily", true);
          }}
        >
          <span>$1.80 per dose</span>
          <h1>Take daily</h1>
          <p>To maintain peak sexual readiness at all times</p>
          <div className={styles.arrow}>
            <Image src={arrowSrc} alt="" width={27} height={35} />
          </div>
        </div>
        <div
          className={styles.option}
          onClick={() => {
            setCurrentStep((s) => s + 1);
            localStorage.setItem("daily", false);
          }}
        >
          <span>$4.00 per dose</span>
          <h1>Take before sex</h1>
          <p>Quick activating medication when you want it</p>
          <div className={styles.arrow}>
            <Image src={arrowSrc} alt="" width={27} height={35} />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default First;
