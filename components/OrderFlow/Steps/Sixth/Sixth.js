import Image from "next/image";
import React from "react";
import { Container } from "react-bootstrap";
import styles from "./styles.module.scss";
import Radio from "./components/Radio";

import discountIcon from "@public/img/discount-icon.png";
import lockIcon from "@public/img/lock-icon-v2.png";
import cardIcon from "@public/img/card-icon.png";

const Card = ({ product, setCurrentStep }) => {
  const nameMap = {
    cialis: "Cialis",
    viagra: "Viagra",
  };
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h1>
          Generic {nameMap[product.type]} 100mg {product.amount} doses
        </h1>
      </div>
      <div className={styles.form}>
        <h2>Choose shipping frequency</h2>
        <div className={styles.frequency}>
          <Radio name="frequency" value="1" label="Monthly" price="117" />
          <Radio name="frequency" value="3" label="3 months" price="107/mo" />
          <Radio name="frequency" value="6" label="6 months" price="90/mo" />
          <Radio name="frequency" value="12" label="12 months" price="82/mo" />
        </div>
        <div className={styles.discount}>
          <div className={styles.row}>
            <span>3 months supply</span>
            <div className={styles.row}>
              <span className={styles.dashed}>$360</span>
              <span>$321</span>
            </div>
          </div>
          <div className={styles.row}>
            <span>Doctor fee waived</span>
            <div className={styles.row}>
              <Image src={discountIcon} alt="" width={20} height={16} />
              <span className={`${styles.red}`}>-$30</span>
            </div>
          </div>
        </div>
        <div className={styles.total}>
          <div className={styles.row}>
            <span style={{ fontWeight: 800 }}>Total</span>
            <div className={styles.row}>
              <span className={styles.dashed}>$315</span>
              <span>$321</span>
            </div>
          </div>
          <p>You&apos;re saving 8%</p>
        </div>
        <div className={styles.refund}>
          <div className={styles.row}>
            <span>Full refund if not prescribed</span>
            <span>$0</span>
          </div>
          <p>Details</p>
        </div>
        <div className={styles.fields}>
          <div className={styles.credit}>
            <div>
              <Image src={cardIcon} alt="" width={29} height={19} />
              <span>Credit or Debit Card</span>
            </div>
            <Image src={lockIcon} alt="" width={18} height={22} />
          </div>
          <input type="text" placeholder="Cardholder Name" />
          <input type="text" placeholder="Card Number" />
          <div className={styles.row}>
            <input
              className={styles.half}
              type="text"
              placeholder="Expiration Date"
            />
            <input className={styles.half} type="text" placeholder="CVV" />
          </div>
        </div>
        <button onClick={() => setCurrentStep((s) => s + 1)}>
          Submit Order
        </button>
      </div>
    </div>
  );
};

const Sixth = ({ product, setCurrentStep }) => {
  return (
    <Container className={styles.container}>
      <Card product={product} setCurrentStep={setCurrentStep} />
      <p className={styles.disclaimer}>
        By checking out, you agree that you will be charged $x.xx now for your
        first shipment, and $x.xx automatically every X months thereafter until
        you cancel through your account or call to cancel. You may cancel your
        subscription any time at least 48 hours before your next scheduled
        shipment. Your first shipment will ship after your provider reviews and
        writes a prescription, if approved.
      </p>
    </Container>
  );
};

export default Sixth;
