import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Appointments.css';

function Appointments() {
  const navigate = useNavigate();
  const [appointments, setAppointments] = useState([]);

  // Retrieve user information from local storage
  const user = JSON.parse(localStorage.getItem('user'));
  const user_id = user.id;

  // Handle user logout
  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  // Fetch appointments when the component mounts or user changes
  useEffect(() => {
    const fetchAppointments = async () => {
      if (user && user.id) {
        try {
          const res = await axios.get(`http://localhost:5000/api/appointments/${user_id}`);
          setAppointments(res.data);
        } catch (err) {
          console.error('Error fetching appointments:', err);
          alert('Failed to load appointments.');
        }
      }
    };

    fetchAppointments();
  }, [user]);

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <button className="back-button" onClick={() => navigate(-1)}>← Back</button>
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      </div>

      <div className="appointments">
        <h2>My Appointments</h2>
        {appointments.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Service</th>
                <th>Date</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appt, index) => (
                <tr key={index}>
                  <td>{appt.service}</td>
                  <td>{appt.date}</td>
                  <td>{appt.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>You have no upcoming appointments.</p>
        )}
      </div>
    </div>
  );
}

export default Appointments;
