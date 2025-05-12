
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Notifications() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  const [messages, setNotifications] = useState([]);
  
        useEffect(() => {
            const fetchData = async () => {
                try {
                    const response = await fetch('http://localhost:5000/api/getNotifications');
                    const result = await response.json();
                    setNotifications(result);          
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            };
    
            fetchData();
        }, []);

  return (
    <div className="dashboard-container">

      <div className="dashboard-header">
        <button className="back-button" onClick={() => navigate(-1)}>← Back</button>
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      </div>
      <div className="notifications">
        <h2>Notifications</h2>
        <ul>
          {messages.map((msg) => (
            <li key={msg.id}>{msg.msg}</li>
          ))}
        </ul>
      </div>
    <div className="dashboard-container"></div>
    </div>
  );
}

export default Notifications;
