'use client';

import { motion } from 'framer-motion';
import ProductCard from './ProductCard';

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  modelUrl?: string;
}

const allProducts: Product[] = [
  {
    id: 1,
    name: 'Anubis Guardian',
    price: 299,
    category: 'egyptian',
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop',
    modelUrl: 'https://modelviewer.dev/shared-assets/models/Astronaut.glb',
  },
  {
    id: 2,
    name: 'Zeus Thunderer',
    price: 349,
    category: 'greek',
    image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=400&fit=crop',
    modelUrl: 'https://modelviewer.dev/shared-assets/models/Astronaut.glb',
  },
  {
    id: 3,
    name: 'Naruto Sage Mode',
    price: 199,
    category: 'anime',
    image: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=400&h=400&fit=crop',
    modelUrl: 'https://modelviewer.dev/shared-assets/models/Astronaut.glb',
  },
  {
    id: 4,
    name: 'Mayan Sun God',
    price: 279,
    category: 'mayan',
    image: 'https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=400&h=400&fit=crop',
    modelUrl: 'https://modelviewer.dev/shared-assets/models/Astronaut.glb',
  },
  {
    id: 5,
    name: 'Corgi Champion',
    price: 149,
    category: 'pets',
    image: 'https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?w=400&h=400&fit=crop',
    modelUrl: 'https://modelviewer.dev/shared-assets/models/Astronaut.glb',
  },
  {
    id: 6,
    name: 'Horus Rising',
    price: 329,
    category: 'egyptian',
    image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=400&h=400&fit=crop',
    modelUrl: 'https://modelviewer.dev/shared-assets/models/Astronaut.glb',
  },
  {
    id: 7,
    name: 'Athena Wisdom',
    price: 399,
    category: 'greek',
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop',
    modelUrl: 'https://modelviewer.dev/shared-assets/models/Astronaut.glb',
  },
  {
    id: 8,
    name: 'Goku Ultra Instinct',
    price: 249,
    category: 'anime',
    image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=400&fit=crop',
    modelUrl: 'https://modelviewer.dev/shared-assets/models/Astronaut.glb',
  },
];

interface ProductGridProps {
  activeCategory: string;
  onAddToCart: (product: Product) => void;
}

const ProductGrid = ({ activeCategory, onAddToCart }: ProductGridProps) => {
  const filteredProducts = activeCategory === 'all' 
    ? allProducts 
    : allProducts.filter(p => p.category === activeCategory);

  return (
    <section id="shop" className="py-20 relative overflow-hidden">
      {/* Purple/Indigo gradient blur effects */}
      <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-primary/8 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Colección <span className="text-accent">Destacada</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Cada pieza está elaborada con precisión y pasión, lista para impresión 3D o exhibición digital
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              index={index}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-muted-foreground text-lg">
              No se encontraron productos en esta categoría. ¡Vuelve pronto!
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;
