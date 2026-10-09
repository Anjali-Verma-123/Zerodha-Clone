import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
  className="navbar navbar-expand-lg bg-white border-bottom sticky-top shadow-sm"
>
      <div className="container py-2">
        <Link className="navbar-brand" to="/">
          <img
            src="media/images/logo.svg"
            style={{ width: "140px" }}
            alt="Zerodha logo"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
  className="collapse navbar-collapse justify-content-end"
  id="navbarSupportedContent"
>
          <div>
            <ul className="navbar-nav align-items-lg-center gap-2">
              
              
              
              <li className="nav-item">
                <Link className="nav-link fw-medium" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-medium" to="/products">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-medium" to="/pricing">
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-medium" to="/support">
                  Support
                </Link>
              </li>
              <li className="nav-item">
                <Link
  className="btn btn-primary rounded-pill px-4 ms-lg-3"
  to="/signup"
>
  Sign Up
</Link>
              </li>
              <li className="nav-item">
  <Link
    className="btn btn-outline-primary rounded-pill px-4"
    to="/login"
  >
    Login
  </Link>
</li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
