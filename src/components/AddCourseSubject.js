import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AddCourseSubject.css';
import { useNavigate } from 'react-router-dom';

function AddCourseSubject() {
  const [courses, setCourses] = useState([]);
  const [courseName, setCourseName] = useState('');
  const [subjectName, setSubjectName] = useState('');
  const [selectedCourseId, setSelectedCourseId] = useState('');

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/courses');
      setCourses(res.data);
    } catch (err) {
      console.error('Failed to fetch courses:', err);
    }
  };

  const handleAddCourse = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/addCourse', { name: courseName });
      setCourseName('');
      fetchCourses();
      alert('Course added successfully');
    } catch (err) {
      console.error('Failed to add course:', err);
      alert('Error adding course');
    }
  };

  const handleAddSubject = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/addSubjectsPerCourse', {
        name: subjectName,
        course_id: selectedCourseId
      });
      setSubjectName('');
      setSelectedCourseId('');
      alert('Subject added successfully');
    } catch (err) {
      console.error('Failed to add subject:', err);
      alert('Error adding subject');
    }
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <button className="back-button" onClick={() => navigate(-1)}>← Back</button>
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      </div>
      <div className="add-container">
        <h2>Add Course</h2>
        <form onSubmit={handleAddCourse} className="form-card">
          <input
            type="text"
            placeholder="Course Name"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            required
          />
          <button type="submit">Add Course</button>
        </form>

        <h2>Add Subject</h2>
        <form onSubmit={handleAddSubject} className="form-card">
          <input
            type="text"
            placeholder="Subject Name"
            value={subjectName}
            onChange={(e) => setSubjectName(e.target.value)}
            required
          />
          <select
            value={selectedCourseId}
            onChange={(e) => setSelectedCourseId(e.target.value)}
            required
          >
            <option value="">Select Course</option>
            {courses.map(course => (
              <option key={course.id} value={course.id}>{course.name}</option>
            ))}
          </select>
          <button type="submit">Add Subject</button>
        </form>
      </div>
    </div>
  );
}

export default AddCourseSubject;
