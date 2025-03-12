import React from 'react';
import { Heart, Baby, Bluetooth as Tooth, Bone, Activity, Stethoscope, Building2, Briefcase, Car, Church, Store, Wrench, School, Music, Dumbbell } from 'lucide-react';

export const categoryData = [
  {
    id: 1,
    title: 'Hospital',
    image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=300&h=200&fit=crop',
    subcategories: [
      { name: 'Cardiologists', icon: <Heart size={24} /> },
      { name: 'Heart Specialists', icon: <Activity size={24} /> },
      { name: 'Child Specialists', icon: <Baby size={24} /> },
      { name: 'Dentist', icon: <Tooth size={24} /> },
      { name: 'Bone & Joints Doctors', icon: <Bone size={24} /> },
      { name: 'Orthopedic Doctors', icon: <Stethoscope size={24} /> }
    ]
  },
  {
    id: 2,
    title: 'Departments',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=300&h=200&fit=crop',
    subcategories: [
      { name: 'Government', icon: <Building2 size={24} /> },
      { name: 'Private', icon: <Briefcase size={24} /> }
    ]
  },
  {
    id: 3,
    title: 'Associations',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=300&h=200&fit=crop',
    subcategories: [
      { name: 'Public', icon: <Building2 size={24} /> },
      { name: 'Private', icon: <Briefcase size={24} /> }
    ]
  },
  {
    id: 4,
    title: 'Banks',
    image: 'https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?w=300&h=200&fit=crop',
    subcategories: [
      { name: 'Government Banks', icon: <Building2 size={24} /> },
      { name: 'Private Banks', icon: <Briefcase size={24} /> }
    ]
  },
  {
    id: 5,
    title: 'Tourism',
    image: 'https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=300&h=200&fit=crop',
    subcategories: [
      { name: 'Tourist Places', icon: <Building2 size={24} /> },
      { name: 'Travel Agencies', icon: <Car size={24} /> }
    ]
  },
  {
    id: 6,
    title: 'Hotels',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=300&h=200&fit=crop',
    subcategories: [
      { name: 'Luxury Hotels', icon: <Building2 size={24} /> },
      { name: 'Budget Hotels', icon: <Building2 size={24} /> }
    ]
  },
  {
    id: 7,
    title: 'RentVehicles',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=300&h=200&fit=crop',
    subcategories: [
      { name: 'Cars', icon: <Car size={24} /> },
      { name: 'Bikes', icon: <Car size={24} /> }
    ]
  },
  {
    id: 8,
    title: 'WeddingPlann',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=300&h=200&fit=crop',
    subcategories: [
      { name: 'Wedding Halls', icon: <Church size={24} /> },
      { name: 'Event Planners', icon: <Briefcase size={24} /> }
    ]
  },
  {
    id: 9,
    title: 'Shops',
    image: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=300&h=200&fit=crop',
    subcategories: [
      { name: 'Retail Shops', icon: <Store size={24} /> },
      { name: 'Wholesale Shops', icon: <Store size={24} /> }
    ]
  },
  {
    id: 10,
    title: 'Services',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=300&h=200&fit=crop',
    subcategories: [
      { name: 'Home Services', icon: <Wrench size={24} /> },
      { name: 'Professional Services', icon: <Briefcase size={24} /> }
    ]
  },
  {
    id: 11,
    title: 'Emergency',
    image: 'https://images.unsplash.com/photo-1588421357574-87938a86fa28?w=300&h=200&fit=crop',
    subcategories: [
      { name: 'Ambulance', icon: <Activity size={24} /> },
      { name: 'Fire Service', icon: <Activity size={24} /> }
    ]
  },
  {
    id: 12,
    title: 'Schools & Colleges',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=300&h=200&fit=crop',
    subcategories: [
      { name: 'Schools', icon: <School size={24} /> },
      { name: 'Colleges', icon: <School size={24} /> }
    ]
  },
  {
    id: 13,
    title: 'CulturalProgra',
    image: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=300&h=200&fit=crop',
    subcategories: [
      { name: 'Music Programs', icon: <Music size={24} /> },
      { name: 'Dance Programs', icon: <Music size={24} /> }
    ]
  },
  {
    id: 14,
    title: 'Sports & Equipment',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=300&h=200&fit=crop',
    subcategories: [
      { name: 'Sports Centers', icon: <Dumbbell size={24} /> },
      { name: 'Equipment Stores', icon: <Dumbbell size={24} /> }
    ]
  }
];