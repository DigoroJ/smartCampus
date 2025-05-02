import React, { useState } from 'react';
import api from '../api'; // Assuming you have an api.js file for API calls


function Booking() {
  const [service, setService] = useState('study room');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [message, setMessage] = useState('');

  const handleBooking = async (e) => {
    e.preventDefault();

    // Prepare the data to send
    const bookingData = { service, date, time };

    try {
      // Send the data to the server
      const response = await api.post('/book', {
       ...bookingData
      });

      console.log(response); // For debugging

      

      if (response.status === 201) {
        setMessage(`Booking confirmed: ${response.data.booking.service} on ${response.data.booking.date} at ${response.data.booking.time}`);
      } else {
        setMessage(`Error: ${response.data.error}`);
      }
    } catch (err) {
      setMessage('Error: Unable to connect to the server');
    }
  };

  return (
    <div className="booking">
      <h2>Book a Service</h2>
      <form onSubmit={handleBooking}>
        <label>Service:
          <select value={service} onChange={(e) => setService(e.target.value)}>
            <option value="study room">Study Room</option>
            <option value="appointment">Appointment</option>
          </select>
        </label>
        <label>Date:
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </label>
        <label>Time:
          <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
        </label>
        <button type="submit">Book</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Booking;
