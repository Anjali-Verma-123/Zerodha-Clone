import React, { useState, useEffect } from "react";
import axios from "axios";
import VerticalGraph from "./VerticalGraph.js";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchHoldings = async () => {
      try {
        setLoading(true);

        const res = await axios.get(
          "http://localhost:3002/allHoldings"
        );

        setAllHoldings(res.data);
        setError("");
      } catch (err) {
        console.error(err);
        setError("Unable to load holdings");
      } finally {
        setLoading(false);
      }
    };

    fetchHoldings();
  }, []);

  const totalInvestment = allHoldings.reduce(
    (total, stock) => total + stock.avg * stock.qty,
    0
  );

  const currentValue = allHoldings.reduce(
    (total, stock) => total + stock.price * stock.qty,
    0
  );

  const totalPL = currentValue - totalInvestment;

  const totalPLPercentage =
    totalInvestment > 0 ? (totalPL / totalInvestment) * 100 : 0;

  const data = {
    labels: allHoldings.map((stock) => stock.name),
    datasets: [
      {
        label: "Stock Price",
        data: allHoldings.map((stock) => stock.price),
        backgroundColor: "rgba(54, 162, 235, 0.6)",
      },
    ],
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center py-5">
        <div className="spinner-border text-primary" role="status"></div>
        <span className="ms-3 text-muted">Loading holdings...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-danger m-4 text-center">
        {error}
      </div>
    );
  }

  return (
    <div className="container-fluid px-3 px-md-4 py-4 bg-light">

      
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h3 className="fw-bold mb-1">Holdings</h3>
          <p className="text-muted mb-0">
            Your investment portfolio overview
          </p>
        </div>

        <span className="badge bg-primary rounded-pill px-3 py-2">
          {allHoldings.length} Stocks
        </span>
      </div>

     
      <div className="row g-3 mb-4">

        <div className="col-12 col-md-4">
          <div className="card border-0 shadow-sm rounded-4 h-100">
            <div className="card-body p-4">
              <div className="d-flex justify-content-between">
                <div>
                  <p className="text-muted mb-2">
                    Total Investment
                  </p>
                  <h3 className="fw-bold mb-0">
                    ₹{totalInvestment.toLocaleString("en-IN", {
                      minimumFractionDigits: 2,
                    })}
                  </h3>
                </div>

                <div className="fs-2 text-primary">
                  <i className="fa-solid fa-wallet"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div className="card border-0 shadow-sm rounded-4 h-100">
            <div className="card-body p-4">
              <div className="d-flex justify-content-between">
                <div>
                  <p className="text-muted mb-2">
                    Current Value
                  </p>
                  <h3 className="fw-bold mb-0">
                    ₹{currentValue.toLocaleString("en-IN", {
                      minimumFractionDigits: 2,
                    })}
                  </h3>
                </div>

                <div className="fs-2 text-success">
                  <i className="fa-solid fa-chart-line"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div className="card border-0 shadow-sm rounded-4 h-100">
            <div className="card-body p-4">
              <div className="d-flex justify-content-between">
                <div>
                  <p className="text-muted mb-2">
                    Total P&L
                  </p>

                  <h3
                    className={`fw-bold mb-1 ${
                      totalPL >= 0
                        ? "text-success"
                        : "text-danger"
                    }`}
                  >
                    {totalPL >= 0 ? "+" : ""}₹
                    {totalPL.toLocaleString("en-IN", {
                      minimumFractionDigits: 2,
                    })}
                  </h3>

                  <span
                    className={
                      totalPL >= 0
                        ? "text-success"
                        : "text-danger"
                    }
                  >
                    {totalPL >= 0 ? "+" : ""}
                    {totalPLPercentage.toFixed(2)}%
                  </span>
                </div>

                <div
                  className={`fs-2 ${
                    totalPL >= 0
                      ? "text-success"
                      : "text-danger"
                  }`}
                >
                  <i className="fa-solid fa-arrow-trend-up"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      
      <div className="card border-0 shadow-sm rounded-4 mb-4">
        <div className="card-body p-0">

          <div className="p-4 border-bottom">
            <h5 className="fw-bold mb-0">
              Your Holdings
            </h5>
          </div>

          <div className="table-responsive">
            <table className="table table-hover align-middle mb-0">

              <thead className="holdings-table-head">
                <tr>
                  <th className="p-3">Instrument</th>
                  <th>Qty.</th>
                  <th>Avg. Cost</th>
                  <th>LTP</th>
                  <th>Current Value</th>
                  <th>P&L</th>
                  <th>Net Change</th>
                  <th>Day Change</th>
                </tr>
              </thead>

              <tbody>
                {allHoldings.map((stock, index) => {
                  const curValue = stock.price * stock.qty;
                  const profit =
                    curValue - stock.avg * stock.qty;

                  const isProfit = profit >= 0;

                  return (
                    <tr key={stock.name || index}>
                      <td className="fw-semibold text-dark">
                        {stock.name}
                      </td>

                      <td>{stock.qty}</td>

                      <td>
                        ₹{stock.avg.toFixed(2)}
                      </td>

                      <td>
                        ₹{stock.price.toFixed(2)}
                      </td>

                      <td className="fw-semibold">
                        ₹{curValue.toFixed(2)}
                      </td>

                      <td
                        className={
                          isProfit
                            ? "text-success fw-semibold"
                            : "text-danger fw-semibold"
                        }
                      >
                        {isProfit ? "+" : ""}
                        ₹{profit.toFixed(2)}
                      </td>

                      <td
                        className={
                          isProfit
                            ? "text-success"
                            : "text-danger"
                        }
                      >
                        {stock.net}
                      </td>

                      <td
                        className={
                          stock.isLoss
                            ? "text-danger"
                            : "text-success"
                        }
                      >
                        {stock.day}
                      </td>
                    </tr>
                  );
                })}
              </tbody>

            </table>
          </div>
        </div>
      </div>

      
      <div className="card border-0 shadow-sm rounded-4">
        <div className="card-body p-4">

          <div className="mb-4">
            <h5 className="fw-bold mb-1">
              Portfolio Overview
            </h5>
            <p className="text-muted mb-0">
              Current stock price distribution
            </p>
          </div>

          <VerticalGraph data={data} />

        </div>
      </div>

    </div>
  );
};

export default Holdings;