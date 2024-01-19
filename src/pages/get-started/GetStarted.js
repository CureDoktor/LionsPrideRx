import React from "react";
import LandingSection from "./components/LandingSection";
import Sublanding from "./components/Sublanding";
import Details from "./components/Details";
import StartHere from "./components/StartHere";
import Steps from "./components/Steps";
import FAQ from "./components/FAQ";
import GetStartedSection from "./components/GetStarted";

const GetStarted = () => {
  return (
    <div>
      <LandingSection />
      <Sublanding />
      <Details />
      <StartHere />
      <Steps />
      <FAQ />
      <GetStartedSection />
    </div>
  );
};

export default GetStarted;
