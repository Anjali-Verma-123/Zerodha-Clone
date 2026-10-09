import React from "react";

function Awards() {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-md-12 text-center mb-4">
          <img
            src="media/images/largestBroker.svg"
            alt="Largest Broker"
            className="img-fluid award-img"
          />
        </div>
        <div className="col-lg-6 col-md-12">
          <h2 className="fw-bold mb-4">Largest stock broker in India</h2>
          <p className="text-muted mb-4">
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>
          <div className="row mt-4">
            <div className="col-md-6 col-12">
              <ul>
                <li>
                  <p>Futures & Options</p>
                </li>
                <li>
                  <p>Commodity derivatives</p>
                </li>
                <li>Currency derivatives</li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>
                  <p>Stocks & IPOs</p>
                </li>
                <li>
                  <p>Direct mutual funds</p>
                </li>
                <li>Bonds and Government Securities</li>
              </ul>
            </div>
          </div>
          <img
            src="media/images/pressLogos.png"
            alt="Press Logos"
            className="img-fluid mt-4 press-logo"
          />
        </div>
      </div>
    </div>
  );
}

export default Awards;
