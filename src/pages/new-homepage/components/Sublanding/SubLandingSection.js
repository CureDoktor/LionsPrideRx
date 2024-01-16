import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./styles.module.scss";

import physiciansIcon from "../../../../../public/img/physician.png";
import pharmacyIcon from "../../../../../public/img/pharmacy.png";
import fdaIcon from "../../../../../public/img/fda-approved.png";
import Image from "next/image";

const SubLandingSection = () => {
  const pills = [
    {
      id: 1,
      name: "US-licensed Physicians",
      icon: physiciansIcon,
    },
    {
      id: 2,
      name: "US-based Pharmacy",
      icon: pharmacyIcon,
    },
    {
      id: 3,
      name: "FDA-Approved Medication",
      icon: fdaIcon,
    },
  ];
  return (
    <div className={styles.sublanding}>
      <Container>
        <Row>
          <Col className={styles.pills}>
            {pills.map((pill) => (
              <div key={pill.id} className={styles.pill}>
                <Image src={pill.icon} alt="icon" />
                <p>{pill.name}</p>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SubLandingSection;
