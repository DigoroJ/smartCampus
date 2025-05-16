import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Auth.css';
import { Link } from 'react-router-dom';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:5000/api/login', {
        email,
        password,
      });
      console.log('details', res);
      // Save
      localStorage.setItem('user', JSON.stringify(res.data));

      // Access
      const user = JSON.parse(localStorage.getItem('user'));

      alert('Hello ' + user.name + ' ' + user.surname)

      if (res.data.role === 'student') {
        navigate('/stDashboard');
      } else if (res.data.role === 'admin') {
        navigate('/admin');
      } else if (res.data.role === 'lecturer') {
        navigate('/lecturer'); 
      } else {
        alert('Login successful, but unknown role.');
      }
    } catch (err) {
      alert('Login failed: ' + (err.response?.data?.message || 'Server error'));
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          required
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          required
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </form>
      <div className="signup-link">
        <p>Don't have an account? <Link to="/signUp">Sign up</Link></p>
      </div>
    </div>
  );
}

export default LoginPage;
