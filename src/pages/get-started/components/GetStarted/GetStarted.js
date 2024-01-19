import React from "react";
import styles from "./styles.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";

import bottlesSrc from "@public/img/get-started/bottles.png";
import arrowSrc from "@public/img/get-started/arrow.png";
import tadalafilOrderSrc from "@public/img/get-started/tadalafil-order-card.png";
import sildenafilOrderSrc from "@public/img/get-started/sildenafil-order-card.png";
import checkmarkSrc from "@public/img/get-started/checkmark-white-icon.png";

const GetStarted = () => {
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
                <h2>Let&apos;s get started</h2>
                <ul>
                  <li>
                    <div className={styles.icon}>
                      <Image src={checkmarkSrc} alt="" fill />
                    </div>
                    <p>No in-person visits to the doctor</p>
                  </li>
                  <li>
                    <div className={styles.icon}>
                      <Image src={checkmarkSrc} alt="" fill />
                    </div>
                    <p>There is no waiting in line</p>
                  </li>
                  <li>
                    <div className={styles.icon}>
                      <Image src={checkmarkSrc} alt="" fill />
                    </div>
                    <p>No More Awkward Situations</p>
                  </li>
                </ul>
                <Image className={styles.arrow} src={arrowSrc} alt="Arrow" />
              </div>
              <p className={styles.choose}>
                First, choose a medication that works for you.
              </p>
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
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default GetStarted;
