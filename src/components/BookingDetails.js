import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './BookingDetails.css';

const BookingDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [booking, setBooking] = useState(null);
  const [formData, setFormData] = useState({ service: '', date: '', time: '' });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  useEffect(() => {
    const fetchBooking = async () => {
      try {
        const response = await axios.get('http://localhost:5000/bookings2');
        const found = response.data.find((b) => b._id === id);
        if (!found) throw new Error('Booking not found');

        setBooking(found);
        setFormData({
          service: found.service || '',
          date: found.date?.slice(0, 10) || '',
          time: found.time || '',
        });
      } catch (err) {
        setError(err.message || 'Error fetching booking');
      } finally {
        setLoading(false);
      }
    };

    fetchBooking();
  }, [id]);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError('');
    try {
      const response = await axios.put(`http://localhost:5000/update-booking/${id}`, formData);
      setSuccessMsg('Booking updated successfully!');
      setBooking(response.data.booking);
    } catch (err) {
      setError(err.response?.data?.error || 'Error updating booking');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    const confirmed = window.confirm('Are you sure you want to delete this booking?');
    if (!confirmed) return;

    setDeleting(true);
    setError('');
    try {
      await axios.delete(`http://localhost:5000/delete-booking/${id}`);
      navigate('/BookingsList'); // Redirect to bookings list
    } catch (err) {
      setError(err.response?.data?.error || 'Error deleting booking');
    } finally {
      setDeleting(false);
    }
  };

  if (loading) return <div>Loading booking...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="booking-details">
      <h2> Booking Details</h2>
      <form onSubmit={handleUpdate}>
        <div>
          <label>Service:</label>
          <input
            type="text"
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Date:</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Time:</label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" disabled={saving}>
          {saving ? 'Saving...' : 'Update Booking'}
        </button>

        <button
          type="button"
          style={{ backgroundColor: '#dc3545', marginTop: '10px' }}
          onClick={handleDelete}
          disabled={deleting}
        >
          {deleting ? 'Deleting...' : 'Delete Booking'}
        </button>
      </form>

      {successMsg && <p style={{ color: 'green' }}>{successMsg}</p>}
    </div>
  );
};

export default BookingDetails;
