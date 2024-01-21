import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./styles.module.scss";

import checkmarkIcon from "@public/img/order-page/checkmark-white.png";

const SideBySide = ({ table, product }) => {
  const pills = [
    "FDA-Approved E.D. Medication",
    "Save up to 90% vs brand-name medication",
    "Generics Certified – 100% Generic Viagra and Cialis",
  ];
  return (
    <Container className={styles.container}>
      <Row>
        <Col>
          <h1 className={styles.title}>Side-by-side comparison</h1>
          <p className={styles.subtitle}>
            See why most American men choose Lion’s Pride Rx over traditional
            pharmacies and other online pharmacy services!
          </p>
          <div className={styles.table}>
            <Image src={table.mobile} alt="" fill />
            <Image src={table.desktop} alt="" fill />
          </div>
          <h1 className={styles.secondTitle}>Trusted. Reliable. Genuine.</h1>
          <h2 className={styles.secondSubtitle}>
            Lion’s Pride Rx Makes E.D. Treatments Simple.
          </h2>
          <h2 className={styles.overcome}>
            Overcome E.D. and regain your sexual prime, regardless of your age.
          </h2>
          <p className={styles.desc}>
            Managing erectile dysfunction (ED) is now more convenient with
            Lion’s Pride Rx. Our network comprises US-licensed physicians,
            US-based pharmacies, and American-manufactured medications, all from
            the ease and privacy of your home.
            <br />
            <br />
            Lion’s Pride Rx provides cost-effective generic medication, offering
            savings of up to 90% on ED medication expenses. This includes a
            complimentary online consultation with US-licensed physicians and
            free discreet overnight shipping. No hidden doctor’s fees, pharmacy
            charges, or refill costs— with Lion’s Pride Rx, you only pay for
            your medication!
          </p>
          <div className={styles.product}>
            <div className={styles.bottle}>
              <Image src={product} alt="" fill />
            </div>
            <div className={styles.pills}>
              {pills.map((pill, i) => (
                <div key={i} className={styles.pill}>
                  <div className={styles.icon}>
                    <Image src={checkmarkIcon} alt="" fill />
                  </div>
                  <span>{pill}</span>
                </div>
              ))}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SideBySide;
