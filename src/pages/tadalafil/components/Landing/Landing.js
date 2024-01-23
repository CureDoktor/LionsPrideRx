import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./styles.module.scss";
import Image from "next/image";

import checkmarkIcon from "@public/img/product-landing/checkmark-icon.png";
import shareIcon from "@public/img/product-landing/share-icon.png";

const Landing = ({ title, mg, doses, product }) => {
  return (
    <Container className={styles.container}>
      <Row>
        <Col className={styles.col}>
          <div style={{ width: "100%" }}>
            <h2 className={styles.pretitle}>
              #1 Choice for 100% Online ED Treatments
            </h2>
            <h1 className={styles.title}>{title}</h1>
            <div className={styles.pills}>
              <span>{mg}mg</span>
              <span>Doses: {doses}</span>
            </div>
            <ul>
              <li>
                <Image src={checkmarkIcon} alt="" width={18} height={16} />
                Genuine FDA-approved medication
              </li>
              <li>
                <Image src={checkmarkIcon} alt="" width={18} height={16} />
                100% Online!
              </li>
              <li>
                <Image src={checkmarkIcon} alt="" width={18} height={16} />
                No in-person appointments
              </li>
              <li>
                <Image src={checkmarkIcon} alt="" width={18} height={16} />
                Express shipping in discreet packaging
              </li>
              <li>
                <Image src={checkmarkIcon} alt="" width={18} height={16} />
                FREE Online Health Assessment – 24/7
              </li>
            </ul>
            <div className={styles.mobile}>
              <Image src={product?.mobile} alt="" fill />
            </div>
            <div className={styles.content}>
              <button>
                Get Started Now
                <Image src={shareIcon} alt="" width={22} height={22} />
              </button>
              <p>
                Order Within: <span>0d 4h 25m 18s</span>
                <br />
                Get it by <span>Monday 20th, November</span>
              </p>
            </div>
          </div>
          <div className={styles.desktop}>
            <Image src={product?.desktop} alt="" fill />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Landing;
