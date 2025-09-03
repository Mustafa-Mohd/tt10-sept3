import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const PoemsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const poems = [
    {
      id: 1,
      title: "Celebration of Joy",
      content: `"In celebration a new joy appears.

Moments we shared & memories we had liven and brightened,

It was like a dew upon the rose in light.

On that memory, we were dancing together hand in hand,

Like we used to dance & in a bond that none could stand."`,
      backgroundImage: '/assets/one.jpeg'
    },
    {
      id: 2,
      title: "A Kind Soul",
      content: `"I encountered a soul,

Who was so kind and true,

Fall into those two beautiful eyes,

And leaving me in a daydreaming.

Lost in a thought,

And remembering his gentle talks,

The way he says, "Are you okay?"

The way I hiccup and says, "I am fine"."`,
      backgroundImage: '/assets/two.jpeg'
    },
    {
      id: 3,
      title: "Unaware of Fate",
      content: `"Unaware of what fate may bring.

Sorrow echoes like a constant ring.

Wherever we roam,

Sorrow's increase more.

Slaughter unfolds,

Like there is a race of massacre,

In the thick of breaths of final sighs,

Festivities around with the mask tear-filled eyes."`,
      backgroundImage: '/assets/three.jpeg'
    },
    {
      id: 4,
      title: "Beneath the Sky",
      content: `"I captured your personified face on my own eyes.

As I sang your songs that were everlasting.

You don't know,

Where I travel on your search.

But you oblivious don't care,

Where my heart belongs.

You don't know,

I am vanished on you seek.

You didn't care not for the paths, I walked

Instead, you played hide-and-seek.

Beneath the sky, you & me."`,
      backgroundImage: '/assets/four.jpeg'
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % poems.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, poems.length]);

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + poems.length) % poems.length);
    setIsAutoPlaying(false); // Stop auto-play when user interacts
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % poems.length);
    setIsAutoPlaying(false); // Stop auto-play when user interacts
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false); // Stop auto-play when user interacts
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image - Responsive */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed transition-all duration-1000 ease-in-out"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${poems[currentSlide].backgroundImage})`,
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          backgroundPosition: 'center center'
        }}
      />

      {/* Content Overlay - Responsive */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16">
        <div className="w-full max-w-4xl mx-auto text-center text-white">
          {/* Poem Title */}
          <h2 className="text-responsive-2xl sm:text-responsive-3xl md:text-responsive-4xl font-playfair font-bold mb-4 sm:mb-6 md:mb-8 tracking-wide animate-fade-in-up">
            {poems[currentSlide].title}
          </h2>

          {/* Poem Content */}
          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4 sm:p-6 md:p-8 lg:p-10 border border-white/20 mx-2 sm:mx-4">
            <p className="text-responsive-sm sm:text-responsive-base md:text-responsive-lg lg:text-responsive-xl font-cormorant leading-relaxed tracking-wide whitespace-pre-line mobile-text-optimized animate-fade-in">
              {poems[currentSlide].content}
            </p>
          </div>

          {/* Navigation Arrows - Responsive */}
          <div className="flex items-center justify-center mt-6 sm:mt-8 md:mt-12 space-x-3 sm:space-x-4">
            <button
              onClick={goToPrevious}
              className="p-2 sm:p-3 md:p-4 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 touch-target group"
              aria-label="Previous poem"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 group-hover:scale-110 transition-transform duration-300" />
            </button>

            {/* Slide Indicators */}
            <div className="flex space-x-2 sm:space-x-3">
              {poems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 touch-target ${
                    index === currentSlide 
                      ? 'bg-white scale-125' 
                      : 'bg-white/50 hover:bg-white/70'
                  }`}
                  aria-label={`Go to poem ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              className="p-2 sm:p-3 md:p-4 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 touch-target group"
              aria-label="Next poem"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 group-hover:scale-110 transition-transform duration-300" />
            </button>
          </div>

          {/* Auto-play Toggle - Responsive */}
          <div className="mt-4 sm:mt-6 md:mt-8">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="px-3 py-2 sm:px-4 sm:py-2 bg-white/20 backdrop-blur-sm rounded-full text-xs sm:text-sm md:text-base font-cormorant hover:bg-white/30 transition-all duration-300 touch-target"
            >
              {isAutoPlaying ? 'Pause Auto-play' : 'Resume Auto-play'}
            </button>
          </div>
        </div>
      </div>

             {/* Custom Styles */}
       <style jsx>{`
         .animate-fade-in-up {
           animation: fadeInUp 0.8s ease-out forwards;
         }

         .animate-fade-in {
           animation: fadeIn 0.8s ease-out 0.3s both;
         }

         @keyframes fadeInUp {
           from {
             opacity: 0;
             transform: translateY(30px);
           }
           to {
             opacity: 1;
             transform: translateY(0);
           }
         }

         @keyframes fadeIn {
           from {
             opacity: 0;
           }
           to {
             opacity: 1;
           }
         }

         /* Smooth background transition */
         .transition-all {
           transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
         }

         /* Enhanced backdrop blur for better text readability */
         .backdrop-blur-sm {
           backdrop-filter: blur(8px);
           -webkit-backdrop-filter: blur(8px);
         }

         /* Responsive background handling */
         @media (max-width: 767px) {
           .bg-fixed {
             background-attachment: scroll !important;
           }
           
           .touch-target {
             min-height: 44px;
             min-width: 44px;
           }
         }

         @media (min-width: 768px) and (max-width: 1023px) {
           .bg-fixed {
             background-attachment: scroll !important;
           }
         }

         @media (min-width: 1024px) {
           .bg-fixed {
             background-attachment: fixed !important;
           }
         }

         /* Ensure proper background coverage on all devices */
         .absolute.inset-0 {
           min-height: 100vh;
           min-height: 100dvh; /* Dynamic viewport height for mobile */
         }

         /* Mobile-specific background optimizations */
         @media (max-width: 767px) {
           .absolute.inset-0 {
             background-size: cover !important;
             background-position: center center !important;
             background-repeat: no-repeat !important;
           }
         }

         /* Tablet background optimizations */
         @media (min-width: 768px) and (max-width: 1023px) {
           .absolute.inset-0 {
             background-size: cover !important;
             background-position: center center !important;
             background-repeat: no-repeat !important;
           }
         }

         /* Desktop background optimizations */
         @media (min-width: 1024px) {
           .absolute.inset-0 {
             background-size: cover !important;
             background-position: center center !important;
             background-repeat: no-repeat !important;
             background-attachment: fixed !important;
           }
         }

         /* Hover effects for desktop */
         @media (min-width: 768px) {
           .group:hover .group-hover\\:scale-110 {
             transform: scale(1.1);
           }
         }

         /* Prevent background from moving on mobile scroll */
         @media (max-width: 1023px) {
           section {
             position: relative;
             overflow: hidden;
           }
           
           .absolute.inset-0 {
             position: absolute;
             top: 0;
             left: 0;
             right: 0;
             bottom: 0;
             background-attachment: scroll !important;
           }
         }
       `}</style>
    </section>
  );
};

export default PoemsCarousel;
