import React from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import CategoryGrid from './components/CategoryGrid/CategoryGrid';
import Navigation from './components/Navigation/Navigation';
import './App.css';

function App() {
  return (
    <div className="app">
      <SearchBar />
      <CategoryGrid />
      <Navigation />
    </div>
  );
}

export default App;