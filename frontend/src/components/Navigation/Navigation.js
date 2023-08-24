// Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'; // Import your custom CSS

function Navigation() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">Albumify</Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/add-album">Add Album</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Signup</Link></li>
        {/* Add other links as needed */}
      </ul>
    </nav>
  );
}

export default Navigation;
