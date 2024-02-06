import React from "react";
import styles from "./styles.module.scss";
import { Accordion, Col, Container, Row } from "react-bootstrap";
import Image from "next/image";

import alertSrc from "@public/img/get-started/alert-icon.png";

const FAQ = () => {
  const items = [
    {
      question: "How common is Erectile Dysfunction?",
      answer: (
        <>
          Erectile dysfunction (ED) is a relatively common condition, especially
          among older men, but it can affect individuals of all ages. The
          prevalence of ED tends to increase with age, and various studies have
          provided estimates of its occurrence in different age groups.
          <br />
          <br />
          According to the Massachusetts Male Aging Study (MMAS), a landmark
          study conducted in the late 1980s and early 1990s, the prevalence of
          ED increases with age. For men aged 40 to 70, approximately 52%
          reported some degree of ED. The study found that complete ED was
          present in about 5% of men at age 40 and increased to 15% at age 70.
        </>
      ),
    },
    {
      question:
        "What’s the difference between using UPRx and going to my local pharmacy?",
      answer: (
        <>
          Erectile dysfunction (ED) is a relatively common condition, especially
          among older men, but it can affect individuals of all ages. The
          prevalence of ED tends to increase with age, and various studies have
          provided estimates of its occurrence in different age groups.
          <br />
          <br />
          According to the Massachusetts Male Aging Study (MMAS), a landmark
          study conducted in the late 1980s and early 1990s, the prevalence of
          ED increases with age. For men aged 40 to 70, approximately 52%
          reported some degree of ED. The study found that complete ED was
          present in about 5% of men at age 40 and increased to 15% at age 70.
        </>
      ),
    },
    {
      question: "Is Lion’s Pride Rx safe?",
      answer: (
        <>
          Erectile dysfunction (ED) is a relatively common condition, especially
          among older men, but it can affect individuals of all ages. The
          prevalence of ED tends to increase with age, and various studies have
          provided estimates of its occurrence in different age groups.
          <br />
          <br />
          According to the Massachusetts Male Aging Study (MMAS), a landmark
          study conducted in the late 1980s and early 1990s, the prevalence of
          ED increases with age. For men aged 40 to 70, approximately 52%
          reported some degree of ED. The study found that complete ED was
          present in about 5% of men at age 40 and increased to 15% at age 70.
        </>
      ),
    },
    {
      question: "Will I need an audio and/or video chat with my physician?",
      answer: (
        <>
          Erectile dysfunction (ED) is a relatively common condition, especially
          among older men, but it can affect individuals of all ages. The
          prevalence of ED tends to increase with age, and various studies have
          provided estimates of its occurrence in different age groups.
          <br />
          <br />
          According to the Massachusetts Male Aging Study (MMAS), a landmark
          study conducted in the late 1980s and early 1990s, the prevalence of
          ED increases with age. For men aged 40 to 70, approximately 52%
          reported some degree of ED. The study found that complete ED was
          present in about 5% of men at age 40 and increased to 15% at age 70.
        </>
      ),
    },
    {
      question: "How long does LionsPrideRx take?",
      answer: (
        <>
          Erectile dysfunction (ED) is a relatively common condition, especially
          among older men, but it can affect individuals of all ages. The
          prevalence of ED tends to increase with age, and various studies have
          provided estimates of its occurrence in different age groups.
          <br />
          <br />
          According to the Massachusetts Male Aging Study (MMAS), a landmark
          study conducted in the late 1980s and early 1990s, the prevalence of
          ED increases with age. For men aged 40 to 70, approximately 52%
          reported some degree of ED. The study found that complete ED was
          present in about 5% of men at age 40 and increased to 15% at age 70.
        </>
      ),
    },
    {
      question: "How long will my prescription last?",
      answer: (
        <>
          Erectile dysfunction (ED) is a relatively common condition, especially
          among older men, but it can affect individuals of all ages. The
          prevalence of ED tends to increase with age, and various studies have
          provided estimates of its occurrence in different age groups.
          <br />
          <br />
          According to the Massachusetts Male Aging Study (MMAS), a landmark
          study conducted in the late 1980s and early 1990s, the prevalence of
          ED increases with age. For men aged 40 to 70, approximately 52%
          reported some degree of ED. The study found that complete ED was
          present in about 5% of men at age 40 and increased to 15% at age 70.
        </>
      ),
    },
  ];
  return (
    <div className={styles.container}>
      <Container>
        <Row>
          <Col>
            <h1>FREQUENTLY ASKED QUESTIONS</h1>
            <Accordion className={styles.accordion} defaultActiveKey="0">
              {items.map((q, i) => (
                <Accordion.Item className={styles.item} key={i} eventKey={i}>
                  <Accordion.Header className={styles.header}>
                    {q.question}
                  </Accordion.Header>
                  <Accordion.Body className={styles.body}>
                    {q.answer}
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
            <div className={styles.alert}>
              <div className={styles.heading}>
                <div className={styles.image}>
                  <Image src={alertSrc} alt="" fill />
                </div>
                <h1>The following safety information is important</h1>
              </div>
              <p>
                You should not take Sildenafil (sildenafil citrate) or Tadalafil
                if you are taking medications that contain nitrates, guanylate
                cyclase stimulators, or if you have an allergic reaction to
                sildenafil, tadalafil, or any ingredients in either medication.
                You should speak with your doctor about your health so that you
                are healthy enough to have sex. - <span>Read more.</span>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FAQ;
