import React from "react";
import Container from "react-bootstrap/Container";
import styles from './header.module.scss';
import { useRouter } from "next/router";
import Link from "next/link";

export default function Header(props) {
  const router = useRouter();
  const changingSomething = (event) => {
    console.log(event);
  };
  const sentToLogin = () => {
    props.logout();
  };
  return (
      <>
        <header className={`${styles['header']} w-100 d-block`}>
          <Container>
            <div className={`d-flex flex-wrap justify-content-between`}>
              <div className={styles['logo']}><Link href={"/"}><img src="/img/header/logo.svg" alt=""/></Link></div>
              <div className={styles['header-tel']}>QUESTIONS?<br/><a href="tel: 1-888-534-8977" className="fw-bold">1-888-534-8977</a></div>
            </div>
          </Container>
        </header>
      </>
  );
}
