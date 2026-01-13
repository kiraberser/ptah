'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ShoppingCart, User, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

interface NavbarProps {
  cartCount: number;
  onCartClick: () => void;
  onAuthClick: () => void;
}

const navLinks = [
  { name: 'Inicio', href: '/' },
  { name: 'Colecciones', href: '/collections' },
  { name: 'Categorías', href: '/categories' },
  { name: 'Nosotros', href: '/about-us' },
];

const Navbar = ({ cartCount, onCartClick, onAuthClick }: NavbarProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleCartClick = () => {
    onCartClick();
    router.push('/cart');
  };

  const handleAuthClick = () => {
    onAuthClick();
    router.push('/account/login');
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            <motion.div
              className="font-display text-3xl font-bold text-accent tracking-widest cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              PTAH <strong className="text-black">3D</strong>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link key={link.name} href={link.href}>
                  <motion.div
                    className={`text-foreground/80 hover:text-accent transition-colors font-medium ${
                      isActive ? 'text-accent' : ''
                    }`}
                    whileHover={{ y: -2 }}
                  >
                    {link.name}
                  </motion.div>
                </Link>
              );
            })}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Search */}
            <AnimatePresence>
              {searchOpen && (
                <motion.input
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 200, opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  className="input-styled rounded-md px-4 py-2 text-sm"
                  placeholder="Buscar diseños..."
                  autoFocus
                />
              )}
            </AnimatePresence>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSearchOpen(!searchOpen)}
              className="text-foreground hover:text-accent hover:bg-secondary/50"
            >
              <Search className="h-5 w-5" />
            </Button>

            {/* Cart */}
            <Button
              variant="ghost"
              size="icon"
              onClick={handleCartClick}
              className="relative text-foreground hover:text-accent hover:bg-secondary/50"
            >
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs rounded-md flex items-center justify-center font-semibold"
                >
                  {cartCount}
                </motion.span>
              )}
            </Button>

            {/* User */}
            <Button
              variant="ghost"
              size="icon"
              onClick={handleAuthClick}
              className="text-foreground hover:text-accent hover:bg-secondary/50"
            >
              <User className="h-5 w-5" />
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-foreground hover:text-accent hover:bg-secondary/50"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-t border-border"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link, index) => {
                const isActive = pathname === link.href;
                return (
                  <Link key={link.name} href={link.href}>
                    <motion.div
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className={`text-foreground hover:text-accent transition-colors font-medium text-lg py-2 ${
                        isActive ? 'text-accent' : ''
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </motion.div>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
