import React from 'react';
import { useNavigate } from 'react-router-dom';

function Timetable() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };
  const schedule = [
    { day: 'Monday', subject: 'Mathematics', time: '09:00 - 10:30' },
    { day: 'Tuesday', subject: 'Physics', time: '10:45 - 12:15' },
    { day: 'Wednesday', subject: 'Chemistry', time: '13:00 - 14:30' },
    { day: 'Thursday', subject: 'Computer Science', time: '09:00 - 10:30' },
    { day: 'Friday', subject: 'English', time: '11:00 - 12:30' },
  ];

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <button className="back-button" onClick={() => navigate(-1)}>← Back</button>
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      </div>

      <div className="timetable">
      <h2>Student Timetable</h2>
      <table>
        <thead>
          <tr>
            <th>Day</th>
            <th>Subject</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map((entry, index) => (
            <tr key={index}>
              <td>{entry.day}</td>
              <td>{entry.subject}</td>
              <td>{entry.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
}

export default Timetable;
