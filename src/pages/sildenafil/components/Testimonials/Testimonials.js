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
      title: "Smartest decision ever.",
      text: "I’ve spent thousands on ED pills that I should have just purchased online with Lion’s Pride Rx.",
      author: "Will F.",
    },
    {
      title: "Just like my blue pills",
      text: "I can’t see the difference between my Lion’s Pride Rx pills and the blue pills I used to take – aside from the incredible savings, of course!",
      author: "Fred G.",
    },
    {
      title: "100% online",
      text: "I used to spend hundreds out of pocket before I get to buy my ED pills. With Lion’s Pride Rx, it only takes a few minutes, and I only pay for my pills!",
      author: "Terry B.",
    },
    {
      title: "Just like my blue pills",
      text: "I can’t see the difference between my Lion’s Pride Rx pills and the blue pills I used to take – aside from the incredible savings, of course!",
      author: "Fred G.",
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
