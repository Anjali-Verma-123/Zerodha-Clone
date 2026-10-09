import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

function Login() {
  // const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const handleSubmit = (e) => {

  //   e.preventDefault();

  //   console.log({
  //     email,
  //     password,
  //   });

  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://zerodha-clone-backend-90pv.onrender.com/login", {
        email,
        password,
      });

      // Token save
      localStorage.setItem("token", response.data.token);

      // User details save
      localStorage.setItem("user", JSON.stringify(response.data.user));

      //
      console.log("Response:", response.data);

      console.log("Token before redirect:", localStorage.getItem("token"));
      console.log("User before redirect:", localStorage.getItem("user"));

      // alert(response.data.message);

      // Dashboard open karna hai to
      // window.location.href = "http://localhost:3000";
      window.location.href = `https://zerodha-clone-dashbord.vercel.app?token=${response.data.token}&name=${encodeURIComponent(response.data.user.name)}`;
      // Agar frontend home par bhejna ho to:
      // navigate("/");
    } catch (err) {
      alert(err.response?.data?.message || "Login Failed");
    }
  };

  return (
    <div className="container mt-5 mb-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow p-4">
            <h2 className="text-center mb-4">Login</h2>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Email</label>

                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
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

              <button className="btn btn-primary w-100" type="submit">
                Login
              </button>
            </form>

            <p className="text-center mt-3">
              Don't have an account?
              <Link to="/signup" className="ms-2 text-decoration-none">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
