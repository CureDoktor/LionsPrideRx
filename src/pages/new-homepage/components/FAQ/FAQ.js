import React from "react";
import { Accordion, Col, Container, Row } from "react-bootstrap";

import styles from "./styles.module.scss";

const FAQ = () => {
  const questions = [
    {
      id: 1,
      title: "What is LionsPrideRx?",
    },
    {
      id: 2,
      title: "How does LionsPrideRxwork?",
    },
    {
      id: 3,
      title: "Who are the providers at LionsPrideRx?",
    },
    {
      id: 4,
      title: "Does LionsPrideRx require insurance?",
    },
    {
      id: 5,
      title: "What states is LionsPrideRx available in?",
    },
  ];
  return (
    <div className={styles.faq}>
      <Container>
        <Row>
          <Col>
            <h1 className={styles.title}>
              Frequently asked questions
              <br />
              <span>Get instant answers</span>{" "}
            </h1>
            <Accordion defaultActiveKey="0" className={styles.accordion}>
              {questions.map((q) => (
                <Accordion.Item
                  key={q.id}
                  eventKey={q.id}
                  className={styles.item}
                >
                  <Accordion.Header className={styles.header}>
                    {q.title}
                  </Accordion.Header>
                  <Accordion.Body className={styles.body}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FAQ;
