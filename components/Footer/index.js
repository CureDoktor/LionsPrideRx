import Link from "next/link";
import Head from "next/head";
import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Router from "next/router";
import Image from "next/image";
import styles from "./styles.module.scss";
//import styles from "./styles.css";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Black_And_White_Picture } from "next/font/google";

export default function Footer(props) {
  return (
    <>
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
            pres ented during the checkout process.
          </p>
          <div className="row">
            <div className="col col-12 col-md-6 col-lg-7 col-xl-8">
              <figure className="footer__logo">
                <Image
                  className="/img-fluid"
                  src="/img/logo.svg"
                  width={256}
                  height={44}
                  alt="LionsPrideRX"
                />
              </figure>
              <div className="footer__phone">
                <p className="h5">Contact Us</p>
                <a href="tel:1-800-234-7654">1-800-234-7654</a>
              </div>
              <div className="footer__payment">
                <p className="h5">Payment Methods</p>
                <Image
                  src="/img/payment-methodsv2.png"
                  className="/img-fluid"
                  width={340}
                  height={40}
                  alt=""
                />
              </div>
            </div>
            <div className="col col-sm-5 col-md-auto col-lg-2">
              <nav className="footer__menu">
                <h5>Our Site</h5>
                <ul>
                  <li>
                    <a href="./">Home</a>
                  </li>
                  <li>
                    <a href="/about">About Us</a>
                  </li>
                  <li>
                    <a href="/contact">Contact</a>
                  </li>
                  <li>
                    <a href="#">FAQs</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col col-xl-2">
              <nav className="footer__menu">
                <h5>About</h5>
                <ul>
                  <li>
                    <a href="/terms">Terms &amp; Conditions</a>
                  </li>
                  <li>
                    <a href="/privacy-policy">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="/telehealth">Consent To Telehealth</a>
                  </li>
                  <li>
                    <a href="#">Sitemap</a>
                  </li>
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
