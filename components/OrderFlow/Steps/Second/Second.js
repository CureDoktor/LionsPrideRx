import Image from "next/image";
import React from "react";
import { Container } from "react-bootstrap";
import styles from "./styles.module.scss";
import arrowSrc from "@public/img/product-landing/carousel-arrow.png";
import viagraPacket from "@public/img/viagra-packet.png";
import cialisPacket from "@public/img/cialis-packet.png";

const Second = ({ setProduct, setCurrentStep }) => {
  const handleClick = (option) => {
    setProduct({
      type: option,
    });
    setCurrentStep((s) => s + 1);
  };
  return (
    <Container className={styles.container}>
      <h1>Which treatment option best fits your needs?</h1>
      <p>
        Your preference will be shared with a provider who will determine the
        best treatment for you.
      </p>
      <div className={styles.options}>
        <div className={styles.option} onClick={() => handleClick("viagra")}>
          <div className={styles.productImg}>
            <Image src={viagraPacket} alt="" fill />
          </div>
          <div className={`${styles.content} ${styles.blue}`}>
            <div className={styles.heading}>
              <h1>Viagra</h1>
              <Image
                src={arrowSrc}
                alt=""
                width={20}
                height={26}
                style={{ objectFit: "contain" }}
              />
            </div>
            <span>Sildenafil | Oral tablet</span>
          </div>
        </div>
        <div className={styles.option} onClick={() => handleClick("cialis")}>
          <div className={styles.productImg}>
            <Image src={cialisPacket} alt="" fill />
          </div>
          <div className={`${styles.content} ${styles.orange}`}>
            <div className={styles.heading}>
              <h1>Cialis</h1>
              <Image
                src={arrowSrc}
                alt=""
                width={20}
                height={26}
                style={{ objectFit: "contain" }}
              />
            </div>
            <span>Tadalafil | Oral tablet</span>
          </div>
        </div>
      </div>
      <div className={styles.disclaimer}>
        <p>Please choose for me based on my health questionnaire</p>
      </div>
    </Container>
  );
};

export default Second;
