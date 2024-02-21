import Image from "next/image";
import React from "react";
import { Container } from "react-bootstrap";
import styles from "./styles.module.scss";

import viagra4 from "@public/img/viagra-package-4.png";
import viagra8 from "@public/img/viagra-package-8.png";
import viagra12 from "@public/img/viagra-package-12.png";
import viagra16 from "@public/img/viagra-package-16.png";

import cialis4 from "@public/img/cialis-package-4.png";
import cialis8 from "@public/img/cialis-package-8.png";
import cialis12 from "@public/img/cialis-package-12.png";
import cialis16 from "@public/img/cialis-package-16.png";

const Option = ({ amount, mostPopular, src, onClick }) => {
  return (
    <div className={styles.option} onClick={onClick}>
      <div className={styles.content}>
        <p>
          Use <span>{amount}</span> times per month
        </p>
        {mostPopular && (
          <span className={styles.mostPopular}>Most popular</span>
        )}
      </div>
      <div className={styles.image}>
        <Image src={src} alt="" fill />
      </div>
    </div>
  );
};

const Fourth = ({ product, setProduct, setCurrentStep }) => {
  const viagraOptions = [
    {
      id: 0,
      amount: 4,
      mostPopular: false,
      src: viagra4,
    },
    {
      id: 1,
      amount: 8,
      mostPopular: false,
      src: viagra8,
    },
    {
      id: 2,
      amount: 12,
      mostPopular: true,
      src: viagra12,
    },
    {
      id: 3,
      amount: 16,
      mostPopular: false,
      src: viagra16,
    },
  ];
  const cialisOptions = [
    {
      id: 0,
      amount: 4,
      mostPopular: false,
      src: cialis4,
    },
    {
      id: 1,
      amount: 8,
      mostPopular: false,
      src: cialis8,
    },
    {
      id: 2,
      amount: 12,
      mostPopular: true,
      src: cialis12,
    },
    {
      id: 3,
      amount: 16,
      mostPopular: false,
      src: cialis16,
    },
  ];

  const handleOptionClick = (amount) => {
    setProduct((product) => ({
      ...product,
      amount,
    }));
    setCurrentStep((s) => s + 1);
  };

  const mockOptions = product.type === "cialis" ? cialisOptions : viagraOptions;
  return (
    <Container className={styles.container}>
      <h1>How often do you think you&apos;ll use your medication?</h1>
      <div className={styles.options}>
        {mockOptions?.map((option) => (
          <Option
            key={option.id}
            amount={option.amount}
            mostPopular={option.mostPopular}
            src={option.src}
            onClick={() => handleOptionClick(option.amount)}
          />
        ))}
      </div>
    </Container>
  );
};

export default Fourth;
