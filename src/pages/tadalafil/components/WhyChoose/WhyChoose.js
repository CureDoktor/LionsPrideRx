import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./styles.module.scss";

import checkmarkIcon from "@public/img/product-landing/checkmark-icon.png";
import Image from "next/image";

const WhyChoose = ({ image }) => {
  const list = [
    "Genuine - US Made ED medication",
    "Rapid Fast Approvals",
    "No in-person appointments",
    "Express shipping in discreet packaging",
    "No hidden fees",
    "100% money-back guarantee",
  ];
  return (
    <div className={styles.whychoose}>
      <Container>
        <Row>
          <Col className={styles.col}>
            <div className={styles.content}>
              <h1>
                Why Choose
                <br /> <span>Lion’s Pride Rx</span>?
              </h1>
              <ul>
                {list.map((item, i) => (
                  <li key={i}>
                    <Image src={checkmarkIcon} alt="" width={20} height={17} />{" "}
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.image}>
              <Image src={image} alt="" fill />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WhyChoose;
