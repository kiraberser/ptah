'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

const Hero = () => {
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
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Blue gradient background with blur effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/30 to-background animate-gradient" />
      
      {/* Purple/Indigo gradient blur effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/12 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/6 rounded-full blur-3xl" />
      
      {/* Animated grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #09090B 1px, transparent 1px),
            linear-gradient(to bottom, #09090B 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10 m-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg card-surface mb-6"
              whileHover={{ scale: 1.05, borderColor: 'var(--ptah-accent)' }}
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <Sparkles className="w-4 h-4 text-accent" />
              </motion.div>
              <span className="text-sm text-accent font-medium">Coleccionables 3D Premium</span>
            </motion.div>

            <motion.h1 
              className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <motion.span 
                className="text-accent inline-block"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                Creando
              </motion.span>
              <motion.span 
                className="text-foreground inline-block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                {' '}Divinidad
              </motion.span>
              <br />
              <motion.span 
                className="text-accent inline-block"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
              >
                en 3D
              </motion.span>
            </motion.h1>

            <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-lg mx-auto lg:mx-0">
              Descubre nuestra colección exclusiva de esculturas 3D meticulosamente elaboradas, 
              desde dioses egipcios antiguos hasta obras maestras del anime moderno.
            </p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.3 }}
            >
              <Link href="/collections">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    className="btn-primary text-primary-foreground font-semibold px-8 py-6 text-lg rounded-lg"
                  >
                    Explorar Colección
                    <motion.span
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                      className="inline-block"
                    >
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </motion.span>
                  </Button>
                </motion.div>
              </Link>
              <Link href="/categories">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="btn-outline font-semibold px-8 py-6 text-lg rounded-lg"
                  >
                    Ver Categorías
                  </Button>
                </motion.div>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
              className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-border"
            >
              {[
                { value: '500+', label: 'Diseños Únicos' },
                { value: '50K+', label: 'Coleccionistas Felices' },
                { value: '4.9', label: 'Calificación' },
              ].map((stat, index) => (
                <motion.div 
                  key={stat.label} 
                  className="text-center lg:text-left"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div 
                    className="text-2xl md:text-3xl font-bold text-accent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.7 + index * 0.1 }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - 3D Model Viewer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Animated border glow */}
              <motion.div
                className="absolute inset-0 rounded-lg border-2 border-accent/20"
                animate={{
                  borderColor: [
                    'rgba(1, 24, 216, 0.2)',
                    'rgba(1, 24, 216, 0.4)',
                    'rgba(1, 24, 216, 0.2)',
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              
              {/* Model Container */}
              <motion.div 
                className="relative card-surface p-4 h-full rounded-lg"
                whileHover={{ 
                  scale: 1.02,
                  borderColor: 'var(--ptah-accent)',
                  transition: { duration: 0.3 }
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                {isModelViewerLoaded ? (
                  // @ts-ignore - model-viewer is a custom element
                  <model-viewer
                    src="https://modelviewer.dev/shared-assets/models/Astronaut.glb"
                    alt="Escultura 3D Destacada"
                    auto-rotate
                    camera-controls
                    shadow-intensity="1"
                    exposure="0.8"
                    className="w-full h-full rounded-lg"
                    style={{ minHeight: '400px' }}
                  />
                ) : (
                  <motion.div 
                    className="w-full h-full rounded-lg bg-secondary flex items-center justify-center border border-border" 
                    style={{ minHeight: '400px' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <motion.div 
                      className="text-muted-foreground"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      Cargando Modelo 3D...
                    </motion.div>
                  </motion.div>
                )}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
