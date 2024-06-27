import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./styles.module.scss";
import { useRouter } from "next/navigation";
import searchIcon from "../../../../../public/assets/search-icon.png";
import coverSrcMobile from "../../../../../public/img/home/treatments-mobile.png";
import coverSrcDesktop from "../../../../../public/img/home/treatments-desktop.png";
import treatment1 from "../../../../../public/img/home/treatment-1.png";
import treatment2 from "../../../../../public/img/home/treatment-2.png";
import treatment3 from "../../../../../public/img/home/treatment-3.png";
import treatment4 from "../../../../../public/img/home/treatment-4.png";

const Treatments = () => {
  const router = useRouter();
  const cards = [
    {
      id: 1,
      image: treatment1,
      title: "Erectile Dysfunction",
      description:
        "Lion’s Pride Rx makes erectile dysfunction treatments simple, convenient, affordable. Get the right treatment for erectile dysfunction with US-licensed physicians and FDA-approved medication at the comfort and privacy of your home.",
    },
    {
      id: 2,
      image: treatment2,
      title: "Men’s Hair Loss",
      description:
        "Lion’s Pride Rx offers premium US-made treatments for male-pattern hair loss (androgenic alopecia) completely online.",
    },
    {
      id: 3,
      image: treatment3,
      title: "Testosterone",
      description:
        "Lion’s Pride Rx offers premium, nonsteroidal US-made treatments that help men to boost testosterone levels, and maintain optimal hormone balance for improved mood, libido, and muscle performance.",
    },
    {
      id: 4,
      image: treatment4,
      title: "Weight Loss",
      description:
        "Lion’s Pride Rx offers advanced weight loss compound treatments to help men and women achieve healthy weight goals.",
    },
  ];

  return (
    <div className={styles.treatments}>
      <div className={styles.cover}>
        <Image
          className={styles.mobile}
          src={coverSrcMobile}
          alt="Treatments cover"
          fill
        />
        <Image
          className={styles.desktop}
          src={coverSrcDesktop}
          alt="Treatments cover"
          fill
        />
      </div>
      <Container className={styles.container}>
        <Row>
          <Col>
            <div className={styles.content}>
              <h1>
                <span>LionsPrideRx</span> makes men’s health simpler, more
                convenient, and affordable.
              </h1>
              <button
                onClick={() => {
                  router.push("/transition-page");
                }}
                className={styles.cta}
              >
                <Image src={searchIcon} alt="Search icon" />
                Explore treatments
              </button>
              <div className={styles.cards}>
                {cards.map((card) => (
                  <div key={card.id} className={styles.card}>
                    <div className={styles.image}>
                      <Image src={card.image} alt="Treatment" fill />
                    </div>
                    <div className={styles.cardContent}>
                      <h4>{card.title}</h4>
                      <p>{card.description}</p>
                      <span />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Treatments;
