'use client';
import React from 'react';
import ReactOwlCarousel from "react-owl-carousel";
import styles from "../../src/pages/enclomiphene/enclomiphene.module.scss";
import { Container } from "react-bootstrap";

export default function TestimonialCarousel() {
    return (
        <>
            <div className={`${styles['testimonial-section']} w-100 d-block`}>
                <Container className={styles['container']}>
                    <h3>Don’t take our word for it - Read what real men have to say about <span>Enclomiphene</span></h3>
                    <div className={`${styles['data-row']} w-100 d-block horizontal-center`}>
                        <ReactOwlCarousel
                            nav={false}
                            className={`${styles['testimonial-slider']}`}
                            autoplayTimeout={7000}
                            autoplay={true}
                            dots={true}
                            margin={0}
                            items={1}
                            loop={true}
                            autoplaySpeed={3000}
                            navSpeed={600}
                        >
                            <div className={`${styles['testimonial-box']} w-100 d-block`}>
                                <div className={`${styles['quote-icon']} d-block`}></div>
                                <div
                                    className={`${styles['testimonial-title-row']} w-100 d-block fw-semibold`}> Incredible
                                    results <span className={`${styles['rating']}`}></span></div>
                                <p>This is my first attempt at increasing my testosterone levels, and I can honestly say
                                    that I’ve made the right choice. Not only were the products incredibly effective,
                                    but the entire experience with UltraPharmRx gave me confidence that I was on the
                                    right track.</p>
                                <div className={`${styles['client-name']} w-100 d-block fw-semibold`}>James Davies</div>
                                <div className={`${styles['verified-badge']} verified-badge w-100 d-block`}>Verified
                                    Buyer
                                </div>
                            </div>
                            <div className={`${styles['testimonial-box']} w-100 d-block`}>
                                <div className={`${styles['quote-icon']} d-block`}></div>
                                <div
                                    className={`${styles['testimonial-title-row']} w-100 d-block fw-semibold`}> Incredible
                                    results <span className={`${styles['rating']}`}></span></div>
                                <p>This is my first attempt at increasing my testosterone levels, and I can honestly say
                                    that I’ve made the right choice. Not only were the products incredibly effective,
                                    but the entire experience with UltraPharmRx gave me confidence that I was on the
                                    right track.</p>
                                <div className={`${styles['client-name']} w-100 d-block fw-semibold`}>James Davies</div>
                                <div className={`${styles['verified-badge']} verified-badge w-100 d-block`}>Verified
                                    Buyer
                                </div>
                            </div>
                            <div className={`${styles['testimonial-box']} w-100 d-block`}>
                                <div className={`${styles['quote-icon']} d-block`}></div>
                                <div
                                    className={`${styles['testimonial-title-row']} w-100 d-block fw-semibold`}> Incredible
                                    results <span className={`${styles['rating']}`}></span></div>
                                <p>This is my first attempt at increasing my testosterone levels, and I can honestly say
                                    that I’ve made the right choice. Not only were the products incredibly effective,
                                    but the entire experience with UltraPharmRx gave me confidence that I was on the
                                    right track.</p>
                                <div className={`${styles['client-name']} w-100 d-block fw-semibold`}>James Davies</div>
                                <div className={`${styles['verified-badge']} verified-badge w-100 d-block`}>Verified
                                    Buyer
                                </div>
                            </div>
                            <div className={`${styles['testimonial-box']} w-100 d-block`}>
                                <div className={`${styles['quote-icon']} d-block`}></div>
                                <div
                                    className={`${styles['testimonial-title-row']} w-100 d-block fw-semibold`}> Incredible
                                    results <span className={`${styles['rating']}`}></span></div>
                                <p>This is my first attempt at increasing my testosterone levels, and I can honestly say
                                    that I’ve made the right choice. Not only were the products incredibly effective,
                                    but the entire experience with UltraPharmRx gave me confidence that I was on the
                                    right track.</p>
                                <div className={`${styles['client-name']} w-100 d-block fw-semibold`}>James Davies</div>
                                <div className={`${styles['verified-badge']} verified-badge w-100 d-block`}>Verified
                                    Buyer
                                </div>
                            </div>
                        </ReactOwlCarousel>
                    </div>
                </Container>
            </div>
        </>
    )
}