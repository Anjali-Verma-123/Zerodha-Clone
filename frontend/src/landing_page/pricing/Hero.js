import React from "react";

function Hero() {
  return (
    <section className="container py-5">

    
      <div className="text-center mb-5">
        <h1 className="fw-bold display-5">Charges</h1>
        <p className="text-muted fs-5">
          Transparent pricing with no hidden charges.
        </p>
      </div>

  
      <div className="row g-4">

        

        <div className="col-lg-4 col-md-6 col-12">
          <div className="card border-0 shadow-sm rounded-4 h-100 p-4 text-center">

            <img
              src="media/images/pricingEquity.svg"
              alt="Equity"
              className="img-fluid mx-auto mb-4"
              style={{ maxWidth: "130px" }}
            />

            <h3 className="fw-bold mb-3">
              Free Equity Delivery
            </h3>

            <p className="text-muted">
              All equity delivery investments (NSE & BSE) are absolutely
              free with <strong>₹0 brokerage</strong>.
            </p>

          </div>
        </div>

        

        <div className="col-lg-4 col-md-6 col-12">
          <div className="card border-0 shadow-sm rounded-4 h-100 p-4 text-center">

            <img
              src="media/images/intradayTrades.svg"
              alt="Intraday"
              className="img-fluid mx-auto mb-4"
              style={{ maxWidth: "130px" }}
            />

            <h3 className="fw-bold mb-3">
              Intraday & F&O
            </h3>

            <p className="text-muted">
              Flat <strong>₹20</strong> or <strong>0.03%</strong>
              (whichever is lower) per executed order across equity,
              commodity and currency trades.
            </p>

          </div>
        </div>

      

        <div className="col-lg-4 col-md-6 col-12">
          <div className="card border-0 shadow-sm rounded-4 h-100 p-4 text-center">

            <img
              src="media/images/pricingEquity.svg"
              alt="Mutual Funds"
              className="img-fluid mx-auto mb-4"
              style={{ maxWidth: "130px" }}
            />

            <h3 className="fw-bold mb-3">
              Direct Mutual Funds
            </h3>

            <p className="text-muted">
              Invest in direct mutual funds with
              <strong> ₹0 commission</strong> and
              <strong> no DP charges.</strong>
            </p>

          </div>
        </div>

      </div>

    </section>
  );
}

export default Hero;