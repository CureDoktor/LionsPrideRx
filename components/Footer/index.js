import Link from "next/link";
import Head from "next/head";
import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import LegitScriptCertificate from "../LegitScriptCertificate";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Router from "next/router";
import Script from "next/script";
import Image from "next/image";
import styles from "./styles.module.scss";
//import styles from "./styles.css";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Black_And_White_Picture } from "next/font/google";
export default function Footer(props) {
  return (
    <>
      <Script src="https://www.hipaatraining.com/badge-script" />
      <footer className="footer">
        <div className="container">
          <p style={{ color: "gray", fontSize: "14px", paddingBottom: "50px" }}>
            To obtain ED treatments, one must undergo an online consultation
            with a healthcare provider and receive a prescription. The cost per
            dose is determined by the product and subscription plan selected.
            Lions Pride USA LLC is not affiliated with any manufacturers of the
            Prescription Medications mentioned, and the trademarks and logos
            belong to their respective owners. Lions Pride USA LLC does not
            provide advice, endorsements, or recommendations for any specific
            prescription drug, pharmacy, or other information. It is advised to
            seek medical advice before making any changes to medication or
            prescription. Lions Pride USA LLC is not an insurance provider or
            Medicaid/Medicare prescription drug plan. Users must pay the price
            presented during the checkout process.
          </p>
          <div className="row">
            <div className="col col-12 col-md-6 col-lg-7 col-xl-8">
              <div className="d-md-flex">
                <figure className="footer__logo">
                  <Image
                    className="/img-fluid"
                    src="/img/logo.svg"
                    width={256}
                    height={44}
                    alt="LionsPrideRX"
                  />
                </figure>
                <div className="mt-2 ps-md-4">
                  <div className="pb-4 d-flex">
                    <Image
                      src="/assets/amex.jpg"
                      height={40}
                      width={70}
                      className="pe-1"
                    />
                    <Image
                      src="/assets/discover.jpg"
                      height={40}
                      width={70}
                      className="pe-1"
                    />
                    <Image
                      src="/assets/mastercard.jpg"
                      height={40}
                      width={70}
                      className="pe-1"
                    />
                    <Image src="/assets/visa.jpg" height={40} width={70} />
                  </div>
                </div>
              </div>
              <div className="footer__phone d-md-flex">
                <div>
                  <p className="h5">Contact Us</p>
                  <Link href="tel:1-888-802-9541">1-888-802-9541</Link>
                </div>
                <div className="ps-5 pb-2 pt-2">
                  <LegitScriptCertificate />
                </div>
                <div
                  className="hipaa-badge ps-md-5"
                  data-href="https://www.hipaatraining.com/badge"
                  data-color="orig"
                  data-type="5"
                  data-width="200px"
                  data-height="120px"
                >
                  {" "}
                </div>
              </div>
              {/* <div className="footer__payment">
                <p className="h5">Payment Methods</p>
                <Image
                  src="/img/payment-methodsv2.png"
                  className="/img-fluid"
                  width={340}
                  height={40}
                  alt=""
                />
              </div> */}
            </div>
            <div className="col col-sm-5 col-md-auto col-lg-2">
              <nav className="footer__menu">
                <h5>Our Site</h5>
                <ul>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/how-it-works">How it Works</Link>
                  </li>
                  <li>
                    <Link href="/faq">FAQs</Link>
                  </li>

                  {/* <li>
                    <Link href="/about">About Us</Link>
                  </li> */}
                  <li>
                    <Link href="/contact">Contact</Link>
                  </li>

                  {/* <li>
                    <Link href="/blog">Blog</Link>
                  </li> */}
                </ul>
              </nav>
            </div>
            <div className="col col-xl-2">
              <nav className="footer__menu">
                <h5>About</h5>
                <ul>
                  <li>
                    <Link href="/terms">Terms &amp; Conditions</Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="/telehealth">Consent To Telehealth</Link>
                  </li>
                  {/* <li>
                    <Link href="/sitemap">Sitemap</Link>
                  </li> */}
                </ul>
              </nav>
            </div>
            <div className="col col-12 col-md-12">
              <p className="footer__copyright">
                LionsPrideRx. © 2023. All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
