import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./styles.module.scss";
import checkmarkIcon from "@public/img/quiz/checkmark-v2.png";

const FindTreatment = ({ second, scrollTo }) => {
  const list = [
    "Medication prescribed by board-certified doctors",
    "100% online with no in-person doctor visits required",
    "Fast, discreet shipping right to your door",
  ];

  const ref = useRef();

  useEffect(() => {
    if (ref.current && scrollTo) ref.current.scrollIntoView();
  }, [ref, scrollTo]);

  return (
    <Container ref={ref} className={styles.container}>
      <Row>
        <Col xs={12} lg={6}>
          <h1>
            Great news!
            <br /> <span>We’ve got you covered.</span>
          </h1>
        </Col>
        <Col xs={12} lg={6}>
          <ul>
            {list.map((item, i) => (
              <li key={i}>
                <Image src={checkmarkIcon} alt="" width={19} height={18} />
                <p>{item}</p>
              </li>
            ))}
          </ul>
          <button>Find my treatment</button>
          <p className={`${second ? styles.second : ""}`}>
            *Products needing a prescription require a short consultation with
            an online physician
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default FindTreatment;
