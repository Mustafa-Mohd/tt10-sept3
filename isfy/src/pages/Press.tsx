import React from 'react';
import Navigation from '@/components/Navigation';
import PressSection from '@/components/PressSection';
import Footer from '@/components/Footer';

const Press = () => {
  return (
    <div className="min-h-screen bg-background custom-scrollbar">
      <Navigation />
      <main>
        <PressSection />
      </main>
      <Footer />
    </div>
  );
};

export default Press;