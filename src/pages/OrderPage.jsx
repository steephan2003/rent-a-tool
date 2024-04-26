import React, { useState } from 'react';
import Navbar2 from './Navbar2'; // Import the Navbar2 component
import './OrderPage.css'; // Import the CSS file

const OrderPage = () => {
  const [timeSlot, setTimeSlot] = useState(1); // Default time slot is set to 1 day

  // Function to calculate rental amount based on time slot
  const calculateAmount = () => {
    const rate = 20; // Rate per day
    return rate * timeSlot;
  };

  // Function to handle time slot change
  const handleTimeSlotChange = (e) => {
    setTimeSlot(parseInt(e.target.value));
  };

  return (
    <>
      <Navbar2 /> {/* Include the Navbar2 component */}
      <div className="order-container">
        <h1 className="order-heading">Place Your Order</h1>
        <form className="order-form">
          <div className="form-group">
            <label htmlFor="date">Date:</label>
            <input type="date" id="date" name="date" className="input-field" />
          </div>

          <div className="form-group">
            <label htmlFor="time">Time Slot:</label>
            <select id="time" name="time" className="input-field" onChange={handleTimeSlotChange}>
              <option value="1">1 Day</option>
              <option value="2">2 Days</option>
              <option value="3">3 Days</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <input type="text" id="address" name="address" className="input-field" />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number:</label>
            <input type="tel" id="phone" name="phone" className="input-field" />
          </div>

          <div className="form-group radio-group">
            <label htmlFor="labour">Labour Needed:</label>
            <label><input type="radio" name="labour" value="yes" /> Yes</label>
            <label><input type="radio" name="labour" value="no" /> No</label>
          </div>

          <div className="form-group">
            <label htmlFor="amount">Rental Amount:</label>
            <input type="text" id="amount" name="amount" className="input-field" value={`$${calculateAmount()}`} readOnly />
          </div>

          <button className="submit-btn" type="submit">Confirm Order</button>
        </form>
      </div>
    </>
  );
};

export default OrderPage;
