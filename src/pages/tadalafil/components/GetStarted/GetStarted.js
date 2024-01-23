import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./styles.module.scss";
import Image from "next/image";

import checkmarkIcon from "@public/img/product-landing/checkmark-icon.png";
import shareIcon from "@public/img/product-landing/share-icon.png";

const Landing = () => {
  return (
    <Container className={styles.container}>
      <Row>
        <Col>
          <h1>GET STARTED NOW</h1>
          <ul>
            <li>
              <Image src={checkmarkIcon} alt="" width={22} height={19} />
              100% Online ED Medication
            </li>
            <li>
              <Image src={checkmarkIcon} alt="" width={22} height={19} />
              US-licensed healthcare professionals
            </li>
            <li>
              <Image src={checkmarkIcon} alt="" width={22} height={19} />
              US-based pharmacies
            </li>
            <li>
              <Image src={checkmarkIcon} alt="" width={22} height={19} />
              US-made ED medication
            </li>
            <li>
              <Image src={checkmarkIcon} alt="" width={22} height={19} />
              100% money-back guarantee
            </li>
          </ul>

          <div className={styles.content}>
            <button>
              Get Started For FREE
              <Image src={shareIcon} alt="" width={22} height={22} />
            </button>
            <p>
              Order Within: <span>0d 4h 25m 18s</span>
              <br />
              Get it by <span>Monday 20th, November</span>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Landing;
