import React from 'react';
import { Home, Search, PlusCircle, Bell } from 'lucide-react';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="bottom-nav">
      <button className="nav-item">
        <Home className="nav-icon" size={24} />
        <span className="nav-text">Home</span>
      </button>
      <button className="nav-item">
        <Search className="nav-icon" size={24} />
        <span className="nav-text">Search</span>
      </button>
      <button className="nav-item">
        <PlusCircle className="nav-icon" size={24} />
        <span className="nav-text">Add/Join</span>
      </button>
      <button className="nav-item">
        <Bell className="nav-icon" size={24} />
        <span className="nav-text">Alerts</span>
      </button>
    </nav>
  );
};

export default Navigation;