// components/Dashboard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div className="dashboard">
      <h2>Student Dashboard</h2>
      <ul>
        <li><Link to="/booking">Book a Service</Link></li>
        <li><Link to="/BookingsList">View Bookings</Link></li>
        <li><Link to="/timetable">View Timetable</Link></li>
        <li><Link to="/notifications">Notifications</Link></li>
        <li><Link to="/report">Report an Issue</Link></li>
      </ul>
    </div>
  );
}

export default Dashboard;
