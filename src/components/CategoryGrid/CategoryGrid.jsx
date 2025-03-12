import React from 'react';
import CategoryCard from '../CategoryCard/CategoryCard';
import './CategoryGrid.css';
import { categoryData } from '../../data/categoryData';

const CategoryGrid = () => {
  return (
    <div className="category-grid">
      {categoryData.map(category => (
        <CategoryCard 
          key={category.id}
          id={category.id}
          title={category.title}
          image={category.image}
        />
      ))}
    </div>
  );
};

export default CategoryGrid;