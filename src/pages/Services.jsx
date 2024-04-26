import React from 'react';
import Navbar2 from './Navbar2';
import ToolList from './ToolList'; // Import the ToolList component
import './Services.css';

const Services = () => {
  return (
    <div>
      <Navbar2 />
      <div className="content">
        <h1>Tools Available</h1>
        <ToolList />
      </div>
    </div>
  );
};

export default Services;
