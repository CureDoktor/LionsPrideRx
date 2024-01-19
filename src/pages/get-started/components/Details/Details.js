import React from "react";
import styles from "./styles.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";

import bottlesSrc from "@public/img/get-started/bottles.png";
import completeYourOrderSrc from "@public/img/get-started/complete-your-order.png";
import walletIcon from "@public/img/get-started/wallet-icon.png";
import checkmarkIcon from "@public/img/get-started/checkmark-icon.png";
import checkmarkV2Icon from "@public/img/get-started/checkmark-v2-icon.png";
import headphonesIcon from "@public/img/get-started/headphones-icon.png";
import shieldIcon from "@public/img/get-started/checkmark-shield-icon.png";

const Details = () => {
  const completeYourOrderChecks = [
    "All medications made and distributed in the United States.",
    "Quick online order process takes only 5 minutes or less!",
    "Shipped directly from US-based pharmacy to your doorstep",
    "Free Rushed Shipping – Packed discreetly for your protection",
    "US-licensed physicians",
    "Same-day health screening results",
    "ZERO payment required until treatment is approved!",
    "12-month valid prescriptions available.",
  ];
  return (
    <Container className={styles.container}>
      <Row>
        <Col className={styles.contentFirst}>
          <ul className={styles.list}>
            <li>
              <div className={styles.icon}>
                <Image src={walletIcon} alt="" fill />
              </div>
              <p>Affordable treatment options starting at only $xx.xx/pill.</p>
            </li>
            <li>
              <div className={styles.icon}>
                <Image src={checkmarkV2Icon} alt="" fill />
              </div>
              <p>
                No hidden charges, no doctor’s fees, no insurance required. Pay
                only for your medication!
              </p>
            </li>
            <li>
              <div className={styles.icon}>
                <Image src={headphonesIcon} alt="" fill />
              </div>
              <p>Dedicated customer support hotline 7 days a week.</p>
            </li>
            <li>
              <div className={styles.icon}>
                <Image src={shieldIcon} alt="" fill />
              </div>
              <p>30-day money-back guarantee on all orders.</p>
            </li>
          </ul>
          <div className={styles.bottles}>
            <Image src={bottlesSrc} alt="" fill />
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className={styles.contentSecond}>
            <div className={styles.completeYourOrder}>
              <Image src={completeYourOrderSrc} alt="" fill />
            </div>
            <ul className={styles.list}>
              {completeYourOrderChecks.map((check, i) => (
                <li key={i}>
                  <div className={styles.icon}>
                    <Image src={checkmarkIcon} alt="" fill />
                  </div>
                  <p>{check}</p>
                </li>
              ))}
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Details;
