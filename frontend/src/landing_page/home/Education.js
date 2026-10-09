import React from "react";

function Education() {
  return (
    <div className="container py-5">

      <div className="row align-items-center">

      

        <div className="col-lg-6 col-md-12 text-center mb-5 mb-lg-0">

          <img
            src="media/images/education.svg"
            alt="Market Education"
            className="img-fluid education-img"
          />

        </div>

        

        <div className="col-lg-6 col-md-12">

          <h2 className="fw-bold mb-4">
            Free and Open Market Education
          </h2>

          <p className="text-muted mb-4">
            Varsity is the world's largest online stock market education
            platform, covering everything from investing basics to advanced
            trading strategies through easy-to-understand lessons.
          </p>

          <a
            href="#"
            className="text-decoration-none fw-semibold"
          >
            Varsity
            <i className="fa-solid fa-arrow-right-long ms-2"></i>
          </a>

          <p className="text-muted mt-5 mb-4">
            TradingQ&A is India's most active trading and investing community,
            where you can ask questions, learn from experienced traders, and
            discuss market-related topics.
          </p>

          <a
            href="#"
            className="text-decoration-none fw-semibold"
          >
            TradingQ&A
            <i className="fa-solid fa-arrow-right-long ms-2"></i>
          </a>

        </div>

      </div>

    </div>
  );
}

export default Education;