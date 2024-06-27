import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./styles.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRouter } from "next/navigation";

import arrowRight from "../../../../../public/assets/arrow-right.png";
import searchIcon from "../../../../../public/assets/search-icon.png";
import slide1Src from "../../../../../public/img/home/slide-1.png";
import slide2Src from "../../../../../public/img/home/slide-2.png";
import slide3Src from "../../../../../public/img/home/slide-3.png";
import slide4Src from "../../../../../public/img/home/slide-4.png";
import slide5Src from "../../../../../public/img/home/slide-5.png";

import "swiper/css";
import Image from "next/image";

const LandingSection = () => {
  const router = useRouter();
  const slides = [
    { id: 1, name: "Erectile Dysfunction", src: slide1Src },
    { id: 2, name: "Custom Medication", src: slide2Src },
    { id: 3, name: "Men's Hair Loss", src: slide3Src },
    { id: 4, name: "Testosterone", src: slide4Src },
    { id: 5, name: "Weight Loss", src: slide5Src },
  ];
  return (
    <Container className={styles.container}>
      <Row>
        <Col>
          <h1 className={styles.title}>
            Lion’s Pride Rx is the #1 Online Portal for Men’s Prescription
            Medication Needs
          </h1>
          <p className={styles.subtitle}>Simple. Affordable. Secure.</p>
          <button
            onClick={() => {
              router.push("/transition-page");
            }}
            className={styles.cta}
          >
            <Image src={searchIcon} alt="Search icon" /> Find my treatment
          </button>
          <div className={styles.carouselWrapper}>
            <Swiper
              className={styles.carousel}
              slidesPerView="auto"
              spaceBetween={17}
              breakpoints={{ 1440: { slidesPerView: 5 } }}
            >
              {slides.map((slide) => (
                <SwiperSlide
                  key={slide.id}
                  className={styles.slide}
                  onClick={() => {
                    router.push("/transition-page");
                  }}
                >
                  <div className={styles.image}>
                    <Image src={slide.src} alt="" fill />
                  </div>
                  <div className={styles.slideContent}>
                    <p>{slide.name}</p>
                    <button>
                      <Image src={arrowRight} alt="arrow" />
                    </button>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LandingSection;
