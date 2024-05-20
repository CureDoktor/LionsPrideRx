import React, { useState, useEffect, useContext } from "react";
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';
import pageStyles from "../../src/pages/semaglutide/semaglutide.module.scss";
import {Container, Row, Col} from "react-bootstrap";

const RangeSlider = () => {

    const [sliderValue, setSliderValue] = useState(100);
    const [sliderValueCalculated, setsliderValueCalculated] = useState(16);

    const handleChange = (value) => {
        setSliderValue(value);
        setsliderValueCalculated(Math.ceil(value / 6.66));
    };

  return (
      <>
          <div className={`${pageStyles['calc-section']} w-100 d-block`}>
              <Container className={pageStyles['container']}>
                  <div className={`${pageStyles['calc-section-top']} w-100 d-block`}>
                      <Row className={`${pageStyles['row']} row row-flex row-flex-wrap gx-0`}>
                          <Col lg={8}>
                              <img src="/img/semaglutide/pen-with-base.jpg" alt=""
                                   className={`w-100 d-none d-md-block`}/>
                              <img src="/img/pen-with-base-mobile.jpg" alt=""
                                   className={`w-100 d-block d-md-none`}/>
                          </Col>
                          <Col lg={4}>
                              <div className={`${pageStyles['calc-section-top-right']} w-100 d-block`}>
                                  <div
                                      className={`${pageStyles['percent-box']} w-100 d-block text-center`}>20<sup>%</sup>
                                  </div>
                                  <div className={`${pageStyles['calc-section-top-right-bottom']} w-100 d-block`}>On average, people on Semaglutide lose 15-20% of their weight in a year*.</div>
                              </div>
                          </Col>
                      </Row>
                  </div>
                  <div className={`${pageStyles['calc-section-bottom']} w-100 d-block`}>
                      <Row className={`${pageStyles['row']}`}>
                          <Col lg={6}>
                              <div className={`${pageStyles['calc-section-bottom-left']} w-100 d-block`}>
                                  <div className={`${pageStyles['title-row-1']} w-100 d-block fw-medium`}>Select your<br/>
                                      Current weight
                                      <div className={`fw-bold ${pageStyles['bold-text']}`}><output>{ sliderValue }</output> <span>lbs</span></div>
                                  </div>
                                  <div className={`${pageStyles['range-slider-row']} w-100 d-block`}>
                                      <Slider
                                          value={sliderValue}
                                          orientation="horizontal"
                                          onChange={handleChange}
                                          min={100}
                                          max={300}
                                          step={1}
                                      />
                                  </div>
                                  <div className={`${pageStyles['title-row-1']} w-100 d-block fw-medium`}>Weight you<br/>
                                      could lose (lbs):
                                      <div className={`fw-bold ${pageStyles['bold-text']}`}>{ sliderValueCalculated } lbs</div>
                                  </div>
                              </div>
                          </Col>
                          <Col lg={6}>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                  exercitation ullamco laboris nisi ut aliquip ex ea tte6nh commodo consequat. Duis aute
                                  irure dolor in eteyyyou ;ioy pip reprehenderit in voluptate velit esse cillum dolore
                                  euoip fugiat nulla pariatur. teteye pivoluptate velit esse cillum dolore eu fugiat
                                  nulla jtu ry pariatur.</p>
                          </Col>
                      </Row>
                  </div>
              </Container>
          </div>
      </>
  );
};

export default RangeSlider;
