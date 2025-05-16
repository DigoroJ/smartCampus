// File: App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';
import AdminDashboard from './components/AdminDashboard';
import Notifications from './components/Notifications';
import Timetable from './components/Timetable';
import Booking from './components/Booking';
import ReportIssue from './components/ReportIssue';
import SignUpPage from './components/SignUpPage';
import StudentDashboard from './components/StudentDashboard';
import EditProfile from './components/EditProfile';
import SetTimetable from './components/SetTimetable';
import RegisterSubjects from './components/RegisterSubjects';
import AddCourseSubject from './components/AddCourseSubject';
import LectDashboard from './components/LectDashboard';
import Appointments from './components/Appointments';
import './styles.css';


function App() {
  return ( 
    <Router>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/admin' element={<AdminDashboard />} />
        <Route path='/notifications' element={<Notifications />} />
        <Route path='/timetable' element={<Timetable />} />
        <Route path='/booking' element={<Booking />} />
        <Route path='/report-issue' element={<ReportIssue />} />
        <Route path='/signUp' element={<SignUpPage/>}/>
        <Route path='/stDashboard' element ={<StudentDashboard/>}/>
        <Route path='/editProfile' element ={<EditProfile/>}/>
        <Route path='/setTimetable' element ={<SetTimetable/>}/>
        <Route path='/registerSubject' element ={<RegisterSubjects/>}/>
        <Route path='/lecturer' element ={<LectDashboard/>}/>
        <Route path='/addCourse' element ={<AddCourseSubject/>}/>
        <Route path='/appointments' element ={<Appointments/>}/>
      </Routes>
    </Router>
  );
}

export default App;
