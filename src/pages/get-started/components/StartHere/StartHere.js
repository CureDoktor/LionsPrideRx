import React from "react";
import styles from "./styles.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";

import bottlesSrc from "@public/img/get-started/bottles.png";
import arrowSrc from "@public/img/get-started/arrow.png";
import tadalafilOrderSrc from "@public/img/get-started/tadalafil-order-card.png";
import sildenafilOrderSrc from "@public/img/get-started/sildenafil-order-card.png";
import checkmarkSrc from "@public/img/get-started/checkmark-blue-icon.png";

const StartHere = () => {
  return (
    <div className={styles.getStarted}>
      <Container>
        <Row>
          <Col className={styles.wrapper}>
            <div className={styles.bottles}>
              <Image src={bottlesSrc} alt="" fill />
            </div>
            <div className={styles.content}>
              <div className={styles.start}>
                <h2>Start Here</h2>
                <Image src={arrowSrc} alt="Arrow" />
              </div>
              <div className={styles.orders}>
                <div className={styles.order}>
                  <Image
                    src={sildenafilOrderSrc}
                    alt="Sildenafil Citrate"
                    fill
                  />
                </div>
                <div className={styles.order}>
                  <Image src={tadalafilOrderSrc} alt="Tadalafil Citrate" fill />
                </div>
              </div>

              <ul>
                <li>
                  <div className={styles.icon}>
                    <Image src={checkmarkSrc} alt="" fill />
                  </div>{" "}
                  <p>100% Online</p>
                </li>
                <li>
                  <div className={styles.icon}>
                    <Image src={checkmarkSrc} alt="" fill />
                  </div>
                  <p>FDA-Approved E.D. Medication</p>
                </li>
              </ul>

              <p className={styles.important}>
                For important safety information, please click <span>here</span>
                .
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default StartHere;
