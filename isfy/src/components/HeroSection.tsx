import React from 'react';
import { Button } from '@/components/ui/button';
import { BookOpen, Headphones } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  const goToBooks = () => {
    navigate('/books');
  };

  const goToPodcasts = () => {
    navigate('/podcasts');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-end justify-center overflow-hidden">
      {/* Responsive background - Video for desktop, image for mobile */}
      <div className="absolute inset-0 w-full h-full z-0">
        {/* Desktop Video Background */}
        <video
          className="hidden md:block absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/assets/Ishrat.mp4" type="video/mp4" />
        </video>
        
        {/* Mobile Image Background */}
        <div 
          className="md:hidden absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/assets/Ishrat.mp4')` }}
        />
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30 md:bg-black/20" />
      </div>

      {/* Content overlay - Responsive positioning */}
      <div className="relative z-10 text-center px-4 sm:px-6 mb-8 sm:mb-12 w-full max-w-4xl mx-auto">
        {/* Two main buttons - Responsive layout */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
          <Button 
            size="lg" 
            className="responsive-button btn-3d-transparent-pink font-cormorant w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 bg-pink-500/80 backdrop-blur-md text-white hover:bg-pink-600/90 transition-all duration-300 shadow-2xl hover:shadow-pink-500/50 transform hover:-translate-y-2 active:translate-y-0 touch-target"
            onClick={goToBooks}
          >
            <BookOpen className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
            Explore Books
          </Button>
          
          <Button 
            size="lg" 
            className="responsive-button btn-3d-transparent-green font-cormorant w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 bg-green-600/80 backdrop-blur-md text-white hover:bg-green-700/90 transition-all duration-300 shadow-2xl hover:shadow-green-500/50 transform hover:-translate-y-2 active:translate-y-0 touch-target"
            onClick={goToPodcasts}
          >
            <Headphones className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
            Podcasts
          </Button>
        </div>
      </div>

      {/* Custom 3D Transparent Button Styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
          .btn-3d-transparent-pink {
            position: relative;
            border: 2px solid rgba(255, 255, 255, 0.3);
            border-radius: 16px;
            box-shadow: 
              0 8px 0 rgba(236, 72, 153, 0.8),
              0 15px 25px rgba(0, 0, 0, 0.3),
              inset 0 1px 0 rgba(255, 255, 255, 0.4),
              inset 0 -1px 0 rgba(0, 0, 0, 0.2);
            transition: all 0.1s ease;
          }
          
          .btn-3d-transparent-pink:hover {
            box-shadow: 
              0 6px 0 rgba(236, 72, 153, 0.9),
              0 12px 30px rgba(0, 0, 0, 0.4),
              inset 0 1px 0 rgba(255, 255, 255, 0.5),
              inset 0 -1px 0 rgba(0, 0, 0, 0.3);
          }
          
          .btn-3d-transparent-pink:active {
            box-shadow: 
              0 2px 0 rgba(236, 72, 153, 0.8),
              0 5px 15px rgba(0, 0, 0, 0.3),
              inset 0 1px 0 rgba(255, 255, 255, 0.3),
              inset 0 -1px 0 rgba(0, 0, 0, 0.2);
            transform: translateY(6px);
          }
          
          .btn-3d-transparent-green {
            position: relative;
            border: 2px solid rgba(255, 255, 255, 0.3);
            border-radius: 16px;
            box-shadow: 
              0 8px 0 rgba(34, 197, 94, 0.8),
              0 15px 25px rgba(0, 0, 0, 0.3),
              inset 0 1px 0 rgba(255, 255, 255, 0.4),
              inset 0 -1px 0 rgba(0, 0, 0, 0.2);
            transition: all 0.1s ease;
          }
          
          .btn-3d-transparent-green:hover {
            box-shadow: 
              0 6px 0 rgba(34, 197, 94, 0.9),
              0 12px 30px rgba(0, 0, 0, 0.4),
              inset 0 1px 0 rgba(255, 255, 255, 0.5),
              inset 0 -1px 0 rgba(0, 0, 0, 0.3);
          }
          
          .btn-3d-transparent-green:active {
            box-shadow: 
              0 2px 0 rgba(34, 197, 94, 0.8),
              0 5px 15px rgba(0, 0, 0, 0.3),
              inset 0 1px 0 rgba(255, 255, 255, 0.3),
              inset 0 -1px 0 rgba(0, 0, 0, 0.2);
            transform: translateY(6px);
          }
          
          @media (max-width: 768px) {
            .btn-3d-transparent-pink,
            .btn-3d-transparent-green {
              box-shadow: 
                0 6px 0 rgba(236, 72, 153, 0.8),
                0 10px 20px rgba(0, 0, 0, 0.3),
                inset 0 1px 0 rgba(255, 255, 255, 0.4),
                inset 0 -1px 0 rgba(0, 0, 0, 0.2);
            }
            
            .btn-3d-transparent-green {
              box-shadow: 
                0 6px 0 rgba(34, 197, 94, 0.8),
                0 10px 20px rgba(0, 0, 0, 0.3),
                inset 0 1px 0 rgba(255, 255, 255, 0.4),
                inset 0 -1px 0 rgba(0, 0, 0, 0.2);
            }
          }
        `
      }} />
    </section>
  );
};

export default HeroSection;
