import React from "react";
import Link from "next/link";
import styles from "./enclomiphene.module.scss";
import {Container, Row, Col, Accordion} from "react-bootstrap";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import dynamic from "next/dynamic";

const TestimonialCarousel = dynamic(
    () => import("../../../components/TestimonialCarousel/index"),
    { ssr: false }
)
export default function Enclomiphene(props) {

    const scrolltoHash = function (element_id, event) {
        event.preventDefault();
        const element = document.getElementById(element_id)
        element?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
    }

  return (
      <>
          <div className={`${styles['banner']} w-100 d-block`}>
              <Container className={styles['container']}>
                  <div className={`${styles['banner-container']} w-100 d-block`}>
                      <div className={`${styles['banner-right-top']} w-100 d-block`}>
                          <h1>Enclomiphene</h1>
                          <div className={`${styles['banner-tagline']} w-100 d-block fw-medium`}>Testosterone Treatment
                              for Men
                          </div>
                          <div className={`${styles['banner-img']}`}><img
                              src="/img/enclomiphene/box-bottle-enclomiphene.png" alt=""
                              className={`img-fluid m-auto d-block`}/></div>
                          <div className={`${styles['bullets']} w-100 d-block fw-medium horizontal-center`}>
                              <ul>
                                  <li>FDA-Approved Medication</li>
                                  <li>Daily Testosterone Treatment</li>
                                  <li>ZERO Synthetic Testosterone</li>
                              </ul>
                          </div>
                          <div className={`${styles['banner-btn']} w-100 d-block`}><a onClick={(e) => scrolltoHash('step1', e)} href="#" className={`w-100 d-block fw-semibold text-center`}>Get Started</a></div>
                      </div>
                      <div className={`${styles['banner-right-bottom']} w-100 d-block fw-medium`}>
                          <ul className={`w-100 d-flex flex-wrap justify-content-between`}>
                              <li><i className={styles['icon-1']}></i> Free Priority Shipping</li>
                              <li><i className={styles['icon-2']}></i> Access to doctor in 24hr</li>
                              <li><i className={styles['icon-3']}></i> Licensed doctors</li>
                          </ul>
                      </div>
                  </div>
              </Container>
          </div>

          <div className={`w-100 d-block`}>
              <div className={`${styles['landing-question-section']} w-100 d-block`}>
                  <Container className={`${styles['container']}`}>
                      <div className={`${styles['question-row']} w-100 d-block`} id="step1">
                          <div className={`${styles['question-title']} w-100 d-block fw-semibold text-center`}>Are you
                              looking to raise your free and total<br/>testosterone levels?
                          </div>
                          <div className={`${styles['question-selection']} w-100 d-block horizontal-center`}>
                              <div className={`btn-group btn-group-vertical w-100`} role="group"
                                   aria-label="Basic radio toggle button group">
                                  <input type="radio" className={`btn-check ${styles['btn-check']}`} name="looking"
                                         id="looking-yes" autoComplete="off" onClick={(e) => scrolltoHash('step2', e)}/>
                                  <label className={`btn ${styles['btn']} btn-outline-primary`}
                                         htmlFor="looking-yes">Yes</label>
                                  <input type="radio" className={`btn-check ${styles['btn-check']}`} name="looking"
                                         id="looking-no" autoComplete="off" onClick={(e) => scrolltoHash('step2', e)}/>
                                  <label className={`btn ${styles['btn']} btn-outline-primary`}
                                         htmlFor="looking-no">No</label>
                              </div>
                          </div>
                      </div>
                      <div className={`${styles['question-row']} w-100 d-block`} id="step2">
                          <div className={`${styles['question-title']} w-100 d-block fw-semibold text-center`}>Are you
                              looking to increase sex drive, energy levels,<br/>lean muscle mass, and motivation?
                          </div>
                          <div className={`${styles['question-selection']} w-100 d-block horizontal-center`}>
                              <div className={`btn-group btn-group-vertical w-100`} role="group"
                                   aria-label="Basic radio toggle button group">
                                  <input type="radio" className={`${styles['btn-check']} btn-check`} name="increase"
                                         id="increase-yes" autoComplete="off" onClick={(e) => scrolltoHash('step3', e)}/>
                                  <label className={`btn ${styles['btn']} btn-outline-primary`}
                                         htmlFor="increase-yes">Yes</label>
                                  <input type="radio" className={`${styles['btn-check']} btn-check`} name="increase"
                                         id="increase-no" autoComplete="off" onClick={(e) => scrolltoHash('step3', e)}/>
                                  <label className={`btn ${styles['btn']} btn-outline-primary`}
                                         htmlFor="increase-no">No</label>
                              </div>
                          </div>
                      </div>
                      <div className={`${styles['question-row']} w-100 d-block`} id="step3">
                          <div className={`${styles['question-title']} w-100 d-block fw-semibold text-center`}>Do you
                              want to raise your testosterone levels without stopping<br/>your body’s natural
                              testosterone production?
                          </div>
                          <div className={`${styles['question-selection']} w-100 d-block horizontal-center`}>
                              <div className={`btn-group btn-group-vertical w-100`} role="group"
                                   aria-label="Basic radio toggle button group">
                                  <input type="radio" className={`${styles['btn-check']} btn-check`} name="testosterone"
                                         id="testosterone-yes" autoComplete="off" onClick={(e) => scrolltoHash('step4', e)}/>
                                  <label className={`btn ${styles['btn']} btn-outline-primary`}
                                         htmlFor="testosterone-yes">Yes</label>
                                  <input type="radio" className={`${styles['btn-check']} btn-check`} name="testosterone"
                                         id="testosterone-no" autoComplete="off" onClick={(e) => scrolltoHash('step4', e)}/>
                                  <label className={`btn ${styles['btn']} btn-outline-primary`}
                                         htmlFor="testosterone-no">No</label>
                              </div>
                          </div>
                      </div>
                      <div className={`${styles['question-row']} w-100 d-block ${styles['no-border']}`} id="step4">
                          <div className={`${styles['question-title']} w-100 d-block fw-semibold text-center`}>Are you
                              okay with a dissolvable tablet that quickly absorbs under the tongue<br/>to maximize free
                              and total testosterone levels?
                          </div>
                          <div className={`${styles['question-selection']} w-100 d-block horizontal-center`}>
                              <div className={`btn-group btn-group-vertical w-100`} role="group"
                                   aria-label="Basic radio toggle button group">
                                  <input type="radio" className={`${styles['btn-check']} btn-check`} name="dissolvable"
                                         id="dissolvable-yes" autoComplete="off"/>
                                  <label className={`${styles['btn']} btn btn-outline-primary`}
                                         htmlFor="dissolvable-yes">Yes</label>
                                  <input type="radio" className={`${styles['btn-check']} btn-check`} name="dissolvable"
                                         id="dissolvable-no" autoComplete="off"/>
                                  <label className={`${styles['btn']} btn btn-outline-primary`}
                                         htmlFor="dissolvable-no">No</label>
                              </div>
                          </div>
                      </div>
                      <div className={`${styles['question-row']} w-100 d-block ${styles['last-step']}`}>
                          <Row>
                              <Col md={6} lg={5}>
                                  <div className={`${styles['question-title-2']} fw-semibold`}>Great News!</div>
                                  <div className={`${styles['question-red-title']} w-100 d-block fw-semibold`}>We’ve got
                                      you covered.
                                  </div>
                              </Col>
                              <Col md={6} lg={7}>
                                  <div className={`${styles['circle-check-bullets']} w-100 d-block`}>
                                      <ul>
                                          <li>Medication prescribed by board-certified doctors</li>
                                          <li>100% online with no in-person doctor visits required</li>
                                          <li>Fast, discreet shipping right to your door</li>
                                      </ul>
                                  </div>
                                  <div className={`${styles['section-black-btn']} section-black-btn w-100 d-block`}><a
                                      href="#" className={`w-100 d-block fw-semibold text-center`}>Start your
                                      treatment</a></div>
                                  <div className={`${styles['info-text']} info-text w-100 d-block fst-italic`}>*products
                                      needing a prescription require a short consultation with an online physician.
                                  </div>
                              </Col>
                          </Row>
                      </div>
                  </Container>
              </div>
          </div>

          <div className={`${styles['what-section']} w-100 d-block`}>
              <Container className={styles['container']}>
                  <h2>What can <span>Enclomiphene</span><br/>do for you?</h2>
                  <div className={`${styles['data-row']} w-100 d-block`}>
                      <div className={`${styles['what-box-row']} w-100 d-flex flex-wrap align-items-end`}>
                          <div className={`${styles['what-box-img']} w-100 d-block`}><img
                              src="/img/enclomiphene/what-img-1.jpg" alt="" className={`w-100`}/></div>
                          <div className={`${styles['what-box-right']} w-100 d-block`}>
                              <div className={`${styles['what-box-title']} w-100 d-block fw-semibold`}>Sexual Health and
                                  Performance
                              </div>
                              <p>Studies show that men with low testosterone can develop increased penis size, gain
                                  increased libido, improve erectile function, and boost sexual stamina when treated
                                  with testosterone medication.</p>
                          </div>
                      </div>
                      <div className={`${styles['what-box-row']} w-100 d-flex flex-wrap align-items-end`}>
                          <div className={`${styles['what-box-img']} w-100 d-block`}><img
                              src="/img/enclomiphene/what-img-2.jpg" alt="" className={`w-100`}/></div>
                          <div className={`${styles['what-box-right']} w-100 d-block`}>
                              <div className={`${styles['what-box-title']} w-100 d-block fw-semibold`}>Lean Muscle
                                  Development
                              </div>
                              <p>Studies have shown that men with low testosterone can build lean muscle, along with
                                  significant body fat reduction and enhanced metabolism after treatment with
                                  testosterone medication.</p>
                          </div>
                      </div>
                      <div className={`${styles['what-box-row']} w-100 d-flex flex-wrap align-items-end`}>
                          <div className={`${styles['what-box-img']} w-100 d-block`}><img
                              src="/img/enclomiphene/what-img-3.jpg" alt="" className={`w-100`}/></div>
                          <div className={`${styles['what-box-right']} w-100 d-block`}>
                              <div className={`${styles['what-box-title']} w-100 d-block fw-semibold`}>Energy and
                                  Drive
                              </div>
                              <p>Studies show that testosterone-boosting SERM treatments, such as enclomiphene can
                                  significantly improve energy, mood, and motivation through a non-stimulant
                                  pathway.</p>
                          </div>
                      </div>
                      <div className={`${styles['what-box-row']} w-100 d-flex flex-wrap align-items-end`}>
                          <div className={`${styles['what-box-img']} w-100 d-block`}><img
                              src="/img/enclomiphene/what-img-4.jpg" alt="" className={`w-100`}/></div>
                          <div className={`${styles['what-box-right']} w-100 d-block`}>
                              <div className={`${styles['what-box-title']} w-100 d-block fw-semibold`}>Focus and
                                  Productivity
                              </div>
                              <p>Studies show that an increase in testosterone levels contributes to improved
                                  productivity, focus, and competitive drive in men.</p>
                          </div>
                      </div>
                  </div>
              </Container>
          </div>

          <div className={`${styles['middle-gray-section']} w-100 d-block`}>
              <Container className={styles['container']}>
                  <img src="/img/enclomiphene/features-img.png" alt="" className={`w-100 d-none d-md-block`}/>
                  <img src="/img/enclomiphene/features-img-mobile.png" alt="" className={`w-100 d-block d-md-none`}/>
              </Container>
          </div>

          <div className={`${styles['alpha-section']} w-100 d-block`}>
              <Container className={styles['container']}>
                  <div className={`${styles['alpha-section-top']} w-100 d-block`}>
                      <h3>Unleash the Alpha Male</h3>
                      <p>Men are not created equal. Alpha males dominate in every aspect. Strength, energy, competitive
                          drive – even sexual performance. Studies show that Alpha males have significantly higher
                          testosterone levels compared to other men. That’s why Alpha males have an unfair advantage –
                          and we have the key to unleash the Alpha male in you.</p>
                  </div>
                  <div className={`${styles['alpha-section-bottom']} w-100 d-block`}>
                      <div className={`${styles['title']} w-100 d-block`}>Testosterone Levels DROP 1% per year</div>
                      <p>On average, testosterone levels drop by 1% each year after you reach your peak testosterone
                          levels. By the time you reach your 40s, you may have lost over 20% of your peak testosterone
                          levels. Would you let your testosterone levels continue to slip or would you take the next
                          step to restore your peak testosterone levels?</p>
                      <div className={`${styles['chart-img']} w-100 d-block`}><img src="/img/enclomiphene/chart-2.jpg"
                                                                                   alt="" className={`w-100`}/></div>
                  </div>
              </Container>
          </div>

          <div className={`${styles['enclomiphene-section']} enclomiphene-section w-100 d-block`}>
              <Container className={styles['container']}>
                  <Tabs defaultActiveKey="meds">
                      <Tab eventKey="meds" title="Meds">
                          <div className={`${styles['enclomiphene-section-bottom']} w-100 d-block`}>
                              <h3>Enclomiphene</h3>
                              <div className={`${styles['image-row']} w-100 d-block`}><img src="/img/enclomiphene/box-bottle-enclomiphene.png" alt="" className="d-block m-auto"/></div>
                              <div className={`${styles['bottom-data-row']} w-100 d-block`}>
                                  <div className={`${styles['btn-row']} btn-row w-100 d-flex flex-wrap`}>
                                      <a href="#" className={`black-btn ${styles['black-btn']} fw-semibold text-center`}>Get Started</a>
                                      <a href="#" className={`red-btn ${styles['red-btn']} fw-semibold text-center`}>Learn More</a>
                                  </div>
                                  <div className={`${styles['backend-link']} backend-link w-100 d-block fw-medium`}><a href="#">Important safety information</a></div>
                              </div>
                          </div>
                      </Tab>

                      <Tab eventKey="how-it-works" title="How it works">
                          <div className={`${styles['enclomiphene-section-bottom']} w-100 d-block`}>
                              <h3>Enclomiphene</h3>
                              <div className={`${styles['image-row']} w-100 d-block`}><img src="/img/enclomiphene/box-bottle-enclomiphene.png" alt="" className="d-block m-auto"/></div>
                              <div className={`${styles['bottom-data-row']} w-100 d-block`}>
                                  <div className={`${styles['btn-row']} btn-row w-100 d-flex flex-wrap`}>
                                      <a href="#" className={`black-btn ${styles['black-btn']} fw-semibold text-center`}>Get Started</a>
                                      <a href="#" className={`red-btn ${styles['red-btn']} fw-semibold text-center`}>Learn More</a>
                                  </div>
                                  <div className={`${styles['backend-link']} backend-link w-100 d-block fw-medium`}><a href="#">Important safety information</a></div>
                              </div>
                          </div>
                      </Tab>

                      <Tab eventKey="pricing" title="Pricing">
                          <div className={`${styles['enclomiphene-section-bottom']} w-100 d-block`}>
                              <h3>Enclomiphene</h3>
                              <div className={`${styles['image-row']} w-100 d-block`}><img src="/img/enclomiphene/box-bottle-enclomiphene.png" alt="" className="d-block m-auto"/></div>
                              <div className={`${styles['bottom-data-row']} w-100 d-block`}>
                                  <div className={`${styles['btn-row']} btn-row w-100 d-flex flex-wrap`}>
                                      <a href="#" className={`black-btn ${styles['black-btn']} fw-semibold text-center`}>Get Started</a>
                                      <a href="#" className={`red-btn ${styles['red-btn']} fw-semibold text-center`}>Learn More</a>
                                  </div>
                                  <div className={`${styles['backend-link']} backend-link w-100 d-block fw-medium`}><a href="#">Important safety information</a></div>
                              </div>
                          </div>
                      </Tab>

                      <Tab eventKey="safety" title="Safety">
                          <div className={`${styles['enclomiphene-section-bottom']} w-100 d-block`}>
                              <h3>Enclomiphene</h3>
                              <div className={`${styles['image-row']} w-100 d-block`}><img src="/img/enclomiphene/box-bottle-enclomiphene.png" alt="" className="d-block m-auto"/></div>
                              <div className={`${styles['bottom-data-row']} w-100 d-block`}>
                                  <div className={`${styles['btn-row']} btn-row w-100 d-flex flex-wrap`}>
                                      <a href="#" className={`black-btn ${styles['black-btn']} fw-semibold text-center`}>Get Started</a>
                                      <a href="#" className={`red-btn ${styles['red-btn']} fw-semibold text-center`}>Learn More</a>
                                  </div>
                                  <div className={`${styles['backend-link']} backend-link w-100 d-block fw-medium`}><a href="#">Important safety information</a></div>
                              </div>
                          </div>
                      </Tab>
                  </Tabs>
              </Container>
          </div>

          <div className={`${styles['facts-section']} w-100 d-block`}>
              <div className={`${styles['facts-section-top']} w-100 d-block`}></div>
              <div className={`${styles['facts-section-bottom']} w-100 d-block`}>
                  <Container className={styles['container']}>
                      <div className={`${styles['data-row']} w-100 d-block fw-semibold`}>
                          <div className={`${styles['title']} w-100 d-block`}>Science-Based Facts</div>
                          <div className={`${styles['facts-box-row']} w-100 d-block horizontal-center`}>
                              <ul>
                                  <li>
                                      <div className={`${styles['red-box-title']} fw-semibold`}>Enclomiphene</div>
                                      <p>Dosage: 1x/day<br/>Pill strength – 6.25-25m<br/>Intake – Oral or
                                          Sublingual<br/>Bottle Dosage – 1 month or 30 doses</p>
                                  </li>
                                  <li>
                                      <div className={`${styles['red-box-title']} fw-semibold`}>How it works</div>
                                      <p>Enclomiphene blocks estrogen receptors to disrupt the estrogen-negative
                                          feedback loop, which subsequently stimulates LH, FSH, and testosterone
                                          production naturally. Enclomiphene does not disrupt the natural testosterone
                                          cycle, thus allowing the body to continue to naturally produce testosterone,
                                          even without treatment.</p>
                                  </li>
                                  <li>
                                      <div className={`${styles['red-box-title']} fw-semibold`}>The Results</div>
                                      <p>By blocking estrogen receptors, enclomiphene effectively reduces the risk of
                                          gyno (gynecomastia) and other abnormal reactions resulting from reactive
                                          estrogen buildup in men.</p>
                                  </li>
                              </ul>
                          </div>
                      </div>
                  </Container>
              </div>
          </div>
          <div className={`${styles['unleash-section']} w-100 d-block`}>
              <Container className={styles['container']}>
                  <h3>Unleash your Prime Performance with<br/><span>Enclomiphene</span></h3>
                  <p>The Alpha Protocol is designed to kickstart your natural testosterone production and restore your
                      testosterone levels back to peak levels without the risks associated with testosterone replacement
                      therapy.</p>
                  <p>Our protocol does not use synthetic testosterone compounds that stop your body from producing
                      testosterone.</p>
                  <p>With an FDA-approved SERM medication, the Alpha Protocol continues to regulate natural testosterone
                      production without making you dependent on treatments to maintain optimal testosterone levels. The
                      Alpha Protocol boosts your testosterone levels by as much as 300% without disrupting your natural
                      testosterone production.</p>
                  <p>Unlike outdated testosterone therapies, The Alpha Protocol stimulates testosterone production,
                      effectively eliminating risks such as testicular atrophy, infertility, and hormone imbalance.</p>
                  <div className={`${styles['gray-box-data']} w-100 d-block`}>
                      <div className={`${styles['gray-box-title']} w-100 d-block fw-semibold`}>But that’s just the
                          beginning.
                      </div>
                      <p>To push your testosterone production beyond your peak levels, you need a natural
                          testosterone-boosting supplement to build on the raw power of the Alpha Protocol and enable
                          you to reach superior total and free testosterone levels that will supercharge your physical,
                          mental, and sexual performance.</p>
                  </div>
              </Container>
          </div>

          <TestimonialCarousel />

          <div className={`${styles['powered-section']} w-100 d-block`}>
              <Container className={styles['container']}>
                  <h3>Powered by Science, <span>Fine-tuned for you.</span></h3>
                  <div className={`${styles['data-row']} w-100 d-block`}>
                      <Row>
                          <Col md={6} lg={3}>
                              <div className={`${styles['powered-box']} w-100 d-block`}>
                                  <div className={`${styles['customer-img']} w-100 d-block horizontal-center`}><img
                                      src="/img/enclomiphene/customer-1.png" alt="" className={`w-100`}/></div>
                                  <div className={`${styles['powered-box-bottom']} w-100 d-block`}>
                                      <div className={`${styles['customer-name']} w-100 d-block fw-semibold`}>Scott C.
                                      </div>
                                      <div
                                          className={`${styles['verified-badge']} verified-badge w-100 d-block`}>Verified
                                          Customer
                                      </div>
                                      <div className={`${styles['bottle-img']}`}><img
                                          src="/img/enclomiphene/enclomiphene-bottle.png" alt=""/></div>
                                  </div>
                              </div>
                          </Col>
                          <Col md={6} lg={3}>
                              <div className={`${styles['powered-box']} w-100 d-block`}>
                                  <div className={`${styles['customer-img']} w-100 d-block horizontal-center`}><img
                                      src="/img/enclomiphene/customer-2.png" alt="" className={`w-100`}/></div>
                                  <div className={`${styles['powered-box-bottom']} w-100 d-block`}>
                                      <div className={`${styles['customer-name']} w-100 d-block fw-semibold`}>Bill M.
                                      </div>
                                      <div
                                          className={`${styles['verified-badge']} verified-badge w-100 d-block`}>Verified
                                          Customer
                                      </div>
                                      <div className={`${styles['bottle-img']}`}><img
                                          src="/img/enclomiphene/enclomiphene-bottle.png" alt=""/></div>
                                  </div>
                              </div>
                          </Col>
                          <Col md={6} lg={3}>
                              <div className={`${styles['powered-box']} w-100 d-block`}>
                                  <div className={`${styles['customer-img']} w-100 d-block horizontal-center`}><img
                                      src="/img/enclomiphene/customer-3.png" alt="" className={`w-100`}/></div>
                                  <div className={`${styles['powered-box-bottom']} w-100 d-block`}>
                                      <div className={`${styles['customer-name']} w-100 d-block fw-semibold`}>Shawn P.
                                      </div>
                                      <div
                                          className={`${styles['verified-badge']} verified-badge w-100 d-block`}>Verified
                                          Customer
                                      </div>
                                      <div className={`${styles['bottle-img']}`}><img
                                          src="/img/enclomiphene/enclomiphene-bottle.png" alt=""/></div>
                                  </div>
                              </div>
                          </Col>
                          <Col md={6} lg={3}>
                              <div className={`${styles['powered-box']} w-100 d-block`}>
                                  <div className={`${styles['customer-img']} w-100 d-block horizontal-center`}><img
                                      src="/img/enclomiphene/customer-4.png" alt="" className={`w-100`}/></div>
                                  <div className={`${styles['powered-box-bottom']} w-100 d-block`}>
                                      <div className={`${styles['customer-name']} w-100 d-block fw-semibold`}>Rod T.
                                      </div>
                                      <div
                                          className={`${styles['verified-badge']} verified-badge w-100 d-block`}>Verified
                                          Customer
                                      </div>
                                      <div className={`${styles['bottle-img']}`}><img
                                          src="/img/enclomiphene/enclomiphene-bottle.png" alt=""/></div>
                                  </div>
                              </div>
                          </Col>
                      </Row>
                  </div>
              </Container>
          </div>
          <div className={`${styles['chart-section']} w-100 d-block`}>
              <Container className={styles['container']}>
                  <h3>Enclomiphene</h3>
                  <div className={`${styles['title-text']} title-text`}>(Generic Androxal)</div>
                  <div className={`${styles['data-row']} w-100 d-block`}>
                      <div className={`${styles['chart-section-top']} w-100 d-block fw-medium text-center`}> Total
                          Testosterone (ng/dl)<br/>
                          <span className={`fw-semibold`}>1018.1</span></div>
                      <div className={`${styles['chart-img']}' w-100 d-block`}><img src="/img/enclomiphene/chart.jpg"
                                                                                    alt="" className={`w-100`}/></div>
                      <div className={`${styles['chart-bottle-img']} w-100 d-block horizontal-center`}><img
                          src="/img/enclomiphene/box-bottle-enclomiphene.png" alt="" className={`w-100`}/></div>
                  </div>
              </Container>
          </div>
          <div className={`${styles['works-section']} w-100 d-block`}>
              <Container className={styles['container']}>
                  <h3>How Enclomiphene Works</h3>
                  <div className={`${styles['data-row']} w-100 d-block`}>
                      <Row className={`gx-5`}>
                          <Col md={4}>
                              <div className={`${styles['works-box']} w-100 d-block`}>
                                  <div className={`${styles['works-box-img']} w-100 d-block`}><img
                                      src="/img/enclomiphene/works-img-1.png" alt=""/></div>
                                  <div className={`${styles['works-number']} fw-semibold`}>01</div>
                                  <div className={`${styles['works-box-title']} w-100 d-block fw-semibold`}>Choose your
                                      plan
                                  </div>
                                  <p>Select the Alpha Protocol and choose your add-on natural supplements</p>
                              </div>
                          </Col>
                          <Col md={4}>
                              <div className={`${styles['works-box']} w-100 d-block`}>
                                  <div className={`${styles['works-box-img']} w-100 d-block`}><img
                                      src="/img/enclomiphene/works-img-2.png" alt=""/></div>
                                  <div className={`${styles['works-number']} fw-semibold`}>02</div>
                                  <div className={`${styles['works-box-title']} w-100 d-block fw-semibold`}>Place your
                                      order
                                  </div>
                                  <p>Complete the quick order process to place your order. Once your order is processed,
                                      you may proceed to answer your health survey.</p>
                              </div>
                          </Col>
                          <Col md={4}>
                              <div className={`${styles['works-box']} w-100 d-block`}>
                                  <div className={`${styles['works-box-img']} w-100 d-block`}><img
                                      src="/img/enclomiphene/works-img-3.png" alt=""/></div>
                                  <div className={`${styles['works-number']} fw-semibold`}>03</div>
                                  <div className={`${styles['works-box-title']} w-100 d-block fw-semibold`}>Answer a
                                      quick<br/>3-minute health survey
                                  </div>
                                  <p>Your health survey gives our partner U.S. licensed physicians the information they
                                      need to approve your selected treatment plan or prescribe other treatment plans
                                      that fit your needs.</p>
                              </div>
                          </Col>
                      </Row>
                  </div>
              </Container>
          </div>

          <div className={`${styles['faq-section']} enclomiphene-faq-section w-100 d-block`}>
              <Container className={styles['container']}>
                  <h3><span>Enclomiphene</span> FAQs</h3>
                  <div className={`${styles['faq-data-row']} w-100 d-block`}>
                      <Accordion defaultActiveKey="0">
                          <Accordion.Item eventKey="0" className={styles['accordion-item']}>
                              <Accordion.Header className={styles['accordion-button']}>What is Enclomiphene
                                  for?</Accordion.Header>
                              <Accordion.Body className={styles['accordion-body']}>
                                  <p><strong>This is the first item's accordion body.</strong> It is shown by default,
                                      until the collapse plugin adds the appropriate classes that we use to style each
                                      element. These classes control the overall appearance, as well as the showing and
                                      hiding via CSS transitions. You can modify any of this with custom CSS or
                                      overriding our default variables. It's also worth noting that just about any HTML
                                      can go within the <code>.accordion-body</code>, though the transition does limit
                                      overflow.</p>
                              </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="1" className={styles['accordion-item']}>
                              <Accordion.Header className={styles['accordion-button']}>Who should not take
                                  Enclomiphene?</Accordion.Header>
                              <Accordion.Body className={styles['accordion-body']}>
                                  <p><strong>This is the first item's accordion body.</strong> It is shown by default,
                                      until the collapse plugin adds the appropriate classes that we use to style each
                                      element. These classes control the overall appearance, as well as the showing and
                                      hiding via CSS transitions. You can modify any of this with custom CSS or
                                      overriding our default variables. It's also worth noting that just about any HTML
                                      can go within the <code>.accordion-body</code>, though the transition does limit
                                      overflow.</p>
                              </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="2" className={styles['accordion-item']}>
                              <Accordion.Header className={styles['accordion-button']}>What are Selective estrogen
                                  receptor modulators (SERMs)?</Accordion.Header>
                              <Accordion.Body className={styles['accordion-body']}>
                                  <p><strong>This is the first item's accordion body.</strong> It is shown by default,
                                      until the collapse plugin adds the appropriate classes that we use to style each
                                      element. These classes control the overall appearance, as well as the showing and
                                      hiding via CSS transitions. You can modify any of this with custom CSS or
                                      overriding our default variables. It's also worth noting that just about any HTML
                                      can go within the <code>.accordion-body</code>, though the transition does limit
                                      overflow.</p>
                              </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="3" className={styles['accordion-item']}>
                              <Accordion.Header className={styles['accordion-button']}>Is Enclomiphene
                                  safe?</Accordion.Header>
                              <Accordion.Body className={styles['accordion-body']}>
                                  <p><strong>This is the first item's accordion body.</strong> It is shown by default,
                                      until the collapse plugin adds the appropriate classes that we use to style each
                                      element. These classes control the overall appearance, as well as the showing and
                                      hiding via CSS transitions. You can modify any of this with custom CSS or
                                      overriding our default variables. It's also worth noting that just about any HTML
                                      can go within the <code>.accordion-body</code>, though the transition does limit
                                      overflow.</p>
                              </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="4" className={styles['accordion-item']}>
                              <Accordion.Header className={styles['accordion-button']}>How should I take
                                  Enclomiphene?</Accordion.Header>
                              <Accordion.Body className={styles['accordion-body']}>
                                  <p><strong>This is the first item's accordion body.</strong> It is shown by default,
                                      until the collapse plugin adds the appropriate classes that we use to style each
                                      element. These classes control the overall appearance, as well as the showing and
                                      hiding via CSS transitions. You can modify any of this with custom CSS or
                                      overriding our default variables. It's also worth noting that just about any HTML
                                      can go within the <code>.accordion-body</code>, though the transition does limit
                                      overflow.</p>
                              </Accordion.Body>
                          </Accordion.Item>
                      </Accordion>
                  </div>
              </Container>
          </div>
          <div className={`${styles['cta-section']} w-100 d-block`}>
              <Container className={styles['container']}>
                  <Row>
                      <Col md={6} lg={5}>
                          <div className={`${styles['cta-title']} fw-semibold`}>Great News!</div>
                          <div className={`${styles['cta-red-title']} w-100 d-block fw-semibold`}>We’ve got you covered.</div>
                      </Col>
                      <Col md={6} lg={7}>
                          <div className={`${styles['circle-check-bullets']} w-100 d-block`}>
                              <ul>
                                  <li>Medication prescribed by board-certified doctors</li>
                                  <li>100% online with no in-person doctor visits required</li>
                                  <li>Fast, discreet shipping right to your door</li>
                              </ul>
                          </div>
                          <div className={`${styles['section-black-btn']} section-black-btn w-100 d-block`}><a href="#" className={`w-100 d-block fw-semibold text-center`}>Start your treatment</a></div>
                          <div className={`${styles['info-text']} info-text w-100 d-block fst-italic`}>*products needing a prescription require a short consultation with an online physician.</div>
                      </Col>
                  </Row>
              </Container>
          </div>
      </>
  );
}