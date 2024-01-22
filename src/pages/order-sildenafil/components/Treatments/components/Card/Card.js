import React from "react";
import styles from "./styles.module.scss";

const Card = ({ title, description, children }) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h1>{title}</h1> <p>{description}</p>
      </div>
      {children}
    </div>
  );
};

export default Card;
