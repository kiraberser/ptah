'use client';

import { motion } from 'framer-motion';
import ProductCard from './ProductCard';

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  modelUrl?: string;
}

const allProducts: Product[] = [
  {
    id: 1,
    name: 'Anubis Guardian',
    price: 299,
    category: 'egyptian',
    modelUrl: 'https://modelviewer.dev/shared-assets/models/Astronaut.glb',
  },
  {
    id: 9,
    name: 'Random',
    price: 249,
    category: 'random',
    modelUrl: 'https://res.cloudinary.com/refaccionaria-vega/image/upload/v1768612521/test_ffkpsd.glb',
  },
  {
    id: 10,
    name: 'Marcus Aurelius',
    price: 249,
    category: 'random',
    modelUrl: 'https://res.cloudinary.com/refaccionaria-vega/image/upload/v1768962348/marcus-aurelius-draco_yyv50o.glb',
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
