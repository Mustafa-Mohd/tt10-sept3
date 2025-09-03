import React, { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import BooksSection from '@/components/BooksSection';
import PodcastsSection from '@/components/PodcastsSection';
import Footer from '@/components/Footer';
import SubscribePopup from '@/components/SubscribePopup';

const Index = () => {
  const [showSubscribePopup, setShowSubscribePopup] = useState(false);

  useEffect(() => {
    // Show subscribe popup after 4 seconds on page load
    const timer = setTimeout(() => {
      setShowSubscribePopup(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background custom-scrollbar">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <BooksSection />
        <PodcastsSection />
      </main>
      <Footer />
      
      {/* Subscribe Popup */}
      <SubscribePopup 
        isOpen={showSubscribePopup} 
        onClose={() => setShowSubscribePopup(false)} 
      />
    </div>
  );
};

export default Index;
