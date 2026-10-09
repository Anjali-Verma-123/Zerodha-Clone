import React from "react";

function Team() {
  return (
    <div className="container py-5">

      {/* Heading */}

      <div className="row border-top pt-5 mb-5">

        <div className="col-12 text-center">
          <h2 className="fw-bold">People</h2>
        </div>

      </div>

      {/* Team */}

      <div className="row align-items-center">

        {/* Left */}

        <div className="col-lg-5 col-md-12 text-center mb-5 mb-lg-0">

          <img
            src="media/images/nithinKamath.jpg"
            alt="Nithin Kamath"
            className="team-image img-fluid"
          />

          <h3 className="mt-4 fw-bold">
            Nithin Kamath
          </h3>

          <p className="text-muted">
            Founder & CEO
          </p>

        </div>

        {/* Right */}

        <div className="col-lg-7 col-md-12">

          <p className="team-text">
            Nithin bootstrapped Zerodha in 2010 with a vision to remove the
            barriers faced by traders in India. Since then, Zerodha has
            transformed the Indian broking industry with technology-driven
            investing.
          </p>

          <p className="team-text">
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC), contributing
            towards the growth of India's financial ecosystem.
          </p>

          <p className="team-text">
            Outside work, Nithin enjoys playing basketball and actively supports
            entrepreneurship and financial education.
          </p>

          <div className="mt-4 d-flex flex-wrap gap-4">

            <a href="#" className="text-decoration-none fw-semibold">
              Homepage
            </a>

            <a href="#" className="text-decoration-none fw-semibold">
              TradingQ&A
            </a>

            <a href="#" className="text-decoration-none fw-semibold">
              Twitter
            </a>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Team;