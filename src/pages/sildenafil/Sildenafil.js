import React from "react";

import bottleSrc from "@public/img/product-landing/sildenafil-fda.png";
import bottleMobileSrc from "@public/img/product-landing/sildenafil-fda-mobile.png";
import whychooseSildenafil from "@public/img/product-landing/why-choose-sildenafil.png";
import Landing from "./components/Landing";
import Discount from "./components/Discount";
import Testimonials from "./components/Testimonials";
import WhyChoose from "./components/WhyChoose";
import Questions from "./components/Questions";
import Order from "./components/Order";
import FAQ from "./components/FAQ";
import GetStarted from "./components/GetStarted";

const Sildenafil = () => {
  const questions = [
    {
      title: "Is it safe to purchase Viagra (sildenafil) online?",
      answer: (
        <>
          The online market is flooded with counterfeit Viagra pills, often
          peddled on platforms lacking any medical screening or review process.
          Opting for Lion&apos;s Pride Rx ensures your confidence in acquiring
          FDA-approved and U.S.-manufactured ED medication.
          <br className="desktop" />
          Our medications are dispensed by a U.S.-based pharmacy and discreetly
          shipped to your doorstep, eliminating the risks associated with
          counterfeit products.
        </>
      ),
    },
    {
      title: "How much is genuine Viagra/sildenafil?",
      answer: (
        <>
          Typically, the price of a 100mg Viagra pill in the United States
          hovers around $70-85. Buying Viagra the traditional way may accumulate
          costs exceeding $400 per month, inclusive of doctor fees and
          additional medical expenses.
          <br />
          <br />
          Lion&apos;s Pride Rx offers generic Viagra (Sildenafil Citrate) at
          significantly reduced costs. Recent estimates indicate customers enjoy
          savings of up to 90%, all while maintaining the expected levels of
          safety, potency, and effectiveness synonymous with its brand-name
          counterpart.
        </>
      ),
    },
    {
      title: (
        <>
          Is insurance required by
          <br /> Lion&apos;s Pride Rx?
        </>
      ),
      answer: (
        <>
          Lion&apos;s Pride Rx provides authentic FDA-approved ED medication,
          eliminating the burden of insurance and related fees. We&apos;ve
          streamlined every process to cut costs, ensuring your ED treatments
          and medication are both affordable and easily accessible.
          <br />
          <br />
          For continuous support with your ED needs, all Lion&apos;s Pride Rx
          customers enjoy around-the-clock access to U.S.-licensed healthcare
          professionals at no extra charge
        </>
      ),
    },
    {
      title: (
        <>
          Are Sildenafil Citrate pills the same
          <br /> as Viagra?
        </>
      ),
      answer:
        "Viagra, a brand-name drug developed by Pfizer, contains Sildenafil Citrate as its active ingredient, enabling it to effectively treat erectile dysfunction. Tablets of sildenafil citrate with identical dosages exhibit the same potency and effectiveness as their brand-name counterpart.",
    },
  ];

  return (
    <div>
      <Landing
        title={
          <>
            Generic Viagra
            <br /> <span>(Sildenafil Citrate)</span>
          </>
        }
        doses="4"
        mg="10"
        product={{ desktop: bottleSrc, mobile: bottleMobileSrc }}
      />
      <Discount />
      <Testimonials />
      <WhyChoose image={whychooseSildenafil} />
      <Questions questions={questions} />
      <Order />
      <FAQ />
      <GetStarted />
    </div>
  );
};

export default Sildenafil;
