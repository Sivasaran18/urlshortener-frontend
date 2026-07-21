import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../services/api";
import "./Auth.css";
import toast from "react-hot-toast";

function Login() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await API.post(
        "/auth/login",
        formData
      );

      localStorage.setItem(
        "token",
        response.data.token
      );

      toast.success("Login Successful");

      navigate("/dashboard");

    } catch (error) {

  alert(
    JSON.stringify(
      {
        message: error.message,
        code: error.code,
        status: error.response?.status,
        data: error.response?.data
      },
      null,
      2
    )
  );

}
  };

  return (
    <div className="auth-container">

      <div className="auth-card">

        <h1>URL Shortener DEBUG</h1>

        <p className="subtitle">
          Login to manage your links
        </p>

        <form onSubmit={handleSubmit}>

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />

          <button type="submit">
            Login
          </button>

        </form>

        <div className="auth-links">

          <Link to="/forgot-password">
            Forgot Password?
          </Link>

          <Link to="/register">
            Create Account
          </Link>

        </div>

      </div>

    </div>
  );
}

export default Login;