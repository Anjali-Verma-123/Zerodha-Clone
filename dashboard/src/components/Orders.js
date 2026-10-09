import React from "react";
import { Link } from "react-router-dom";

const Orders = () => {
  return (
    <div className="container-fluid px-3 px-md-4 py-4">
      
      <div className="mb-4">
        <h3 className="fw-bold mb-1">Orders</h3>
        <p className="text-muted mb-0">
          Track and manage all your stock orders in one place.
        </p>
      </div>

      
      <div
        className="card border-0 shadow-sm rounded-4"
        style={{ minHeight: "420px" }}
      >
        <div className="card-body d-flex flex-column justify-content-center align-items-center text-center p-4">

         
          <div
            className="d-flex justify-content-center align-items-center rounded-circle bg-light mb-4"
            style={{ width: "90px", height: "90px" }}
          >
            <i className="fa-solid fa-file-lines fs-1 text-primary"></i>
          </div>

          <h4 className="fw-bold mb-2">No orders yet</h4>

          <p
            className="text-muted mb-4"
            style={{ maxWidth: "450px" }}
          >
            You haven't placed any orders today. Start exploring stocks from
            your watchlist and place your first order.
          </p>

          <Link
            to="/"
            className="btn btn-primary rounded-pill px-4 py-2"
          >
            <i className="fa-solid fa-arrow-trend-up me-2"></i>
            Start Investing
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Orders;