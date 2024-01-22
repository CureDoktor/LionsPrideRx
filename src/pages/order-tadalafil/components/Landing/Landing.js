import GetProduct from "@components/GetProduct";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./styles.module.scss";

import landingSrc from "@public/img/order-page/tadalafil-landing.png";

const Landing = () => {
  return (
    <Container className={styles.container}>
      <Row>
        <Col>
          <h1>Complete Your Order</h1>
          <GetProduct
            title={
              <>
                Get Genuine Generic Cialis
                <br />
                <span>(Tadalafil)</span> Now
              </>
            }
            src={landingSrc}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Landing;
