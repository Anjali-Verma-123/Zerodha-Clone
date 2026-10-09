import React from "react";
import Hero from "./Hero";
import Brokerage from "./Brokerage";
import OpenAccount from "../OpenAccount";

function PricingPage() {
  return (
    <>
      <Hero />

      <div className="my-5">
        <OpenAccount />
      </div>

      <Brokerage />
    </>
  );
}

export default PricingPage;