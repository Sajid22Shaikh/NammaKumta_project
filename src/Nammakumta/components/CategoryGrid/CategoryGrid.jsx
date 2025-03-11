import React from 'react';
import CategoryCard from '../CategoryCard/CategoryCard';
import './CategoryGrid.css';

const categories = [
  { 
    id: 1, 
    title: 'Hospital', 
    image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=300&h=200&fit=crop' 
  },
  { 
    id: 2, 
    title: 'Departments', 
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=300&h=200&fit=crop' 
  },
  { 
    id: 3, 
    title: 'Associations', 
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=300&h=200&fit=crop' 
  },
  { 
    id: 4, 
    title: 'Banks', 
    image: 'https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?w=300&h=200&fit=crop' 
  },
  { 
    id: 5, 
    title: 'Tourism', 
    image: 'https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=300&h=200&fit=crop' 
  },
  { 
    id: 6, 
    title: 'Hotels', 
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=300&h=200&fit=crop' 
  },
  { 
    id: 7, 
    title: 'RentVehicles', 
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=300&h=200&fit=crop' 
  },
  { 
    id: 8, 
    title: 'WeddingPlann', 
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=300&h=200&fit=crop' 
  },
  { 
    id: 9, 
    title: 'Shops', 
    image: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=300&h=200&fit=crop' 
  },
  { 
    id: 10, 
    title: 'Services', 
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=300&h=200&fit=crop' 
  },
  { 
    id: 11, 
    title: 'Emergency', 
    image: 'https://images.unsplash.com/photo-1588421357574-87938a86fa28?w=300&h=200&fit=crop' 
  },
  { 
    id: 12, 
    title: 'Schools & Colleges', 
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=300&h=200&fit=crop' 
  },
  { 
    id: 13, 
    title: 'CulturalProgra', 
    image: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=300&h=200&fit=crop' 
  },
  { 
    id: 14, 
    title: 'Sports & Equipment', 
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=300&h=200&fit=crop' 
  }
];

const CategoryGrid = () => {
  return (
    <div className="category-grid">
      {categories.map(category => (
        <CategoryCard 
          key={category.id}
          title={category.title}
          image={category.image}
        />
      ))}
    </div>
  );
};

export default CategoryGrid;