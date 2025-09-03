import React, { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PoemsCarousel from '@/components/PoemsCarousel';

const About = () => {
  const [stats, setStats] = useState({
    readers: 0,
    articles: 0,
    years: 0
  });

  // Counter animation for stats
  useEffect(() => {
    const animateCounter = (target: number, setter: (value: number) => void, duration: number = 2000) => {
      let start = 0;
      const increment = target / (duration / 16);
      
      const updateCounter = () => {
        start += increment;
        if (start < target) {
          setter(Math.floor(start));
          requestAnimationFrame(updateCounter);
        } else {
          setter(target);
        }
      };
      updateCounter();
    };

    // Trigger animations when component mounts
    setTimeout(() => {
      animateCounter(50000, (value) => setStats(prev => ({ ...prev, readers: value })));
      animateCounter(100, (value) => setStats(prev => ({ ...prev, articles: value })));
      animateCounter(5, (value) => setStats(prev => ({ ...prev, years: value })));
    }, 1000);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.7), rgba(0,0,0,0.4)), url('https://res.cloudinary.com/drdotym31/image/upload/v1753445758/WhatsApp_Image_2024-08-08_at_14.59.56_h8j6sb_xhgika.jpg')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-orange-500/10 animate-pulse"></div>
        
        <div className="relative z-10 text-center max-w-4xl px-4 sm:px-6 md:px-8">
          <h1 className="text-responsive-4xl sm:text-responsive-5xl md:text-responsive-6xl lg:text-responsive-7xl xl:text-responsive-8xl font-bold mb-4 sm:mb-6 tracking-wider animate-fade-in-up mobile-text-optimized">
            ISHRAT FAYAZ
          </h1>
          <p className="text-responsive-lg sm:text-responsive-xl md:text-responsive-2xl lg:text-responsive-3xl font-light mb-6 sm:mb-8 md:mb-10 text-red-400 tracking-wide animate-slide-in-right mobile-text-optimized">
            Writer. Dreamer. Disruptor of Silence.
          </p>
          <p className="text-responsive-base sm:text-responsive-lg md:text-responsive-xl leading-relaxed opacity-90 max-w-3xl mx-auto animate-fade-in mobile-text-optimized">
            Born amidst the enchanting valleys of Kashmir, bringing a distinctive voice to contemporary literature—one that blends the soul of ancient storytelling with the pulse of modern life.
                    </p>
                  </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="text-2xl">↓</div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-red-500/10 to-orange-500/10 backdrop-blur-sm border border-white/10 hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/30">
              <div className="text-5xl md:text-6xl font-bold text-red-400 mb-4 drop-shadow-lg">
                {stats.readers.toLocaleString()}+
                </div>
              <div className="text-sm uppercase tracking-wider opacity-80">
                Readers Inspired
                    </div>
                  </div>
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-red-500/10 to-orange-500/10 backdrop-blur-sm border border-white/10 hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/30">
              <div className="text-5xl md:text-6xl font-bold text-red-400 mb-4 drop-shadow-lg">
                {stats.articles}+
                    </div>
              <div className="text-sm uppercase tracking-wider opacity-80">
                Published Articles
                  </div>
                </div>
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-red-500/10 to-orange-500/10 backdrop-blur-sm border border-white/10 hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/30">
              <div className="text-5xl md:text-6xl font-bold text-red-400 mb-4 drop-shadow-lg">
                {stats.years}+
              </div>
              <div className="text-sm uppercase tracking-wider opacity-80">
                Years of Impact
              </div>
              </div>
            </div>
          </div>
        </section>

      {/* Biography Section */}
      <section className="relative bg-white py-32 overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute top-20 left-20 text-6xl opacity-5 animate-spin" style={{ animationDuration: '20s' }}>
          ✨
        </div>
        <div className="absolute bottom-20 right-20 text-5xl opacity-5 animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }}>
          📚
        </div>
        
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 tracking-wider relative text-slate-900">
            Meet Ishrat Fayaz
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full"></div>
          </h2>
          
          <div className="text-lg md:text-xl leading-relaxed text-slate-800 space-y-8">
            <p className="text-center">
              <strong className="text-2xl text-slate-900 font-semibold">✨ Writer. Dreamer. Disruptor of Silence.</strong>
            </p>
            
            <p>
              Born amidst the enchanting valleys of Kashmir, Ishrat Fayaz brings a distinctive voice to contemporary literature—one that blends the soul of ancient storytelling with the pulse of modern life. Her writing is deeply rooted in the cultural richness of her homeland, drawing inspiration from its landscapes, traditions, and the quiet resilience of its people.
            </p>
            
            <p>
              Her literary journey reignited in 2019, a year when the world stood still but her pen surged forward. With bold honesty and emotional depth, Ishrat began crafting stories that gave voice to women's experiences—unfiltered, unflinching, and unforgettable. What began as a personal act of courage soon blossomed into published articles, digital features.
            </p>
            
            <p>
              Today, Ishrat writes full-time, exploring themes of empowerment, identity, and the human condition through poetry, dark humor, and psychological thrillers. Her work is a celebration of transformation—where pain becomes prose and silence turns into strength.
            </p>
            
            <p>
              Beyond the page, Ishrat is a dynamic YouTuber and passionate social activist. Her platform sparks vital conversations around menstrual health, self-care, and personal empowerment, while her outreach work educates and uplifts adolescent girls and rural women across communities.
            </p>
            
            <p>
              Whether through verse, video, or advocacy, Ishrat Fayaz is on a mission to ensure every woman feels seen, heard, and inspired to rise. Her debut, <em className="text-purple-600 font-medium">Flying with Words</em>, stands as a lyrical testament to cultural heritage, emotional resilience, and the power of storytelling to heal and elevate.
            </p>
          </div>
          </div>
        </section>

      {/* Poems Carousel Section */}
      <PoemsCarousel />

      {/* Social Media Icons */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 space-y-4">
        <a href="mailto:contact@ishratfayaz.com" className="block w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center text-white hover:bg-red-500 hover:scale-110 transition-all duration-300 backdrop-blur-sm border border-white/10" title="Email">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
          </svg>
        </a>
        <a href="https://facebook.com/ishratfayaz" target="_blank" rel="noopener noreferrer" className="block w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center text-white hover:bg-blue-600 hover:scale-110 transition-all duration-300 backdrop-blur-sm border border-white/10" title="Facebook">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        </a>
        <a href="https://instagram.com/ishratfayaz" target="_blank" rel="noopener noreferrer" className="block w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center text-white hover:bg-pink-600 hover:scale-110 transition-all duration-300 backdrop-blur-sm border border-white/10" title="Instagram">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.281H7.721c-.49 0-.875.385-.875.875v8.958c0 .49.385.875.875.875h8.558c.49 0 .875-.385.875-.875V8.582c0-.49-.385-.875-.875-.875z"/>
          </svg>
        </a>
        <a href="https://youtube.com/@ishratfayaz" target="_blank" rel="noopener noreferrer" className="block w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center text-white hover:bg-red-600 hover:scale-110 transition-all duration-300 backdrop-blur-sm border border-white/10" title="YouTube">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
        </a>
        <a href="https://twitter.com/ishratfayaz" target="_blank" rel="noopener noreferrer" className="block w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center text-white hover:bg-blue-400 hover:scale-110 transition-all duration-300 backdrop-blur-sm border border-white/10" title="Twitter">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
          </svg>
        </a>
      </div>

      <Footer />
      
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes fade-in-up {
            from {
              opacity: 0;
              transform: translateY(50px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes slide-in-right {
            from {
              opacity: 0;
              transform: translateX(100px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          
          @keyframes fade-in {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          
          .animate-fade-in-up {
            animation: fade-in-up 1s ease-out;
          }
          
          .animate-slide-in-right {
            animation: slide-in-right 1.2s ease-out 0.3s both;
          }
          
          .animate-fade-in {
            animation: fade-in 1.5s ease-out 0.6s both;
          }
          
          @media (max-width: 768px) {
            .fixed.right-8 {
              display: none;
            }
          }
        `
      }} />
    </div>
  );
};

export default About;
