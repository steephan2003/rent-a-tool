import React from 'react';
import { Link } from 'react-router-dom'; // Import Link

const ToolCard = ({ tool }) => {
  return (
    <div className="tool-card">
      <img src={tool.image} alt={tool.name} />
      <h3>{tool.name}</h3>
      <p>{tool.description}</p>
      <Link to={`/order`}>Book Now</Link> {/* Use Link instead of button */}
    </div>
  );
};

export default ToolCard;
