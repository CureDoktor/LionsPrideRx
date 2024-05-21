import React from "react";
import Link from "next/link";
import styles from './semaglutide.module.scss';
import {Container, Row, Col, Accordion} from "react-bootstrap";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import RangeSlider from "@components/RangeSlider/index";

export default function Semaglutide(props) {
  return (
      <>
          <div className={`${styles['banner']} w-100 d-block`}>
              <Container className={styles['container']}>
                  <div className={`d-flex w-100 flex-wrap`}>
                      <div className={`${styles['banner-left']} w-100 d-block`}>
                          <h1>Get prescription <span>weight loss</span> medication online</h1>
                          <div className={`${styles['banner-btn']} w-100 d-block`}><a href="#" className={`w-100 d-block text-center`}>Get Started</a></div>
                          <div className={`${styles['banner-img']} w-100 d-none d-md-block`}><img src="/img/semaglutide/banenr-img.jpg" alt="" className={`img-fluid`} /></div>
                      </div>
                      <div className={`${styles['banner-right']} w-100 d-block`}>
                          <div className={`${styles['banner-bullets']} w-100 d-block`}>
                              <ul className={`w-100 d-flex flex-wrap`}>
                                  <li><i className={`${styles['icon-1']}`}></i>See if you qualify for Semaglutide.<br/>See safety info below</li>
                                  <li><i className={`${styles['icon-2']}`}></i>Lose 20% body weight on<br/>average with Semaglutide*</li>
                                  <li><i className={`${styles['icon-3']}`}></i>Access our insurance<br/>concierge to help with cost
                                  </li>
                              </ul>
                          </div>
                          <div className={`${styles['pen-img']} w-100 d-block`}><img src="/img/semaglutide/pen.png" alt="" className={`img-fluid`}/></div>
                      </div>
                      <div className={`${styles['mobile-img']} d-block d-md-none`}><img src="/img/semaglutide/banenr-img.jpg" alt="" className={`w-100`} /></div>
                  </div>
              </Container>
          </div>

          <div className={`w-100 d-block`}>
              <div className={`${styles['middle-top']} w-100 d-block`}>
                  <Container className={styles['container']}>
                      <div className={`${styles['box-row']} w-100 d-block`}>
                          <Row className={`row-flex row-flex-wrap`}>
                              <Col md={4}>
                                  <div className={`${styles['middle-top-box']} w-100 d-block`}>
                                      <div className={`${styles['box-icon']}`}><img src="/img/semaglutide/icon-1.png"
                                                                                    alt=""
                                                                                    className={`img-fluid d-block m-auto`}/>
                                      </div>
                                      <div
                                          className={`${styles['caption']} w-100 d-block fw-medium text-center`}>On-demand
                                          provider<br/>coaching and support
                                      </div>
                                  </div>
                              </Col>
                              <Col md={4}>
                                  <div className={`${styles['middle-top-box']} w-100 d-block`}>
                                      <div className={`${styles['box-icon']}`}><img src="/img/semaglutide/icon-2.png"
                                                                                    alt=""
                                                                                    className={`img-fluid d-block m-auto`}/>
                                      </div>
                                      <div
                                          className={`${styles['caption']} w-100 d-block fw-medium text-center`}>Improves
                                          the way your body<br/>responds to sugars
                                      </div>
                                  </div>
                              </Col>
                              <Col md={4}>
                                  <div className={`${styles['middle-top-box']} w-100 d-block`}>
                                      <div className={`${styles['box-icon']}`}><img src="/img/semaglutide/icon-3.png"
                                                                                    alt=""
                                                                                    className={`img-fluid d-block m-auto`}/>
                                      </div>
                                      <div className={`${styles['caption']} w-100 d-block fw-medium text-center`}>Helps
                                          you feel full<br/>faster, longer
                                      </div>
                                  </div>
                              </Col>
                          </Row>
                      </div>
                      <div className={`${styles['safety-row-wrp']} w-100 d-block`}>
                          <div className={`${styles['safety-row']} w-100 d-block horizontal-center`}>
                              <div className={`${styles['icon-box']}`}><img src="/img/semaglutide/icon-safety.png"
                                                                            alt=""
                                                                            className={`img-fluid d-block m-auto vertical-center`}/>
                              </div>
                              <strong>Safety info:</strong> GLP-1 medications may have serious side effects, including
                              possible thyroid tumors. Do not use if you or your family have a history of a type of
                              thyroid cancer called MTC or MEN 2. See more serious warnings &amp; safety info here.
                          </div>
                      </div>
                  </Container>
              </div>

              <RangeSlider />

              <div className={`${styles['revolutionary-section']} revolutionary-section w-100 d-block`}>
                  <Tabs defaultActiveKey="meds" className={`justify-content-center`}>
                      <Tab eventKey="meds" title="Meds">
                          <div className={`${styles['tab-data']} ${styles['tab-1']}`}>
                              <Container className={styles['container']}>
                                  <div className={`${styles['semaglutide-box']} w-100 d-block`}>
                                      <div className={`${styles['pen-img']} w-100 d-block`}><img
                                          src="/img/semaglutide/pen-group.png" alt=""/></div>
                                      <div className={`${styles['semaglutide-box-middle']} w-100 d-block`}>
                                          <h3>Semaglutide</h3>
                                          <div className={`${styles['btn-row']} btn-row w-100 d-block`}>
                                              <a href="#" className={`black-btn fw-semibold text-center`}>Get
                                                  Started</a>
                                              <a href="#" className={`red-btn fw-semibold text-center`}>Learn More</a>
                                          </div>
                                          <div
                                              className={`semaglutide-backend-link ${styles['semaglutide-backend-link']} w-100 d-block fw-medium`}>
                                              <a href="#">Important safety information</a></div>
                                      </div>
                                      <div className={`${styles['semaglutide-box-bottom']} w-100 d-block`}>
                                          <div className={`${styles['title']} w-100 d-block fw-semibold`}>Revolutionary
                                              weight<br/>loss medications
                                          </div>
                                          <p>Lorem ipsum dolor sit amet, consectetur ouyt adipiscing elit, sed do
                                              eiusmod tempor nisi y incididunt ut labore et dolore magna aliqua. Ut enim
                                              ad minim veniam, quis nostrud xercitatik ullamco laboris nisi ut aliquip
                                              ex ea.</p>
                                      </div>
                                  </div>
                              </Container>
                              <div className={`${styles['mobile-img']} w-100 d-block d-md-none`}><img
                                  src="images/semaglutide/revolutionary-bg-mobile.jpg" alt="" className="w-100"/></div>
                          </div>
                      </Tab>

                      <Tab eventKey="how-it-works" title="How it works">
                          <div className={`${styles['tab-data']} ${styles['tab-1']}`}>
                              <Container className={styles['container']}>
                                  <div className={`${styles['semaglutide-box']} w-100 d-block`}>
                                      <div className={`${styles['pen-img']} w-100 d-block`}><img
                                          src="/img/semaglutide/pen-group.png" alt=""/></div>
                                      <div className={`${styles['semaglutide-box-middle']} w-100 d-block`}>
                                          <h3>Semaglutide</h3>
                                          <div className={`btn-row ${styles['btn-row']} w-100 d-block`}>
                                              <a href="#"
                                                 className={`${styles['black-btn']} black-btn fw-semibold text-center`}>Get
                                                  Started</a>
                                              <a href="#"
                                                 className={`${styles['red-btn']} red-btn fw-semibold text-center`}>Learn
                                                  More</a>
                                          </div>
                                          <div
                                              className={`semaglutide-backend-link ${styles['semaglutide-backend-link']} w-100 d-block fw-medium`}>
                                              <a href="#">Important safety information</a></div>
                                      </div>
                                      <div className={`${styles['semaglutide-box-bottom']} w-100 d-block`}>
                                          <div className={`${styles['title']} w-100 d-block fw-semibold`}>Revolutionary
                                              weight<br/>loss medications
                                          </div>
                                          <p>Lorem ipsum dolor sit amet, consectetur ouyt adipiscing elit, sed do
                                              eiusmod tempor nisi y incididunt ut labore et dolore magna aliqua. Ut enim
                                              ad minim veniam, quis nostrud xercitatik ullamco laboris nisi ut aliquip
                                              ex ea.</p>
                                      </div>
                                  </div>
                              </Container>
                              <div className={`${styles['mobile-img']} w-100 d-block d-md-none`}><img
                                  src="images/semaglutide/revolutionary-bg-mobile.jpg" alt="" className="w-100"/></div>
                          </div>
                      </Tab>

                      <Tab eventKey="pricing" title="Pricing">
                          <div className={`${styles['tab-data']} ${styles['tab-1']}`}>
                              <Container className={styles['container']}>
                                  <div className={`${styles['semaglutide-box']} w-100 d-block`}>
                                      <div className={`${styles['pen-img']} w-100 d-block`}><img
                                          src="/img/semaglutide/pen-group.png" alt=""/></div>
                                      <div className={`${styles['semaglutide-box-middle']} w-100 d-block`}>
                                          <h3>Semaglutide</h3>
                                          <div className={`btn-row ${styles['btn-row']} w-100 d-block`}>
                                              <a href="#"
                                                 className={`${styles['black-btn']} black-btn fw-semibold text-center`}>Get
                                                  Started</a>
                                              <a href="#"
                                                 className={`${styles['red-btn']} red-btn fw-semibold text-center`}>Learn
                                                  More</a>
                                          </div>
                                          <div
                                              className={`semaglutide-backend-link ${styles['semaglutide-backend-link']} w-100 d-block fw-medium`}>
                                              <a href="#">Important safety information</a></div>
                                      </div>
                                      <div className={`${styles['semaglutide-box-bottom']} w-100 d-block`}>
                                          <div className={`${styles['title']} w-100 d-block fw-semibold`}>Revolutionary
                                              weight<br/>loss medications
                                          </div>
                                          <p>Lorem ipsum dolor sit amet, consectetur ouyt adipiscing elit, sed do
                                              eiusmod tempor nisi y incididunt ut labore et dolore magna aliqua. Ut enim
                                              ad minim veniam, quis nostrud xercitatik ullamco laboris nisi ut aliquip
                                              ex ea.</p>
                                      </div>
                                  </div>
                              </Container>
                              <div className={`${styles['mobile-img']} w-100 d-block d-md-none`}><img
                                  src="images/semaglutide/revolutionary-bg-mobile.jpg" alt="" className="w-100"/></div>
                          </div>
                      </Tab>

                      <Tab eventKey="safety" title="Safety">
                          <div className={`${styles['tab-data']} ${styles['tab-1']}`}>
                              <Container className={styles['container']}>
                                  <div className={`${styles['semaglutide-box']} w-100 d-block`}>
                                      <div className={`${styles['pen-img']} w-100 d-block`}><img
                                          src="/img/semaglutide/pen-group.png" alt=""/></div>
                                      <div className={`${styles['semaglutide-box-middle']} w-100 d-block`}>
                                          <h3>Semaglutide</h3>
                                          <div className={`btn-row ${styles['btn-row']} w-100 d-block`}>
                                              <a href="#"
                                                 className={`${styles['black-btn']} black-btn fw-semibold text-center`}>Get
                                                  Started</a>
                                              <a href="#"
                                                 className={`${styles['red-btn']} red-btn fw-semibold text-center`}>Learn
                                                  More</a>
                                          </div>
                                          <div
                                              className={`semaglutide-backend-link ${styles['semaglutide-backend-link']} w-100 d-block fw-medium`}>
                                              <a href="#">Important safety information</a></div>
                                      </div>
                                      <div className={`${styles['semaglutide-box-bottom']} w-100 d-block`}>
                                          <div className={`${styles['title']} w-100 d-block fw-semibold`}>Revolutionary
                                              weight<br/>loss medications
                                          </div>
                                          <p>Lorem ipsum dolor sit amet, consectetur ouyt adipiscing elit, sed do
                                              eiusmod tempor nisi y incididunt ut labore et dolore magna aliqua. Ut enim
                                              ad minim veniam, quis nostrud xercitatik ullamco laboris nisi ut aliquip
                                              ex ea.</p>
                                      </div>
                                  </div>
                              </Container>
                              <div className={`${styles['mobile-img']} w-100 d-block d-md-none`}><img
                                  src="images/semaglutide/revolutionary-bg-mobile.jpg" alt="" className="w-100"/></div>
                          </div>
                      </Tab>
                  </Tabs>
              </div>

              <div className={`${styles['help-section']} w-100 d-block`}>
                  <Container className={styles['container']}>
                      <h3>How Lion's Pride Rx helps you<br/>lose weight</h3>
                      <p>If you don’t use insurance, it typically takes 4-6 weeks to start medication, including
                          completing your lab test. If you’d like to use your insurance, it can take an additional 2-3
                          weeks to try to get coverage. But don’t worry, we’ll handle all the paperwork.</p>
                      <div className={`${styles['faq-data-row']} w-100 d-block`}>
                          <Accordion defaultActiveKey="0">
                              <Accordion.Item eventKey="0" className={styles['accordion-item']}>
                                  <Accordion.Header className={styles['accordion-button']}>Answer health questions and
                                      complete your online visit</Accordion.Header>
                                  <Accordion.Body className={styles['accordion-body']}>
                                      <p><strong>This is the first item's accordion body.</strong> It is shown by
                                          default, until the collapse plugin adds the appropriate classes that we use to
                                          style each element. These classes control the overall appearance, as well as
                                          the showing and hiding via CSS transitions. You can modify any of this with
                                          custom CSS or overriding our default variables. It's also worth noting that
                                          just about any HTML can go within the <code>.accordion-body</code>, though the
                                          transition does limit overflow.</p>
                                  </Accordion.Body>
                              </Accordion.Item>
                              <Accordion.Item eventKey="1" className={styles['accordion-item']}>
                                  <Accordion.Header className={styles['accordion-button']}>Take a lab
                                      test</Accordion.Header>
                                  <Accordion.Body className={styles['accordion-body']}>
                                      <p><strong>This is the second item's accordion body.</strong> It is hidden by
                                          default, until the collapse plugin adds the appropriate classes that we use to
                                          style each element. These classes control the overall appearance, as well as
                                          the showing and hiding via CSS transitions. You can modify any of this with
                                          custom CSS or overriding our default variables. It's also worth noting that
                                          just about any HTML can go within the <code>.accordion-body</code>, though the
                                          transition does limit overflow.</p>
                                  </Accordion.Body>
                              </Accordion.Item>
                              <Accordion.Item eventKey="2" className={styles['accordion-item']}>
                                  <Accordion.Header className={styles['accordion-button']}>Provider writes an Rx (if
                                      appropriate)</Accordion.Header>
                                  <Accordion.Body className={styles['accordion-body']}>
                                      <p><strong>This is the third item's accordion body.</strong> It is hidden by
                                          default, until the collapse plugin adds the appropriate classes that we use to
                                          style each element. These classes control the overall appearance, as well as
                                          the showing and hiding via CSS transitions. You can modify any of this with
                                          custom CSS or overriding our default variables. It's also worth noting that
                                          just about any HTML can go within the <code>.accordion-body</code>, though the
                                          transition does limit overflow. </p>
                                  </Accordion.Body>
                              </Accordion.Item>
                              <Accordion.Item eventKey="3" className={styles['accordion-item']}>
                                  <Accordion.Header className={styles['accordion-button']}>Try to get insurance
                                      coverage</Accordion.Header>
                                  <Accordion.Body className={styles['accordion-body']}>
                                      <p><strong>This is the third item's accordion body.</strong> It is hidden by
                                          default, until the collapse plugin adds the appropriate classes that we use to
                                          style each element. These classes control the overall appearance, as well as
                                          the showing and hiding via CSS transitions. You can modify any of this with
                                          custom CSS or overriding our default variables. It's also worth noting that
                                          just about any HTML can go within the <code>.accordion-body</code>, though the
                                          transition does limit overflow. </p>
                                  </Accordion.Body>
                              </Accordion.Item>
                          </Accordion>
                          <div className={`${styles['btn-row']} btn-row w-100 d-block`}>
                              <a href="#" className="black-btn fw-semibold text-center">Get Medication</a>
                              <a href="#" className="red-btn fw-semibold text-center">Ongoing Support</a>
                          </div>
                      </div>
                  </Container>
              </div>

              <div className={`${styles['compare-section']} w-100 d-block`}>
                  <Container className={styles['container']}>
                      <div className={`${styles['data-row']} w-100 d-flex flex-wrap justify-content-between`}>
                          <div className={`d-none d-md-block`}><img src="/img/semaglutide/man-1.jpg" alt=""/></div>
                          <div className={`${styles['center-part']} horizontal-center`}>
                              <div className={`${styles['title']} w-100 d-block fw-semibold text-center`}>Roy
                                  lost <span>30 lbs</span> in 1 year
                              </div>
                              <p>“I started losing weight almost immediately.<br/>To me, truly, this has been a
                                  game-changer.”</p>
                          </div>
                          <div className={`d-none d-md-block`}><img src="/img/semaglutide/man-2.jpg" alt=""/></div>
                          <div className={`d-block d-md-none`}><img src="/img/semaglutide/man-compare.jpg" alt=""
                                                                    className={`w-100`}/></div>
                      </div>
                  </Container>
              </div>

              <div className={`${styles['included-section']} w-100 d-block`}>
                  <Container className={styles['container']}>
                      <h3>What’s <span>included</span></h3>
                      <div className={`${styles['included-box']} w-100 d-block`}>
                          <div className={`${styles['included-bullets']} w-100 d-block horizontal-center`}>
                              <ul>
                                  <li>Provider consultation</li>
                                  <li>GLP-1 prescription (if appropriate)</li>
                                  <li>Insurance concierge</li>
                                  <li>Ongoing care &amp; support</li>
                                  <li>Tools to track progress</li>
                              </ul>
                          </div>
                      </div>
                      <div className={`${styles['box-img']} w-100 d-block`}><img src="/img/semaglutide/box.png" alt=""
                                                                                 className={`img-fluid d-block m-auto`}/>
                      </div>
                      <div className={`btn-row w-100 d-block text-center`}>
                          <a href="#" className={`black-btn fw-semibold text-center`}>Get Started</a>
                          <a href="#" className={`red-btn fw-semibold text-center`}>Learn More</a>
                      </div>
                      <p>Please note: The cost of medication is not included in the Body Program.</p>
                  </Container>
              </div>

              <div className={`${styles['middle-bottom']} w-100 d-block`}>
                  <Container className={styles['container']}>
                      <Row className={`gx-xl-5`}>
                          <Col md={4}>
                              <div className={`${styles['box-img']} w-100 d-block`}><img src="/img/semaglutide/box-img-3.jpg" alt="" className={`w-100`} /></div>
                              <div className={`${styles['box-caption']} w-100 d-block fw-medium text-center`}>Which Semaglutide is<br/>right for you?</div>
                          </Col>
                          <Col md={4}>
                              <div className={`${styles['box-img']} w-100 d-block`}><img src="/img/semaglutide/box-img-1.jpg" alt="" className={`w-100`}/></div>
                              <div className={`${styles['box-caption']} w-100 d-block fw-medium text-center`}>Is using medication to lose<br/>weight cheating?</div>
                          </Col>
                          <Col md={4}>
                              <div className={`${styles['box-img']} w-100 d-block`}><img src="/img/semaglutide/box-img-2.jpg" alt="" className={`w-100`} /></div>
                              <div className={`${styles['box-caption']} w-100 d-block fw-medium text-center`}>Learn more about potential<br/>side effects</div>
                          </Col>
                      </Row>
                  </Container>
              </div>

              <div class={`${styles['faq-section']} w-100 d-block`}>
                  <Container className={styles['container']}>
                      <h3>Weight loss <span>FAQs</span></h3>
                      <div class={`${styles['faq-data-row']} w-100 d-block`}>
                          <Accordion defaultActiveKey="0">
                              <Accordion.Item eventKey="0" className={styles['accordion-item']}>
                                  <Accordion.Header className={styles['accordion-button']}>How much does the Body Program cost?</Accordion.Header>
                                  <Accordion.Body className={styles['accordion-body']}>
                                      <p><strong>This is the first item's accordion body.</strong> It is shown by
                                          default, until the collapse plugin adds the appropriate classes that we use to
                                          style each element. These classes control the overall appearance, as well as
                                          the showing and hiding via CSS transitions. You can modify any of this with
                                          custom CSS or overriding our default variables. It's also worth noting that
                                          just about any HTML can go within the <code>.accordion-body</code>, though the
                                          transition does limit overflow.</p>
                                  </Accordion.Body>
                              </Accordion.Item>

                              <Accordion.Item eventKey="1" className={styles['accordion-item']}>
                                  <Accordion.Header className={styles['accordion-button']}>Do you accept insurance?</Accordion.Header>
                                  <Accordion.Body className={styles['accordion-body']}>
                                      <p><strong>This is the second item's accordion body.</strong> It is hidden by
                                          default, until the collapse plugin adds the appropriate classes that we use to
                                          style each element. These classes control the overall appearance, as well as
                                          the showing and hiding via CSS transitions. You can modify any of this with
                                          custom CSS or overriding our default variables. It's also worth noting that
                                          just about any HTML can go within the <code>.accordion-body</code>, though the
                                          transition does limit overflow.</p>
                                  </Accordion.Body>
                              </Accordion.Item>

                              <Accordion.Item eventKey="2" className={styles['accordion-item']}>
                                  <Accordion.Header className={styles['accordion-button']}>How much will metabolic testing cost?</Accordion.Header>
                                  <Accordion.Body className={styles['accordion-body']}>
                                      <p><strong>This is the third item's accordion body.</strong> It is hidden by
                                          default, until the collapse plugin adds the appropriate classes that we use to
                                          style each element. These classes control the overall appearance, as well as
                                          the showing and hiding via CSS transitions. You can modify any of this with
                                          custom CSS or overriding our default variables. It's also worth noting that
                                          just about any HTML can go within the <code>.accordion-body</code>, though the
                                          transition does limit overflow. </p>
                                  </Accordion.Body>
                              </Accordion.Item>

                              <Accordion.Item eventKey="3" className={styles['accordion-item']}>
                                  <Accordion.Header className={styles['accordion-button']}>What if my insurance doesn’t cover the medication?</Accordion.Header>
                                  <Accordion.Body className={styles['accordion-body']}>
                                      <p><strong>This is the third item's accordion body.</strong> It is hidden by
                                          default, until the collapse plugin adds the appropriate classes that we use to
                                          style each element. These classes control the overall appearance, as well as
                                          the showing and hiding via CSS transitions. You can modify any of this with
                                          custom CSS or overriding our default variables. It's also worth noting that
                                          just about any HTML can go within the <code>.accordion-body</code>, though the
                                          transition does limit overflow. </p>
                                  </Accordion.Body>
                              </Accordion.Item>

                              <Accordion.Item eventKey="4" className={styles['accordion-item']}>
                                  <Accordion.Header className={styles['accordion-button']}>What can I expect after I sign up?</Accordion.Header>
                                  <Accordion.Body className={styles['accordion-body']}>
                                      <p><strong>This is the third item's accordion body.</strong> It is hidden by
                                          default, until the collapse plugin adds the appropriate classes that we use to
                                          style each element. These classes control the overall appearance, as well as
                                          the showing and hiding via CSS transitions. You can modify any of this with
                                          custom CSS or overriding our default variables. It's also worth noting that
                                          just about any HTML can go within the <code>.accordion-body</code>, though the
                                          transition does limit overflow. </p>
                                  </Accordion.Body>
                              </Accordion.Item>
                          </Accordion>
                      </div>
                  </Container>
              </div>
          </div>
      </>
  );
}
