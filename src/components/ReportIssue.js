import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './ReportIssue.css'; // ← Add this line for styling

function ReportIssue() {
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      msg: description,
      location,
    };

    try {
      const res = await axios.post('http://localhost:5000/api/reportAnIssue', formData);
      alert(res.data);
      setDescription('');
      setLocation('');
      navigate('/dashboard')
    } catch (error) {
      console.error('Error reporting issue:', error);
      alert('Failed to report the issue. Please try again.');
    }
  };

  return (
    <div className="report-issue-container">
      <div className="dashboard-header">
        <button className="back-button" onClick={() => navigate(-1)}>← Back</button>
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      </div>

      <div className="report-issue-form">
        <h2>Report Maintenance Issue</h2>
        <form onSubmit={handleSubmit}>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe the issue..."
            required
          />
          <label>Location:</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="E.g., Library Room 204"
            required
          />
          <button type="submit">Submit Issue</button>
        </form>
      </div>
    </div>
  );
}

export default ReportIssue;
