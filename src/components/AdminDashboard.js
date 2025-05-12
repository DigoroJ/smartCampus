import React, { useEffect, useState } from 'react';

function AdminDashboard() {
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
}

export default AdminDashboard;
