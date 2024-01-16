import React from "react";

import styles from "./styles.module.scss";
import { Col, Container, Row } from "react-bootstrap";

import wifiIcon from "../../../../../public/assets/wifi-red-icon.png";
import physicianIcon from "../../../../../public/assets/physician-red-icon.png";
import checkmarkIcon from "../../../../../public/assets/checkmark-red-icon.png";
import pharmacyIcon from "../../../../../public/assets/pharmacy-red-icon.png";
import boxIcon from "../../../../../public/assets/box-red-icon.png";
import handshakeIcon from "../../../../../public/assets/handshake-red-icon.png";
import placeholderImg from "../../../../../public/img/home/plan-1.png";
import Image from "next/image";

const Perscription = () => {
  return (
    <Container className={styles.perscription}>
      <Row>
        <Col>
          <h1 className={styles.title}>
            Real Solutions Made Simple <br />
            <span>Your Prescription Needs, now 100% Online</span>
          </h1>
          <div className={styles.contentWrapper}>
            <div className={styles.image}>
              <Image src={placeholderImg} alt="" fill />
            </div>
            <div className={styles.content}>
              <h4>
                Lion’s Pride Rx is your #1 Choice for Convenient and Affordable
                Medication.
              </h4>
              <ul>
                <li>
                  <Image
                    width={30}
                    height={30}
                    src={wifiIcon}
                    alt="Wifi icon"
                  />
                  <p>100% Online healthcare platform</p>
                </li>
                <li>
                  <Image
                    width={30}
                    height={30}
                    src={physicianIcon}
                    alt="Physician icon"
                  />
                  <p>US-licensed physicians</p>
                </li>
                <li>
                  <Image
                    width={30}
                    height={30}
                    src={checkmarkIcon}
                    alt="Checkmark icon"
                  />
                  <p>FDA-approved medication</p>
                </li>
                <li>
                  <Image
                    width={30}
                    height={30}
                    src={pharmacyIcon}
                    alt="Pharmacy icon"
                  />
                  <p>US-based pharmacy</p>
                </li>
                <li>
                  <Image width={30} height={30} src={boxIcon} alt="Box icon" />
                  <p>Discreet shipping</p>
                </li>
                <li>
                  <Image
                    width={30}
                    height={30}
                    src={handshakeIcon}
                    alt="Handshake icon"
                  />
                  <p>Ongoing care</p>
                </li>
              </ul>
              <div className={styles.ctas}>
                <button>Find my treatment</button>
                <button>Learn more</button>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Perscription;
