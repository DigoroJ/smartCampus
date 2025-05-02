import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './BookingList.css'; // Make sure this file exists or remove the line

const BookingsList = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get('http://localhost:5000/bookings2'); // ✅ FULL URL
        setBookings(response.data);
      } catch (err) {
        setError(err.message || 'Error fetching bookings');
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  const handleBookingClick = (bookingId) => {
    navigate(`/bookings2/${bookingId}`);
  };

  if (loading) return <div className="loading">Loading bookings...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="bookings-container">
      <h2>My Bookings</h2>
      {bookings.length === 0 ? (
        <p>No bookings found</p>
      ) : (
        <div className="bookings-grid">
          {bookings.map((booking) => (
            <div
              key={booking._id}
              className="booking-card"
              onClick={() => handleBookingClick(booking._id)}
            >
              <h3>{booking.title || `Booking #${booking._id.slice(-4)}`}</h3>
              <p>Date: {new Date(booking.date).toLocaleDateString()}</p>
              <p>
                Status:{' '}
                <span className={`status-${booking.status}`}>
                  {booking.status}
                </span>
              </p>
              <button
                className="details-button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleBookingClick(booking._id);
                }}
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BookingsList;
