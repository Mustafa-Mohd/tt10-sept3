import React, { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials';
import { Star, ExternalLink, BookOpen, Award, Users, Mail, Instagram, Twitter, Youtube, CheckCircle, AlertCircle } from 'lucide-react';
import { sendNewsletterSubscription } from '@/services/emailService';
import LazyImage from '@/components/LazyImage';
import ScrollAnimation from '@/components/ScrollAnimation';
import OnTheWay from '@/components/OnTheWay';

const Books = () => {
  const [newsletterName, setNewsletterName] = useState('');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isNewsletterSubmitting, setIsNewsletterSubmitting] = useState(false);
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);
  const [newsletterError, setNewsletterError] = useState<string | null>(null);

  // Scroll animation handler
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe all elements with fade-in classes
    const elements = document.querySelectorAll('.fade-in-element');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterName || !newsletterEmail) return;

    setIsNewsletterSubmitting(true);
    setNewsletterError(null);
    setNewsletterSuccess(false);

    try {
      const success = await sendNewsletterSubscription({
        name: newsletterName,
        email: newsletterEmail,
        timestamp: new Date().toLocaleString()
      });

      if (success) {
        setNewsletterSuccess(true);
        setNewsletterName('');
        setNewsletterEmail('');
        setTimeout(() => setNewsletterSuccess(false), 3000);
      } else {
        throw new Error('Failed to send subscription notification');
      }
    } catch (err) {
      console.error('Newsletter subscription error:', err);
      setNewsletterError('Failed to subscribe. Please try again.');
    } finally {
      setIsNewsletterSubmitting(false);
    }
  };

  const books = [
    {
      id: 1,
      title: "Flying with Words",
      subtitle: "A Journey Through Kashmir's Literary Landscape",
      description: "An intimate exploration of how words carry the essence of a culture across generations, told through the lens of Kashmir's rich storytelling tradition.",
      rating: 4.8,
      reviews: 234,
      featured: true,
      published: "2023",
      genre: "Literary Fiction",
      amazonLink: "#",
      image: "featured-book",
      awards: ["Literary Excellence Award 2023", "Regional Fiction Prize"]
    },
    {
      id: 2,
      title: "Echoes of the Valley",
      subtitle: "Poems from Kashmir's Literary Tradition",
      description: "A collection of poems that capture the mystical beauty and profound depth of Kashmiri culture and landscape.",
      rating: 4.6,
      reviews: 189,
      featured: false,
      published: "2022",
      genre: "Poetry",
      amazonLink: "#",
      image: "poetry-book"
    },
    {
      id: 3,
      title: "Between Mountains and Dreams",
      subtitle: "Short Stories",
      description: "A captivating collection of short stories that weave together the ancient and modern, the mystical and the everyday.",
      rating: 4.7,
      reviews: 156,
      featured: false,
      published: "2021",
      genre: "Short Stories",
      amazonLink: "#",
      image: "short-stories"
    }
  ];

  const testimonials = [
    {
      quote: "Ishrat's 'Flying with Words' is a literary masterpiece that bridges Kashmir's ancient storytelling traditions with modern narratives. Her understanding of menstrual disorders and women's health issues brings much-needed awareness through beautiful prose.",
      name: "Dr. Aisha Khan",
      designation: "Women's Health Specialist & Literature Enthusiast",
      src: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote: "The way Ishrat weaves Kashmir's culinary heritage with travel narratives in her work is extraordinary. Her insights on airport hacks and Kashmiri Dum Aloo recipes make 'Echoes of the Valley' a unique blend of culture and practical wisdom.",
      name: "Chef Rajesh Malhotra",
      designation: "Master Chef & Food Culture Expert",
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote: "Ishrat's 'Between Mountains and Dreams' captures the essence of creative writing and the power of music in storytelling. Her tips for writers and insights into poetry have transformed how I approach literature.",
      name: "Prof. Meera Desai",
      designation: "Creative Writing Professor, JNU",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote: "As someone who has followed Ishrat's journey from Kashmir to Qatar, her travel writing in 'Wander & Grubs' is incredibly authentic. The Jim Corbett vlog and New Delhi trip narratives are pure gold for travel enthusiasts.",
      name: "Rahul Sharma",
      designation: "Travel Blogger & Adventure Writer",
      src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote: "Ishrat's work on PCOS awareness and thyroid health through her 'Her Health Journal' series is groundbreaking. She combines medical knowledge with compassionate storytelling, making complex health topics accessible to everyone.",
      name: "Dr. Priya Verma",
      designation: "Endocrinologist & Women's Health Advocate",
      src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=3388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f5f2ed] overflow-x-hidden">
      <Navigation />
      
      {/* Hero Banner Section - Responsive */}
      <section className="relative h-screen bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: `url('/assets/book.jpeg')` }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4 sm:px-6 md:px-8">
            <h1 className="text-responsive-4xl sm:text-responsive-5xl md:text-responsive-6xl lg:text-responsive-7xl xl:text-responsive-8xl font-bold mb-4 sm:mb-6 tracking-wider fade-in-element mobile-text-optimized" id="hero-title">
              ISHRAT FAYAZ
              <span className="block text-responsive-2xl sm:text-responsive-3xl md:text-responsive-4xl lg:text-responsive-5xl text-yellow-300 mt-2 sm:mt-4">✨📚</span>
            </h1>
            <p className="text-responsive-lg sm:text-responsive-xl md:text-responsive-2xl mb-6 sm:mb-8 fade-in-element mobile-text-optimized" id="hero-subtitle">
              Writer. Dreamer. Disruptor of Silence.
            </p>
          </div>
        </div>
      </section>

            {/* Social Icons - Responsive */}
      <div className="text-center py-6 sm:py-8 bg-[#f5f2ed]">
        <div className="flex justify-center gap-4 sm:gap-6 flex-wrap">
          <a href="mailto:contact@ishratfayaz.com" className="w-10 h-10 sm:w-12 sm:h-12 bg-[#6b8cbb] rounded-full flex items-center justify-center text-white hover:bg-[#4a6b8a] transition-all duration-300 hover:scale-110 touch-target">
            <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
          <a href="https://instagram.com/ishratfayaz" className="w-10 h-10 sm:w-12 sm:h-12 bg-[#6b8cbb] rounded-full flex items-center justify-center text-white hover:bg-[#4a6b8a] transition-all duration-300 hover:scale-110 touch-target">
            <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
          <a href="https://twitter.com/ishratfayaz" className="w-10 h-10 sm:w-12 sm:h-12 bg-[#6b8cbb] rounded-full flex items-center justify-center text-white hover:bg-[#4a6b8a] transition-all duration-300 hover:scale-110 touch-target">
            <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
          <a href="https://youtube.com/@ishratfayaz" className="w-10 h-10 sm:w-12 sm:h-12 bg-[#6b8cbb] rounded-full flex items-center justify-center text-white hover:bg-[#4a6b8a] transition-all duration-300 hover:scale-110 touch-target">
            <Youtube className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
        </div>
              </div>
              
            {/* Books Introduction */}
      <section className="spacing-responsive-lg bg-[#f5f2ed]">
        <div className="container-responsive text-center">
          <div className="fade-in-element" id="books-intro">
            <h2 className="text-responsive-3xl sm:text-responsive-4xl md:text-responsive-5xl font-bold text-[#6b8cbb] mb-6 sm:mb-8 tracking-wider mobile-text-optimized">
              Books Section
              </h2>
            <p className="text-responsive-lg sm:text-responsive-xl text-gray-700 leading-relaxed mb-6 sm:mb-8 mobile-text-optimized">
              So... turns out I've written a few books.
            </p>
            <p className="text-responsive-base sm:text-responsive-lg text-gray-600 leading-relaxed mb-6 sm:mb-8 mobile-text-optimized">
              (Okay, more than a few. Who knew inspiration had such stamina?)
            </p>
            <p className="text-responsive-base sm:text-responsive-lg text-gray-700 leading-relaxed mb-6 sm:mb-8 mobile-text-optimized">
              Feel free to click on any cover or title—each one's a portal to purchase links, sneak peeks, and the occasional delightful surprise.
            </p>
            <p className="text-responsive-base sm:text-responsive-lg text-gray-600 leading-relaxed mb-6 sm:mb-8 mobile-text-optimized">
              Yes, there may be extras. Yes, they may be exciting. And yes, I'm being mysteriously vague on purpose.
            </p>
            <p className="text-responsive-lg sm:text-responsive-xl font-semibold text-[#6b8cbb] mobile-text-optimized">
              Go on, be curious.
            </p>
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="fade-in-element" id="origin-story">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              🎭 From Burnt Pages to Balance Sheets: The Ishrat Fayaz Origin Story
            </h3>
            <div className="bg-[#f5f2ed] rounded-3xl p-12 shadow-xl">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                At the tender age of 13, while most kids were busy collecting stickers or dodging math homework, Ishrat was busy falling in love—with music, poetry, and the intoxicating thrill of writing. Her notebooks overflowed with verses, dreams, and probably a few angsty metaphors about the moon. But alas, she was born into a family where "creative expression" ranked somewhere below "forgot to do your homework."
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                So what did her parents do? They burned her poems. Literally. Because nothing says "we love you" quite like setting your soul's work on fire. 🔥
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Like many South Asian households, the holy trinity of success was clear: Doctor. Engineer. Lawyer. Anything else? Cute hobby. So Ishrat, being the obedient rebel she is, ditched her artistic dreams and dove headfirst into science. She even cracked AIEEE—because why not flex a little academic muscle while suppressing your inner poet?
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                But plot twist: instead of becoming a lab rat or coding wizard, she swerved into business school and bagged an MBA in International Business in 2019. Because if you're going to abandon your dreams, you might as well do it with a global strategy.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Fast forward to today: Ishrat is a Senior Accountant at a fancy company, crunching numbers by day and resurrecting her creative soul by night. She's writing again—poetry, dark humour, thrillers—and this time, no one's getting near her notebooks with a matchstick.
              </p>
              <p className="text-xl font-semibold text-[#6b8cbb] text-center">
                Moral of the story? You can silence a poet, but you can't stop her from turning her trauma into a book.
              </p>
            </div>
                                      </div>
                                    </div>
      </section>

       

      {/* Release Schedule */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="fade-in-element" id="release-schedule">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              RELEASE SCHEDULE
            </h3>
            
            {/* Main Book Section */}
            <section className="py-20 bg-[#f5f2ed]">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Book Cover */}
            <div className="flex-shrink-0 fade-in-element" id="book-cover">
              <div className="relative group">
                <img 
                  src="/assets/bookd.png" 
                  alt="Flying with Words" 
                  className="w-80 h-auto rounded-2xl shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:shadow-3xl"
                />
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                                <Award className="inline h-4 w-4 mr-1" />
                  Coming 2026
                              </div>
                            </div>
                          </div>

            {/* Book Info */}
            <div className="flex-grow fade-in-element" id="book-info">
              <div className="bg-white rounded-3xl p-12 shadow-xl">
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className="bg-[#6b8cbb]/10 text-[#6b8cbb] px-4 py-2 rounded-full text-sm font-semibold">
                    Poetry Collection
                                </span>
                                <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                    2026
                                </span>
                              </div>
                              
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                  Flying with Words
                </h2>
                
                <p className="text-xl text-gray-600 italic mb-6">
                  Poetry Takes Flight
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  A poetry collection so vivid, your imagination might need a seatbelt. These verses don't just rhyme—they linger, whisper, and occasionally sass you into self-reflection.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Flying With Words is more than a poetry collection—it's a soul map inked in emotion. With verses that dive into the depths of pain, love, ego, and self-discovery, this book doesn't just speak—it roars, whispers, and heals. Each poem is a mirror to the human experience, reflecting the chaos of society, the search for God, and the quiet battles we fight within ourselves.
                </p>

                {/* Purchase Links */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Available on:</h4>
                  <div className="flex flex-wrap gap-3">
                    {['Amazon', 'Flipkart', 'Kobo', 'Kindle', 'iBooks', 'Scribd', 'Instamojo', 'Notion Press'].map((platform) => (
                      <span key={platform} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {platform}
                                    </span>
                                  ))}
                              </div>
                            </div>

                            {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                              <Button 
                                size="lg" 
                    className="bg-[#6b8cbb] hover:bg-[#4a6b8a] text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                              >
                                <ExternalLink className="mr-2 h-5 w-5" />
                    Pre-Order Now
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-[#6b8cbb] text-[#6b8cbb] hover:bg-[#6b8cbb] hover:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300"
                  >
                    Read Sample
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
      </section>
            
            {/* Upcoming Releases */}
           

            {/* On the Way */}
            <OnTheWay />

            {/* Published */}
            <div>
              <h4 className="text-2xl font-bold text-[#6b8cbb] mb-8">3) Published</h4>
              <div className="bg-gray-100 rounded-3xl p-8 text-center">
                <p className="text-lg text-gray-600 mb-4">This is where the literary magic will live—eventually. For now, it's a cozy little placeholder waiting for its first guest star.</p>
                <p className="text-lg text-gray-700 mb-4">No books have been published yet, but the ideas are brewing, the pages are whispering, and the future bookshelf is already clearing space.</p>
                <p className="text-lg text-gray-600">All series will be ongoing unless they decide to take dramatic exits. Republished editions will be marked with an asterisk—once there's something to republish, of course.</p>
                <p className="text-xl font-semibold text-[#6b8cbb] mt-6">Stay tuned. The debut is coming, and it's going to be worth the wait. 💫</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-20 bg-gradient-to-r from-[#7bc4c4] to-[#6bb6cd]">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-16 text-white fade-in-element" id="coming-soon">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-wider">
              COMING DECEMBER 9, 2025
            </h2>
            <p className="text-xl md:text-2xl opacity-90">
              The next chapter in Ishrat's literary journey
            </p>
                  </div>
            </div>
      </section>

            {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-r from-[#d65aa7] to-[#c44569] relative">
        <div className="absolute top-0 left-0 right-0 h-20 bg-[#f5f2ed] clip-path-polygon"></div>
        <div className="max-w-6xl mx-auto px-8 text-center relative z-10">
          <div className="fade-in-element" id="testimonials-header">
            <h2 className="text-4xl md:text-5xl font-bold text-[#f4d03f] mb-6 tracking-wider">
              WHAT EXPERTS SAY
            </h2>
            <p className="text-white text-lg mb-12 max-w-2xl mx-auto">
                  Discover what health specialists, chefs, professors, and travel experts think about Ishrat's diverse work
                </p>
              </div>
              
          <div className="fade-in-element" id="testimonials-content">
              <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
            </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-[#f5f2ed] relative">
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-r from-[#d65aa7] to-[#c44569] clip-path-polygon-reverse"></div>
        <div className="max-w-4xl mx-auto px-8 text-center">
          <div className="fade-in-element" id="newsletter">
            <h2 className="text-3xl md:text-4xl font-bold text-[#6b8cbb] mb-6 tracking-wider relative">
              <span className="absolute -left-12 top-0 text-2xl">✨</span>
              A LITTLE BIT (MORE) ISHRAT FAYAZ
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              If you would like sporadic installments of me delivered straight to your inbox, please do subscribe to my newsletter. 
              You'll get news, updates, random things I happen to be thinking of and access to exclusive content.
            </p>
            
                        {newsletterSuccess ? (
              <div className="text-center py-8">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-green-600 mb-2">Successfully Subscribed!</h3>
                <p className="text-gray-600">Thank you for joining our community. You'll receive updates soon!</p>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <input 
                  type="text" 
                  placeholder="Name" 
                  value={newsletterName}
                  onChange={(e) => setNewsletterName(e.target.value)}
                  className="px-6 py-4 border-2 border-gray-300 rounded-xl text-lg focus:border-[#6b8cbb] focus:outline-none"
                  required
                />
                <input 
                  type="email" 
                  placeholder="Email" 
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="px-6 py-4 border-2 border-gray-300 rounded-xl text-lg focus:border-[#6b8cbb] focus:outline-none"
                  required
                />
                <Button 
                  type="submit"
                  size="lg" 
                  disabled={isNewsletterSubmitting}
                  className="bg-[#6b8cbb] hover:bg-[#4a6b8a] text-white font-bold px-8 py-4 rounded-xl disabled:opacity-50"
                >
                  {isNewsletterSubmitting ? 'Subscribing...' : 'Subscribe'}
                </Button>
              </form>
            )}

            {newsletterError && (
              <div className="flex items-center justify-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg mb-6">
                <AlertCircle className="h-4 w-4" />
                <span className="text-sm">{newsletterError}</span>
              </div>
            )}
            
            <div className="flex items-center justify-center gap-3 text-sm text-gray-600">
              <input type="checkbox" id="terms" className="w-4 h-4" />
              <label htmlFor="terms">Please tick this box to indicate you're a human and not a bot.</label>
            </div>
          </div>
          </div>
        </section>

      <Footer />
      
      <style dangerouslySetInnerHTML={{
        __html: `
          .fade-in-element {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.8s ease-out;
          }
          
          .fade-in-element.visible {
            opacity: 1;
            transform: translateY(0);
          }
          
          .clip-path-polygon {
            clip-path: polygon(0 100%, 100% 0, 100% 100%);
          }
          
          .clip-path-polygon-reverse {
            clip-path: polygon(0 0, 100% 100%, 0 100%);
          }

          /* Enhanced book image animations */
          .book-image-container {
            position: relative;
            overflow: hidden;
            border-radius: 12px;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          }
          
          .book-image-container:hover {
            transform: translateY(-8px) scale(1.02);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
          }
          
          .book-image-container img {
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          }
          
          .book-image-container:hover img {
            transform: scale(1.05);
          }
          
          /* Staggered animation delays for book cards */
          .book-card-1 {
            animation-delay: 0.2s;
          }
          
          .book-card-2 {
            animation-delay: 0.4s;
          }
          
          .book-card-3 {
            animation-delay: 0.6s;
          }
          
          /* Enhanced fade-in animations */
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(40px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes fadeInLeft {
            from {
              opacity: 0;
              transform: translateX(-60px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          
          @keyframes fadeInRight {
            from {
              opacity: 0;
              transform: translateX(60px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          
          .animate-fade-in-up {
            animation: fadeInUp 0.8s ease-out forwards;
          }
          
          .animate-fade-in-left {
            animation: fadeInLeft 1s ease-out forwards;
          }
          
          .animate-fade-in-right {
            animation: fadeInRight 1s ease-out forwards;
          }
          
          /* Book promo container animations */
          .book-promo-container {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.8s ease-out;
          }
          
          .book-promo-container.visible {
            opacity: 1;
            transform: translateY(0);
          }
          
          /* Enhanced book image wrapper */
          .book-image-wrapper {
            position: relative;
            overflow: hidden;
          }
          
          .book-image-wrapper::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%);
            transform: translateX(-100%);
            transition: transform 0.6s ease;
            z-index: 1;
          }
          
          .book-image-wrapper:hover::before {
            transform: translateX(100%);
          }
          
          /* Book content wrapper enhancements */
          .book-content-wrapper {
            position: relative;
          }
          
          .book-content-wrapper::before {
            content: '';
            position: absolute;
            top: -2px;
            left: -2px;
            right: -2px;
            bottom: -2px;
            background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #feca57);
            border-radius: 18px;
            opacity: 0;
            transition: opacity 0.3s ease;
            z-index: -1;
          }
          
          .book-content-wrapper:hover::before {
            opacity: 0.1;
          }
          
          /* Book card hover effects */
          .book-card {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
          }
          
          .book-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(135deg, rgba(76, 175, 80, 0.05), rgba(33, 150, 243, 0.05));
            opacity: 0;
            transition: opacity 0.3s ease;
            border-radius: 16px;
            pointer-events: none;
          }
          
          .book-card:hover::before {
            opacity: 1;
          }
          
          .book-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
          }
          
          @media (max-width: 768px) {
            .clip-path-polygon,
            .clip-path-polygon-reverse {
              height: 40px;
            }
          }
        `
      }} />
    </div>
  );
};

export default Books;
