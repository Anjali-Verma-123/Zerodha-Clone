import React from "react";
import { Link } from "react-router-dom";


function OpenAccount() {
  return (
    <div className="container py-5 my-5">
      <div className="row justify-content-center text-center">
<div className="col-lg-8 col-md-10">
  <h1 className="fw-bold display-5 mb-3">
    Open a Zerodha account
  </h1>
        <p
  className="text-muted fs-5 mx-auto mb-4"
  style={{ maxWidth: "650px" }}
>
  Modern platforms and apps, ₹0 account opening, ₹0 investments,
  and flat ₹20 intraday & F&O trades.
</p>
        <Link to="/signup">
          <button className="btn btn-primary btn-lg px-5 mt-3 hero-btn">
            Sign Up Now
          </button>
          </Link>
</div>
      </div>
    </div>
  );
}

export default OpenAccount;
