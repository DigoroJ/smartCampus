import React, { useEffect, useState } from 'react';
import './dashboardStyles.css';

/*function AdminDashboard() {
  const url ='http://localhost:5000/api';
  const [reportedIssues, setReportedIssues] = useState(null);
  const [totalUsers, setTotalUsers] = useState(null);
  const [totalBookings, setTotalBooking] = useState(null);

      useEffect(() => {
          const fetchData = async () => {
              try {
                  const response = await fetch(url + '/totalIssues');
                  const result = await response.json();
                   setReportedIssues(result.count);
                   console.log('testing', result);
                   
              } catch (error) {
                  console.error('Error fetching data:', error);
              }
          };
  
          fetchData();
      }, []);

      useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url + '/totalUsers');
                const result = await response.json();
                 setTotalUsers(result.count);
                 console.log('testing', result);
                 
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await fetch(url + '/totalBookings');
              const result = await response.json();
               setTotalBooking(result.count);
               console.log('testing', result);
               
          } catch (error) {
              console.error('Error fetching data:', error);
          }
      };

      fetchData();
  }, []);

  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      <ul>
        <li><strong>Total Bookings:</strong> {totalBookings}</li>
        <li><strong>Issues Reported:</strong> {reportedIssues}</li>
        <li><strong>Active Users:</strong> {totalUsers}</li>
      </ul>
    </div>
  );
} */

  function AdminDashboard() {
    const url ='http://localhost:5000/api';
  const [reportedIssues, setReportedIssues] = useState(null);
  const [totalUsers, setTotalUsers] = useState(null);
  const [totalBookings, setTotalBooking] = useState(null);
  const [totalNotifications, setTotalNotifications] = useState(null);
  

      useEffect(() => {
          const fetchData = async () => {
              try {
                  const response = await fetch(url + '/totalNotifications');
                  const result = await response.json();
                   setTotalNotifications(result.count);
                   console.log('testing', result);
                   
              } catch (error) {
                  console.error('Error fetching data:', error);
              }
          };
  
          fetchData();
      }, []);

      useEffect(() => {
          const fetchData = async () => {
              try {
                  const response = await fetch(url + '/totalIssues');
                  const result = await response.json();
                   setReportedIssues(result.count);
                   console.log('testing', result);
                   
              } catch (error) {
                  console.error('Error fetching data:', error);
              }
          };
  
          fetchData();
      }, []);

      useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url + '/totalUsers');
                const result = await response.json();
                 setTotalUsers(result.count);
                 console.log('testing', result);
                 
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await fetch(url + '/totalBookings');
              const result = await response.json();
               setTotalBooking(result.count);
               console.log('testing', result);
               
          } catch (error) {
              console.error('Error fetching data:', error);
          }
      };

      fetchData();
  }, []);

  const menuItems = [
    {
      title: "Profile",
      description: "View and update your personal information",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
      ),
      path: "/editProfile",
      iconClass: "icon-blue"
    },
    {
      title: "Courses",
      description: "Add courses and subjects to the institution",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
        </svg>
      ),
      path: "/addCourse",
      iconClass: "icon-green"
    },
    {
      title: "Appointments",
      description: "Schedule meetings with professors and advisors",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
        </svg>
      ),
      path: "/Booking",
      iconClass: "icon-purple"
    },
    {
      title: "Notifications",
      description: "View important announcements and updates",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
        </svg>
      ),
      path: "/Notifications",
      iconClass: "icon-amber"
    }
  ];

  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <header className="dashboard-header">
          <h1 className="dashboard-title">
            Admin Dashboard
          </h1>
          <p className="dashboard-subtitle">
            Welcome back! Manage your academic journey from one place.
          </p>
        </header>

        <div className="menu-grid">
          {menuItems.map((item, index) => (
            <a 
              href={item.path} 
              key={index}
              className="block"
            >
              <div className="menu-card">
                <div className="menu-card-content">
                  <div className={`icon-container ${item.iconClass}`}>
                    {item.icon}
                  </div>
                  <div className="card-content">
                    <h2 className="card-title">
                      {item.title}
                    </h2>
                    <p className="card-description">
                      {item.description}
                    </p>
                  </div>
                  <div className="chevron-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="stats-container">
          <h2 className="stats-title">Quick Stats</h2>
          <div className="stats-grid">
            <div className="stat-card stat-blue">
              <div className="stat-value">{totalUsers}</div>
              <div className="stat-label">Active Users</div>
            </div>
            <div className="stat-card stat-green">
              <div className="stat-value">{totalBookings}</div>
              <div className="stat-label">Appointments</div>
            </div>
            <div className="stat-card stat-purple">
              <div className="stat-value">{totalNotifications}</div>
              <div className="stat-label">Notifications</div>
            </div>
            <div className="stat-card stat-amber">
              <div className="stat-value">{reportedIssues}</div>
              <div className="stat-label">Issues reported</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
