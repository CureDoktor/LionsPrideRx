import React from "react";
import LandingSection from "./components/LandingSection";
import SubLandingSection from "./components/Sublanding";
import Treatments from "./components/Treatments";
import PersonalizedPlans from "./components/PersonalizedPlans";
import Perscription from "./components/Perscription";
import Popular from "./components/Popular";
import ExploreTreatments from "./components/ExploreTreatments";
import FAQ from "./components/FAQ";

const NewHomepage = () => {
  return (
    <div>
      <LandingSection />
      <SubLandingSection />
      <Treatments />
      <PersonalizedPlans />
      <Perscription />
      <Popular />
      <FAQ />
      <ExploreTreatments />
    </div>
  );
};

export default NewHomepage;
