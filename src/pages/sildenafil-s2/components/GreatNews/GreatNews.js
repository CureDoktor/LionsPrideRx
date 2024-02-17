import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./styles.module.scss";
import Image from "next/image";

import checkmarkSrc from "@public/img/quiz/checkmark-v2.png";

const GreatNews = () => {
  const checkmarks = [
    "Medication prescribed by board-certified doctors",
    "100% online with no in-person doctor visits required",
    "Fast, discreet shipping right to your door",
  ];

  return (
    <div className={styles.greatnews}>
      <Container>
        <Row>
          <Col className={styles.col}>
            <h1>
              Great news!
              <br />
              <span>We’ve got you covered.</span>
            </h1>

            <div className={styles.content}>
              <ul>
                {checkmarks.map((text, i) => (
                  <li key={i}>
                    <Image src={checkmarkSrc} alt="" />
                    <p>{text}</p>
                  </li>
                ))}
              </ul>

              <button>Find my treatment</button>
              <p className={styles.disclaimer}>
                *Products needing a prescription require a short consultation
                with an online physician
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default GreatNews;
