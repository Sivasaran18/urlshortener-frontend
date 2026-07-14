import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./pages/Dashboard";
import CreateUrl from "./pages/CreateUrl";
import ViewUrls from "./pages/ViewUrls";
import DashboardStats from "./pages/DashboardStats";

function App() {
  return (
    <Routes>

      <Route
        path="/"
        element={<Login />}
      />

      <Route
        path="/register"
        element={<Register />}
      />

      <Route
        path="/forgot-password"
        element={<ForgotPassword />}
      />

      <Route
        path="/reset-password/:token"
        element={<ResetPassword />}
      />

      <Route
        path="/dashboard"
        element={<Dashboard />}
      />

      <Route
        path="/create-url"
        element={<CreateUrl />}
      />

      <Route
        path="/urls"
        element={<ViewUrls />}
      />

      <Route
        path="/stats"
        element={<DashboardStats />}
      />

    </Routes>
  );
}

export default App;