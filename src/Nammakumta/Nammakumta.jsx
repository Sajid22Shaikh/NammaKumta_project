import React from 'react';
import { RouterProvider, createMemoryRouter } from 'react-router';
import SearchBar from './components/SearchBar/SearchBar';
import CategoryGrid from './components/CategoryGrid/CategoryGrid';
import Navigation from './components/Navigation/Navigation';
import CategoryPage from './components/CategoryPage/CategoryPage';
import './Nammakumta.css';

const router = createMemoryRouter([
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

export const Nammakumta = () => {
  return (
    <>
    <div className="app">
    <RouterProvider router={router}>
    </RouterProvider>
    <Navigation/>
    </div>
    </>
  );
};
