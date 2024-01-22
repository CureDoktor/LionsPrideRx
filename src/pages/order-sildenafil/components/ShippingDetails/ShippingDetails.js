import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import styles from "./styles.module.scss";
import Card from "../Treatments/components/Card";
import Image from "next/image";

import goIcon from "@public/img/order-page/go-icon.png";

const ShippingDetails = () => {
  return (
    <Container className={styles.container}>
      <Row>
        <Col>
          <h1 className={styles.title}>Start Your Order</h1>
          <Card
            title="Step 1"
            description="Shipping Details"
            className={styles.card}
          >
            <Row className={styles.row}>
              <Col xs={12} lg={6} className={styles.col}>
                <input type="text" placeholder="First Name" />
              </Col>
              <Col xs={12} lg={6} className={styles.col}>
                <input type="text" placeholder="Last Name" />
              </Col>
              <Col xs={12} lg={6} className={styles.col}>
                <input type="email" placeholder="Email Address" />
              </Col>
              <Col xs={12} lg={6} className={styles.col}>
                <input type="tel" placeholder="Phone" />
              </Col>
              <Col xs={12} lg={6} className={styles.col}>
                <input type="text" placeholder="Street Address" />
              </Col>
              <Col xs={12} lg={6} className={styles.col}>
                <input type="text" placeholder="City" />
              </Col>
              <Col xs={12} lg={5} className={styles.col}>
                <select>
                  <option value="" disabled selected hidden>
                    Country
                  </option>
                  <option>Country 1</option>
                  <option>Country 2</option>
                  <option>Country 3</option>
                  <option>Country 4</option>
                </select>
                <span className={styles.arrow} />
              </Col>
              <Col xs={6} lg={4} className={styles.col}>
                <select>
                  <option value="" disabled selected hidden>
                    State/Province
                  </option>
                  <option>State 1</option>
                  <option>State 2</option>
                  <option>State 3</option>
                  <option>State 4</option>
                </select>
                <span className={styles.arrow} />
              </Col>
              <Col xs={6} lg={3} className={styles.col}>
                <input type="text" placeholder="Zipcode" />
              </Col>
            </Row>
          </Card>
          <button className={styles.button}>
            Continue to Step 2{" "}
            <Image src={goIcon} alt="" width={21} height={21} />
          </button>
        </Col>
      </Row>
    </Container>
  );
};

export default ShippingDetails;
