import React from "react";
import styles from "./styles.module.scss";
import { Accordion, Col, Container, Row } from "react-bootstrap";
import Image from "next/image";

import alertSrc from "@public/img/get-started/alert-icon.png";

const FAQ = () => {
  const items = [
    {
      question: "Is it normal to have erectile dysfunction?",
      answer: (
        <>
          Erectile dysfunction (ED) is a prevalent condition, particularly among
          older males, though it can impact individuals across all age
          demographics. Its incidence tends to rise with advancing age, as
          illustrated by various studies.
          <br />
          <br />
          The Massachusetts Male Aging Study (MMAS), conducted in the late 1980s
          and early 1990s, serves as a landmark investigation. According to
          MMAS, approximately 52% of men aged 40 to 70 reported some degree of
          ED. The study further revealed that severe forms of erectile
          dysfunction was present in about 5% of men at the age of 40, with
          greater numbers as men get older.
        </>
      ),
    },
    {
      question:
        "What does Lion’s Pride Rx offer that my local pharmacy can’t provide?",
      answer: (
        <>
          Erectile dysfunction (ED) is a prevalent condition, particularly among
          older males, though it can impact individuals across all age
          demographics. Its incidence tends to rise with advancing age, as
          illustrated by various studies.
          <br />
          <br />
          The Massachusetts Male Aging Study (MMAS), conducted in the late 1980s
          and early 1990s, serves as a landmark investigation. According to
          MMAS, approximately 52% of men aged 40 to 70 reported some degree of
          ED. The study further revealed that severe forms of erectile
          dysfunction was present in about 5% of men at the age of 40, with
          greater numbers as men get older.
        </>
      ),
    },
    {
      question: "Is Lion’s Pride Rx safe?",
      answer: (
        <>
          Erectile dysfunction (ED) is a prevalent condition, particularly among
          older males, though it can impact individuals across all age
          demographics. Its incidence tends to rise with advancing age, as
          illustrated by various studies.
          <br />
          <br />
          The Massachusetts Male Aging Study (MMAS), conducted in the late 1980s
          and early 1990s, serves as a landmark investigation. According to
          MMAS, approximately 52% of men aged 40 to 70 reported some degree of
          ED. The study further revealed that severe forms of erectile
          dysfunction was present in about 5% of men at the age of 40, with
          greater numbers as men get older.
        </>
      ),
    },
    {
      question:
        "Am I required to call or video chat Lion’s Pride Rx’s physician?",
      answer: (
        <>
          Erectile dysfunction (ED) is a prevalent condition, particularly among
          older males, though it can impact individuals across all age
          demographics. Its incidence tends to rise with advancing age, as
          illustrated by various studies.
          <br />
          <br />
          The Massachusetts Male Aging Study (MMAS), conducted in the late 1980s
          and early 1990s, serves as a landmark investigation. According to
          MMAS, approximately 52% of men aged 40 to 70 reported some degree of
          ED. The study further revealed that severe forms of erectile
          dysfunction was present in about 5% of men at the age of 40, with
          greater numbers as men get older.
        </>
      ),
    },
    {
      question: "How long do I need to wait to get my order?",
      answer: (
        <>
          Erectile dysfunction (ED) is a prevalent condition, particularly among
          older males, though it can impact individuals across all age
          demographics. Its incidence tends to rise with advancing age, as
          illustrated by various studies.
          <br />
          <br />
          The Massachusetts Male Aging Study (MMAS), conducted in the late 1980s
          and early 1990s, serves as a landmark investigation. According to
          MMAS, approximately 52% of men aged 40 to 70 reported some degree of
          ED. The study further revealed that severe forms of erectile
          dysfunction was present in about 5% of men at the age of 40, with
          greater numbers as men get older.
        </>
      ),
    },
    {
      question: "For how long can I keep on buying pills from Lion’s Pride Rx?",
      answer: (
        <>
          Erectile dysfunction (ED) is a prevalent condition, particularly among
          older males, though it can impact individuals across all age
          demographics. Its incidence tends to rise with advancing age, as
          illustrated by various studies.
          <br />
          <br />
          The Massachusetts Male Aging Study (MMAS), conducted in the late 1980s
          and early 1990s, serves as a landmark investigation. According to
          MMAS, approximately 52% of men aged 40 to 70 reported some degree of
          ED. The study further revealed that severe forms of erectile
          dysfunction was present in about 5% of men at the age of 40, with
          greater numbers as men get older.
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
