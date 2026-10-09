import React, { useEffect, useState } from "react";
import axios from "axios";

const Positions = () => {
  const [allPositions, setAllPositions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPositions = async () => {
      try {
        setLoading(true);

        const res = await axios.get(
          "https://zerodha-clone-backend-90pv.onrender.com/allPositions"
        );

        setAllPositions(res.data);
        setError("");
      } catch (err) {
        console.error(err);
        setError("Unable to load positions");
      } finally {
        setLoading(false);
      }
    };

    fetchPositions();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border text-primary"></div>
        <p className="text-muted mt-3">Loading positions...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-danger text-center m-4">
        {error}
      </div>
    );
  }

  return (
    <div className="positions-page container-fluid px-3 px-md-4 py-4">

      <div className="mb-4">
        <h3 className="fw-bold mb-1">
          Positions
          <span className="badge bg-light text-dark ms-2">
            {allPositions.length}
          </span>
        </h3>

        <p className="text-muted mb-0">
          Track your open positions and monitor their performance.
        </p>
      </div>

      
      <div className="positions-card border-0 shadow-sm rounded-4 overflow-hidden">
        <div className="table-responsive">
          <table className="positions-table table-hover align-middle mb-0">

            <thead className="table-light">
              <tr>
                <th className="py-3 px-4">Product</th>
                <th className="py-3">Instrument</th>
                <th className="py-3 text-center">Qty.</th>
                <th className="py-3 text-end">Avg.</th>
                <th className="py-3 text-end">LTP</th>
                <th className="py-3 text-end">P&amp;L</th>
                <th className="py-3 text-end pe-4">Chg.</th>
              </tr>
            </thead>

            <tbody>
              {allPositions.length > 0 ? (
                allPositions.map((stock, index) => {
                  const currentValue = stock.price * stock.qty;
                  const investmentValue = stock.avg * stock.qty;
                  const profitLoss =
                    currentValue - investmentValue;

                  const isProfit = profitLoss >= 0;
                  const dayClass = stock.isLoss
                    ? "text-danger"
                    : "text-success";

                  return (
                    <tr key={index}>
                      <td className="py-3 px-4">
                        <span className="badge bg-primary-subtle text-primary">
                          {stock.product}
                        </span>
                      </td>

                      <td className="fw-semibold">
                        {stock.name}
                      </td>

                      <td className="text-center">
                        {stock.qty}
                      </td>

                      <td className="text-end text-muted">
                        ₹{stock.avg.toFixed(2)}
                      </td>

                      <td className="text-end fw-medium">
                        ₹{stock.price.toFixed(2)}
                      </td>

                      <td
                        className={`text-end fw-semibold ${
                          isProfit
                            ? "text-success"
                            : "text-danger"
                        }`}
                      >
                        {isProfit ? "+" : ""}
                        ₹{profitLoss.toFixed(2)}
                      </td>

                      <td
                        className={`text-end fw-semibold pe-4 ${dayClass}`}
                      >
                        {stock.day}
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td
                    colSpan="7"
                    className="text-center py-5 text-muted"
                  >
                    <i className="fa-solid fa-chart-line fs-1 mb-3 d-block"></i>
                    No open positions available.
                  </td>
                </tr>
              )}
            </tbody>

          </table>
        </div>
      </div>
    </div>
  );
};

export default Positions;