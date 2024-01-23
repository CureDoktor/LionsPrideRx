import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./styles.module.scss";

import checkmarkIcon from "@public/img/product-landing/checkmark-icon.png";
import Image from "next/image";

const Questions = ({ questions }) => {
  return (
    <div className={styles.questions}>
      <Container>
        <Row>
          <Col>
            <div className={styles.content}>
              {questions?.map((question, i) => (
                <div key={i}>
                  <h4>{question.title}</h4>
                  <p>{question.answer}</p>
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
