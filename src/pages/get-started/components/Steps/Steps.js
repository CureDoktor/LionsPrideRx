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
      title: "Select your treatment",
      desc: "Pick from Lion’s Pride Rx’s treatment plan options",
    },
    {
      id: 2,
      src: step2Src,
      title: "Answer health assessment form",
      desc: "Your health assessment form will be reviewed by a US-licensed physician to determine the proper treatment for your needs.",
    },
    {
      id: 3,
      src: step3Src,
      title: "Finalize your order",
      desc: "If approved, you may continue with selecting your treatment package. Once your order is finalized, your medication will be shipped the following business day.",
    },
  ];
  return (
    <Container className={styles.container}>
      <Row>
        <Col>
          <div className={styles.content}>
            <h1>HOW DOES LION’S PRIDE RX WORK?</h1>
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
