import React from "react";

import styles from "./styles.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import { useRouter } from "next/navigation";

import searchIcon from "../../../../../public/assets/search-icon.png";

const ExploreTreatments = () => {
  const router = useRouter();

  return (
    <Container className={styles.container}>
      <Row>
        <Col>
          <h1 className={styles.title}>
            <span>LionsPrideRx</span> makes men’s health simpler, more
            convenient, and affordable.
          </h1>
          <button
            onClick={() => {
              router.push("/transition-page");
            }}
            className={styles.cta}
          >
            <Image src={searchIcon} alt="Search icon" />
            Explore treatments
          </button>
        </Col>
      </Row>
    </Container>
  );
};

export default ExploreTreatments;
