import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import checkmark from "@public/img/Image-139.png";
import checkmarkSelected from "@public/img/home/checkmark.png";
import styles from "./styles.module.scss";
const Card = () => {
  const [selected, setSelected] = useState(null);
  const cards = [
    {
      id: 1,
      title: "3 Month Package",
      doses: "12 doses",
      name: "Sildenafil",
      savings: 10,
      discount: 9.6,
      price: 86.4,
    },
    {
      id: 2,
      title: "6 Month Package",
      doses: "24 doses",
      name: "Sildenafil",
      savings: 20,
      discount: 48,
      price: 192,
    },
    {
      id: 3,
      title: "12 Month Package",
      doses: "48 doses",
      name: "Sildenafil",
      savings: 30,
      discount: 158.4,
      price: 369.6,
    },
  ];

  return (
    <div>
      <Container className={styles.cont}>
        <Row>
          <Col className={styles.Card}>
            {cards.map((c) => (
              <div
                key={c.id}
                className={`${styles.singleCard} ${
                  selected === c.id ? styles.selected : ""
                }`}
              >
                <h3 className={`${styles.cardHeading} `}>{c.title}</h3>
                <ul className={styles.benefits}>
                  <li className={`${styles.doses}`}>
                    <Image
                      className={`${styles.checkmark}`}
                      src={selected === c.id ? checkmarkSelected : checkmark}
                      alt="Checked"
                    ></Image>
                    <p className={`${styles.dosesText}`}>
                      <strong>{c.doses}</strong> of 25.0mg {c.name} (oral -
                      tablet)
                    </p>
                  </li>
                  <hr className={styles.spacing}></hr>
                  <li className={`${styles.savings}`}>
                    <Image
                      className={`${styles.checkmark}`}
                      src={selected === c.id ? checkmarkSelected : checkmark}
                      alt="Checked"
                    ></Image>
                    <div>
                      <p className={`${styles.savePercent}`}>
                        {c.savings}% Savings
                      </p>
                      <p className={styles.discount}>
                        <strong>(${c.discount} discount)</strong>
                      </p>
                    </div>
                  </li>
                  <hr className={styles.spacing}></hr>
                  <li className={`${styles.price} `}>
                    <Image
                      className={`${styles.checkmark} `}
                      src={selected === c.id ? checkmarkSelected : checkmark}
                      alt="Checked"
                    ></Image>
                    <div>
                      <p className={`${styles.upgradePrice} `}>
                        Only pay additional
                      </p>
                      <strong>${c.price.toFixed(2)}</strong>
                    </div>
                  </li>
                </ul>
                <div className={`${styles.buttonWrap} `}>
                  <button
                    onClick={() => setSelected(c.id)}
                    className={`${styles.selectBtn} `}
                  >
                    {selected === c.id ? "Selected" : "Select"}
                  </button>
                </div>
              </div>
            ))}
          </Col>
        </Row>
        <div className={styles.pckgWrap}>
          <button className={styles.upgradePckg}>
            Choose your <span className={styles.upper}>upgrade</span> package
          </button>
        </div>
      </Container>
    </div>
  );
};
export default Card;
