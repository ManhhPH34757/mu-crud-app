// src/components/Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const token = localStorage.getItem('access_token');

  return (
    <nav>
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        {token && (
          <>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
