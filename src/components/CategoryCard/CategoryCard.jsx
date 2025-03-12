import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CategoryCard.css';

const CategoryCard = ({ id, title, image }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/category/${id}`);
  };

  return (
    <div className="category-card" onClick={handleClick}>
      <img src={image} alt={title} className="category-image" />
      <h3 className="category-title">{title}</h3>
    </div>
  );
};

export default CategoryCard;