import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/scss";
import styles from "./styles.module.scss";

import starsIcon from "@public/img/product-landing/stars.png";
import checkmarkIcon from "@public/img/order-page/checkmark-green.png";
import arrowIcon from "@public/img/product-landing/carousel-arrow.png";

const Testimonials = () => {
  const [swiper, setSwiper] = useState(null);
  const slides = [
    {
      text: "I'm a very happy user. It took a little while to understand when and how to make the medication but once I did I found it to be very effective.",
      author: "Sam G.",
    },
    {
      text: "Awesome product and great customer service",
      author: "Drew A.",
    },
    {
      text: "Works great, I was having trouble keeping on erection, this product took care of it.",
      author: "Max N.",
    },
  ];

  return (
    <div className={styles.testimonials}>
      <Container className={styles.container}>
        <Row>
          <Col>
            <h1 className={styles.title}>Sildenafil Reviews</h1>
            <Swiper
              className={styles.carousel}
              onSwiper={setSwiper}
              slidesPerView={1}
              spaceBetween={24}
              loop={true}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {slides.map((slide, i) => (
                <SwiperSlide key={i} className={styles.slide}>
                  <div className={styles.header}>
                    <div className={styles.stars}>
                      <Image src={starsIcon} alt="" fill />
                    </div>
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
            <div className={styles.navigation}>
              <Image
                onClick={() => swiper?.slidePrev()}
                src={arrowIcon}
                alt=""
              />
              <Image
                onClick={() => swiper?.slideNext()}
                src={arrowIcon}
                alt=""
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Testimonials;
