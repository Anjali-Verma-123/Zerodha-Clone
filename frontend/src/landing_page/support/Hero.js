import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id ="supportHero">
      <div className="p-4 m-3" id="supportWrapper">
          <h1 className="text-muted">Support Portal</h1>
          <button className="btn btn-primary"
           >
            My tickets
          </button>
      </div>
      <div className = "row p-3 m-3" id = "supportInput">
        <input placeholder="Eg: How do I open my account, How do i activate F&O..."/>
      </div>
    </section>
  );
}

export default Hero;
