import React from 'react';
import Navbar2 from './Navbar2'; // Import the Navbar2 component
import './FeedbackPage.css';

function FeedbackForm() {
  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add logic to handle form submission here
  };

  return (
    <div>
      <Navbar2 /> {/* Include the Navbar2 component */}
      <h1>Power Tool Rental Feedback</h1>
      <form id="feedbackForm" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="toolname">Tool Name:</label>
          <input type="text" id="toolname" name="toolname" required />
        </div>

        <div className="form-group">
          <label htmlFor="orderid">Order ID:</label>
          <input type="text" id="orderid" name="orderid" required />
        </div>

        <div className="form-group">
          <label htmlFor="rating">Rating:</label>
          <select id="rating" name="rating" required>
            <option value="">Select a rating</option>
            <option value="1">1 - Poor</option>
            <option value="2">2 - Fair</option>
            <option value="3">3 - Good</option>
            <option value="4">4 - Very Good</option>
            <option value="5">5 - Excellent</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="feedback">Feedback:</label>
          <textarea id="feedback" name="feedback" rows="4" cols="50" required></textarea>
        </div>

        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
}

export default FeedbackForm;
