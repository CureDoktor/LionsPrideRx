import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./styles.module.scss";

import checkmarkIcon from "@public/img/quiz/checkmark.png";
import bottlesImage from "@public/img/quiz/bottles.png";

const Landing = () => {
  const checkmarks = [
    "Medication prescribed by board-certified doctors",
    "100% online with no in-person doctor visits required",
    "Fast, discreet shipping right to your door",
  ];
  return (
    <div className={styles.landing}>
      <Container className={styles.container}>
        <Row>
          <Col>
            <div className={styles.content}>
              <h1>
                Get Generic Viagra <span>(Sildenafil)</span> in less than 3
                minutes!
              </h1>
              <ul>
                {checkmarks.map((item, i) => (
                  <li key={i}>
                    <Image src={checkmarkIcon} alt="" width={18} height={18} />
                    <p>{item}</p>
                  </li>
                ))}
              </ul>
              <button>Let&apos;s get started</button>
            </div>
            <div className={styles.image}>
              <Image src={bottlesImage} alt="" fill />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Landing;
