import React from "react";
import styles from "./styles.module.scss";
import { Accordion, Col, Container, Row } from "react-bootstrap";
import Image from "next/image";

import alertSrc from "@public/img/get-started/alert-icon.png";

const FAQ = () => {
  const items = [
    {
      question: "What is LionsPrideRx? ",
      answer: (
        <>
          LionsPrideRx is a premier direct-to-consumer telehealth service,
          linking patients with US-licensed healthcare providers to a partner
          US-based online pharmacy. Our service is intended for adult patients
          aged 18 and above, and is available in most US states.
        </>
      ),
    },
    {
      question: "How does LionsPrideRx work?",
      answer: (
        <>
          Our full-service telehealth platform delivers convenient telehealth
          treatments right to your fingertips:
          <br />
          1. Choose your medication
          <br />
          2. Fill out a quick, 3-minute health survey
          <br />
          3. Order your medication
          <br />
          4. Our team of US-licensed physicians will review your order and
          health survey
          <br />
          5. If approved, your order will be shipped directly to you within 3-5
          business days.
          <br />
          It’s that easy!
        </>
      ),
    },
    {
      question: "Who are the providers at LionsPrideRx?",
      answer: (
        <>
          LionsPrideRx exclusively works with US-licensed healthcare providers
          and US-based pharmacies to ensure strict compliance with US federal
          and state regulations.
        </>
      ),
    },
    {
      question: "Does LionsPrideRx require insurance?",
      answer: (
        <>
          LionsPrideRx does not require insurance. Only approved prescriptions
          are billed. We pride ourselves on providing affordable medication and
          convenient access to telehealth, allowing patients with a
          cost-effective solution on sourcing their telehealth needs.
        </>
      ),
    },
    {
      question: "Can I use LionsPrideRx services on all states? ",
      answer: (
        <>
          Currently, LionsPrideRx is available in 48 states. Telehealth services
          are not available for patients in South Carolina and Alaska.
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
                    <span>{q.question}</span>
                  </Accordion.Header>
                  <Accordion.Body className={styles.body}>
                    {q.answer}
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
            <div className={styles.alert}>
              <div className={styles.left}>
                <div className={styles.image}>
                  <Image src={alertSrc} alt="" fill />
                </div>
              </div>
              <div className={styles.right}>
                <h1>The following safety information is important</h1>
                <p>
                  You should not take Sildenafil (sildenafil citrate) or
                  Tadalafil if you are taking medications that contain nitrates,
                  guanylate cyclase stimulators, or if you have an allergic
                  reaction to sildenafil, tadalafil, or any ingredients in
                  either medication. You should speak with your doctor about
                  your health so that you are healthy enough to have sex. -{" "}
                  <span>Read more.</span>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FAQ;
