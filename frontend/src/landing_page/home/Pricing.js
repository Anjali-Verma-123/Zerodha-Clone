import React from "react";

function Pricing() {
  return (
    <div className="container py-5">

      <div className="row align-items-center">

      

        <div className="col-lg-5 col-md-12 mb-5 mb-lg-0">

          <h2 className="fw-bold mb-4">
            Unbeatable Pricing
          </h2>

          <p className="text-muted mb-4">
            We pioneered the concept of discount broking and price transparency
            in India. Enjoy flat pricing with absolutely no hidden charges,
            making investing affordable for everyone.
          </p>

          <a
            href="#"
            className="text-decoration-none fw-semibold"
          >
            See Pricing
            <i className="fa-solid fa-arrow-right-long ms-2"></i>
          </a>

        </div>

        

        <div className="col-lg-7 col-md-12">

          <div className="row g-4">

            <div className="col-md-6">

              <div className="pricing-card text-center h-100">

                <h1 className="display-4 fw-bold text-primary">
                  ₹0
                </h1>

                <p className="text-muted mb-0">
                  Free equity delivery
                  <br />
                  and direct mutual funds
                </p>

              </div>

            </div>

            <div className="col-md-6">

              <div className="pricing-card text-center h-100">

                <h1 className="display-4 fw-bold text-primary">
                  ₹20
                </h1>

                <p className="text-muted mb-0">
                  Flat fee for
                  <br />
                  Intraday & F&O trades
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Pricing;