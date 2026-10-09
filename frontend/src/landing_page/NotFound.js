import React from "react";

function NotFound() {
  return (
    <div
  className="container d-flex align-items-center justify-content-center"
  style={{ minHeight: "80vh" }}
>
<div className="row text-center w-100">
<div className="col-lg-8 mx-auto">
  <h1
    className="display-1 fw-bold text-primary"
    style={{ fontSize: "6rem" }}
  >
    404
  </h1>

  <h2 className="fw-bold mb-3">Oops! Page Not Found</h2>
        <p className="text-muted fs-5 mb-4">
  The page you're looking for might have been removed,
  renamed, or is temporarily unavailable.
</p>
<a href="/" className="btn btn-primary btn-lg px-5 rounded-pill">
  Back to Home
</a>
      </div>
      </div>
    </div>
  );
}

export default NotFound;
