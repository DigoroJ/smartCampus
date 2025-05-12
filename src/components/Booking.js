import React, { useState } from 'react';
import axios from 'axios';
import './Booking.css';
import { useNavigate } from 'react-router-dom';

function Booking() {
  const [service, setService] = useState('study room');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const user = JSON.parse(localStorage.getItem('user'));
  let user_id = null;
  
  const navigate = useNavigate();

  if (user == null){
    navigate('/')
  } else {
     user_id = user.id;
  }

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  const handleBooking = async (e) => {
    e.preventDefault();

    const bookingData = { service, date, time, user_id };

    try {
      const res = await axios.post('http://localhost:5000/api/book', bookingData);
      alert(res.data);
      setDate('');
      setTime('');
      navigate('/dashboard')
    } catch (error) {
      alert('Failed to book service.');
    }
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <button className="back-button" onClick={() => navigate(-1)}>← Back</button>
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      </div>
      <div className="booking-container">
      <h2>Book a Service</h2>
      <form className="booking-form" onSubmit={handleBooking}>
        <label>
          Service:
          <select value={service} onChange={(e) => setService(e.target.value)}>
            <option value="study room">Study Room</option>
            <option value="appointment">Appointment</option>
          </select>
        </label>

        <label>
          Date:
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </label>

        <label>
          Time:
          <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
        </label>

        <button type="submit">Book</button>
      </form>
    </div>
    </div>
  );
}

export default Booking;
