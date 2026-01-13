'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Eye, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  modelUrl?: string;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  index: number;
}

const ProductCard = ({ product, onAddToCart, index }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showModel, setShowModel] = useState(false);
  const [isModelViewerLoaded, setIsModelViewerLoaded] = useState(false);

  useEffect(() => {
    // Load model-viewer only on the client side
    if (typeof window !== 'undefined') {
      import('@google/model-viewer').then(() => {
        setIsModelViewerLoaded(true);
      });
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      <div className="card-surface rounded-md overflow-hidden card-hover">
        {/* Image / Model Container */}
        <div 
          className="relative aspect-square overflow-hidden cursor-pointer"
          onClick={() => setShowModel(!showModel)}
        >
          {showModel && product.modelUrl && isModelViewerLoaded ? (
            // @ts-ignore - model-viewer is a custom element
            <model-viewer
              src={product.modelUrl}
              alt={product.name}
              auto-rotate
              camera-controls
              shadow-intensity="1"
              className="w-full h-full"
            />
          ) : (
            <>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </>
          )}

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            className="absolute top-4 right-4 flex flex-col gap-2"
          >
            <Button
              size="icon"
              variant="secondary"
              className="card-surface hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Heart className="w-4 h-4" />
            </Button>
            <Button
              size="icon"
              variant="secondary"
              className="card-surface hover:bg-primary hover:text-primary-foreground transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setShowModel(!showModel);
              }}
            >
              <Eye className="w-4 h-4" />
            </Button>
          </motion.div>

          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 text-xs font-medium rounded-md card-surface text-accent">
              {product.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="font-display text-lg font-semibold text-foreground mb-2 truncate">
            {product.name}
          </h3>
          
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-accent">
              ${product.price}
            </span>
            
            <Button
              onClick={() => onAddToCart(product)}
              className="btn-primary text-primary-foreground rounded-md px-4"
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              Agregar
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
