import React from "react";
import styles from "./styles.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";

import coverSrcMobile from "@public/img/get-started/cover-mobile.png";
import coverSrcDesktop from "@public/img/get-started/cover-desktop.png";
import arrowSrc from "@public/img/get-started/arrow.png";
import tadalafilOrderSrc from "@public/img/get-started/tadalafil-order-card.png";
import sildenafilOrderSrc from "@public/img/get-started/sildenafil-order-card.png";
import checkmarkIcon from "@public/img/get-started/checkmark-icon.png";

const LandingSection = () => {
  return (
    <div className={styles.landing}>
      <Container>
        <Row>
          <Col style={{ position: "relative", zIndex: 2 }}>
            <h1 className={styles.title}>
              Buy Sildenafil Citrate <span>(Viagra)</span> and Tadalafil{" "}
              <span>(Cialis)</span> 100% Online!
            </h1>
            <h1 className={styles.subtitle}>Fast. Easy. Secure.</h1>
            <h6 className={styles.portal}>
              Lion’s Pride Rx is the #1 Portal for your Online E.D. Prescription
              Needs
            </h6>
            <div className={styles.mobileCover}>
              <Image src={coverSrcMobile} alt="Couple in bed" />
            </div>

            <ul className={styles.list}>
              <li>
                <Image src={checkmarkIcon} alt="Checkmark icon" /> FREE Online
                Health Screening – Same-day Results
              </li>
              <li>
                <Image src={checkmarkIcon} alt="Checkmark icon" /> Starts at
                only $X.XX/pill
              </li>
              <li>
                <Image src={checkmarkIcon} alt="Checkmark icon" /> No in-person
                appointments
              </li>
              <li>
                <Image src={checkmarkIcon} alt="Checkmark icon" /> 100% Online
              </li>
            </ul>
            <div className={styles.content}>
              <div className={styles.start}>
                <h2>Start Here</h2>
                <Image src={arrowSrc} alt="Arrow" />
              </div>
              <p>
                <span>Step 1:</span> Which E.D. medication do you prefer?
              </p>
              <div className={styles.orders}>
                <div className={styles.order}>
                  <Image
                    src={sildenafilOrderSrc}
                    alt="Sildenafil Citrate"
                    fill
                  />
                </div>
                <div className={styles.order}>
                  <Image src={tadalafilOrderSrc} alt="Tadalafil Citrate" fill />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className={styles.desktopCover}>
        <Image src={coverSrcDesktop} alt="Couple in bed" fill />
      </div>
    </div>
  );
};

export default LandingSection;
