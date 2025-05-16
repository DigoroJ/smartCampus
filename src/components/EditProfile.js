import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './EditProfile.css';

function EditProfile() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    course: '',
    role: ''
  });

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || '',
        surname: user.surname || '',
        email: user.email || '',
        course: user.course || '',
        role: user.role || ''
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`http://localhost:5000/api/users/${user.id}`, formData);
      alert('Profile updated successfully!');
      localStorage.setItem('user', JSON.stringify(res.data));
    } catch (err) {
      console.error(err);
      alert('Failed to update profile.');
    }
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <button className="back-button" onClick={() => navigate(-1)}>← Back</button>
        <button className="logout-button" onClick={handleLogout}>Logout</button>
        </div>
        <div className="edit-profile-container">
          <h2>Edit Profile</h2>
          <form onSubmit={handleSubmit} className="edit-profile-form">
            <label>
              Name:
              <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </label>
            <label>
              Surname:
              <input type="text" name="surname" value={formData.surname} onChange={handleChange} required />
            </label>
            <label>
              Email:
              <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </label>
            <label>
              Role:
              <select name="role" disabled value={formData.role} onChange={handleChange} required>
                <option value="student">Student</option>
                <option value="admin">Admin</option>
                <option value="lecturer">Lecturer</option>
              </select>
            </label>
            <label>
              Course:
              <input
                type="text"
                name="course"
                value={formData.role === 'student' ? formData.course : ''}
                onChange={handleChange}
                disabled={formData.role !== 'student'}
                placeholder="Course (e.g., Computer Science)"
              />
            </label>
            <button type="submit">Save Changes</button>
          </form>
        </div>
    </div>
  );
}

export default EditProfile;
