import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./styles.module.scss";

import checkmarkIcon from "@public/img/product-landing/checkmark-icon.png";
import Image from "next/image";

const Questions = () => {
  const cards = [
    {
      title: "Pick your treatment",
      text: "Choose from our various ED treatment options that suit your needs",
    },
    {
      title: "Answer a quick health form",
      text: "Your health form would be reviewed by a qualified US-licensed physician to determine the proper treatment for your needs.",
    },
    {
      title: "Finalize your order",
      text: "If approved, may continue with your order. Once all the required information are provided, your medication will be shipped the following business day",
    },
  ];
  return (
    <div className={styles.questions}>
      <Container>
        <Row>
          <Col>
            <h1>ORDER in 3 EASY STEPS</h1>
            <div className={styles.cards}>
              {cards.map((question, i) => (
                <div className={styles.card} key={i}>
                  <span>{i + 1}</span>
                  <h4>{question.title}</h4>
                  <p>{question.text}</p>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Questions;
