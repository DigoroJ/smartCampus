import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Timetable() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));
  const [schedule, setSchedule] = useState([]);

  const handleLogout = () => {
    navigate('/');
    localStorage.removeItem('user');
  };

  useEffect(() => {
    let isMounted = true;

    // Check if user is null or role is undefined
    if (!user || !user.role) {
      navigate('/');
      return; // Exit the useEffect early
    }

    const { id, role } = user;

    const fetchTimetable = async () => {
      try {
        const endpoint = role === 'student' ? '/api/studentTimetable' : '/api/lecturerTimetable';
        const res = await axios.get(`http://localhost:5000${endpoint}/${id}`);
        if (isMounted) {
          setSchedule(res.data);
        }
      } catch (error) {
        console.error('Error fetching timetable:', error);
        alert('Failed to load timetable.');
      }
    };

    if (id) {
      fetchTimetable();
    }

    return () => {
      isMounted = false;
    };
  }, [user, navigate]); // Add navigate to dependencies

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <button className="back-button" onClick={() => navigate(-1)}>← Back</button>
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      </div>

      <div className="timetable">
        <h2>{user.role === 'student' ? 'Student Timetable' : 'Lecturer Timetable'}</h2>

        {user.role === 'lecturer' && (
          <button className="set-timetable-button" onClick={() => navigate('/setTimetable')}>
            + Set Timetable
          </button>
        )}

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
