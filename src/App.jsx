import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginForm from './pages/LoginForm';
import SignupForm from './pages/SignupForm';
import Services from './pages/Services';
import OrderPage from './pages/OrderPage';
import MyOrderPage from './pages/MyOrderPage';
import CancellationPage from './pages/CancellationPage';
import FeedbackPage from './pages/FeedbackForm';

//Hello

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Set isLoggedIn state to true after successful login
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // Set isLoggedIn state to false after logout
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/login"
          element={isLoggedIn ? <Navigate to="/services" /> : <LoginForm onLogin={handleLogin} />}
        />
        <Route
          path="/signup"
          element={isLoggedIn ? <Navigate to="/services" /> : <SignupForm />}
        />
        <Route
          path="/services"
          element={isLoggedIn ? <Services /> : <Navigate to="/" />}
        />
        <Route
          path="/order"
          element={isLoggedIn ? <OrderPage /> : <Navigate to="/" />}
        />
        <Route
          path="/myorders"
          element={isLoggedIn ? <MyOrderPage /> : <Navigate to="/" />}
        />
        <Route
          path="/cancellation"
          element={isLoggedIn ? <CancellationPage /> : <Navigate to="/" />}
        />
        <Route
          path="/feedback"
          element={isLoggedIn ? <FeedbackPage /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
};

export default App;
