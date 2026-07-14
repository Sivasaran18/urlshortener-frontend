import { Link, useNavigate } from "react-router-dom";
import "./Dashboard.css";
import Navbar from "../components/Navbar";
function Dashboard() {

  const navigate = useNavigate();

  const handleLogout = () => {

    localStorage.removeItem("token");

    navigate("/");

  };

  return (
  <>
    <Navbar />

    <div className="dashboard-container">

      <div className="dashboard-header">

        <h1>Welcome to URL Shortener</h1>

        <button
          className="logout-btn"
          onClick={handleLogout}
        >
          Logout
        </button>

      </div>

      <div className="dashboard-cards">

        <Link
          to="/create-url"
          className="dashboard-card"
        >
          <h2>🔗 Create Short URL</h2>

          <p>
            Generate short links instantly and
            share them anywhere.
          </p>
        </Link>

        <Link
          to="/urls"
          className="dashboard-card"
        >
          <h2>📋 View URLs</h2>

          <p>
            Manage all your previously
            shortened URLs in one place.
          </p>
        </Link>

        <Link
          to="/stats"
          className="dashboard-card"
        >
          <h2>📊 Analytics Dashboard</h2>

          <p>
            Track clicks, URL creation trends
            and overall performance.
          </p>
        </Link>

      </div>

        </div>
  </>
);
}

export default Dashboard;