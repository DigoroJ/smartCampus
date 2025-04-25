// components/AdminDashboard.jsx
import React from 'react';

function AdminDashboard() {
  const stats = {
    totalBookings: 125,
    issuesReported: 14,
    activeUsers: 87,
  };

  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      <ul>
        <li><strong>Total Bookings:</strong> {stats.totalBookings}</li>
        <li><strong>Issues Reported:</strong> {stats.issuesReported}</li>
        <li><strong>Active Users:</strong> {stats.activeUsers}</li>
      </ul>
    </div>
  );
}

export default AdminDashboard;
