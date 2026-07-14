import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {

  const navigate = useNavigate();

  const handleLogout = () => {

    localStorage.removeItem("token");

    navigate("/");

  };

  return (
    <nav className="navbar">

      <div className="logo">
        🔗 URL Shortener
      </div>

      <div className="nav-links">

        <Link to="/dashboard">
          Dashboard
        </Link>

        <Link to="/create-url">
          Create URL
        </Link>

        <Link to="/urls">
          My URLs
        </Link>

        <Link to="/stats">
          Analytics
        </Link>

        <button
          className="nav-logout"
          onClick={handleLogout}
        >
          Logout
        </button>

      </div>

    </nav>
  );
}

export default Navbar;