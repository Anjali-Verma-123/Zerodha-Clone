import React from "react";

function Hero() {
  return (
    <section className="container py-5 border-bottom">
      <div className="row justify-content-center">
        <div className="col-lg-8 text-center">

          <h1 className="display-5 fw-bold mb-3">
            Zerodha Products
          </h1>

          <p className="fs-4 text-muted mb-4">
            Sleek, modern, and intuitive trading platforms
          </p>

          <p className="fs-5 text-secondary">
            Explore our{" "}
            <a
              href="#"
              className="hero-link text-decoration-none fw-semibold"
            >
              investment offerings
            </a>{" "}
            <i className="fa-solid fa-arrow-right-long ms-1"></i>
          </p>

        </div>
      </div>
    </section>
  );
}

export default Hero;