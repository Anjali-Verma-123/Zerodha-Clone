import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   console.log({
  //     name,
  //     email,
  //     password,
  //     confirmPassword,
  //   });
  // };

  const handleSubmit = async (e) => {
  e.preventDefault();

  // Password match check
  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  try {
    const response = await axios.post(
      "https://zerodha-clone-backend-90pv.onrender.com/signup",
      {
        name,
        email,
        password,
      }
    );

    alert(response.data.message);

    // Form clear
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");

    // Login page par bhej do
    navigate("/login");

  } catch (err) {
    alert(err.response?.data?.message || "Signup Failed");
  }
};

  return (
    <div className="container mt-5 mb-5">
      <div className="row justify-content-center">
        <div className="col-md-6">

          <div className="card shadow p-4">

            <h2 className="text-center mb-4">
              Create Your Account
            </h2>

            <form onSubmit={handleSubmit}>

              <div className="mb-3">
                <label className="form-label">Full Name</label>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Email</label>

                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Password</label>

                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">
                  Confirm Password
                </label>

                <input
                  type="password"
                  className="form-control"
                  placeholder="Confirm password"
                  value={confirmPassword}
                  onChange={(e) =>
                    setConfirmPassword(e.target.value)
                  }
                  required
                />
              </div>

              <button
                className="btn btn-primary w-100"
                type="submit"
              >
                Sign Up
              </button>

            </form>

            <p className="text-center mt-3">
              Already have an account?
              <Link
                to="/login"
                className="ms-2 text-decoration-none"
              >
                Login
              </Link>
            </p>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Signup;