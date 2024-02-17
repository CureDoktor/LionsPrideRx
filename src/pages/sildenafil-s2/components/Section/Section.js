import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./styles.module.scss";
import Image from "next/image";

const Section = ({ img, title, desc, reversed, className }) => {
  return (
    <div className={`${className} ${styles.section}`}>
      <Container>
        <Row>
          <Col className={`${styles.col} ${reversed ? styles.reversed : ""}`}>
            <div className={styles.imageContainer}>
              <div className={styles.image}>
                <Image src={img} alt="" fill />
              </div>
            </div>
            <div style={{ flex: 1 }}>
              <h2>{title}</h2>
              <p>{desc}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Section;
