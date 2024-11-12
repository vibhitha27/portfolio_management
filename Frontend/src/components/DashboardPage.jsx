import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const DashboardPage = () => {
  const location = useLocation();
  const email = location.state?.email;
  const [loggedInTime, setLoggedInTime] = useState('');
  const [loginHistory, setLoginHistory] = useState([]);

  useEffect(() => {
    const currentTime = new Date().toLocaleString();
    setLoggedInTime(currentTime);

    const initialLogins = [
      { email: 'user1@example.com', time: '2024-10-28 09:00:00' },
      { email: 'user2@example.com', time: '2024-10-28 09:30:00' },
      { email: 'user3@example.com', time: '2024-10-28 10:00:00' },
    ];

    const storedHistory = JSON.parse(localStorage.getItem('loginHistory')) || initialLogins;
    const isAlreadyLoggedIn = storedHistory.some(entry => entry.time === currentTime && entry.email === email);
    
    if (!isAlreadyLoggedIn) {
      const newHistory = [...storedHistory, { email, time: currentTime }];
      setLoginHistory(newHistory);
      localStorage.setItem('loginHistory', JSON.stringify(newHistory));
    } else {
      setLoginHistory(storedHistory);
    }
  }, [email]);

  const deleteLogin = (index) => {
    const updatedHistory = loginHistory.filter((_, i) => i !== index);
    setLoginHistory(updatedHistory);
    localStorage.setItem('loginHistory', JSON.stringify(updatedHistory));
  };

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '40px 20px',
      backgroundColor: '#dfe6e9',
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif'
    },
    header: {
      fontSize: '2.5em',
      fontWeight: 'bold',
      marginBottom: '10px',
      color: '#6c5ce7'
    },
    infoText: {
      color: '#2d3436',
      fontSize: '1.2em',
      marginBottom: '30px'
    },
    card: {
      backgroundColor: '#ffffff',
      borderRadius: '15px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
      padding: '20px',
      width: '100%',
      maxWidth: '400px',
      marginBottom: '30px',
      transition: 'transform 0.3s, boxShadow 0.3s'
    },
    table: {
      width: '100%',
      maxWidth: '600px',
      borderCollapse: 'collapse'
    },
    tableHeader: {
      backgroundColor: '#a29bfe',
      color: '#ffffff',
      padding: '10px',
      textAlign: 'left'
    },
    tableData: {
      padding: '10px',
      borderBottom: '1px solid #b2bec3'
    },
    deleteButton: {
      backgroundColor: '#ff7675',
      color: '#ffffff',
      border: 'none',
      padding: '5px 10px',
      cursor: 'pointer',
      borderRadius: '5px'
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Dashboard</h2>
      <p style={styles.infoText}><strong>Logged in as:</strong> {email}</p>
      <p style={styles.infoText}>Logged in at: {loggedInTime}</p>

      <div style={styles.card}>
        <h3 style={{ color: '#6c5ce7', marginBottom: '10px' }}>Login History</h3>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.tableHeader}>Email</th>
              <th style={styles.tableHeader}>Login Time</th>
              <th style={styles.tableHeader}>Action</th>
            </tr>
          </thead>
          <tbody>
            {loginHistory.map((entry, index) => (
              <tr key={index}>
                <td style={styles.tableData}>{entry.email}</td>
                <td style={styles.tableData}>{entry.time}</td>
                <td style={styles.tableData}>
                  <button 
                    onClick={() => deleteLogin(index)} 
                    style={styles.deleteButton}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardPage;
