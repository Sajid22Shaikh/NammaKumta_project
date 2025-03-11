import React from 'react';
import CategoryCard from '../CategoryCard/CategoryCard';
import './CategoryGrid.css';

const categories = [
  { 
    id: 1, 
    title: 'Hospital', 
    image: 'https://pics.craiyon.com/2024-09-06/QDWqBYpMTZ-vJVFdzuN7GA.webp' 
  },
  { 
    id: 2, 
    title: 'Departments', 
    image: 'https://cbin.b-cdn.net/img/GO/Government-of-India01_9CFDJ_800x582.jpeg' 
  },
  { 
    id: 3, 
    title: 'Associations', 
    image: 'https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg' 
  },
  { 
    id: 4, 
    title: 'Banks', 
    image: 'https://t4.ftcdn.net/jpg/00/61/06/27/360_F_61062796_NF87GPnWV0fQ2LhoYNlyjev0PocRwZj9.jpg' 
  },
  { 
    id: 5, 
    title: 'Tourism', 
    image: 'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg' 
  },
  { 
    id: 6, 
    title: 'Hotels', 
    image: 'https://images.otstatic.com/prod/24065351/1/large.jpg' 
  },
  { 
    id: 7, 
    title: 'RentVehicles', 
    image: 'https://img.freepik.com/premium-photo/car-rental-k…-hand-rent-car-from-rental-agency_294383-9193.jpg' 
  },
  { 
    id: 8, 
    title: 'WeddingPlann', 
    image: 'https://i.pinimg.com/236x/86/04/60/8604607fbce1a7515824ada352bdbd51.jpg' 
  },
  { 
    id: 9, 
    title: 'Shops', 
    image: 'https://cdn.pixabay.com/photo/2020/11/20/17/15/local-store-5762254_640.png' 
  },
  { 
    id: 10, 
    title: 'Services', 
    image: 'https://blog.renovationfind.com/wp-content/uploads/2023/12/Handyman-Services-800x450-2.jpg' 
  },
  { 
    id: 11, 
    title: 'Emergency', 
    image: 'https://media.istockphoto.com/id/498429644/vector/empty-red-box-with-in-case-of-emergency.jpg?s=612x612&w=0&k=20&c=MADP-BKUiwEHcm959qrO1et81GU9FwskpAk0ALniXxA=' 
  },
  { 
    id: 12, 
    title: 'Schools & Colleges', 
    image: 'https://img.freepik.com/premium-photo/schoolboys-near-school-building-india_78361-13841.jpg' 
  },
  { 
    id: 13, 
    title: 'CulturalProgra', 
    image: 'https://media.istockphoto.com/id/1648171369/photo/yakshagana-artist-showing-happiness.jpg?b=1&s=612x612&w=0&k=20&c=mh9VdX2Kc9mCLWLkCv5k16pgTcaJnsfVwP4QK9nS8Ek=' 
  },
  { 
    id: 14, 
    title: 'Sports & Equipment', 
    image: 'https://media.istockphoto.com/id/2002620668/photo/female-runner-in-a-park-stock-photo.jpg?b=1&s=612x612&w=0&k=20&c=fKpqpuW7gGl0lZTyQknr-e9TDL2-M3rfOXsNu9hSowI=' 
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