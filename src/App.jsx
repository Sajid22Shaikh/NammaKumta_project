import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router';
import SearchBar from './components/SearchBar/SearchBar';
import CategoryGrid from './components/CategoryGrid/CategoryGrid';
import Navigation from './components/Navigation/Navigation';
import CategoryPage from './components/CategoryPage/CategoryPage';
import './App.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <SearchBar />
        <CategoryGrid />
      </>
    ),
  },
  {
    path: "/category/:id",
    element: <CategoryPage />,
  }
]);

const App = () => {
  return (
    <RouterProvider router={router}>
      <div className="app">
        <Navigation />
      </div>
    </RouterProvider>
  );
};

export default App;
