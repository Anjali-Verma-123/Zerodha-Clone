import React from "react";
import Hero from "./Hero";
import Team from "./Team";

function AboutPage() {
  return (
    <main>

      <section className="about-hero">
        <Hero />
      </section>

      <section className="team-section py-5">
        <Team />
      </section>

    </main>
  );
}

export default AboutPage;