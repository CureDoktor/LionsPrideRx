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
      text: "Had I known it was this easy and affordable to get generic Viagra, I would have started right away. Lion’s Pride Rx saves me a lot of money, and I don’t have to go through hoops just to get my pills!",
      author: "Will F.",
    },
    {
      text: "I used to spend thousands on ED pills every year. With Lion’s Pride Rx, I only pay a fraction of the cost, without losing any of the quality and effectiveness that I had before with branded ED pills.",
      author: "Fred G.",
    },
    {
      text: "Compared to the pills that I got from another website, Lion’s Pride Rx definitely feels a lot more potent and effective. That’s why it’s the only brand I buy my ED pills from.",
      author: "Terry B.",
    },
    {
      text: "I used to spend thousands on ED pills every year. With Lion’s Pride Rx, I only pay a fraction of the cost, without losing any of the quality and effectiveness that I had before with branded ED pills.",
      author: "Fred G.",
    },
  ];

  return (
    <div className={styles.testimonials}>
      <Container className={styles.container}>
        <Row>
          <Col>
            <h1 className={styles.title}>
              Safe, Effective, and Affordable
              <br />
              ED Treatments with <span>Lion’s Pride Rx</span>
            </h1>
            <h4 className={styles.subtitle}>
              See what our satisfied customers have to say about Lion’s Pride
              Rx!
            </h4>
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
            <p className={styles.info}>*Individual results may vary</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Testimonials;
