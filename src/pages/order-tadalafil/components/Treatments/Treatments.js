import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./styles.module.scss";
import Card from "./components/Card";
import Image from "next/image";

import mostpopularSrc from "@public/img/order-page/most-popular.svg";
import Summary from "./components/Summary";

export const Radio = ({
  checked,
  value,
  onClick,
  label,
  name,
  endAdornment,
}) => {
  const isChecked = checked === value;
  return (
    <label className={`${styles.radio} ${isChecked ? styles.checked : ""}`}>
      <div className={styles.wrapper}>
        <input
          checked={isChecked}
          required={true}
          onClick={onClick}
          name={name}
          type="radio"
          value={value}
        />
        {label}
      </div>
      {endAdornment || null}
    </label>
  );
};

const Treatments = () => {
  const [checkedDose, setCheckedDose] = useState("25mg");
  const [checkedPill, setCheckedPill] = useState("8");

  const handleDoseClick = (e) => setCheckedDose(e.target.value);
  const handlePillClick = (e) => setCheckedPill(e.target.value);

  return (
    <div className={styles.treatments}>
      <Container>
        <Row>
          <Col>
            <h1 className={styles.title}>Flexible Treatment Options</h1>
            <p className={styles.subtitle}>
              Choose from the available ED treatments as approved by your
              assigned US-licensed physician.
            </p>
            <div className={styles.cards}>
              <Card title="Step 1" description="Choose your strength">
                <div className={styles.cardContent}>
                  <h1 className={styles.cardTitle}>Generic Cialis</h1>
                  <h2 className={styles.cardSubtitle}>Tadalafil</h2>
                  <div className={styles.cardInputs}>
                    <Radio
                      checked={checkedDose}
                      value="25mg"
                      onClick={handleDoseClick}
                      name="dose"
                      label="25mg $3.75/per dose"
                    />
                    <Radio
                      checked={checkedDose}
                      value="50mg"
                      onClick={handleDoseClick}
                      name="dose"
                      label="50mg $5.75/per dose"
                      endAdornment={
                        <div className={styles.mostPopular}>
                          <Image src={mostpopularSrc} alt="" fill />
                        </div>
                      }
                    />
                    <Radio
                      checked={checkedDose}
                      value="100mg"
                      onClick={handleDoseClick}
                      name="dose"
                      label="100mg $9.75/per dose"
                    />
                  </div>
                </div>
              </Card>
              <Card
                title="Step 2"
                description="How many pills (doses) do you want?"
              >
                <div className={styles.cardContent}>
                  <div className={styles.cardInputs}>
                    <Radio
                      checked={checkedPill}
                      value="8"
                      onClick={handlePillClick}
                      name="pills"
                      label="8 pills/ monthly (cancel anytime)"
                    />
                    <Radio
                      checked={checkedPill}
                      value="12"
                      onClick={handlePillClick}
                      name="pills"
                      label="12 pills/ monthly (cancel anytime)"
                      endAdornment={
                        <div className={styles.mostPopular}>
                          <Image src={mostpopularSrc} alt="" fill />
                        </div>
                      }
                    />
                    <Radio
                      checked={checkedPill}
                      value="16"
                      onClick={handlePillClick}
                      name="pills"
                      label="16 pills/ monthly (cancel anytime)"
                    />
                  </div>
                </div>
              </Card>
              <h2 className={styles.summary}>
                Based on your selections, here is the summary of your Order:
              </h2>
              <Summary />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Treatments;
