import { useEffect, useState } from "react";
import API from "../services/api";
import "./DashboardStats.css";
import Navbar from "../components/Navbar";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function DashboardStats() {

  const [stats, setStats] = useState({
    totalUrls: 0,
    todayUrls: 0,
    monthUrls: 0,
    totalClicks: 0
  });

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {

      const response =
        await API.get("/url/dashboard");

      setStats(response.data);

    } catch (error) {

      console.log(error);

    }
  };

  const data = {
    labels: [
      "Total URLs",
      "Today's URLs",
      "Monthly URLs",
      "Total Clicks"
    ],
    datasets: [
      {
        label: "Analytics",
        data: [
          stats.totalUrls,
          stats.todayUrls,
          stats.monthUrls,
          stats.totalClicks
        ],
        backgroundColor: [
          "#2563eb",
          "#10b981",
          "#f59e0b",
          "#ef4444"
        ]
      }
    ]
  };

  return (
  <>
    <Navbar />

    <div className="stats-container">

      <h1>Analytics Dashboard</h1>

      <div className="stats-cards">

        <div className="stat-card">
          <h2>{stats.totalUrls}</h2>
          <p>Total URLs</p>
        </div>

        <div className="stat-card">
          <h2>{stats.todayUrls}</h2>
          <p>Today's URLs</p>
        </div>

        <div className="stat-card">
          <h2>{stats.monthUrls}</h2>
          <p>Monthly URLs</p>
        </div>

        <div className="stat-card">
          <h2>{stats.totalClicks}</h2>
          <p>Total Clicks</p>
        </div>

      </div>

      <div className="chart-card">
        <Bar data={data} />
      </div>

    </div>
  </>
);
}

export default DashboardStats;