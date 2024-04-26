// ToolList.jsx
import React from 'react';
import ToolCard from './ToolCard';
import './ToolList.css'; // Import the ToolList CSS file

const tools = [
  {
    id: 1,
    name: 'Tool 1',
    description: 'Description for Tool 1',
    image: '/path/to/tool1.jpg'
  },
  {
    id: 2,
    name: 'Tool 2',
    description: 'Description for Tool 2',
    image: '/path/to/tool2.jpg'
  },
  // Add more tool objects as needed
];

const ToolList = () => {
  return (
    <div className="tool-list"> {/* Add the CSS class */}
      {tools.map(tool => (
        <ToolCard key={tool.id} tool={tool} />
      ))}
    </div>
  );
};

export default ToolList;
