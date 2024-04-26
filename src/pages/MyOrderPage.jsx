// MyOrderPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const MyOrderPage = () => {
  // Dummy data for orders
  const orders = [
    { id: 1, toolName: 'Drill', phoneNumber: '123-456-7890' },
    { id: 2, toolName: 'Circular Saw', phoneNumber: '987-654-3210' },
    { id: 3, toolName: 'Hammer', phoneNumber: '555-555-5555' },
  ];

  return (
    <div>
      <h1>My Orders</h1>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Tool Name</th>
            <th>Phone Number</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.toolName}</td>
              <td>{order.phoneNumber}</td>
              <td>
                <Link to={`/cancellation`}>Cancel</Link> {/* Link to the cancelation page */}
                {' | '}
                <Link to={`/feedback`}>Feedback</Link> {/* Link to the feedback page */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrderPage;
