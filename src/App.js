// File: App.jsx
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';
import AdminDashboard from './components/AdminDashboard';
import Notifications from './components/Notifications';
import Timetable from './components/Timetable';
import Booking from './components/Booking';
import ReportIssue from './components/ReportIssue';
import BookingsList from './components/BookingsList';
import BookingDetails from './components/BookingDetails';
import Adduser from './components/Adduser';
import './styles.css';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/data') // Your backend endpoint
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.error("Error fetching data:", err));
  }, []);

  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/admin' element={<AdminDashboard />} />
        <Route path='/notifications' element={<Notifications />} />
        <Route path='/timetable' element={<Timetable />} />
        <Route path='/booking' element={<Booking />} />
        <Route path="/BookingsList" element={<BookingsList />} />
        <Route path="/bookings2/:id" element={<BookingDetails />} />
        <Route path="/Adduser" element={<Adduser />} />
        <Route path='/report-issue' element={<ReportIssue />} />
     
      </Routes>

      {/* You can render fetched data below or inside a route/component if needed */}
      <div style={{ padding: '1rem' }}>
        {data ? (
          <pre>{JSON.stringify(data, null, 2)}</pre>
        ) : (
          <p>Loading data...</p>
        )}
      </div>
    </Router>
  );
}

export default App;
