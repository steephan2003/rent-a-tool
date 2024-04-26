import React, { useState } from 'react';
import Navbar from './Navbar';
import './LoginForm.css';

const LoginForm = ({ onLogin }) => { // Pass onLogin function as a prop
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();

    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }

    if (email === 'user@example.com' && password === 'password') {
      // Emit login event
      onLogin();
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <>
      <Navbar />
      <div className="form-container">
        <h2>Login</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
