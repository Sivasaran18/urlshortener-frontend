import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../services/api";
import "./Auth.css";
import toast from "react-hot-toast";

function ResetPassword() {

  const { token } = useParams();
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await API.post(
        `/auth/reset-password/${token}`,
        {
          password
        }
      );

      setSuccess(
        response.data.message ||
        "Password reset successful"
      );

      toast.success("Password reset successful");

      setTimeout(() => {
        navigate("/");
      }, 2000);

    } catch (error) {

      toast.error(
        error.response?.data?.message ||
        "Password reset failed"
      );

    }
  };

  return (
    <div className="auth-container">

      <div className="auth-card">

        <h1>Reset Password</h1>

        <p className="subtitle">
          Create a new password for your account.
        </p>

        <form onSubmit={handleSubmit}>

          <input
            type="password"
            placeholder="Enter New Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            required
          />

          <button type="submit">
            Reset Password
          </button>

        </form>

        {success && (
          <div className="success-message">
            {success}
            <br />
            Redirecting to Login...
          </div>
        )}

      </div>

    </div>
  );
}

export default ResetPassword;