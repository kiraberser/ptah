'use client';

import { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function LayoutClient({ children }: { children: React.ReactNode }) {
  const [cartCount, setCartCount] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  const handleCartClick = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleAuthClick = () => {
    setIsAuthOpen(!isAuthOpen);
  };

  return (
    <>
      <Navbar 
        cartCount={cartCount} 
        onCartClick={handleCartClick}
        onAuthClick={handleAuthClick}
      />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
    </>
  );
}
