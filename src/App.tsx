// src/App.tsx
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import UserPage from './pages/UserPage';
import DashboardPage from './pages/DashboardPage'; // Import DashboardPage
import LoginPage from './pages/LoginPage';
import ProtectedRoute from './components/ProtectedRoute';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true); // Nếu token tồn tại, đặt isAuthenticated thành true
    }
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute element={<DashboardPage />} isAuthenticated={isAuthenticated} />
          }
        />
        <Route
          path="/users"
          element={
            <ProtectedRoute element={<UserPage />} isAuthenticated={isAuthenticated} />
          }
        />
        <Route path="*" element={<Navigate to="/login" />} /> {/* Chuyển hướng về login nếu không khớp với route nào */}
      </Routes>
    </Router>
  );
};

export default App;
