import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";

const Summary = () => {
  return (
    <div className={styles.summary}>
      <h1>Order Summary</h1>
      <div className={styles.content}>
        {/* <Image /> */}
        <div className={styles.list}>
          <h4>
            12 pills/ monthly
            <br />
            <span className={styles.thin}>(cancel or pause anytime)</span>
          </h4>
          <hr />
          <h4>$5.75/ per dose (pill)</h4>
          <hr />
          <h4>
            VIP 25% discount has been applied
            <br />
            <span className={styles.thin}>(Normally $92.00)</span>
          </h4>
          <hr />
          <button>VIP Rushed Shipping</button>
          <hr />
          <h4 className={styles.fs13}>
            Total <span className={styles.red}>$69.00</span> today
          </h4>
          <hr />
          <h4>
            Rebills Monthly for $69.00 every 30 days.
            <br />
            <span className={styles.thin}>(cancel or pause anytime)</span>
          </h4>
          <hr />
          <h4>
            Easily change dosage by simply calling us or through your online
            login <span className={styles.red}>|</span>{" "}
            <span className={styles.thin}>you will create after checkout</span>
          </h4>
          <hr />
          <h4>
            <span className={styles.fs8}>VIP Phone Number</span>
            <div>
              {/* <Image /> */}
              <span className={`${styles.fs15} ${styles.red}`}>
                1-888-534-8977
              </span>
            </div>
            <span className={`${styles.fs8} ${styles.thin}`}>
              for any assistance
            </span>
          </h4>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Summary;
