import React from "react";
import Hero from "./Hero";
import Awards from "./Awards";
import Stats from "./Stats";
import Pricing from "./Pricing";
import Education from "./Education";
import OpenAccount from "../OpenAccount";

function HomePage() {
  return (
    <main>

      <section className="hero-section">
        <Hero />
      </section>

      <section className="awards-section py-5">
        <Awards />
      </section>

      <section className="stats-section py-5">
        <Stats />
      </section>

      <section className="pricing-section py-5">
        <Pricing />
      </section>

      <section className="education-section py-5">
        <Education />
      </section>

      <section className="open-account-section py-5">
        <OpenAccount />
      </section>

    </main>
  );
}

export default HomePage;