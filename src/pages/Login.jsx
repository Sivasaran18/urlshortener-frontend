import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
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

      const response = await fetch(
        "https://urlshortener-backend-op87.onrender.com/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        }
      );

      const data = await response.json();

      alert(
        JSON.stringify(data, null, 2)
      );

      if (response.ok) {

        localStorage.setItem(
          "token",
          data.token
        );

        toast.success("Login Successful");

        navigate("/dashboard");
      }

    } catch (error) {

      alert(
        "FETCH ERROR:\n" +
        error.message
      );

      console.log(error);
    }
  };

  return (
    <div className="auth-container">

      <div className="auth-card">

        <h1>URL Shortener</h1>

        <p className="subtitle">
          Login to manage your links
        </p>

        <form onSubmit={handleSubmit}>

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
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