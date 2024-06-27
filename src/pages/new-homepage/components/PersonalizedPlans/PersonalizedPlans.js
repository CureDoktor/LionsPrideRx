import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./styles.module.scss";
import { useRouter } from "next/navigation";
import plan1Src from "@public/img/home/plan-1.png";
import plan2Src from "@public/img/home/plan-2.png";
import plan3Src from "@public/img/home/plan-3.png";
import plan4Src from "@public/img/home/plan-4.png";
import plan5Src from "@public/img/home/plan-5.png";

const PersonalizedPlans = () => {
  const router = useRouter();
  const slides = [
    {
      id: 1,
      preHeading: "Erectile dysfunction",
      heading: (
        <>
          Trouble
          <br /> getting hard?
        </>
      ),
      src: plan1Src,
    },
    {
      id: 2,
      preHeading: "Custom Medication",
      heading: (
        <>
          Need more powerful
          <br /> customized treatment?
        </>
      ),
      src: plan2Src,
    },
    {
      id: 3,
      preHeading: "Men's Hair Loss",
      heading: (
        <>
          Losing or
          <br /> thinning hair?
        </>
      ),
      src: plan3Src,
    },
    {
      id: 4,
      preHeading: "Testosterone",
      heading: (
        <>
          Looking to raise your
          <br /> testosterone levels?
        </>
      ),
      src: plan4Src,
    },
    {
      id: 5,
      preHeading: "Weight Loss",
      heading: (
        <>
          Looking to lose
          <br /> some weight?
        </>
      ),
      src: plan5Src,
    },
  ];
  return (
    <>
      <Container className={styles.container}>
        <Row>
          <Col>
            <h1 className={styles.title}>
              Personalized treatment plans from{" "}
              <span>board-certified physicians</span>
            </h1>
          </Col>
        </Row>
      </Container>
      <Swiper
        className={styles.carousel}
        slidesPerView="auto"
        spaceBetween={17}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className={styles.slide}>
            <div className={styles.image}>
              <Image src={slide.src} alt="" fill />
            </div>
            <div className={styles.slideContent}>
              <span className={styles.preHeading}>{slide.preHeading}</span>
              <div className={styles.bottom}>
                <p>{slide.heading}</p>
                <button
                  onClick={() => {
                    router.push("/transition-page");
                  }}
                >
                  Get Started
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default PersonalizedPlans;
