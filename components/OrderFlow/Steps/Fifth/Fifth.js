import Image from "next/image";
import React from "react";
import { Container } from "react-bootstrap";
import styles from "./styles.module.scss";
import arrowSrc from "@public/img/product-landing/carousel-arrow.png";

const Fifth = ({ setCurrentStep }) => {
  return (
    <Container className={styles.container}>
      <h1>
        Shipping Info &<br />
        Address
      </h1>
      <p>
        Where would you like to have your medication shipped, if prescribed? Use
        your legal name.
      </p>
      <div className={styles.form}>
        <div className={styles.row}>
          <input className={styles.half} type="text" placeholder="First name" />
          <input className={styles.half} type="text" placeholder="Last name" />
        </div>
        <input type="text" placeholder="Address" />
        <input type="text" placeholder="City" />
        <div className={styles.row}>
          <select name="state" className={styles.half}>
            <option selected disabled hidden>
              State
            </option>
            <option value="state1">State 1</option>
            <option value="state2">State 2</option>
            <option value="state3">State 3</option>
          </select>
          <input className={styles.half} type="text" placeholder="Zip" />
        </div>
        <select name="country">
          <option selected disabled hidden>
            Country
          </option>
          <option value="country1">Country 1</option>
          <option value="country2">Country 2</option>
          <option value="country3">Country 3</option>
        </select>
        <input type="tel" placeholder="Phone" />
        <label>
          <input type="checkbox" /> Text me updates about LionsPrideRx Products
          & services!
        </label>
      </div>
      <button onClick={() => setCurrentStep((s) => s + 1)}>
        Save and continue
      </button>
    </Container>
  );
};

export default Fifth;
