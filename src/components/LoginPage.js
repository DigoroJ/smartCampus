import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import api from '../api';
import './login.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload
    setError(''); // Reset previous error

    try {
      // Make API call to /login
      const response = await api.post('/login', { email, password });

      // Log success for debugging
      console.log('Login successful:', response.data);

      // Optional: store user data in localStorage
      localStorage.setItem('user', JSON.stringify(response.data.user));

      // Navigate to dashboard or home page
      navigate('/dashboard');
    } catch (err) {
      console.error('Login error:', err);

      // Show user-friendly error
      if (err.response && err.response.data && err.response.data.error) {
        setError(err.response.data.error);
      } else {
        setError('An unexpected error occurred.');
      }
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Password:</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>

        {/* Display error if exists */}
        {error && <p className="error">{error}</p>}
      </form>

      <div className="signup-link">
        <p>Don't have an account? <Link to="/Adduser">Create one here</Link></p>
      </div>
    </div>
  );
};

export default LoginPage;
