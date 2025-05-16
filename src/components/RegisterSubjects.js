import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './subject.css'

function RegisterSubjects() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));
  const [subjects, setSubjects] = useState([]);
  const [selectedSubjects, setSelectedSubjects] = useState([]);

  useEffect(() => {
    if (user && user.course_id) {
      axios.get(`http://localhost:5000/api/subjects/${user.course_id}`)
        .then(res => setSubjects(res.data))
        .catch(err => console.error('Failed to load subjects', err));
    }
  }, [user]);

  const handleCheckboxChange = (subjectId) => {
    setSelectedSubjects(prev =>
      prev.includes(subjectId)
        ? prev.filter(id => id !== subjectId)
        : [...prev, subjectId]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('subjects', selectedSubjects );
    try {
      await axios.post('http://localhost:5000/api/addSubjects', {
        student_id: user.id,
        subjects: selectedSubjects
      });
      alert('Subjects successfully registered!');
    } catch (error) {
      console.error('Failed to register subjects', error);
      alert('Subject registration failed.');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <button className="back-button" onClick={() => navigate(-1)}>← Back</button>
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      </div>
      <div className="register-subjects">
        <h2>Register Subjects</h2>
        <form onSubmit={handleSubmit}>
          {subjects.map(subject => (
            <label key={subject.id}>
              <input
                type="checkbox"
                checked={selectedSubjects.includes(subject.id)}
                onChange={() => handleCheckboxChange(subject.id)}
              />
              {subject.name}
            </label>
          ))}
          <br />
          <button type="submit">Submit Registration</button>
        </form>
      </div>
    </div>
  );
}

export default RegisterSubjects;
