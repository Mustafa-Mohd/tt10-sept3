import React from 'react';
import { Button } from '@/components/ui/button';
import { Headphones, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PodcastsSection = () => {
  const navigate = useNavigate();

  const goToPodcasts = () => {
    navigate('/podcasts');
  };

  return (
    <section id="podcasts" className="relative min-h-screen flex items-end justify-center overflow-hidden">
      {/* Full-width background image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/assets/pd.png')"
          }}
        >
          {/* Subtle overlay for better button visibility */}
          <div className="absolute inset-0 bg-black/30 z-0"></div>
        </div>
      </div>

      {/* Content overlay - Fixed at bottom center */}
      <div className="relative z-10 text-center px-6 mb-12">
        <Button 
          size="lg" 
          className="btn-3d-transparent-purple font-cormorant text-lg px-8 py-4 bg-purple-600/80 backdrop-blur-md text-white hover:bg-purple-700/90 transition-all duration-300 shadow-2xl hover:shadow-purple-500/50 transform hover:-translate-y-2 active:translate-y-0"
          onClick={goToPodcasts}
        >
          <Headphones className="mr-2 h-5 w-5" />
          Podcasts
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>

      {/* Custom 3D Transparent Button Styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
          .btn-3d-transparent-purple {
            position: relative;
            border: 2px solid rgba(255, 255, 255, 0.3);
            border-radius: 16px;
            box-shadow: 
              0 8px 0 rgba(147, 51, 234, 0.8),
              0 15px 25px rgba(0, 0, 0, 0.3),
              inset 0 1px 0 rgba(255, 255, 255, 0.4),
              inset 0 -1px 0 rgba(0, 0, 0, 0.2);
            transition: all 0.1s ease;
          }
          
          .btn-3d-transparent-purple:hover {
            box-shadow: 
              0 6px 0 rgba(147, 51, 234, 0.9),
              0 12px 30px rgba(0, 0, 0, 0.4),
              inset 0 1px 0 rgba(255, 255, 255, 0.5),
              inset 0 -1px 0 rgba(0, 0, 0, 0.3);
          }
          
          .btn-3d-transparent-purple:active {
            box-shadow: 
              0 2px 0 rgba(147, 51, 234, 0.8),
              0 5px 15px rgba(0, 0, 0, 0.3),
              inset 0 1px 0 rgba(255, 255, 255, 0.3),
              inset 0 -1px 0 rgba(0, 0, 0, 0.2);
            transform: translateY(6px);
          }
          
          @media (max-width: 768px) {
            .btn-3d-transparent-purple {
              box-shadow: 
                0 6px 0 rgba(147, 51, 234, 0.8),
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

export default PodcastsSection;
