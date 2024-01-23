import React from "react";
import styles from "./styles.module.scss";
import { Accordion, Col, Container, Row } from "react-bootstrap";

const FAQ = () => {
  const items = [
    {
      question: "Is it normal to have Erectile Dysfunction?",
      answer: (
        <>
          Erectile Dysfunction (ED) is typical, especially as people get older,
          but it can affect anyone, regardless of age. The chances of dealing
          with ED tend to go up as you get older. A well-known study from the
          late '80s and early '90s, called the Massachusetts Male Aging Study
          (MMAS), gives us some insight.
          <br />
          <br />
          The MMAS found that ED becomes more common as men age. In the 40 to 70
          age range, around 52% of men reported having some level of ED. The
          study also discovered that total ED, meaning a complete inability to
          get or maintain an erection, was around 5% in 40-year-olds and
          increased to 15% in 70-year-olds.
        </>
      ),
    },
    {
      question:
        "What does Lion’s Pride Rx offer that my local pharmacy can’t provide?",
      answer: (
        <>
          Erectile Dysfunction (ED) is typical, especially as people get older,
          but it can affect anyone, regardless of age. The chances of dealing
          with ED tend to go up as you get older. A well-known study from the
          late '80s and early '90s, called the Massachusetts Male Aging Study
          (MMAS), gives us some insight.
          <br />
          <br />
          The MMAS found that ED becomes more common as men age. In the 40 to 70
          age range, around 52% of men reported having some level of ED. The
          study also discovered that total ED, meaning a complete inability to
          get or maintain an erection, was around 5% in 40-year-olds and
          increased to 15% in 70-year-olds.
        </>
      ),
    },
    {
      question: "Is Lion’s Pride Rx safe?",
      answer: (
        <>
          Erectile Dysfunction (ED) is typical, especially as people get older,
          but it can affect anyone, regardless of age. The chances of dealing
          with ED tend to go up as you get older. A well-known study from the
          late '80s and early '90s, called the Massachusetts Male Aging Study
          (MMAS), gives us some insight.
          <br />
          <br />
          The MMAS found that ED becomes more common as men age. In the 40 to 70
          age range, around 52% of men reported having some level of ED. The
          study also discovered that total ED, meaning a complete inability to
          get or maintain an erection, was around 5% in 40-year-olds and
          increased to 15% in 70-year-olds.
        </>
      ),
    },
    {
      question:
        "Am I required to call or video chat Lion’s Pride Rx’s physician?",
      answer: (
        <>
          Erectile Dysfunction (ED) is typical, especially as people get older,
          but it can affect anyone, regardless of age. The chances of dealing
          with ED tend to go up as you get older. A well-known study from the
          late '80s and early '90s, called the Massachusetts Male Aging Study
          (MMAS), gives us some insight.
          <br />
          <br />
          The MMAS found that ED becomes more common as men age. In the 40 to 70
          age range, around 52% of men reported having some level of ED. The
          study also discovered that total ED, meaning a complete inability to
          get or maintain an erection, was around 5% in 40-year-olds and
          increased to 15% in 70-year-olds.
        </>
      ),
    },
    {
      question: "How long do I need to wait to get my order?",
      answer: (
        <>
          Erectile Dysfunction (ED) is typical, especially as people get older,
          but it can affect anyone, regardless of age. The chances of dealing
          with ED tend to go up as you get older. A well-known study from the
          late '80s and early '90s, called the Massachusetts Male Aging Study
          (MMAS), gives us some insight.
          <br />
          <br />
          The MMAS found that ED becomes more common as men age. In the 40 to 70
          age range, around 52% of men reported having some level of ED. The
          study also discovered that total ED, meaning a complete inability to
          get or maintain an erection, was around 5% in 40-year-olds and
          increased to 15% in 70-year-olds.
        </>
      ),
    },
    {
      question: "For how long can I keep on buying pills from Lion’s Pride Rx?",
      answer: (
        <>
          Erectile Dysfunction (ED) is typical, especially as people get older,
          but it can affect anyone, regardless of age. The chances of dealing
          with ED tend to go up as you get older. A well-known study from the
          late '80s and early '90s, called the Massachusetts Male Aging Study
          (MMAS), gives us some insight.
          <br />
          <br />
          The MMAS found that ED becomes more common as men age. In the 40 to 70
          age range, around 52% of men reported having some level of ED. The
          study also discovered that total ED, meaning a complete inability to
          get or maintain an erection, was around 5% in 40-year-olds and
          increased to 15% in 70-year-olds.
        </>
      ),
    },
    {
      question: "For how long can I use my prescription?",
      answer: (
        <>
          Erectile Dysfunction (ED) is typical, especially as people get older,
          but it can affect anyone, regardless of age. The chances of dealing
          with ED tend to go up as you get older. A well-known study from the
          late '80s and early '90s, called the Massachusetts Male Aging Study
          (MMAS), gives us some insight.
          <br />
          <br />
          The MMAS found that ED becomes more common as men age. In the 40 to 70
          age range, around 52% of men reported having some level of ED. The
          study also discovered that total ED, meaning a complete inability to
          get or maintain an erection, was around 5% in 40-year-olds and
          increased to 15% in 70-year-olds.
        </>
      ),
    },
  ];
  return (
    <div className={styles.container}>
      <Container>
        <Row>
          <Col>
            <h1>Frequently Asked Questions</h1>
            <Accordion className={styles.accordion} defaultActiveKey="0">
              {items.map((q, i) => (
                <>
                  <Accordion.Item className={styles.item} key={i} eventKey={i}>
                    <Accordion.Header className={styles.header}>
                      {q.question}
                    </Accordion.Header>
                    <Accordion.Body className={styles.body}>
                      {q.answer}
                    </Accordion.Body>
                  </Accordion.Item>
                  <hr />
                </>
              ))}
            </Accordion>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FAQ;
