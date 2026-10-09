import React from "react";

function Brokerage() {
  return (
    <section className="container py-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold">Brokerage & Charges</h2>
        <p className="text-muted">
          Everything you need to know about our brokerage and other charges.
        </p>
      </div>

      <div className="row g-4">

       

        <div className="col-lg-6 col-12">
          <div
            className="shadow-sm p-4 h-100 rounded-4 border"
            style={{ background: "#fff" }}
          >
            <h4 className="mb-4 text-primary">
              Brokerage Calculator
            </h4>

            <ul
              className="text-muted"
              style={{
                lineHeight: "2",
                paddingLeft: "20px",
              }}
            >
              <li>
                Call & Trade and RMS auto square-off:
                ₹50 + GST per order.
              </li>

              <li>
                Digital contract notes are sent via email.
              </li>

              <li>
                Physical contract notes (if required) are charged
                ₹20 per note + courier charges.
              </li>

              <li>
                NRI (Non-PIS): 0.5% or ₹100 per executed order,
                whichever is lower.
              </li>

              <li>
                NRI (PIS): 0.5% or ₹200 per executed order,
                whichever is lower.
              </li>

              <li>
                Debit balance accounts are charged ₹40 instead
                of ₹20 per executed order.
              </li>
            </ul>
          </div>
        </div>

        

        <div className="col-lg-6 col-12">
          <div
            className="shadow-sm p-4 h-100 rounded-4 border"
            style={{ background: "#fff" }}
          >
            <h4 className="mb-4 text-primary">
              List of Charges
            </h4>

            <ul
              className="text-muted"
              style={{
                lineHeight: "2",
                paddingLeft: "20px",
              }}
            >
              <li>
                Exchange transaction charges are levied by
                NSE, BSE and MCX.
              </li>

              <li>
                BSE revised transaction charges for multiple
                trading groups from time to time.
              </li>

              <li>
                Charges for SS and ST groups are ₹1,00,000
                per crore turnover.
              </li>

              <li>
                Group A, B and other non-exclusive scrips
                are charged ₹375 per crore turnover.
              </li>

              <li>
                M, MT, TS and MS groups are charged
                ₹275 per crore turnover.
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Brokerage;