// components/Dashboard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import DataFetcher from './../DataFetcher'

function Dashboard() {
  return (
    <div className="dashboard">
      <h2>Student Dashboard</h2>
      <ul>
        <li><Link to="/book">Book a Service</Link></li>
        <li><Link to="/timetable">View Timetable</Link></li>
        <li><Link to="/notifications">Notifications</Link></li>
        <li><Link to="/report">Report an Issue</Link></li>
      </ul>

      <div>
        <h1>My React App</h1>
        <DataFetcher />
      </div>
    </div>
    
  );
}

export default Dashboard;
