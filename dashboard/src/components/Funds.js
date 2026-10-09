import React from "react";
import { Link } from "react-router-dom";
import "./Funds.css";

const Funds = () => {
  const fundDetails = [
    ["Opening Balance", "4,043.10"],
    ["Payin", "4,064.00"],
    ["SPAN", "0.00"],
    ["Delivery margin", "0.00"],
    ["Exposure", "0.00"],
    ["Options premium", "0.00"],
    ["Collateral (Liquid funds)", "0.00"],
    ["Collateral (Equity)", "0.00"],
    ["Total Collateral", "0.00"],
  ];

  return (
    <div className="container-fluid funds-page px-3 px-md-4 py-4">

      <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 mb-4">
        <div>
          <h3 className="fw-bold mb-1">Funds</h3>
          <p className="text-muted mb-0">
            Manage your account balance and fund transfers.
          </p>
        </div>

        <div className="d-flex flex-wrap gap-2">
          <Link to="/add-funds" className="btn btn-success rounded-pill px-4">
            <i className="fa-solid fa-plus me-2"></i>
            Add funds
          </Link>

          <Link className="btn btn-outline-primary rounded-pill px-4">
            Withdraw
          </Link>
        </div>
      </div>

      
      <div className="row g-3 mb-4">
        <div className="col-12 col-md-4">
          <div className="card border-0 shadow-sm rounded-4 h-100">
            <div className="card-body p-4">
              <p className="text-muted mb-2">Available Margin</p>
              <h3 className="fw-bold text-success mb-0">
                ₹4,043.10
              </h3>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div className="card border-0 shadow-sm rounded-4 h-100">
            <div className="card-body p-4">
              <p className="text-muted mb-2">Used Margin</p>
              <h3 className="fw-bold mb-0">₹3,757.30</h3>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div className="card border-0 shadow-sm rounded-4 h-100">
            <div className="card-body p-4">
              <p className="text-muted mb-2">Available Cash</p>
              <h3 className="fw-bold mb-0">₹4,043.10</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="row g-4">

        
        <div className="col-12 col-lg-8">
          <div className="card border-0 shadow-sm rounded-4 h-100">
            <div className="card-body p-4">
              <h5 className="fw-bold mb-4">
                <i className="fa-solid fa-wallet text-primary me-2"></i>
                Equity Balance
              </h5>

              {fundDetails.map(([label, value], index) => (
                <div
                  key={index}
                  className="fund-row d-flex justify-content-between align-items-center px-2 py-3 border-bottom"
                >
                  <span className="text-muted">{label}</span>

                  <span className="fw-semibold">
                    ₹{value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        
        <div className="col-12 col-lg-4">
          <div className="card border-0 shadow-sm rounded-4 h-100">
            <div className="card-body d-flex flex-column justify-content-center align-items-center text-center p-4">

              <div
                className="bg-light rounded-circle d-flex align-items-center justify-content-center mb-4"
                style={{ width: "80px", height: "80px" }}
              >
                <i className="fa-solid fa-chart-line fs-2 text-primary"></i>
              </div>

              <h5 className="fw-bold mb-3">
                Commodity Account
              </h5>

              <p className="text-muted mb-4">
                You don't have a commodity account yet. Open one to
                start trading in commodities.
              </p>

              <Link className="btn btn-primary rounded-pill px-4">
                Open Account
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Funds;