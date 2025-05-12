import React, { useState } from 'react';
import axios from 'axios';
//import './Auth.css';
import { useNavigate } from 'react-router-dom';

function SignUpPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    surname: '',
    email: '',
    password: '',
    role: '',
    course: '',
  });


  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'role' && value !== 'student') {
      setForm({ ...form, role: value, course: '' });
    } else {
      setForm({ ...form, [name]: value });
    }
  };
  const handleLogin = (e) => {
    navigate('/');
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/signUp', form);
      alert(res.data);
      navigate('/')
    } catch (err) {
      console.error(err);
      alert('Sign up failed: ' + (err.response.data));
    }
  };

  return (
    <div className="login-container">
      <h2>Sign Up</h2>
      <form >
        <input
          type="text"
          name="name"
          placeholder="First Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="surname"
          placeholder="Surname"
          value={form.surname}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <select name="role" value={form.role} onChange={handleChange} required>
          <option value="">-- Select Role --</option>
          <option value="student">Student</option>
          <option value="admin">Admin</option>
          <option value="lecturer">Lecturer</option>
        </select>

        <select
          name="course"
          value={form.course}
          onChange={handleChange}
          disabled={form.role !== 'student'}
          required={form.role === 'student'}
        >
          <option value="">-- Select Course --</option>
          <option value="Computer Science">Computer Science</option>
          <option value="Education">Education</option>
          <option value="Accounting">Accounting</option>
        </select>

        <button onClick={handleSubmit}>Register</button>
        <button onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
}

export default SignUpPage;
