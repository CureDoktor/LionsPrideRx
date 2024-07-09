import Image from "next/image";
import React from "react";
import { Container } from "react-bootstrap";
import styles from "./styles.module.scss";
import cialisPacket from "@public/img/cialis-packet-with-pills.png";

const Option = ({ title, product, disclaimer }) => {
  return (
    <>
      <h1>{title}</h1>
      <div className={styles.product}>
        <div className={styles.content}>
          <span>Tablet</span>
          <h1>{product.title}</h1>
          <p>{product.subtitle}</p>
        </div>
        <div className={styles.image}>
          <Image src={product.src} alt="" fill />
        </div>
      </div>
      <p>{disclaimer}</p>
    </>
  );
};

const Third = ({ product, setCurrentStep }) => {
  const mockViagra = {
    title:
      "Based on your selection, a daily sildenafil treatment sounds like the most appropriate option for you:",
    product: {
      title: "Generic Viagra®",
      subtitle: "Sildenafil",
      src: cialisPacket,
    },
    disclaimer: (
      <>
        *Sildenafil is the active ingredient in medications like Viagra, and it
        works by inhibiting the enzyme phosphodiesterase type 5 (PDE5)
        <br />
        <br />
        *Its effects can last for up to 36 hours. This extended duration of
        action is one of the key features that differentiate sildenafil from
        some other erectile dysfunction (ED) medications
      </>
    ),
  };
  const mockCialis = {
    title:
      "Based on your selection, a daily tadalafil treatment sounds like the most appropriate option for you:",
    product: {
      title: "Generic Cialis®",
      subtitle: "Tadalafil",
      src: cialisPacket,
    },
    disclaimer: (
      <>
        *Tadalafil is the active ingredient in medications like Cialis, and it
        works by inhibiting the enzyme phosphodiesterase type 5 (PDE5)
        <br />
        <br />
        *Its effects can last for up to 36 hours. This extended duration of
        action is one of the key features that differentiate tadalafil from some
        other erectile dysfunction (ED) medications
      </>
    ),
  };

  const mockResponse = product.type === "cialis" ? mockCialis : mockViagra;
  return (
    <Container className={styles.container}>
      <Option
        title={mockResponse.title}
        product={mockResponse.product}
        disclaimer={mockResponse.disclaimer}
      />
      <button
        onClick={() => {
          if (localStorage.getItem("times") == 30) {
            setCurrentStep((s) => s + 2);
          } else {
            setCurrentStep((s) => s + 1);
          }
        }}
      >
        Continue
      </button>
    </Container>
  );
};

export default Third;
