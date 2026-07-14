import { useState } from "react";
import API from "../services/api";
import "./Auth.css";
import toast from "react-hot-toast";

function ForgotPassword() {

  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await API.post(
        "/auth/forgot-password",
        { email }
      );

      setSuccess(response.data.message);

      toast.success("Reset link sent successfully");

    } catch (error) {

      toast.error(
        error.response?.data?.message ||
        "Something went wrong"
      );

    }
  };

  return (
    <div className="auth-container">

      <div className="auth-card">

        <h1>Forgot Password</h1>

        <p className="subtitle">
          Enter your email address and we'll send
          you a password reset link.
        </p>

        <form onSubmit={handleSubmit}>

          <input
            type="email"
            placeholder="Enter Email Address"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            required
          />

          <button type="submit">
            Send Reset Link
          </button>

        </form>

        {success && (
          <div className="success-message">
            {success}
          </div>
        )}

      </div>

    </div>
  );
}

export default ForgotPassword;