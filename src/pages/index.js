import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Accordion from "react-bootstrap/Accordion";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <main className="page">
        <article className="container">
          <header className="index">
            <div className="row">
              <div className="col col-12 col-md-8 col-lg-7 col-xl-8">
                <div className="index__content">
                  <p className="lead">
                    Order E.D. Medication in Under&nbsp;5 Minutes
                  </p>
                  <h2 className="index__heading">
                    Get FDA-Approved Viagra and Cialis Generics
                  </h2>
                  <p className="h4">100% Online – Safe – Affordable</p>
                  <div className="index__options">
                    <p className="h5">Top ED Treatment Options:</p>
                    <div className="index__option">
                      <figure>
                        <Image
                          src="/img/pill-viagra.jpg"
                          alt="Viagra"
                          width={250}
                          height={150}
                        />
                      </figure>
                      <p>
                        Generic <strong>Viagra</strong>
                      </p>
                    </div>
                    <div className="index__option">
                      <figure>
                        <Image
                          src="/img/pill-cialis.jpg"
                          alt="Cialis"
                          width={180}
                          height={150}
                        />
                      </figure>
                      <p>
                        Generic <strong>Cialis</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col col-12 col-md-4 col-lg-5 col-xl-4 align-self-md-center align-self-xl-start">
                <figure className="index__image">
                  <Image
                    className="/img-fluid"
                    src="/img/phone.webp"
                    width={254}
                    height={601}
                    alt="iPhone - LionsPrideRx"
                  />
                </figure>
              </div>
              <div className="col col-12 col-xl-8">
                <section className="index__content">
                  <h5>America’s #1 Online E.D. Treatment Portal</h5>
                  <ul className="list-group list-group-features">
                    <li className="list-group-item">
                      Affordable Viagra and Cialis generics prescribed by
                      US-licensed doctors
                    </li>
                    <li className="list-group-item">
                      Quick 5-minute health questionnaire – no doctor’s
                      appointment needed
                    </li>
                    <li className="list-group-item">
                      Plans start at only $2/pill. Choose the&nbsp;plan that
                      suits your budget and&nbsp;lifestyle
                    </li>
                    <li className="list-group-item">
                      Pay only for your medication – NO&nbsp;HIDDEN CHARGES!
                    </li>
                  </ul>
                  <a href="order.html" className="btn btn-primary btn-lg">
                    Get Started Today
                  </a>
                </section>
              </div>
            </div>
          </header>
          <div className="features">
            <div className="row">
              <div className="col col-12 col-md-6 col-lg-3">
                <figure className="features__icon">
                  <Image
                    src="/img/icon-fda.png"
                    width={170}
                    height={170}
                    alt=""
                  />
                  <figcaption>FDA-Approved E.D.&nbsp;Medication</figcaption>
                </figure>
              </div>
              <div className="col col-12 col-md-6 col-lg-3">
                <figure className="features__icon">
                  <Image
                    src="/img/icon-free.png"
                    width={170}
                    height={170}
                    alt=""
                  />
                  <figcaption>Free 2-day Discreet&nbsp;Shipping</figcaption>
                </figure>
              </div>
              <div className="col col-12 col-md-6 col-lg-3">
                <figure className="features__icon">
                  <Image
                    src="/img/icon-money.png"
                    width={170}
                    height={170}
                    alt=""
                  />
                  <figcaption>Affordable E.D.&nbsp;Treatments</figcaption>
                </figure>
              </div>
              <div className="col col-12 col-md-6 col-lg-3">
                <figure className="features__icon">
                  <Image
                    src="/img/icon-no-fee.png"
                    width={170}
                    height={170}
                    alt=""
                  />
                  <figcaption>
                    No doctor’s fees – No&nbsp;hidden charges
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
          <section className="choose">
            <div className="row align-items-lg-end">
              <div className="col col-12 col-lg-7 col-xl-6">
                <div className="choose__content">
                  <h3 className="choose__heading">
                    Start for as low as&nbsp;$2/pill
                  </h3>
                  <p className="lead">
                    Choose your preferred E.D.&nbsp;Treatment
                  </p>
                  <p className="choose__question">
                    <a href="#">Which treatment is right for&nbsp;me?</a>
                  </p>
                  <div className="choose__pills">
                    <div className="choose__pill">
                      <figure>
                        <Image
                          className="/img-fluid"
                          src="/img/bottle-viagra.png"
                          width={254}
                          height={322}
                          alt="Generic Viagra"
                        />
                        <figcaption>Generic Viagra®</figcaption>
                      </figure>
                      <a href="#" className="btn btn-primary">
                        Select
                      </a>
                    </div>
                    <div className="choose__pill">
                      <figure>
                        <Image
                          className="/img-fluid"
                          src="/img/bottle-cialis.png"
                          width={254}
                          height={322}
                          alt="Generic Cialis"
                        />
                        <figcaption>Generic Cialis®</figcaption>
                      </figure>
                      <a href="#" className="btn btn-primary">
                        Select
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col col-12 col-lg-5 col-xl-6">
                <figure className="choose__image">
                  <Image
                    className="/img-fluid"
                    src="/img/person-1.webp"
                    width={342}
                    height={498}
                    alt=""
                  />
                </figure>
              </div>
            </div>
          </section>
          <div className="black">
            <section className="versus">
              <div className="row">
                <div className="col col-12 col-md-5 col-lg-6">
                  <figure className="versus__image">
                    <Image
                      className="/img-fluid"
                      src="/img/viagra-and-cialis.jpg"
                      width={342}
                      height={310}
                      alt="Viagra vs Cialis"
                    />
                  </figure>
                </div>
                <div className="col col-12 col-md-7 col-lg-6">
                  <div className="versus__content">
                    <h2>Generic Viagra® vs&nbsp;Generic Cialis®</h2>
                    <p>
                      Sildenafil Citrate, the active ingredient in Viagra, is a
                      convenient treatment that can get you ready for sexual
                      activity in under 60 minutes, and can be taken as needed
                      only. Tadalafil, the active ingredient in Cialis, is a
                      practical option for those who prefer longer-lasting
                      medication that can be taken hours before sexual activity.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section className="how">
              <div className="row">
                <div className="col col-12">
                  <h2 className="how__heading">How LionsPrideRx Works</h2>
                </div>
                <div className="col col-12 col-md-6 col-lg-3">
                  <article className="how__section">
                    <figure>
                      <Image
                        className="/img-fluid"
                        src="/img/icon-5-minutes.png"
                        width={222}
                        height={222}
                        alt=""
                      />
                    </figure>
                    <h6>Complete Order in Under 5&nbsp;minutes</h6>
                    <p>
                      All you need to do is pick your preferred treatment and
                      fill out a simple health questionnaire that will be
                      reviewed by a US-licensed physician.
                    </p>
                  </article>
                </div>
                <div className="col col-12 col-md-6 col-lg-3">
                  <article className="how__section">
                    <figure>
                      <Image
                        className="/img-fluid"
                        src="/img/icon-health-review.png"
                        width={222}
                        height={222}
                        alt=""
                      />
                    </figure>
                    <h6>Valid Health Review</h6>
                    <p>
                      US-licensed physicians will review your information to
                      determine your compatibility with your selected treatment
                      option.
                    </p>
                  </article>
                </div>
                <div className="col col-12 col-md-6 col-lg-3">
                  <article className="how__section">
                    <figure>
                      <Image
                        className="/img-fluid"
                        src="/img/icon-free-shipping.png"
                        width={222}
                        height={222}
                        alt=""
                      />
                    </figure>
                    <h6>Free 2-day discreet shipping</h6>
                    <p>
                      Once approved, your preferred plan will be automatically
                      shipped to you, in discreet packaging. No more trips to
                      the pharmacy for your medication refills!
                    </p>
                  </article>
                </div>
                <div className="col col-12 col-md-6 col-lg-3">
                  <article className="how__section">
                    <figure>
                      <Image
                        className="/img-fluid"
                        src="/img/icon-treatment-plan.png"
                        width={222}
                        height={222}
                        alt=""
                      />
                    </figure>
                    <h6>12-Month Treatment Plan</h6>
                    <p>
                      All e-Prescriptions done with LionsPrideRx are valid for
                      12 months. Get a fresh supply of your preferred
                      E.D.&nbsp;treatment every month to stay active and ready
                      for anything!
                    </p>
                  </article>
                </div>
              </div>
            </section>
          </div>
          <div className="compare">
            <div className="compare__space">
              <table className="table table-dark compare__table">
                <thead>
                  <tr>
                    <th>
                      <div className="compare__logo" />
                    </th>
                    <td>
                      <div className="compare__bottles" />
                    </td>
                    <td>
                      <div className="compare__brand-a" />
                    </td>
                    <td>
                      <div className="compare__brand-b" />
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>
                      Affordable <span className="nobr">FDA-Approved</span>{" "}
                      E.D.&nbsp;medication
                    </th>
                    <td>
                      <div className="yes" />
                    </td>
                    <td>
                      <div className="no" />
                    </td>
                    <td>
                      <div className="no" />
                    </td>
                  </tr>
                  <tr>
                    <th>
                      100% Online – Order E.D.&nbsp;treatments from&nbsp;home
                    </th>
                    <td>
                      <div className="yes" />
                    </td>
                    <td>
                      <div className="no" />
                    </td>
                    <td>
                      <div className="yes" />
                    </td>
                  </tr>
                  <tr>
                    <th>Quick and simple health questionnaire</th>
                    <td>
                      <div className="yes" />
                    </td>
                    <td>
                      <div className="no" />
                    </td>
                    <td>
                      <div className="no" />
                    </td>
                  </tr>
                  <tr>
                    <th>
                      Evaluated by <span className="nobr">US-licensed</span>{" "}
                      physicians
                    </th>
                    <td>
                      <div className="yes" />
                    </td>
                    <td>
                      <div className="no" />
                    </td>
                    <td>
                      <div className="no" />
                    </td>
                  </tr>
                  <tr>
                    <th>
                      Dispensed by <span className="nobr">US-based</span>
                      pharmacy
                    </th>
                    <td>
                      <div className="yes" />
                    </td>
                    <td>
                      <div className="no" />
                    </td>
                    <td>
                      <div className="no" />
                    </td>
                  </tr>
                  <tr>
                    <th>Pay only for medication – No doctor&apos;s fees</th>
                    <td>
                      <div className="yes" />
                    </td>
                    <td>
                      <div className="no" />
                    </td>
                    <td>
                      <div className="no" />
                    </td>
                  </tr>
                  <tr>
                    <th>
                      No hidden <br />
                      charges
                    </th>
                    <td>
                      <div className="yes" />
                    </td>
                    <td>
                      <div className="yes" />
                    </td>
                    <td>
                      <div className="no" />
                    </td>
                  </tr>
                  <tr>
                    <th>
                      Flexible treatment plans for every budget and lifestyle
                    </th>
                    <td>
                      <div className="yes" />
                    </td>
                    <td>
                      <div className="no" />
                    </td>
                    <td>
                      <div className="no" />
                    </td>
                  </tr>
                  <tr>
                    <th>Free 2-day discreet&nbsp;shipping</th>
                    <td>
                      <div className="yes" />
                    </td>
                    <td>
                      <div className="no" />
                    </td>
                    <td>
                      <div className="yes" />
                    </td>
                  </tr>
                  <tr>
                    <th>Monthly replenishment plan</th>
                    <td>
                      <div className="yes" />
                    </td>
                    <td>
                      <div className="yes" />
                    </td>
                    <td>
                      <div className="yes" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <section className="licensed">
            <div className="row align-items-md-center align-items-xxl-start">
              <div className="col col-12 col-md-5 col-lg-6">
                <figure className="licensed__image">
                  <Image
                    className="/img-fluid"
                    src="/img/person-2.webp"
                    width={342}
                    height={504}
                    alt=""
                  />
                </figure>
              </div>
              <div className="col col-12 col-md-7 col-lg-6">
                <div className="licensed__content">
                  <h2>US-Licensed Physicians on LionsPrideRx</h2>
                  <p>
                    LionsPrideRx partners with a telemedicine service to connect
                    customers with US-licensed physicians that would determine
                    the appropriate E.D.&nbsp;treatment based on the customers’
                    lifestyle and needs. Through LionsPrideRx, you save $400-500
                    on doctor’s visits while making E.D. medication more
                    accessible, convenient, and affordable.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="faq">
            <div className="row justify-content-center">
              <div className="col col-12 col-lg-10 col-xl-9 col-xxl-8">
                <h2>Frequently Asked Questions</h2>
                <Accordion defaultActiveKey="0" flush>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>What is LionsPrideRx?</Accordion.Header>
                    <Accordion.Body>
                      LionsPrideRx is an online portal that connects you to
                      US-licensed physicians and partner online pharmacies in
                      the US to legally purchase FDA-approved E.D. treatments,
                      shipped discreetly to your home. LionsPrideRx offers
                      generic and branded E.D.&nbsp;medications such as Viagra
                      and Cialis to&nbsp;give you a wide range of choices to
                      help you manage E.D. effectively.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      {" "}
                      Can you purchase Viagra and Cialis without a prescription?
                    </Accordion.Header>
                    <Accordion.Body>
                      LionsPrideRx is an online portal that connects you to
                      US-licensed physicians and partner online pharmacies in
                      the US to legally purchase FDA-approved E.D. treatments,
                      shipped discreetly to your home. LionsPrideRx offers
                      generic and branded E.D.&nbsp;medications such as Viagra
                      and Cialis to&nbsp;give you a wide range of choices to
                      help you manage E.D. effectively.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      {" "}
                      How much Viagra should I take?
                    </Accordion.Header>
                    <Accordion.Body>
                      LionsPrideRx is an online portal that connects you to
                      US-licensed physicians and partner online pharmacies in
                      the US to legally purchase FDA-approved E.D. treatments,
                      shipped discreetly to your home. LionsPrideRx offers
                      generic and branded E.D.&nbsp;medications such as Viagra
                      and Cialis to&nbsp;give you a wide range of choices to
                      help you manage E.D. effectively.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>
                      Are e-Prescriptions valid?
                    </Accordion.Header>
                    <Accordion.Body>
                      LionsPrideRx is an online portal that connects you to
                      US-licensed physicians and partner online pharmacies in
                      the US to legally purchase FDA-approved E.D. treatments,
                      shipped discreetly to your home. LionsPrideRx offers
                      generic and branded E.D.&nbsp;medications such as Viagra
                      and Cialis to&nbsp;give you a wide range of choices to
                      help you manage E.D. effectively.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="4">
                    <Accordion.Header>
                      {" "}
                      How does LionsPrideRx’s treatment plan work?
                    </Accordion.Header>
                    <Accordion.Body>
                      LionsPrideRx is an online portal that connects you to
                      US-licensed physicians and partner online pharmacies in
                      the US to legally purchase FDA-approved E.D. treatments,
                      shipped discreetly to your home. LionsPrideRx offers
                      generic and branded E.D.&nbsp;medications such as Viagra
                      and Cialis to&nbsp;give you a wide range of choices to
                      help you manage E.D. effectively.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>

                <a href="order.html" className="btn btn-primary btn-lg">
                  Get Started Now
                </a>
              </div>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
}
