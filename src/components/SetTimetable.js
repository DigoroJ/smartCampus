import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SetTimetable.css';
import { useNavigate } from 'react-router-dom';

function SetTimetable() {
  const [courses, setCourses] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const user = JSON.parse(localStorage.getItem('user'));
  const [formData, setFormData] = useState({
    day: '',
    time: '',
    course_id: '',
    subject_id: '',
    lecturer_id: user.id
  });

  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:5000/api/courses')
      .then(res => setCourses(res.data))
      .catch(err => console.error('Error loading courses', err));
  }, []);

  useEffect(() => {
    if (formData.course_id) {
      axios.get(`http://localhost:5000/api/subjects/${formData.course_id}`)
        .then(res => setSubjects(res.data))
        .catch(err => console.error('Error loading subjects', err));
        console.log('subject', subjects);
        
    } else {
      setSubjects([]);
    }
  }, [formData.course_id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    console.log('data', formData);
    
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/setTimetable', formData);
      alert('Timetable entry created!');
      setFormData({ day: '', time: '', course_id: '', subject_id: '', lecturer_id: user.id });
      navigate('/timeTable');
    } catch (error) {
      alert('Error creating timetable entry.');
    }
  };

  return (
    <div className="set-timetable-container">
      <h2>Set Timetable</h2>
      <form onSubmit={handleSubmit} className="timetable-form">
        <label>Day:
          <select name="day" value={formData.day} onChange={handleChange} required>
            <option value="">Select Day</option>
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
          </select>
        </label>

        <label>Time:
          <input type="time" name="time" value={formData.time} onChange={handleChange} required />
        </label>

        <label>Course:
          <select name="course_id" value={formData.course_id} onChange={handleChange} required>
            <option value="">Select Course</option>
            {courses.map(course => (
              <option key={course.id} value={course.id}>{course.name}</option>
            ))}
          </select>
        </label>

        <label>Subject:
          <select name="subject_id" value={formData.subject_id} onChange={handleChange} required disabled={!subjects.length}>
            <option value="">Select Subject</option>
            {subjects.map(subject => (
              <option key={subject.id} value={subject.id}>{subject.name}</option>
            ))}
          </select>
        </label>

        <button type="submit">Set Timetable</button>
      </form>
    </div>
  );
}

export default SetTimetable;
