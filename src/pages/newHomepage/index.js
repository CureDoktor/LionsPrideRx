// import React from "react";
// import styles from "../styles/home.module.scss";
// import Image from "next/image";
// import home1 from "../../public/img/home-1.png";
// import home2 from "../../public/img/home-2.png";
// import home3 from "../../public/img/home-3.png";
// import home4 from "../../public/img/home-4.png";
// import home5 from "../../public/img/home-5.png";
// import physician from "../../public/img/physician.png";
// import pharmacy from "../../public/img/pharmacy.png";
// import fdaApproved from "../../public/img/fda-approved.png";
// import radio from "../../public/img/radio.png";
// import packageIcon from "../../public/img/package.png";
// import handshake from "../../public/img/handshake.png";
// import { Col, Container, Row } from "react-bootstrap";
// import Featured from "../components/Featured";
// import erectileDysfunctionSrc from "../../public/img/erectile-dysfunction.png";
// import mensHairLossSrc from "../../public/img/mens-hair-loss.png";
// import testosteroneSrc from "../../public/img/testosterone.png";
// import weightLossSrc from "../../public/img/weight-loss.png";
// import bottleViagra from "../../public/img/bottle-viagra.png";
// import bottleCialis from "../../public/img/bottle-cialis.png";
// import bottleFinasteride from "../../public/img/bottle-finasteride.png";
// import bottleEnclomiphene from "../../public/img/bottle-enclomiphene.png";
// import bottleShredProtocol from "../../public/img/bottle-shred-protocol.png";
// import howLionsPrideWorks1Src from "../../public/img/how-lions-pride-works-1.png";
// import howLionsPrideWorks2Src from "../../public/img/how-lions-pride-works-2.png";
// import howLionsPrideWorks3Src from "../../public/img/how-lions-pride-works-3.png";

// const Home = () => {
//   const cards = [
//     {
//       src: home1,
//       alt: "Couple laying on the bed",
//       title: (
//         <>
//           Erectile
//           <br />
//           Dysfunction
//         </>
//       ),
//     },
//     {
//       src: home2,
//       alt: "Guy washing hair",
//       title: (
//         <>
//           Men&apos;s
//           <br />
//           Hair Loss
//         </>
//       ),
//     },
//     {
//       src: home3,
//       alt: "Guy lifting weights",
//       title: (
//         <>
//           Testosterone
//           <br />
//           Support
//         </>
//       ),
//     },
//     {
//       src: home4,
//       alt: "Guy standing on a scale",
//       title: (
//         <>
//           Weight
//           <br />
//           Loss
//         </>
//       ),
//     },
//     {
//       src: home5,
//       alt: "Pills",
//       title: (
//         <>
//           Compound
//           <br />
//           Medication
//         </>
//       ),
//     },
//   ];
//   const erectileDysfunctionProducts = [
//     {
//       src: bottleViagra,
//       alt: "Bottle of generic viagra",
//       name: "Sildenafil Citrate",
//       subheader: "(Active ingredient in Viagra)",
//       description:
//         "Sildenafil Citrate is an FDA-approved treatment for erectile dysfunction, first popularized by the brand-name Viagra. Lion’s Pride Rx offers generic Sildenafil Citrate tablets, which offer the same potency and effectiveness, but at only 10% of the cost, compared to its brand-name counterpart.",
//       link: "#",
//     },
//     {
//       src: bottleCialis,
//       alt: "Bottle of generic cialis",
//       name: "Generic Cialis",
//       subheader: "(Tadalafil)",
//       description:
//         "Tadalafil is an FDA-approved treatment for erectile dysfunction that became known as a practical treatment choice because of its prolonged active duration. Lion’s Pride Rx offers the same potency, effectiveness, and effective duration, but with significant savings compared to its brand-name counterpart.",
//       link: "#",
//     },
//   ];
//   const mensHairLossProducts = [
//     {
//       src: bottleFinasteride,
//       alt: "Bottle of finasteride",
//       name: "Finasteride",
//       description:
//         "Finasteride is an effective, FDA-approved treatment for male-pattern hair loss linked to dihydrotestosterone (DHT). Finasteride inhibits DHT to promote natural hair growth and slow down hair loss in men.",
//       link: "#",
//     },
//   ];
//   const testosteroneProducts = [
//     {
//       src: bottleEnclomiphene,
//       alt: "Bottle of enclomiphene",
//       name: "Enclomiphene",
//       description:
//         "Enclomiphene is a type of selective estrogen receptor modulator (SERM) that helps men to increase testosterone levels without steroids that mimic the effects of testosterone. Enclomiphene blocks the conversion of testosterone to estrogen, allowing for the natural production of testosterone while building up testosterone levels.",
//       link: "#",
//     },
//   ];
//   const weightLossProducts = [
//     {
//       src: bottleShredProtocol,
//       alt: "Bottle of enclomiphene",
//       name: "Shred System",
//       description: (
//         <>
//           The Shred Protocol is a combined treatment of Acarbose, Orlistat, and
//           Naltrexone, to dramatically stimulate weight loss through blood
//           glucose management, reduced fat absorption, and appetite suppression.{" "}
//           <br />
//           <br />
//           The Shred System is a compound treatment of Orlistat, Naltrexone, and
//           Acarbose, to promote weight loss and accelerated metabolism by
//           promoting ideal blood glucose management, minimal fat absorption, and
//           appetite suppression.
//         </>
//       ),
//       link: "#",
//     },
//   ];
//   return (
//     <div>
//       <section className={styles.landing}>
//         <Container>
//           <Row>
//             <Col>
//               <h1 className={styles.heading}>
//                 Lion’s Pride Rx is the #1 Online Portal for{" "}
//                 <span>Men’s Prescription Medication Needs</span>
//               </h1>
//             </Col>
//           </Row>
//           <Row>
//             <Col>
//               <h4 className={styles.subheading}>Simple. Affordable. Secure.</h4>
//             </Col>
//           </Row>
//           <Row style={{ rowGap: 25 }}>
//             {cards.map((card, i) => (
//               <Col key={i} lg md={4} xs={6}>
//                 <div className={styles.card}>
//                   <div className={styles.cardImage}>
//                     <Image
//                       src={card.src}
//                       alt={card.alt}
//                       fill
//                       style={{ objectFit: "cover" }}
//                     />
//                   </div>
//                   <div className={styles.cardContent}>
//                     <span>{card.title}</span>
//                     <svg
//                       width="15"
//                       height="25"
//                       viewBox="0 0 58 101"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         d="M5 5.5L50 50.5L5 95.5"
//                         stroke="#EF2929"
//                         stroke-width="10"
//                         stroke-linecap="round"
//                       />
//                     </svg>
//                   </div>
//                 </div>
//               </Col>
//             ))}
//           </Row>
//           <Row>
//             <Col xs={10}>
//               <button className={styles.cta}>Find my treatment</button>
//             </Col>
//           </Row>
//         </Container>
//       </section>
//       <section className={styles.licences}>
//         <Container>
//           <Row className={styles.chips} style={{ rowGap: 20 }}>
//             <Col xs={12} lg={4}>
//               <div className={styles.cta}>
//                 <Image
//                   src={physician}
//                   alt="physician icon"
//                   width="30px"
//                   height="30px"
//                   style={{ marginRight: 10 }}
//                 />
//                 US-licensed Physicians
//               </div>
//             </Col>
//             <Col xs={12} lg={4}>
//               <div className={styles.cta}>
//                 <Image
//                   src={pharmacy}
//                   alt="physician icon"
//                   width="30px"
//                   height="30px"
//                   style={{ marginRight: 10 }}
//                 />
//                 US-based Pharmacy
//               </div>
//             </Col>
//             <Col xs={12} lg={4}>
//               <div className={styles.cta}>
//                 <Image
//                   src={fdaApproved}
//                   alt="physician icon"
//                   width="30px"
//                   height="30px"
//                   style={{ marginRight: 10 }}
//                 />
//                 FDA-Approved Medication
//               </div>
//             </Col>
//           </Row>
//         </Container>
//         <hr />
//       </section>
//       <Featured
//         src={erectileDysfunctionSrc}
//         alt="Couple laying on bed"
//         title="Erectile Dysfunction"
//         description="Lion’s Pride Rx makes erectile dysfunction treatments simple, convenient, affordable. Get the right treatment for erectile dysfunction with US-licensed physicians and FDA-approved medication at the comfort and privacy of your home."
//         products={erectileDysfunctionProducts}
//       />
//       <Featured
//         variant="inverted"
//         color="gray"
//         src={mensHairLossSrc}
//         alt="Guy washing he's hair"
//         title="Men’s Hair Loss"
//         description="Lion’s Pride Rx offers premium US-made treatments for male-pattern hair loss (androgenic alopecia) completely online."
//         products={mensHairLossProducts}
//       />
//       <Featured
//         src={testosteroneSrc}
//         alt="Guy washing he's hair"
//         title="Testosterone"
//         description="Lion’s Pride Rx offers premium, nonsteroidal US-made treatments that help men to boost testosterone levels, and maintain optimal hormone balance for improved mood, libido, and muscle performance."
//         products={testosteroneProducts}
//       />
//       <Featured
//         variant="inverted"
//         color="gray"
//         src={weightLossSrc}
//         alt="Guy on a boat"
//         title="Weight Loss"
//         description="Lion’s Pride Rx offers advanced weight loss compound treatments to help men and women achieve healthy weight goals."
//         products={weightLossProducts}
//       />
//       <section className={styles.howLionsPrideWorks}>
//         <Container>
//           <Row>
//             <Col>
//               <h1 className={styles.heading}>How Lion&apos;s Pride Rx Works</h1>
//             </Col>
//           </Row>
//           <Row style={{ rowGap: 20 }}>
//             <Col xs={12} lg={4}>
//               <div className={styles.item}>
//                 <div className={styles.image}>
//                   <Image src={howLionsPrideWorks1Src} alt="science" fill />
//                 </div>
//                 <div className={styles.content}>
//                   <div className={styles.number}>01</div>
//                   <div>
//                     <h5>Find your treatment</h5>
//                     <hr />
//                     <p>
//                       Discover the ideal treatment that suits your needs by
//                       browsing through Lion’s Pride Rx’s wide selection of
//                       available treatments.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </Col>
//             <Col xs={12} lg={4}>
//               <div className={styles.item}>
//                 <div className={styles.image}>
//                   <Image src={howLionsPrideWorks2Src} alt="science" fill />
//                 </div>
//                 <div className={styles.content}>
//                   <div className={styles.number}>02</div>
//                   <div>
//                     <h5>Online health survey</h5>
//                     <hr />
//                     <p>
//                       Fill out a quick 3-minute online health survey that will
//                       be reviewed by your assigned US-licensed physician to
//                       determine the proper treatment and medication based on
//                       your current health and needs.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </Col>
//             <Col xs={12} lg={4}>
//               <div className={styles.item}>
//                 <div className={styles.image}>
//                   <Image src={howLionsPrideWorks3Src} alt="delivery" fill />
//                 </div>
//                 <div className={styles.content}>
//                   <div className={styles.number}>03</div>
//                   <div>
//                     <h5>Finalize your order</h5>
//                     <hr />
//                     <p>
//                       If approved, you can proceed with selecting your available
//                       treatment options and finalize your order. Once completed,
//                       your order will be shipped to you via FREE discreet
//                       shipping.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </section>
//       <section className={styles.treatment}>
//         <Container>
//           <Row>
//             <Col>
//               <h1 className={styles.heading}>
//                 Lion’s Pride Rx is your #1 Choice for Convenient and Affordable
//                 Medication.
//               </h1>
//             </Col>
//           </Row>
//           <Row
//             className={styles.chips}
//             style={{ rowGap: 20, marginBottom: 55 }}
//           >
//             <Col xs={12} md={6} lg={5} xl={4}>
//               <div className={styles.cta}>
//                 <Image
//                   src={radio}
//                   alt="radio signal icon"
//                   width="30px"
//                   height="30px"
//                   style={{ marginRight: 10 }}
//                 />
//                 100% Online healthcare platform
//               </div>
//             </Col>
//             <Col xs={12} md={6} lg={5} xl={4}>
//               <div className={styles.cta}>
//                 <Image
//                   src={physician}
//                   alt="physician icon"
//                   width="30px"
//                   height="30px"
//                   style={{ marginRight: 10 }}
//                 />
//                 US-licensed Physicians
//               </div>
//             </Col>
//             <Col xs={12} md={6} lg={5} xl={4}>
//               <div className={styles.cta}>
//                 <Image
//                   src={fdaApproved}
//                   alt="physician icon"
//                   width="30px"
//                   height="30px"
//                   style={{ marginRight: 10 }}
//                 />
//                 FDA-Approved Medication
//               </div>
//             </Col>
//             <Col xs={12} md={6} lg={5} xl={4}>
//               <div className={styles.cta}>
//                 <Image
//                   src={pharmacy}
//                   alt="physician icon"
//                   width="30px"
//                   height="30px"
//                   style={{ marginRight: 10 }}
//                 />
//                 US-based Pharmacy
//               </div>
//             </Col>
//             <Col xs={12} md={6} lg={5} xl={4}>
//               <div className={styles.cta}>
//                 <Image
//                   src={packageIcon}
//                   alt="package icon"
//                   width="30px"
//                   height="30px"
//                   style={{ marginRight: 10 }}
//                 />
//                 Discreet shipping
//               </div>
//             </Col>
//             <Col xs={12} md={6} lg={5} xl={4}>
//               <div className={styles.cta}>
//                 <Image
//                   src={handshake}
//                   alt="physician icon"
//                   width="30px"
//                   height="30px"
//                   style={{ marginRight: 10 }}
//                 />
//                 Ongoing care
//               </div>
//             </Col>
//           </Row>
//           <Row>
//             <Col>
//               <h1 className={styles.subheading}>Start your treatment today.</h1>
//             </Col>
//           </Row>
//           <Row>
//             <Col xs={12} sm={10} lg={6}>
//               <button className={styles.cta}>Find my treatment</button>
//             </Col>
//           </Row>
//         </Container>
//       </section>
//     </div>
//   );
// };

// export default Home;

import { React } from "react";

export default function newHomepage() {
  return <div></div>;
}
