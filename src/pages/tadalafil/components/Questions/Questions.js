import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./styles.module.scss";

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
