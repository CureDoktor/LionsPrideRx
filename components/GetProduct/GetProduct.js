import Image from "next/image";
import React from "react";
import styles from "./styles.module.scss";

import checkmarkIcon from "@public/img/order-page/checkmark.png";

const GetProduct = ({ title, src }) => {
  const list = [
    "FDA-approved medication",
    "100% Online Platform",
    "No video or audio calls needed",
    "2-Day Rushed Shipping - Discreet Packaging",
  ];
  return (
    <div className={styles.container}>
      <h2>{title}</h2>
      <ul>
        {list.map((el, i) => (
          <li key={i}>
            <div className={styles.icon}>
              <Image src={checkmarkIcon} alt="" fill />
            </div>
            <p>{el}</p>
          </li>
        ))}
      </ul>
      <div className={styles.image}>
        <Image src={src} alt="" fill />
      </div>
    </div>
  );
};

export default GetProduct;
