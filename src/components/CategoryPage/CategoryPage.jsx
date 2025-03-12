import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import './CategoryPage.css';
import { categoryData } from '../../data/categoryData';

const CategoryPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const category = categoryData.find(cat => cat.id === parseInt(id));

  if (!category) {
    return <div>Category not found</div>;
  }

  return (
    <div className="category-page">
      <div className="category-header">
        <button className="back-button" onClick={() => navigate('/')}>
          <ArrowLeft size={24} />
        </button>
        <h1>{category.title}</h1>
      </div>
      <div className="subcategories-list">
        {category.subcategories.map((subcategory, index) => (
          <div key={index} className="subcategory-item">
            {subcategory.icon}
            <span>{subcategory.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryPage