import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Auth.css';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    navigate('/signUp'); 
  };
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
        navigate('/dashboard');
      } else if (res.data.role === 'admin') {
        navigate('/admin');
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
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleSignUp}>Sign up</button>
      </form>
    </div>
  );
}

export default LoginPage;
