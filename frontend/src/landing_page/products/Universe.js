import React from "react";
import { Link } from "react-router-dom";


function Universe() {
  return (
    <section className="container py-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold">The Zerodha Universe</h2>

        <p
          className="text-muted mx-auto"
          style={{ maxWidth: "700px", lineHeight: "1.8" }}
        >
          Extend your trading and investment experience even further with our
          trusted partner platforms.
        </p>
      </div>

      <div className="row g-4">

        <div className="col-lg-4 col-md-6">
          <div className="card border-0 shadow-sm h-100 text-center p-4">
            <img
              src="media/images/smallcase-logo.png"
              className="img-fluid mx-auto mb-3"
              style={{ height: "60px", objectFit: "contain" }}
              alt="Smallcase"
            />
            <p className="text-muted mb-0">
              Thematic investing platform that helps you invest in diversified
              baskets of stocks and ETFs.
            </p>
          </div>
        </div>

        <div className="col-lg-4 col-md-6">
          <div className="card border-0 shadow-sm h-100 text-center p-4">
            <img
              src="media/images/streakLogo.png"
              className="img-fluid mx-auto mb-3"
              style={{ height: "60px", objectFit: "contain" }}
              alt="Streak"
            />
            <p className="text-muted mb-0">
              Create, test and deploy trading strategies without writing a
              single line of code.
            </p>
          </div>
        </div>

        <div className="col-lg-4 col-md-6">
          <div className="card border-0 shadow-sm h-100 text-center p-4">
            <img
              src="media/images/zerodhaFundhouse.png"
              className="img-fluid mx-auto mb-3"
              style={{ height: "60px", objectFit: "contain" }}
              alt="Fund House"
            />
            <p className="text-muted mb-0">
              Transparent index funds designed to help you achieve your
              long-term financial goals.
            </p>
          </div>
        </div>

        <div className="col-lg-4 col-md-6">
          <div className="card border-0 shadow-sm h-100 text-center p-4">
            <img
              src="media/images/sensibullLogo.svg"
              className="img-fluid mx-auto mb-3"
              style={{ height: "60px", objectFit: "contain" }}
              alt="Sensibull"
            />
            <p className="text-muted mb-0">
              Advanced options trading platform with strategy builder and market
              analysis tools.
            </p>
          </div>
        </div>

        <div className="col-lg-4 col-md-6">
          <div className="card border-0 shadow-sm h-100 text-center p-4">
            <img
              src="media/images/tijori.svg"
              className="img-fluid mx-auto mb-3"
              style={{ height: "60px", objectFit: "contain" }}
              alt="Tijori"
            />
            <p className="text-muted mb-0">
              Investment research platform offering deep insights into stocks,
              sectors and businesses.
            </p>
          </div>
        </div>

        <div className="col-lg-4 col-md-6">
          <div className="card border-0 shadow-sm h-100 text-center p-4">
            <img
              src="media/images/dittoLogo.png"
              className="img-fluid mx-auto mb-3"
              style={{ height: "60px", objectFit: "contain" }}
              alt="Ditto"
            />
            <p className="text-muted mb-0">
              Personalized life and health insurance advice with zero spam and
              complete transparency.
            </p>
          </div>
        </div>

      </div>

      <div className="text-center mt-5">
       <Link to="/signup">
          <button className="btn btn-primary btn-lg px-5 mt-3 hero-btn">
            Sign Up Now
          </button>
        </Link>
      </div>
    </section>
  );
}

export default Universe;