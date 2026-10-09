import React from "react";

function Stats() {
  return (
    <div className="container py-5">

      <div className="row align-items-center">

      

        <div className="col-lg-6 col-md-12 mb-5 mb-lg-0">

          <h2 className="fw-bold mb-5">
            Trust with Confidence
          </h2>

          <div className="mb-4">

            <h5 className="fw-semibold">
              Customer-first always
            </h5>

            <p className="text-muted">
              That's why 1.6+ crore customers trust Zerodha with over ₹6 lakh
              crores of equity investments, making us India's largest stock
              broker and contributing to 15% of all daily retail trading volume.
            </p>

          </div>

          <div className="mb-4">

            <h5 className="fw-semibold">
              No spam or gimmicks
            </h5>

            <p className="text-muted">
              No spam, no annoying notifications, and no unnecessary
              gamification. Just clean, reliable products designed for serious
              investors.
            </p>

          </div>

          <div className="mb-4">

            <h5 className="fw-semibold">
              The Zerodha ecosystem
            </h5>

            <p className="text-muted">
              Beyond trading, our ecosystem includes more than 30 fintech
              startups offering products and services for every investor.
            </p>

          </div>

          <div>

            <h5 className="fw-semibold">
              Do better with money
            </h5>

            <p className="text-muted">
              Features like Nudge and Kill Switch are designed to help investors
              make smarter financial decisions while reducing unnecessary risks.
            </p>

          </div>

        </div>

      

        <div className="col-lg-6 col-md-12 text-center">

          <img
            src="media/images/ecosystem.png"
            alt="Zerodha Ecosystem"
            className="img-fluid stats-image mb-4"
          />

          <div className="d-flex justify-content-center flex-wrap gap-4">

            <a
              href="#"
              className="text-decoration-none fw-semibold"
            >
              Explore our products
              <i className="fa-solid fa-arrow-right-long ms-2"></i>
            </a>

            <a
              href="#"
              className="text-decoration-none fw-semibold"
            >
              Try Kite demo
              <i className="fa-solid fa-arrow-right-long ms-2"></i>
            </a>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Stats;