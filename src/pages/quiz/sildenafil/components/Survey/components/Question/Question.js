import Checkbox from "@components/Inputs/Checkbox";
import React from "react";
import { useFormContext } from "react-hook-form";
import styles from "../../styles.module.scss";
import { Col, Container, Row } from "react-bootstrap";

const Question = ({ id, title, subtitle, answers, className }) => {
  const { watch } = useFormContext();

  const qWatch = watch(`q${id - 1}`);

  if (!qWatch && id !== "1") return null;

  return (
    <Container>
      <Row>
        <Col>
          <div className={`${styles.question} ${className}`}>
            <div className={styles.number}>
              <span
                className={`${styles.questionNumber} ${
                  parseInt(id) >= 1 ? styles.active : ""
                }`}
              >
                1
              </span>
              <div
                className={`${styles.dots} ${
                  parseInt(id) >= 1 ? styles.active : ""
                }`}
              >
                <span />
                <span />
                <span />
              </div>
              <span
                className={`${styles.questionNumber} ${
                  parseInt(id) >= 2 ? styles.active : ""
                }`}
              >
                2
              </span>
              <div
                className={`${styles.dots} ${
                  parseInt(id) >= 2 ? styles.active : ""
                }`}
              >
                <span />
                <span />
                <span />
              </div>
              <span
                className={`${styles.questionNumber} ${
                  parseInt(id) >= 3 ? styles.active : ""
                }`}
              >
                3
              </span>
              <div
                className={`${styles.dots} ${
                  parseInt(id) >= 3 ? styles.active : ""
                }`}
              >
                <span />
                <span />
                <span />
              </div>
              <span
                className={`${styles.questionNumber} ${
                  parseInt(id) >= 4 ? styles.active : ""
                }`}
              >
                4
              </span>
            </div>
            <h2>{title}</h2>
            {subtitle && <p>{subtitle}</p>}
            <div className={styles.answers}>
              {answers?.map((answer) => (
                <Checkbox
                  key={answer.value}
                  label={answer.label}
                  name={`q${id}`}
                  value={answer.value}
                  variant="contained"
                  checkmark={false}
                />
              ))}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Question;
