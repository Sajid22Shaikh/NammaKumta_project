import React from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import CategoryGrid from './components/CategoryGrid/CategoryGrid';
import Navigation from './components/Navigation/Navigation';
import './Nammakumta.css';

export const Nammakumta=()=> {
  return (
    <div className="app">
      <SearchBar />
      <CategoryGrid />
      <Navigation />
    </div>
  );
}

