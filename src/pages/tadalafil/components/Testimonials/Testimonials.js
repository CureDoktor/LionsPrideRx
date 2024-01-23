import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import "swiper/scss";
import "swiper/scss/pagination";
import styles from "./styles.module.scss";

import starsIcon from "@public/img/home/stars.png";
import checkmarkIcon from "@public/img/order-page/checkmark-green.png";

const Testimonials = () => {
  const slides = [
    {
      title: "Works as expected!",
      text: "These pills are exactly like the branded pills I had before. Same strength, even lasts as long!",
      author: "Frank J.",
    },
    {
      title: "Affordable and effective",
      text: "I only spend a fraction on Lion’s Pride Rx compared to the pills I got before!",
      author: "Gary F.",
    },
    {
      title: "Convenient and accessible",
      text: "I ordered my pills from home, no need to visit the doc or the pharmacy. That alone saves me a lot every month!",
      author: "Bill T.",
    },
    {
      title: "Affordable and effective",
      text: "I only spend a fraction on Lion’s Pride Rx compared to the pills I got before!",
      author: "Gary F.",
    },
  ];

  return (
    <div className={styles.testimonials}>
      <Container className={styles.container}>
        <Row>
          <Col>
            <h1 className={styles.title}>
              Real Pride.
              <br /> <span>Real Confidence.</span>
            </h1>
            <Swiper
              className={styles.carousel}
              slidesPerView={1}
              spaceBetween={17}
              pagination={true}
              modules={[Pagination]}
              loop={true}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3, spaceBetween: 50 },
              }}
            >
              {slides.map((slide, i) => (
                <SwiperSlide key={i} className={styles.slide}>
                  <div className={styles.header}>
                    <div className={styles.stars}>
                      <Image src={starsIcon} alt="" fill />
                    </div>
                    <h4>{slide.title}</h4>
                  </div>
                  <div className={styles.slideContent}>
                    <p className={styles.text}>{slide.text}</p>
                    <div className={styles.bottom}>
                      <p className={styles.author}>{slide.author}</p>
                      <div className={styles.verified}>
                        <div className={styles.image}>
                          <Image src={checkmarkIcon} alt="" fill />
                        </div>
                        <p>Verified Customer</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Testimonials;
