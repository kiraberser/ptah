'use client';

import { useState } from 'react';
import Hero from './Hero';
import Categories from '@/features/catalog/components/Categories';
import ProductGrid from '@/features/catalog/components/ProductGrid';
import Newsletter from './Newsletter';
import Contact from './Contact';

export default function HomePageClient() {
  const [activeCategory, setActiveCategory] = useState('all');

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };

  const handleAddToCart = (product: any) => {
    // TODO: Implement cart logic
    console.log('Add to cart:', product);
  };

  return (
    <>
      <Hero />
      <Categories 
        activeCategory={activeCategory} 
        onCategoryChange={handleCategoryChange} 
      />
      <ProductGrid 
        activeCategory={activeCategory} 
        onAddToCart={handleAddToCart} 
      />
      <Newsletter />
      <Contact />
    </>
  );
}
