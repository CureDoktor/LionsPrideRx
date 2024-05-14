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
export default function FooterNew(props) {
  return (
      <>
        <footer className={`${styles['footer']} w-100 d-flex`}>
          <Container className={styles['container']}>
            <div className={`${styles['footer-top']} d-flex flex-wrap justify-content-between`}>
              <div className={`${styles['footer-top-left']} w-100`}>
                <div className={`w-100 d-flex flex-wrap justify-content-between`}>
                  <div className={`${styles['footer-logo']}`}><img src="/img/footer/logo-white.svg" alt=""/></div>
                  <div className={`${styles['footer-tel']} fw-bold d-lg-none`}> QUESTIONS?<br/><a href="tel:1-888-534-8977">1-888-802-9541</a></div>
                </div>
                <p>Your fast and affordable source for ED treatment. Delivered discreetly to your door.</p>
                <div className={`w-100 d-flex flex-wrap justify-content-between`}>
                  <div className={`${styles['footer-tel']} fw-bold d-none d-lg-block`}> QUESTIONS?<br/><a href="tel:1-888-534-8977">1-888-802-9541</a></div>
                  <div className={`${styles['card-box']}`}>
                    <div className={`${styles['title']} fw-bold`}>PAYMENT METHODS</div>
                    <div className={`${styles['card-img']}`}><img src="/img/footer/card.png" alt=""/></div>
                  </div>
                </div>
              </div>
              <div className={`${styles['footer-top-right']} w-100`}>
                <div className={`w-100 d-flex flex-wrap justify-content-between`}>
                  <div className={`${styles['menu-col']}`}>
                    <div className={`${styles['title']} fw-bold`}>Our Site</div>
                    <div className={`${styles['footer-nav']}`}>
                      <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/faq">FAQs</Link></li>
                      </ul>
                    </div>
                  </div>
                  <div className={`${styles['menu-col']}`}>
                    <div className={`${styles['title']} fw-bold`}>About</div>
                    <div className={`${styles['footer-nav']}`}>
                      <ul>
                        <li><Link href="/about">About LionsPride Rx</Link></li>
                        <li><Link href="/terms">Terms &amp; Conditions</Link></li>
                        <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                        <li><a href="#">Site Map</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className={`${styles['cerified-logo']} d-block`}><img src="/img/footer/cerified-logo.png" alt=""/></div>
              </div>
            </div>
            <div className={`${styles['footer-bottom']} w-100 d-flex flex-wrap text-center justify-content-between`}>
              <div className={`${styles['copyright']}`}>LionsPride Rx. &copy; 2024. All Rights Reserved</div>
              <div className={`${styles['footer-social-media']}`}>
                <a href="#"><img src="/img/footer/icon-facebook.png" alt=""/></a>
                <a href="#"><img src="/img/footer/icon-twitter.png" alt=""/></a>
                <a href="#"><img src="/img/footer/icon-linkedin.png" alt=""/></a>
              </div>
            </div>
          </Container>
        </footer>
      </>
  );
}
