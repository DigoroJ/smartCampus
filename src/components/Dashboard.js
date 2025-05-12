import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Dashboard.css';

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <button className="back-button" onClick={() => navigate(-1)}>← Back</button>
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      </div>

      <div className="dashboard">
        <h2>Student Dashboard</h2>
        <ul>
          <li><Link to="/booking">📅 Book a Service</Link></li>
          <li><Link to="/timetable">📘 View Timetable</Link></li>
          <li><Link to="/notifications">🔔 Notifications</Link></li>
          <li><Link to="/report-issue">🛠️ Report an Issue</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
