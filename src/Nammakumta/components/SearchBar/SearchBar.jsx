import React from 'react';
import { Search, Mic } from 'lucide-react';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className="search-container">
      <div className="search-wrapper">
        <Search className="search-icon" size={20} />
        <input 
          type="text" 
          placeholder="Search here..." 
          className="search-input"
        />
        <button className="voice-button">
          <Mic size={20} />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;