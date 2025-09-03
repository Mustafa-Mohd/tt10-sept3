import React from 'react';
import Navigation from '@/components/Navigation';
import ShopSection from '@/components/ShopSection';
import Footer from '@/components/Footer';

const Shop = () => {
  return (
    <div className="min-h-screen bg-background custom-scrollbar">
      <Navigation />
      <main>
        <ShopSection />
      </main>
      <Footer />
    </div>
  );
};

export default Shop;