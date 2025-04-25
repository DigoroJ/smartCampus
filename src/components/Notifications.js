// components/Notifications.jsx
import React from 'react';

function Notifications() {
  const messages = [
    'Library will be closed on Friday for maintenance.',
    'New course materials have been uploaded for Mathematics.',
    'Your study room booking for tomorrow is confirmed.',
  ];

  return (
    <div className="notifications">
      <h2>Notifications</h2>
      <ul>
        {messages.map((msg, index) => (
          <li key={index}>{msg}</li>
        ))}
      </ul>
    </div>
  );
}

export default Notifications;
