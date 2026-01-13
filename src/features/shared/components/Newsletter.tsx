'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <section className="py-20 relative overflow-hidden bg-secondary">
      {/* Purple/Indigo gradient blur effects */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-accent/12 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md card-surface mb-6">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm text-accent font-medium">Actualizaciones Exclusivas</span>
          </div>

          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Únete a los <span className="text-accent">Creadores</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Suscríbete para recibir lanzamientos exclusivos de diseños 3D, acceso anticipado a nuevas colecciones 
            y funciones destacadas de creadores.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <div className="flex-1 relative">
              <Input
                type="email"
                placeholder="Ingresa tu correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-styled py-6 px-5 rounded-md text-base"
              />
            </div>
            <Button
              type="submit"
              className="btn-primary text-primary-foreground px-8 py-6 rounded-md font-semibold"
            >
              <Send className="w-5 h-5 mr-2" />
              Suscribirse
            </Button>
          </form>

          {isSubmitted && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-accent mt-4 font-medium"
            >
              ✨ ¡Bienvenido a los creadores! Revisa tu bandeja de entrada.
            </motion.p>
          )}

          <p className="text-muted-foreground text-sm mt-4">
            Sin spam, cancela tu suscripción en cualquier momento. Respetamos tu privacidad.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
