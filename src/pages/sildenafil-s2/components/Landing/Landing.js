import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./styles.module.scss";
import Image from "next/image";

import checkmarkIcon from "@public/img/product-landing/checkmark-v2.png";
import productSrc from "@public/img/product-landing/sildenafil-pills-box.png";

const MobileLayout = ({ checkmarks }) => {
  return (
    <div className={styles.mobile}>
      <Container>
        <Row>
          <Col>
            <h2 className={styles.pretitle}>Generic Viagra®</h2>
            <h1 className={styles.title}>
              Generic Viagra® <span>(Sildenafil)</span> 50mg
            </h1>
            <p className={styles.description}>
              Sildenafil is the same active ingredient in branded Viagra.
            </p>
          </Col>
        </Row>
      </Container>
      <div className={styles.imageContainer}>
        <span />
        <span />
        <div className={styles.image}>
          <Image src={productSrc} alt="" fill />
        </div>
      </div>
      <Container>
        <Row>
          <Col>
            <ul className={styles.list}>
              {checkmarks.map((item, i) => (
                <li key={i}>
                  <Image src={checkmarkIcon} alt="" width={14} height={14} />
                  <p>{item}</p>
                </li>
              ))}
            </ul>
            <div className={styles.price}>
              <span>One month price</span>
              <span>$22</span>
            </div>
            <button className={styles.cta}>Shop Now</button>
            <p className={styles.disclaimer}>
              *products needing a prescription require a short consultation with
              an online physician.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const DesktopLayout = ({ checkmarks }) => {
  return (
    <div className={styles.desktop}>
      <Container style={{ position: "relative" }}>
        <Row>
          <Col style={{ display: "flex" }}>
            <div className={styles.card}>
              <h2 className={styles.pretitle}>Generic Viagra®</h2>
              <h1 className={styles.title}>
                Generic Viagra® <span>(Sildenafil)</span> 50mg
              </h1>
              <p className={styles.description}>
                Sildenafil is the same active ingredient in branded Viagra.
              </p>
              <ul className={styles.list}>
                {checkmarks.map((item, i) => (
                  <li key={i}>
                    <Image src={checkmarkIcon} alt="" width={14} height={14} />
                    <p>{item}</p>
                  </li>
                ))}
              </ul>
              <div className={styles.price}>
                <span>One month price</span>
                <span>$22</span>
              </div>
              <button className={styles.cta}>Shop Now</button>
              <p className={styles.disclaimer}>
                *products needing a prescription require a short consultation
                with an online physician.
              </p>
            </div>
            <div className={styles.image}>
              <Image src={productSrc} alt="" fill />
            </div>
          </Col>
        </Row>
      </Container>
      <span className={styles.bgLightGray} />
      <span className={styles.bgDarkGray} />
    </div>
  );
};

const Landing = () => {
  const checkmarks = [
    "FDA-approved medication",
    "Prescribed by board-certified physicians",
    "Process takes as little as 3 minutes!",
  ];

  return (
    <>
      <MobileLayout checkmarks={checkmarks} />
      <DesktopLayout checkmarks={checkmarks} />
    </>
  );
};

export default Landing;
