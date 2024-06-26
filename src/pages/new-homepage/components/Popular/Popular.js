import React from "react";

import styles from "./styles.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import slide1Src from "../../../../../public/img/viagra-bottle.png";
import slide2Src from "../../../../../public/img/cialis-bottle.png";
import slide3Src from "../../../../../public/img/finasteride-bottle.png";
import slide4Src from "../../../../../public/img/enclomiphene-bottle.png";
import slide5Src from "../../../../../public/img/bottle-shred-protocol-2.png";
import starsSrc from "../../../../../public/img/home/stars.png";
import checkmarkSrc from "../../../../../public/assets/checkmark-white.png";

const Popular = () => {
  const slides = [
    {
      id: 1,
      name: "Erectile Dysfunction",
      subheading: "(Sildenafil Citrate)",
      src: slide1Src,
    },
    {
      id: 2,
      name: "Custom Medication",
      subheading: "(Tadalafil)",
      src: slide2Src,
    },
    {
      id: 3,
      name: "Men's Hair Loss",
      subheading: "(Generic Propecia)",
      src: slide3Src,
    },
    {
      id: 4,
      name: "Testosterone",
      subheading: "(Generic Androxal)",
      src: slide4Src,
    },
    { id: 5, name: "Weight Loss", subheading: "", src: slide5Src },
  ];
  const checks = [
    "Rx-only tablet",
    "FREE online consultation",
    "Discreet shipping",
    "Monthly refills",
  ];

  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1 className={styles.title}>Popular</h1>
          </Col>
        </Row>
      </Container>
      <Swiper
        className={styles.carousel}
        slidesPerView="auto"
        spaceBetween={20}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className={styles.slide}>
            <div>
              <h4 className={styles.heading}>{slide.name}</h4>
              {slide.subheading && (
                <p className={styles.subheading}>{slide.subheading}</p>
              )}
              <Image src={starsSrc} alt="Stars" />
            </div>
            <div className={styles.image}>
              <Image src={slide.src} alt="" fill />
            </div>
            <div>
              <p className={styles.info}>Important safety info</p>
              <div className={styles.ctas}>
                <button>Get started</button>
                <button>Learn more</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.checks}>
        <Container>
          <Row style={{ justifyContent: "center" }}>
            {checks.map((check, i) => (
              <Col xs={i % 2 === 0 ? 5 : 7} lg="auto" key={`${check}-${i}`}>
                <span>
                  <div className={styles.checkIcon}>
                    <Image src={checkmarkSrc} alt="Checkmark icon" fill />
                  </div>
                  {check}
                </span>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Popular;
