'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MessageSquare, User, Mail, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Purple/Indigo gradient blur effects */}
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-primary/8 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md card-surface mb-6">
              <MessageSquare className="w-4 h-4 text-accent" />
              <span className="text-sm text-accent font-medium">Contáctanos</span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Creemos <span className="text-accent">Juntos</span>
            </h2>

            <p className="text-muted-foreground text-lg mb-8">
              ¿Tienes un diseño personalizado en mente? ¿Buscas una colaboración? 
              Nuestro equipo de maestros artesanos está listo para dar vida a tu visión.
            </p>

            <div className="space-y-4">
              {[
                { icon: '📍', text: 'Martinez de la Torre, Veracruz' },
                { icon: '📧', text: 'hola@ptah.design' },
                { icon: '⏰', text: 'Respuesta en menos de 24 horas' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 text-foreground"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="card-surface rounded-md p-8">
              <div className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      type="text"
                      placeholder="Tu Nombre"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="input-styled pl-12 py-6 rounded-md"
                      required
                    />
                  </div>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      type="email"
                      placeholder="Tu Correo Electrónico"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="input-styled pl-12 py-6 rounded-md"
                      required
                    />
                  </div>
                </div>

                <div className="relative">
                  <FileText className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Asunto"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="input-styled pl-12 py-6 rounded-xl"
                    required
                  />
                </div>

                <Textarea
                  placeholder="Cuéntanos sobre tu proyecto..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="input-styled min-h-[150px] rounded-md resize-none"
                  required
                />

                <Button
                  type="submit"
                  className="w-full btn-primary text-primary-foreground py-6 text-lg font-semibold rounded-md"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Enviar Mensaje
                </Button>

                {isSubmitted && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-accent text-center font-medium"
                  >
                    ✨ ¡Mensaje enviado! Nos pondremos en contacto pronto.
                  </motion.p>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
