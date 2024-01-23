import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./styles.module.scss";
import Image from "next/image";

import shareIcon from "@public/img/product-landing/share-icon.png";
import physicianIcon from "@public/img/physician.png";
import fdaIcon from "@public/img/fda-approved.png";
import pharmacyIcon from "@public/img/pharmacy.png";

const Discount = () => {
  return (
    <div className={styles.discount}>
      <Container>
        <Row>
          <Col>
            <h2 className={styles.pretitle}>
              <span>Lion’s Pride Rx</span> offers premium, affordable,
              FDA-approved, prescription drugs from the comfort and privacy of
              your home.
            </h2>
            <h1 className={styles.title}>
              Lion’s Pride Rx is Proudly American-Made
            </h1>
            <p className={styles.subtitle}>
              As U.S Based telehealth company, Lion’s Pride is fully compliant
              with stringent state and federal regulations, for your safety and
              peace of mind.
            </p>
            <ul className={styles.list}>
              <li>
                <Image src={physicianIcon} alt="" width={20} height={18} />{" "}
                US-licensed healthcare professionals
              </li>
              <li>
                <Image src={pharmacyIcon} alt="" width={20} height={18} />{" "}
                Medications made in the USA
              </li>
              <li>
                <Image src={fdaIcon} alt="" width={20} height={18} /> FDA
                approved Pharmacies
              </li>
            </ul>
            <div className={styles.card}>
              <h1>
                Input your Email and <span>save $35</span> off your first order
              </h1>
              <input type="email" placeholder="Email Here..." />
              <button>
                Submit
                <Image src={shareIcon} alt="" width={22} height={22} />
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Discount;
