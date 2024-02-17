import React from "react";
import Landing from "./components/Landing";
import styles from "./styles.module.scss";
import section1Src from "@public/img/product-landing/section-1.png";
import section2Src from "@public/img/product-landing/section-2.png";
import section3Src from "@public/img/product-landing/section-3.png";
import section4Src from "@public/img/product-landing/section-4.png";
import coverDesktopSrc from "@public/img/product-landing/cover-desktop.png";
import coverMobileSrc from "@public/img/product-landing/cover-mobile.png";
import Section from "./components/Section";
import Image from "next/image";
import Testimonials from "./components/Testimonials";
import GreatNews from "./components/GreatNews";
import FAQ from "./components/FAQ";

const SildenafilS2 = () => {
  return (
    <div>
      <Landing />
      <Section
        img={section1Src}
        title="Get harder erections"
        desc="SIldenafil is the active ingredient in Viagra. It helps increase blood flow and allows you to achieve harder erections in as little as 30 minutes from when you take it."
      />
      <Section
        img={section2Src}
        title="Stay harder for longer"
        desc="As long as you’re aroused, generic Viagra will get to work, allowing you to maintain peak erection quality for up to 4 hours from when you took your medication."
        reversed={true}
      />
      <div className={styles.cover}>
        <Image src={coverDesktopSrc} alt="" fill />
        <Image src={coverMobileSrc} alt="" fill />
      </div>
      <Section
        img={section3Src}
        title="It’s modern medicine"
        desc="SIldenafil is the active ingredient in Viagra. It helps increase blood flow and allows you to achieve harder erections in as little as 30 minutes from when you take it."
      />
      <Section
        className={styles.section4}
        img={section4Src}
        title="Generic Viagra vs. Viagra"
        desc="As long as you’re aroused, generic Viagra will get to work, allowing you to maintain peak erection quality for up to 4 hours from when you took your medication."
        reversed={true}
      />
      <Testimonials />
      <GreatNews />
      <FAQ />
      <GreatNews />
    </div>
  );
};

export default SildenafilS2;
