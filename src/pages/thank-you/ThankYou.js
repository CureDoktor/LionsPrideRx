import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./styles.module.scss";
import Image from "next/image";

import checkmarkIcon from "@public/img/get-started/checkmark-icon.png";
import step1Src from "@public/img/thank-you/step-1.png";
import step2Src from "@public/img/thank-you/step-2.png";
import step3Src from "@public/img/thank-you/step-3.png";
import step4Src from "@public/img/thank-you/step-4.png";

const ThankYou = () => {
  return (
    <Container className={styles.container}>
      <Row>
        <Col>
          <div className={styles.content}>
            <h1>Thank You For Your Order!</h1>
            <h2>Your ID has been successfully submitted</h2>
            <p className={styles.text}>
              Within the next <span>24 hours</span>, one of our dedicated
              doctors will thoroughly review the details of your order, ensuring
              that it meets all the necessary requirements.
            </p>
            <p className={styles.text}>
              Once the doctor reviews and approves your medical profile you will
              receive an email confirming your prescription.{" "}
            </p>
            <p className={styles.text}>
              If there are any questions or concerns, the doctor will reach out
              to you immediately through text or email. Should you need any
              assistance or have any inquiries, please feel free to contact our
              customer support team at <span>support@lionsproderx.com</span> or
              call us at <span>1-888-802-9541.</span>
            </p>
            <p className={styles.text}>Check your email or text inbox for:</p>
            <ul>
              <li>
                <div className={styles.icon}>
                  <Image src={checkmarkIcon} alt="" fill />
                </div>
                <p>
                  Messages from your doctor about your <span>prescription</span>{" "}
                  or <span>medical profile</span>
                </p>
              </li>
              <li>
                <div className={styles.icon}>
                  <Image src={checkmarkIcon} alt="" fill />
                </div>
                <p>
                  <span>Order confirmation</span>
                </p>
              </li>
              <li>
                <div className={styles.icon}>
                  <Image src={checkmarkIcon} alt="" fill />
                </div>
                <p>
                  Order <span>shipment confirmation</span> and tracking number
                </p>
              </li>
            </ul>
          </div>
          <div className={styles.steps}>
            <div className={styles.step}>
              <div className={styles.image}>
                <Image src={step1Src} alt="" fill />
              </div>
              <p>Submitted Medical Profile</p>
            </div>
            <span className={styles.line} />
            <div className={styles.step}>
              <div className={styles.image}>
                <Image src={step2Src} alt="" fill />
              </div>
              <p>Verified Identity</p>
            </div>
            <span className={styles.line} />
            <div className={styles.step}>
              <div className={styles.image}>
                <Image src={step3Src} alt="" fill />
              </div>
              <p>
                Prescription Approved or Modified by Physician{" "}
                <span>24-48 hours</span>
              </p>
            </div>
            <span className={styles.line} />
            <div className={styles.step}>
              <div className={styles.image}>
                <Image src={step4Src} alt="" fill />
              </div>
              <p>
                Order Shipped!
                <br />
                <span>
                  5-7 days
                  <br />
                  after approval!
                </span>
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ThankYou;
