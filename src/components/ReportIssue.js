// components/ReportIssue.jsx
import React, { useState } from 'react';

function ReportIssue() {
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Issue reported: ${description} at ${location}`);
    setDescription('');
    setLocation('');
  };

  return (
    <div className="report-issue">
      <h2>Report Maintenance Issue</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe the issue..."
          />
        </label>
        <label>
          Location:
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="E.g., Library Room 204"
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ReportIssue;
