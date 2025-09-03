import React from 'react';
import { Button } from '@/components/ui/button';
import { BookOpen, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BooksSection = () => {
  const navigate = useNavigate();

  const goToBooks = () => {
    navigate('/books');
  };

  return (
    <section
      id="books"
      className="relative min-h-screen flex items-end justify-center overflow-hidden"
    >
      {/* Fullscreen background image */}
      <img
        src="/assets/book.jpeg"
        alt="Books Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Overlay for darkening image */}
      <div className="absolute inset-0 bg-black/30 z-0"></div>

      {/* Foreground content - Bottom centered */}
      <div className="relative z-10 text-center px-6 mb-12">
        <Button
          size="lg"
          className="btn-3d-transparent-blue font-cormorant text-lg px-8 py-4 bg-blue-500/80 backdrop-blur-md text-white hover:bg-blue-600/90 transition-all duration-300 shadow-2xl hover:shadow-blue-500/50 transform hover:-translate-y-2 active:translate-y-0"
          onClick={goToBooks}
        >
          <BookOpen className="mr-2 h-5 w-5" />
          Books
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>

      {/* Custom 3D Transparent Button Styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
          .btn-3d-transparent-blue {
            position: relative;
            border: 2px solid rgba(255, 255, 255, 0.3);
            border-radius: 16px;
            box-shadow: 
              0 8px 0 rgba(59, 130, 246, 0.8),
              0 15px 25px rgba(0, 0, 0, 0.3),
              inset 0 1px 0 rgba(255, 255, 255, 0.4),
              inset 0 -1px 0 rgba(0, 0, 0, 0.2);
            transition: all 0.1s ease;
          }
          
          .btn-3d-transparent-blue:hover {
            box-shadow: 
              0 6px 0 rgba(59, 130, 246, 0.9),
              0 12px 30px rgba(0, 0, 0, 0.4),
              inset 0 1px 0 rgba(255, 255, 255, 0.5),
              inset 0 -1px 0 rgba(0, 0, 0, 0.3);
          }
          
          .btn-3d-transparent-blue:active {
            box-shadow: 
              0 2px 0 rgba(59, 130, 246, 0.8),
              0 5px 15px rgba(0, 0, 0, 0.3),
              inset 0 1px 0 rgba(255, 255, 255, 0.3),
              inset 0 -1px 0 rgba(0, 0, 0, 0.2);
            transform: translateY(6px);
          }
          
          .btn-3d-transparent-blue:focus {
            outline: none;
            box-shadow: 
              0 8px 0 rgba(59, 130, 246, 0.8),
              0 15px 25px rgba(0, 0, 0, 0.3),
              inset 0 1px 0 rgba(255, 255, 255, 0.4),
              inset 0 -1px 0 rgba(0, 0, 0, 0.2),
              0 0 0 3px rgba(59, 130, 246, 0.3);
          }
        `
      }} />
    </section>
  );
};

export default BooksSection;
