import React from "react";
import styles from "./styles.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";

import imageSrc from "@public/img/get-started/sublanding-image.png";

const Sublanding = () => {
  return (
    <div className={styles.sublanding}>
      <Container>
        <Row>
          <Col>
            <div className={styles.wrapper}>
              <div className={styles.image}>
                <Image src={imageSrc} alt="" fill />
              </div>
              <div className={styles.content}>
                <h2>
                  Lion’s Pride Rx makes E.D. treatments Easy, Convenient, and
                  Affordable!
                </h2>
                <h4>
                  Which E.D. treatment is right for you? Get same-day results
                  with Lion’s Pride Rx’s FREE Online Health Screening.
                </h4>
                <p>
                  Get the help you need to overcome E.D. from the comfort of
                  your home. Select your treatment, fill out a quick 3-minute
                  health assessment, and complete your order. It’s that simple!
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Sublanding;
