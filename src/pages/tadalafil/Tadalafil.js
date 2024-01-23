import React from "react";

import bottleSrc from "@public/img/product-landing/tadalafil-fda.png";
import bottleMobileSrc from "@public/img/product-landing/tadalafil-fda-mobile.png";
import whychooseTadalafil from "@public/img/product-landing/why-choose-tadalafil.png";
import Landing from "./components/Landing";
import Discount from "./components/Discount";
import Testimonials from "./components/Testimonials";
import WhyChoose from "./components/WhyChoose";
import Questions from "./components/Questions";
import Order from "./components/Order";
import FAQ from "./components/FAQ";
import GetStarted from "./components/GetStarted";

const Tadalafil = () => {
  const questions = [
    {
      title: (
        <>
          Is it safe to purchase Cialis
          <br /> (Tadalafil) online?
        </>
      ),
      answer: (
        <>
          The online market is flooded with counterfeit Cialis pills, often
          peddled on platforms lacking any medical screening or review
          <br className="desktop" /> process. Opting for Lion’s Pride Rx ensures
          your confidence in acquiring FDA-approved and U.S.-manufactured ED
          medication.
          <br className="desktop" />
          Our medications are dispensed by a U.S.-based pharmacy and discreetly
          shipped to your doorstep, eliminating the risks
          <br className="desktop" /> associated with counterfeit products.
        </>
      ),
    },
    {
      title: "How much is genuine Cialis/Tadalafil?",
      answer: (
        <>
          Typically, the price of a 10mg Cialis pill in the United States hovers
          around $70-85. Buying Cialis the traditional way may accumulate costs
          exceeding $400 per month, inclusive of doctor fees and additional
          medical expenses.
          <br />
          <br />
          Lion’s Pride Rx offers generic Cialis (Tadalafil) at significantly
          reduced costs. Recent estimates indicate customers enjoy savings of up
          to 90%, all while maintaining the expected levels of safety, potency,
          and effectiveness synonymous with its brand-name counterpart.
        </>
      ),
    },
    {
      title: (
        <>
          Is insurance required by
          <br /> Lion’s Pride Rx?
        </>
      ),
      answer: (
        <>
          Lion’s Pride Rx provides authentic FDA-approved ED medication,
          eliminating the burden of insurance and related fees. We've
          streamlined every process to cut costs, ensuring your ED treatments
          and medication are both affordable and easily accessible.
          <br />
          <br />
          For continuous support with your ED needs, all Lion’s Pride Rx
          customers enjoy around-the-clock access to U.S.-licensed healthcare
          professionals at no extra charge
        </>
      ),
    },
    {
      title: (
        <>
          Are Tadalafil pills the same as
          <br /> Cialis?
        </>
      ),
      answer: (
        <>
          Cialis, a brand-name drug developed by Eli Lilly, contains Tadalafil
          as its active ingredient, enabling it to effectively treat erectile
          dysfunction. Tablets of Tadalafil with identical dosages exhibit the
          same potency and effectiveness, as well the long-lasting effects,
          which Cialis is best known for.
        </>
      ),
    },
  ];

  return (
    <div>
      <Landing
        title={
          <>
            Generic Cialis <span>(Tadalafil)</span>
          </>
        }
        doses="4"
        mg="10"
        product={{ desktop: bottleSrc, mobile: bottleMobileSrc }}
      />
      <Discount />
      <Testimonials />
      <WhyChoose image={whychooseTadalafil} />
      <Questions questions={questions} />
      <Order />
      <FAQ />
      <GetStarted />
    </div>
  );
};

export default Tadalafil;
