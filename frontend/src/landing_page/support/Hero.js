import React from "react";

function Hero() {
  return (
    <section
      className="container-fluid py-5"
      id="supportHero"
      style={{ background: "#387ed1", color: "#fff" }}
    >
      <div className="container">

  
        <div className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-center mb-5">
          <div>
            <h1 className="fw-bold mb-2">Support Portal</h1>
            <p className="mb-0 fs-5 text-light">
              Find answers to your questions or create a support ticket.
            </p>
          </div>

          <button className="btn btn-light btn-lg mt-4 mt-lg-0 px-4">
            My Tickets
          </button>
        </div>

        
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="input-group shadow-lg">
              <span className="input-group-text bg-white border-0">
                <i className="fa-solid fa-magnifying-glass text-primary"></i>
              </span>

              <input
                type="text"
                className="form-control border-0 py-3"
                placeholder="Eg: How do I open my account? How do I activate F&O? How do I withdraw funds?"
              />

              <button className="btn btn-warning px-4">
                Search
              </button>
            </div>
          </div>
        </div>

        
        <div className="row justify-content-center mt-5">
          <div className="col-lg-8 text-center">

            <p className="fw-semibold mb-3">
              Popular Searches
            </p>

            <div className="d-flex flex-wrap justify-content-center gap-3">

              <a href="/" className="text-white text-decoration-none">
                Open Account
              </a>

              <a href="/" className="text-white text-decoration-none">
                IPO
              </a>

              <a href="/" className="text-white text-decoration-none">
                Funds
              </a>

              <a href="/" className="text-white text-decoration-none">
                Mutual Funds
              </a>

              <a href="/" className="text-white text-decoration-none">
                Brokerage
              </a>

              <a href="/" className="text-white text-decoration-none">
                Kite
              </a>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;