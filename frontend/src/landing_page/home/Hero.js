import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="container py-5">
      <div className="row text-center">
        <img
          src="media/images/homeHero.png"
          alt="Hero Image"
          className="img-fluid mb-5 hero-img"
        />

        <h1 className="display-4 fw-bold mt-4">Invest in everything</h1>
        <p className="lead text-muted">
          Online platform to invest in stocks, derivatives, mutual funds, and
          more.
        </p>
        <Link to="/signup">
          <button className="btn btn-primary btn-lg px-5 mt-3 hero-btn">
            Sign Up Now
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
