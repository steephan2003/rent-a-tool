// AdminToolList.jsx
import React from 'react';
import AdminToolCard from './AdminToolCard';

const tools = [
  {
    id: 1,
    name: 'Tool 1',
    description: 'Description for Tool 1',
    image: '/path/to/tool1.jpg',
    ratePerDay: 10 // Add rate per day for Tool 1
  },
  {
    id: 2,
    name: 'Tool 2',
    description: 'Description for Tool 2',
    image: '/path/to/tool2.jpg',
    ratePerDay: 15 // Add rate per day for Tool 2
  },
  // Add more tool objects as needed
];

const AdminToolList = () => {
  return (
    <div className="admin-tool-list">
      {tools.map(tool => (
        <AdminToolCard key={tool.id} tool={tool} />
      ))}
    </div>
  );
};

export default AdminToolList;
