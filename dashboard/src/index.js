import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";

// ----------------------------
// URL se token aur name lena
// ----------------------------
const params = new URLSearchParams(window.location.search);

const tokenFromUrl = params.get("token");
const name = params.get("name");

if (tokenFromUrl) {
  localStorage.setItem("token", tokenFromUrl);
  localStorage.setItem(
    "user",
    JSON.stringify({ name })
  );

  // URL clean kar do
  window.history.replaceState({}, "", "/");
}

// ----------------------------
// Protected Route
// ----------------------------
function ProtectedRoute({ children }) {

  const token = localStorage.getItem("token");

  console.log("Dashboard Token:", token);

  if (!token) {
    window.location.href = "http://localhost:3001/login";
    return null;
  }

  return children;
}

// ----------------------------

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/*"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);