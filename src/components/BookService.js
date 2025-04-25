// components/BookService.jsx
import React, { useState } from 'react';

function BookService() {
  const [service, setService] = useState('study room');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleBooking = (e) => {
    e.preventDefault();
    alert(`Service booked: ${service} on ${date} at ${time}`);
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
    </div>
  );
}

export default BookService;
