import React from "react";
import Image from "next/image";
import chartsrc from "@public/img/home/CHART.png";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./styles.module.scss";
import Card from "./components/Card";
import FDA from "@public/img/home/Image-145.png";
import savingsImage from "@public/img/home/exponential-savings.png";
import chartMobile from "@public/img/CHARTMob.png";
const SildenafilUpgrade = () => {
  return (
    <>
      <Container className="subHeader">
        <Row>
          <Col>
            <p className={styles.oneStep}>
              You are one step away from completing your order!
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className={styles.alert}>
              Please do not close or navigate away from this page.
            </p>
          </Col>
        </Row>
      </Container>
      <hr className={styles.line}></hr>
      <Container>
        <Row>
          <Col>
            <h1 className={styles.mainHeading}>Exclusive One- Time Offer</h1>
          </Col>
          <Row>
            <p className={styles.saveBig}>
              Upgrade your treatment package and SAVE BIG!
            </p>
          </Row>
          <Row className={styles.ChartImage}>
            <Image src={chartsrc} className={styles.Chart} alt="" />
            <Image src={chartMobile} className={styles.ChartMob} alt="" />
          </Row>
          <Row>
            <h2 className={styles.h2head}>
              9 out of 10 customers upgrade their order!
            </h2>
          </Row>
          <Row className={styles.parWrap}>
            <p className={styles.upgradePar}>
              By upgrading your order, you’ll get the complete one-month supply
              of your chosen treatment plan plus your medication refills for the
              coming months. Lion’s Pride Rx’s upgraded packages offer the
              convenience of having your refills shipped in advance, allowing
              you to maintain top-level confidence and readiness all the time.
            </p>
          </Row>
        </Row>
      </Container>
      <diV className={styles.bg}>
        <h2 className={styles.upgradeHeading}>Select your Upgrade Below</h2>
        <Card></Card>
      </diV>

      <div className={styles.linkWrap}>
        <a className={styles.noUpgrade} href="">
          No, do not upgrade my order. Proceed with my monthly treatment plan
        </a>
      </div>
      <div className={styles.Wrap}>
        <div className={styles.pWrap}>
          <p className={styles.upgradeTxt}>
            Your upgrade today grants you incredible <strong>SAVINGS</strong> ,
            plus the <strong>CONVENIENCE</strong> of having{" "}
            <strong>
              FDA-approved Generic Viagra (Sildenafil Citrate oral – tablet)
            </strong>{" "}
            on hand and <strong>READY</strong> for your E.D. needs in the coming
            months!
          </p>
        </div>
        <h2 className={styles.sildenafilCitrate}>
          Upgrade now to get Sildenafil Citrate tablets at our LOWEST rates!
        </h2>
        <Container>
          <Row>
            <Col>
              <ul className={styles.listWrap}>
                <li className={styles.liItem}>
                  <Image className={styles.markApproved} src={FDA} alt="" />
                  <p className={styles.Item1}>FDA-approved E.D. medication</p>
                </li>
                <li className={styles.liItem}>
                  <Image className={styles.markApproved} src={FDA} alt="" />
                  <p className={styles.Item2}>Prime Sexual Health</p>
                </li>
                <li className={styles.liItem}>
                  <Image className={styles.markApproved} src={FDA} alt="" />
                  <p className={styles.Item3}>
                    Premium-quality E.D. medication
                  </p>
                </li>
              </ul>
              <div className={styles.marks}></div>
            </Col>
            <Row>
              <p className={styles.dontMiss}>
                Don’t miss this incredible ONE TIME offer to UPGRADE your order!
              </p>
            </Row>
          </Row>
        </Container>
        <div className={styles.savingsCont}>
          <div className={styles.imageCont}>
            <Image className={styles.savingsImage} src={savingsImage} alt="" />
          </div>

          <div>
            <h3 className={styles.bestValueHeading}>
              Get the BEST VALUE for your money and upgrade now to a BIGGER
              package!
            </h3>
            <p className={styles.bestValueTxt}>
              LionsPrideRx’s upgraded packages ensure that you are READY for
              action, anytime – anywhere!
            </p>
          </div>
        </div>
      </div>
      <div className={styles.secondCard}>
        <h2 className={styles.upgradeHeading2}>Select your Upgrade Below</h2>
        <Card></Card>
      </div>
    </>
  );
};

export default SildenafilUpgrade;
