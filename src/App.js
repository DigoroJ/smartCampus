// File: App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';
import AdminDashboard from './components/AdminDashboard';
import Notifications from './components/Notifications';
import Timetable from './components/Timetable';
import Booking from './components/Booking';
import ReportIssue from './components/ReportIssue';
import './styles.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/admin' element={<AdminDashboard />} />
        <Route path='/notifications' element={<Notifications />} />
        <Route path='/timetable' element={<Timetable />} />
        <Route path='/booking' element={<Booking />} />
        <Route path='/report-issue' element={<ReportIssue />} />
      </Routes>
    </Router>
  );
}

export default App;
