import { useState } from "react";
import "./Auth.css";
import toast from "react-hot-toast";

function ForgotPassword() {

  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await fetch(
        "https://urlshortener-backend-op87.onrender.com/api/auth/forgot-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            email
          })
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message);
      }

      setSuccess(data.message);

      toast.success(
        "Reset link sent successfully"
      );

    } catch (error) {

      alert(
        "FORGOT PASSWORD ERROR:\n" +
        error.message
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