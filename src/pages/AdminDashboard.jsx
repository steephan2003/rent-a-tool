import React, { useState, useEffect } from 'react';
import './AdminDashboard.css';

function AdminDashboard() {
  const [tools, setTools] = useState([]);

  const fetchTools = async () => {
    // Fetch tools data from your backend API
    // For example:
    // const response = await fetch('/api/tools');
    // const data = await response.json();
    // setTools(data);
  };

  useEffect(() => {
    fetchTools();
  }, []);

  const handleLogout = () => {
    // Clear authentication state from local storage
    localStorage.removeItem('isLoggedIn');
    // Redirect to the login page
    window.location.href = '/admin';
  };

  return (
    <div className="admin-dashboard">
      <div className="header">
        <h1>Tool Rental Admin Dashboard</h1>
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </div>
      <div className="tool-list">
        {tools.map((tool) => (
          <div key={tool.id} className="tool">
            <h3>{tool.name}</h3>
            <p>Description: {tool.description}</p>
            <p>Quantity: {tool.quantity}</p>
            <button>Edit</button>
            <button>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminDashboard;
