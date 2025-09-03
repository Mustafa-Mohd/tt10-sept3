import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AboutSection = () => {
  const navigate = useNavigate();

  const goToAbout = () => {
    navigate('/about');
  };

  return (
    <section id="about" className="relative min-h-screen flex items-end justify-center overflow-hidden">
      {/* Full-screen background image */}
      <div
        className="absolute inset-0 w-full h-full bg-no-repeat z-0"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/drdotym31/image/upload/v1753445758/WhatsApp_Image_2024-08-08_at_14.59.56_h8j6sb_xhgika.jpg')`,
          backgroundSize: "cover", // keeps it covering screen
          backgroundPosition: "center 30%", // move image down (try 10%, 20%, 30%)
        }}
      >
        {/* Subtle overlay for better button visibility */}
        <div className="absolute inset-0 bg-black/20 z-0"></div>
      </div>

      {/* Content overlay - Fixed at bottom center */}
      <div className="relative z-10 text-center px-6 mb-12">
        <Button
          size="lg"
          className="btn-3d-transparent-white font-cormorant text-lg px-8 py-4 bg-white/80 backdrop-blur-md text-slate-900 hover:bg-white/90 transition-all duration-300 shadow-2xl hover:shadow-white/50 transform hover:-translate-y-2 active:translate-y-0"
          onClick={goToAbout}
        >
          About
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>

      {/* Custom 3D Transparent Button Styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
          .btn-3d-transparent-white {
            position: relative;
            border: 2px solid rgba(255, 255, 255, 0.5);
            border-radius: 16px;
            box-shadow: 
              0 8px 0 rgba(255, 255, 255, 0.6),
              0 15px 25px rgba(0, 0, 0, 0.3),
              inset 0 1px 0 rgba(255, 255, 255, 0.8),
              inset 0 -1px 0 rgba(0, 0, 0, 0.1);
            transition: all 0.1s ease;
          }
          
          .btn-3d-transparent-white:hover {
            box-shadow: 
              0 6px 0 rgba(255, 255, 255, 0.7),
              0 12px 30px rgba(0, 0, 0, 0.4),
              inset 0 1px 0 rgba(255, 255, 255, 0.9),
              inset 0 -1px 0 rgba(0, 0, 0, 0.2);
          }
          
          .btn-3d-transparent-white:active {
            box-shadow: 
              0 2px 0 rgba(255, 255, 255, 0.6),
              0 5px 15px rgba(0, 0, 0, 0.3),
              inset 0 1px 0 rgba(255, 255, 255, 0.7),
              inset 0 -1px 0 rgba(0, 0, 0, 0.1);
            transform: translateY(6px);
          }
          
          @media (max-width: 768px) {
            .btn-3d-transparent-white {
              box-shadow: 
                0 6px 0 rgba(255, 255, 255, 0.6),
                0 10px 20px rgba(0, 0, 0, 0.3),
                inset 0 1px 0 rgba(255, 255, 255, 0.8),
                inset 0 -1px 0 rgba(0, 0, 0, 0.1);
            }
          }
        `
      }} />
    </section>
  );
};

export default AboutSection;
