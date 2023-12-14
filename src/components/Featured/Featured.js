import React from "react";
import styles from "./styles.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";

const Featured = ({
  variant = "normal",
  color = "white",
  products,
  src,
  alt,
  title,
  description,
  endText,
}) => {
  return (
    <section
      className={`${styles.section} ${color === "gray" ? styles.gray : ""}`}
    >
      <Container className={styles.container}>
        <Row>
          <Col>
            <div
              className={`${styles.hero} ${color === "gray" ? styles.gray : ""}
              ${variant === "inverted" ? styles.inverted : ""}`}
            >
              <div className={styles.image}>
                <Image
                  src={src}
                  alt={alt}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className={styles.content}>
                <div>
                  <h2>{title}</h2>
                  <p>{description}</p>
                </div>
                <hr />
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div>
              {products?.map((product, i) => (
                <div
                  className={`${styles.product} ${
                    color === "gray" ? styles.gray : ""
                  }
                ${variant === "inverted" ? styles.inverted : ""}`}
                  key={i}
                >
                  <div className={styles.productContainer}>
                    <div className={styles.image}>
                      <div className={styles.wrapper}>
                        <Image src={product.src} alt={product.alt} fill />
                      </div>
                    </div>
                    <div className={styles.content}>
                      <h3>{product.name}</h3>
                      <h5>{product.subheader}</h5>
                      <div className={styles.description}>
                        <svg
                          width="15"
                          height="25"
                          viewBox="0 0 58 101"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5 5.5L50 50.5L5 95.5"
                            stroke="#EF2929"
                            stroke-width="10"
                            stroke-linecap="round"
                          />
                        </svg>
                        <p>{product.description}</p>
                      </div>
                      <Link href={product.link} className={styles.cta}>
                        Get Started
                      </Link>
                    </div>
                  </div>
                  <hr />
                </div>
              ))}
              {endText && <h6 className={styles.endText}>{endText}</h6>}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Featured;
