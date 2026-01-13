'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Twitter, Instagram, Youtube, Github, Heart, Facebook } from 'lucide-react';

const footerLinks = {
  categories: [
    { name: 'Egipcio', href: '/categories/egyptian' },
    { name: 'Mitología Griega', href: '/categories/greek' },
    { name: 'Anime', href: '/categories/anime' },
    { name: 'Artefactos Mayas', href: '/categories/mayan' },
    { name: 'Perros y Gatos', href: '/categories/pets' },
  ],
  company: [
    { name: 'Nosotros', href: '/about-us' },
    { name: 'Carreras', href: '#' },
    { name: 'Kit de Prensa', href: '#' },
    { name: 'Contacto', href: '/contact' },
  ],
  support: [
    { name: 'Preguntas Frecuentes', href: '/faq' },
    { name: 'Envíos', href: '#' },
    { name: 'Devoluciones', href: '#' },
    { name: 'Política de Privacidad', href: '/privacy-policy' },
    { name: 'Términos y Condiciones', href: '/terms-conditions' },
  ],
};

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Youtube, href: '#', label: 'YouTube' },
  { icon: Facebook, href: '#', label: 'Facebook' },
];

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Link href="/" className="font-display text-3xl font-bold text-accent tracking-widest">
              PTAH
            </Link>
            <p className="text-muted-foreground mt-4 max-w-sm">
              Creando divinidad en 3D. Esculturas coleccionables premium inspiradas en 
              civilizaciones antiguas y cultura pop moderna.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-md card-surface flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="font-display text-lg font-semibold text-foreground mb-4">
              Categorías
            </h3>
            <ul className="space-y-3">
              {footerLinks.categories.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="font-display text-lg font-semibold text-foreground mb-4">
              Empresa
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="font-display text-lg font-semibold text-foreground mb-4">
              Soporte
            </h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Ptah. Todos los derechos reservados.
          </p>
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            Hecho con <Heart className="w-4 h-4 text-primary fill-primary" /> por artesanos divinos
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
