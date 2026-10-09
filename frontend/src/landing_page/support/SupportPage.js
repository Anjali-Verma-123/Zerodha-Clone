import React from "react";
import Hero from "./Hero";
import CreateTicket from "./CreateTicket";

function SupportPage() {
  return (
    <main>
      <Hero />

      <section className="py-5">
        <CreateTicket />
      </section>
    </main>
  );
}

export default SupportPage;