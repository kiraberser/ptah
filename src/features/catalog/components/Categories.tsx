'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Pyramid, Sword, Dog, Cat, Sparkles, Skull } from 'lucide-react';

const categories = [
  { id: 'all', name: 'Todos', icon: Sparkles },
  { id: 'egyptian', name: 'Egipcio', icon: Pyramid },
  { id: 'greek', name: 'Griego', icon: Sword },
  { id: 'anime', name: 'Anime', icon: Sparkles },
  { id: 'mayan', name: 'Maya', icon: Skull },
  { id: 'pets', name: 'Perros y Gatos', icon: Dog },
];

interface CategoriesProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const Categories = ({ activeCategory, onCategoryChange }: CategoriesProps) => {
  return (
    <section id="categories" className="py-20 relative overflow-hidden">
      {/* Purple/Indigo gradient blur effects */}
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-accent/8 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Explora por <span className="text-accent">Categoría</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explora nuestras colecciones curadas que abarcan desde civilizaciones antiguas hasta la cultura pop moderna
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {categories.map((category, index) => {
            const Icon = category.icon;
            const isActive = activeCategory === category.id;

            return (
              <motion.button
                key={category.id}
                onClick={() => onCategoryChange(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`
                  flex items-center gap-3 px-6 py-4 rounded-md font-medium transition-all duration-300 border
                  ${isActive 
                    ? 'bg-primary text-primary-foreground border-primary' 
                    : 'card-surface hover:border-accent text-foreground'
                  }
                `}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-primary-foreground' : 'text-accent'}`} />
                <span>{category.name}</span>
              </motion.button>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Categories;
