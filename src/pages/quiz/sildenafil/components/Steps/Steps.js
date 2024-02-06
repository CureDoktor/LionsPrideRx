import React from "react";
import styles from "./styles.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";

import step1Src from "@public/img/get-started/step-1.png";
import step2Src from "@public/img/get-started/step-2.png";
import step3Src from "@public/img/get-started/step-3.png";

const Steps = () => {
  const steps = [
    {
      id: 1,
      src: step1Src,
      title: "Choose your treatment plan",
      desc: "Select from our available ED treatment plans that fit your preference and budget.",
    },
    {
      id: 2,
      src: step2Src,
      title: "Fill out a quick 3-minute health evaluation form",
      desc: "Your assigned US-licensed physician will review your form to determine the treatment that fits your needs.",
    },
    {
      id: 3,
      src: step3Src,
      title: "Complete your order",
      desc: "If approved, you can proceed with your order and your medication will be shipped directly and discreetly from a US-based pharmacy to your doorstep.",
    },
  ];
  return (
    <Container className={styles.container}>
      <Row>
        <Col>
          <h1>HOW DOES LION’S PRIDE RX WORK?</h1>
          <div className={styles.content}>
            <div className={styles.steps}>
              {steps.map((step) => (
                <div className={styles.step} key={step.id}>
                  <div className={styles.chip}>
                    <h1>Step {step.id}</h1>
                  </div>
                  <div className={styles.image}>
                    <Image src={step.src} alt="" fill />
                  </div>
                  <h1 className={styles.title}>{step.title}</h1>
                  <hr />
                  <p className={styles.desc}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Steps;
