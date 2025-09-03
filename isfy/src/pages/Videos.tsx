import React, { useState, useEffect, useRef } from 'react';
import { Play, ChevronLeft, ChevronRight, X, BookOpen, MapPin, Heart, Volume2, Share2 } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SimpleBallpit from '@/components/SimpleBallpit';
import LazyImage from '@/components/LazyImage';
import LazyVideo from '@/components/LazyVideo';
import ScrollAnimation from '@/components/ScrollAnimation';

const VideoShowcase = () => {
  const [activeVideo, setActiveVideo] = useState(null);
  const [currentSection, setCurrentSection] = useState(0);
  const [showShareModal, setShowShareModal] = useState(false);
  const [shareLink, setShareLink] = useState('');
  const [shareVideo, setShareVideo] = useState(null);
  const carouselRefs = useRef([]);
  const [scrollPositions, setScrollPositions] = useState([]);
  const progressRef = useRef<HTMLDivElement | null>(null);

  // Video data organized by sections
  const videoSections = [
    {
      id: 'health-journal',
      title: 'Her Health Journal',
      description: 'Essential health information and wellness tips for women',
      icon: <Heart className="w-6 h-6" />,
      color: '#E91E63',
      lightColor: '#FCE4EC',
      videos: [
        {
          title: 'Understanding Menstrual Disorders',
          thumbnail: 'https://res.cloudinary.com/diaa9pw5r/image/upload/v1735118713/Untitled_design_25_uw2woh.png',
          videoUrl: 'https://res.cloudinary.com/diaa9pw5r/video/upload/v1735290986/WhatsApp_Video_2024-12-02_at_4.22.48_PM_1_-_Copy_idjzzr.mp4',
          content: `This video dives into the complexities of menstrual disorders—exploring their causes, symptoms, and impact on physical and emotional well-being. From irregular cycles and painful cramps to conditions like PCOS and endometriosis, we unpack the realities many women face but rarely talk about.

Whether you're seeking clarity, support, or simply want to learn more, this episode offers expert insights and compassionate conversation to help normalize and navigate menstrual health. We'll cover:

• Common menstrual disorders and their symptoms
• The emotional and physical impact on daily life
• When to seek medical advice
• Treatment options and management strategies
• Breaking the stigma around menstrual health

Join us for an open, honest conversation about menstrual health that every woman should hear.`
        },
        {
          title: 'Managing PCOS & PCOD Naturally',
          thumbnail: 'https://res.cloudinary.com/diaa9pw5r/image/upload/v1735118713/Untitled_design_24_ja2hd9.png',
          videoUrl: 'https://res.cloudinary.com/diaa9pw5r/video/upload/v1735290985/WhatsApp_Video_2024-12-02_at_4.22.48_PM_-_Copy_sezanb.mp4',
          content: `Struggling with irregular cycles, hormonal imbalances, or stubborn symptoms of PCOS and PCOD? This video explores natural, effective ways to manage these conditions through lifestyle changes, nutrition, and mindful movement.

Learn how to balance hormones, reduce inflammation, and support your emotional well-being—without relying solely on medication. From healing foods and yoga practices to stress management and sleep hygiene, discover a holistic approach to reclaiming your health and feeling empowered in your body.

In this comprehensive guide, we'll explore:

• Understanding PCOS and PCOD symptoms
• Natural hormone balancing techniques
• Anti-inflammatory nutrition strategies
• Stress management and mindfulness practices
• Exercise routines that support hormonal health
• Sleep optimization for better hormone production
• Supplements and natural remedies
• Building a supportive lifestyle routine

Take control of your health journey with evidence-based natural approaches.`
        },
        {
          title: 'Thyroid Health: Balance Your Hormones Naturally',
          thumbnail: 'https://res.cloudinary.com/diaa9pw5r/image/upload/v1735118713/Untitled_design_28_umkos6.png',
          videoUrl: 'https://res.cloudinary.com/diaa9pw5r/video/upload/v1735290993/WhatsApp_Video_2024-12-02_at_4.22.49_PM_1_-_Copy_u2qbca.mp4',
          content: `Your thyroid may be small, but its impact on your body is massive—from regulating metabolism and energy levels to influencing mood, weight, and overall well-being. In this video, we break down the essentials of thyroid health, including common disorders like hypothyroidism and hyperthyroidism, early warning signs, and natural ways to support your thyroid function.

Learn how nutrition, lifestyle changes, and mindful habits can help restore hormonal balance and keep your thyroid working at its best.

Key topics covered:

• Understanding thyroid function and its importance
• Common thyroid disorders and their symptoms
• Early warning signs to watch for
• Thyroid-supporting nutrition and foods to avoid
• Lifestyle factors that impact thyroid health
• Natural supplements for thyroid support
• Stress management for thyroid wellness
• When to seek medical intervention

Empower yourself with knowledge to support your thyroid naturally.`
        },
        {
          title: 'Thyroid-Friendly Recipes: Nourish Your Hormones Naturally',
          thumbnail: 'https://res.cloudinary.com/diaa9pw5r/image/upload/v1735118713/Untitled_design_27_l8a2bq.png',
          videoUrl: 'https://res.cloudinary.com/diaa9pw5r/video/upload/v1735290998/WhatsApp_Video_2024-12-02_at_4.22.52_PM_1_-_Copy_b6ndom.mp4',
          content: `Eating well is a powerful way to support thyroid health—and this video serves up delicious, nutrient-packed recipes designed specifically for thyroid patients. From iodine-rich ingredients to anti-inflammatory meals, discover easy dishes that help balance hormones, boost energy, and support overall wellness.

Whether you're managing hypothyroidism or just looking to eat smarter, these recipes are simple, satisfying, and tailored to help your thyroid thrive.

Recipe highlights include:

• Iodine-rich seafood and seaweed dishes
• Anti-inflammatory vegetable combinations
• Thyroid-supporting smoothies and juices
• Balanced meals for stable blood sugar
• Quick and easy meal prep ideas
• Snack options that support thyroid function
• Foods to avoid for optimal thyroid health
• Cooking techniques that preserve nutrients

Transform your kitchen into a thyroid-supporting powerhouse with these delicious, healing recipes.`
        },
        {
          title: 'Irregular Periods: Causes, Remedies & Regain Balance Naturally',
          thumbnail: 'https://res.cloudinary.com/diaa9pw5r/image/upload/v1735118713/Untitled_design_26_y50cbi.png',
          videoUrl: 'https://res.cloudinary.com/diaa9pw5r/video/upload/v1735290985/WhatsApp_Video_2024-12-02_at_4.22.49_PM_-_Copy_nhbtst.mp4',
          content: `Struggling with unpredictable cycles, missed periods, or heavy bleeding? You're not alone. In this video, we break down the common causes of irregular menstruation—from stress and hormonal imbalances to thyroid issues and PCOS—and share natural remedies and lifestyle tips to help restore rhythm to your cycle.

Learn how nutrition, exercise, and mindfulness can support your reproductive health, and when it's time to seek medical advice. Empower yourself with knowledge and take charge of your menstrual wellness today.

Comprehensive coverage includes:

• Common causes of irregular periods
• The role of stress and lifestyle factors
• Hormonal imbalances and their impact
• Natural remedies for cycle regulation
• Nutrition strategies for menstrual health
• Exercise and movement for hormonal balance
• Stress reduction techniques
• When to consult a healthcare provider
• Tracking and monitoring your cycle

Take the first step toward regular, healthy cycles with these evidence-based natural approaches.`
        }
      ]
    },
    {
      id: 'wander-grubs',
      title: 'Wander & Grubs',
      description: 'Explore amazing destinations and delicious recipes from around the world',
      icon: <MapPin className="w-6 h-6" />,
      color: '#4CAF50',
      lightColor: '#E8F5E8',
      videos: [
        {
          title: 'Genius Airport Hacks to Travel Smarter, Faster & Stress-Free',
          thumbnail: 'https://res.cloudinary.com/diaa9pw5r/image/upload/v1735112594/Untitled_design_20_qnyjqg.png',
          videoUrl: 'https://res.cloudinary.com/diaa9pw5r/video/upload/v1735290986/WhatsApp_Video_2024-12-02_at_4.22.50_PM_3_-_Copy_fscj7e.mp4',
          content: `Say goodbye to airport chaos and hello to smooth skies! In this video, we reveal 35 brilliant airport hacks that seasoned travelers swear by—from skipping long security lines and packing like a pro to scoring better seats and saving money on the go.

Whether you're a frequent flyer or a first-time traveler, these tips will help you breeze through terminals, avoid rookie mistakes, and make your journey feel like first class—even if you're flying economy. Ready to travel like a pro? Let's take off!

Essential airport hacks covered:

• Security line shortcuts and TSA PreCheck tips
• Smart packing strategies for carry-on only
• How to get better seats without paying extra
• Airport lounge access tricks
• Money-saving tips for food and drinks
• Navigating layovers like a pro
• Dealing with delays and cancellations
• Technology hacks for seamless travel
• Airport transportation and parking tips
• International travel documentation shortcuts

Transform your airport experience from stressful to stress-free with these insider secrets!`
        },
        {
          title: 'New Delhi Travel Guide: Explore India\'s Timeless Capital Like a Local',
          thumbnail: 'https://res.cloudinary.com/diaa9pw5r/image/upload/v1735112594/Untitled_design_22_bjbxzx.png',
          videoUrl: 'https://res.cloudinary.com/diaa9pw5r/video/upload/v1735290994/WhatsApp_Video_2024-12-02_at_4.22.49_PM_2_-_Copy_crzy72.mp4',
          content: `Welcome to New Delhi—where ancient history meets buzzing modern life! In this video, we take you through the must-see landmarks, hidden gems, and local experiences that make Delhi unforgettable.

From the majestic Red Fort and serene Lotus Temple to the bustling streets of Chandni Chowk and the flavors of street food heaven, this guide is your passport to the soul of India's capital. Whether you're a first-time visitor or returning for more, discover how to navigate Delhi like a pro, stay safe, and soak in its rich culture.

Complete Delhi guide includes:

• Must-visit historical monuments and landmarks
• Hidden gems and local neighborhoods
• Best street food spots and local cuisine
• Shopping destinations and markets
• Transportation tips and getting around
• Safety tips for tourists
• Cultural etiquette and local customs
• Best times to visit and weather guide
• Budget-friendly accommodation options
• Day trip suggestions from Delhi

Let's dive into the chaos, charm, and colors of New Delhi!`
        },
        {
          title: 'Authentic Kashmiri Dum Aloo Recipe',
          thumbnail: 'https://res.cloudinary.com/diaa9pw5r/image/upload/v1735112594/Untitled_design_23_fjfnjy.png',
          videoUrl: 'https://res.cloudinary.com/diaa9pw5r/video/upload/v1735290997/WhatsApp_Video_2024-12-02_at_4.22.50_PM_-_Copy_bkqmys.mp4',
          content: `Dive into the rich flavors of Kashmir with this traditional Kashmiri Dum Aloo recipe—made without onion or garlic, just like the original from Kashmiri Pandit cuisine. Baby potatoes are deep-fried to golden perfection and slow-cooked in a vibrant yogurt-based gravy infused with fennel, dry ginger, and Kashmiri red chili.

This dish is spicy, aromatic, and absolutely soul-satisfying. Perfect with steamed rice or naan, it's a must-try for lovers of Indian cuisine and cultural authenticity. Watch till the end for pro tips on getting that signature deep red color and velvety texture!

Recipe highlights:

• Traditional Kashmiri Pandit cooking techniques
• Authentic spice blend and preparation methods
• Step-by-step cooking instructions
• Tips for achieving the perfect texture
• Serving suggestions and accompaniments
• Variations and modern twists
• Cultural significance of the dish
• Ingredient sourcing and substitutions
• Storage and reheating tips

Master the art of authentic Kashmiri cuisine with this time-honored recipe!`
        },
        {
          title: 'Journey to Qatar: Discover the Heart of the Arabian Gulf',
          thumbnail: 'https://res.cloudinary.com/diaa9pw5r/image/upload/v1735112594/Untitled_design_19_qjfznh.png',
          videoUrl: 'https://res.cloudinary.com/diaa9pw5r/video/upload/v1735290990/WhatsApp_Video_2024-12-02_at_4.22.50_PM_1_-_Copy_fbhjug.mp4',
          content: `Embark on a mesmerizing journey to Qatar—where tradition meets innovation in the most stunning ways. In this video, we explore the vibrant souqs, futuristic skyline, serene desert landscapes, and cultural gems that make Qatar a must-visit destination.

From the world-class Hamad International Airport to the rich flavors of Qatari cuisine, get insider tips on where to stay, what to see, and how to navigate this dynamic country with ease. Whether you're planning your first visit or returning for more, let this guide be your gateway to unforgettable experiences in the heart of the Middle East.

Qatar travel essentials:

• Top attractions and cultural sites
• Traditional souqs and modern malls
• Desert adventures and outdoor activities
• Qatari cuisine and dining experiences
• Accommodation options for every budget
• Transportation and getting around
• Cultural etiquette and local customs
• Best time to visit and weather guide
• Visa requirements and travel tips
• Hidden gems and off-the-beaten-path experiences

Discover the magic of Qatar where ancient traditions meet modern luxury!`
        },
        {
          title: 'Jim Corbett Vlog: Into the Wild | Safari, Nature & Hidden Gems',
          thumbnail: 'https://res.cloudinary.com/diaa9pw5r/image/upload/v1735112594/Untitled_design_21_oi92wo.png',
          videoUrl: 'https://res.cloudinary.com/diaa9pw5r/video/upload/v1735290995/WhatsApp_Video_2024-12-02_at_4.22.51_PM_3_-_Copy_vvnisu.mp4',
          content: `Join us on an unforgettable journey through Jim Corbett National Park, India's oldest and most iconic wildlife sanctuary. From heart-pounding safaris in search of Bengal tigers to peaceful riverside moments and cozy resort stays, this vlog captures the perfect blend of adventure and tranquility.

We'll show you how to plan your trip, where to stay—from Jim Corbett Resorts to Jim Corbett Packages and Jim Corbett Travels—and how to book your safari with trusted services like Jim Corbett Safari Booking at just INR 6999. Whether you're a nature lover, thrill seeker, or just craving a weekend escape, this video is your ultimate guide to experiencing Corbett like never before.

Complete Corbett experience:

• Safari booking tips and best zones to visit
• Wildlife spotting strategies and timing
• Resort recommendations and accommodation options
• Photography tips for wildlife enthusiasts
• Best time to visit for tiger sightings
• Packing essentials for jungle safaris
• Safety guidelines and park rules
• Local cuisine and dining experiences
• Nearby attractions and day trip options
• Budget planning and cost breakdown

Experience the raw beauty of nature in India's premier wildlife destination!`
        }
      ]
    },
    {
      id: 'words-muse',
      title: 'The Words & Muse Review',
      description: 'Discover the power of words through creative content, music, and poetry',
      icon: <BookOpen className="w-6 h-6" />,
      color: '#9C27B0',
      lightColor: '#F3E5F5',
      videos: [
        {
          title: 'How to Create Content as a Writer',
          thumbnail: 'https://res.cloudinary.com/diaa9pw5r/image/upload/v1735109434/Untitled_design_17_wzkgr5.png',
          videoUrl: 'https://res.cloudinary.com/diaa9pw5r/video/upload/v1735303658/WORDS_MUSE_01_z6d67o.mp4',
          content: `Ready to turn your words into influence? In this video, we break down the essential steps to creating powerful content as a writer—from finding your niche and researching effectively to mastering tone, structure, and SEO.

Whether you're writing blog posts, social media captions, or long-form articles, learn how to craft content that connects, converts, and builds your personal brand. Perfect for beginners and seasoned writers alike, this guide will help you write with clarity, creativity, and purpose. Let's unlock your voice and make your content shine!

Content creation essentials:

• Finding your unique voice and niche
• Research strategies and fact-checking
• Mastering tone and audience engagement
• Structure and formatting for maximum impact
• SEO optimization for better reach
• Building your personal brand through writing
• Content calendar and consistency tips
• Editing and proofreading techniques
• Platform-specific writing strategies
• Measuring success and analytics

Transform your writing into powerful content that resonates with your audience!`
        },
        {
          title: 'The Power of Music: How Sound Heals & Transform Us',
          thumbnail: 'https://res.cloudinary.com/diaa9pw5r/image/upload/v1735109434/Untitled_design_14_eg8o3z.png',
          videoUrl: 'https://res.cloudinary.com/diaa9pw5r/video/upload/v1735291001/WhatsApp_Video_2024-12-02_at_4.22.51_PM_2_-_Copy_tj2c8y.mp4',
          content: `Music isn't just entertainment—it's a universal language that speaks to our soul. In this video, we explore the extraordinary power of music to heal, inspire, and connect people across cultures and generations.

Discover how music can reduce anxiety, boost memory, improve sleep, and even help manage pain. From ancient rhythms to modern beats, learn why music is "hardwired" into our brains and bodies, and how it shapes our emotions, relationships, and well-being. Whether you're a musician, a listener, or just curious, this journey into the science and spirit of music will leave you moved.

The healing power of music:

• Music therapy and its therapeutic benefits
• How music affects our brain and emotions
• Cultural significance across different societies
• Music's role in memory and learning
• Stress reduction and anxiety management
• Sleep improvement through music
• Pain management and medical applications
• Social connection and community building
• Personal growth and self-expression
• Creating your own healing playlist

Discover how the universal language of music can transform your life!`
        },
        {
          title: 'How Poems Reflect Our Lives',
          thumbnail: 'https://res.cloudinary.com/diaa9pw5r/image/upload/v1735109434/Untitled_design_18_oeuynk.png',
          videoUrl: 'https://res.cloudinary.com/diaa9pw5r/video/upload/v1735303768/WORDS_MUSE_03_abhuye.mp4',
          content: `Poetry is more than words—it's a mirror to our souls. In this video, we explore how poems beautifully capture the essence of human life, from fleeting moments and deep emotions to personal struggles and triumphs.

Discover how poets like Maya Angelou, Robert Frost, and Langston Hughes use verse to express resilience, choices, dreams, and identity. Whether it's the pain of loss, the joy of love, or the complexity of growing up, poetry distills life into powerful lines that resonate across time and culture. Join us as we uncover the magic of poetry and how it helps us understand ourselves and each other.

Poetry's reflection of life:

• How poetry captures universal human experiences
• Famous poets and their life reflections
• Poetry as emotional expression and healing
• The power of metaphor and symbolism
• Poetry across different cultures and languages
• Personal growth through poetic expression
• Poetry in modern life and social media
• Writing your own life-reflecting poems
• Poetry as therapy and self-discovery
• The timeless nature of poetic truth

Explore how poetry becomes a window into the human experience!`
        },
        {
          title: 'How Documentaries Shape Our World',
          thumbnail: 'https://res.cloudinary.com/diaa9pw5r/image/upload/v1735109434/Untitled_design_16_qjhgmo.png',
          videoUrl: 'https://res.cloudinary.com/diaa9pw5r/video/upload/v1735290988/WhatsApp_Video_2024-12-02_at_4.22.51_PM_1_-_Copy_gphnxp.mp4',
          content: `Documentaries are more than just films—they're powerful tools that educate, provoke, and inspire. In this video, we explore how documentaries shape our understanding of reality, challenge societal norms, and spark global conversations.

From exposing hidden injustices to celebrating human resilience, these non-fiction narratives blend storytelling with truth to influence public opinion, drive policy reform, and amplify marginalized voices. Whether it's climate change, social justice, or cultural preservation, discover how documentaries have become catalysts for change in today's world—and why their impact goes far beyond the screen.

Documentary impact on society:

• How documentaries influence public opinion
• Exposing hidden truths and injustices
• Driving social and political change
• Amplifying marginalized voices
• Educational value and awareness building
• Cultural preservation and documentation
• Environmental and climate change advocacy
• Human rights and social justice movements
• The art of documentary storytelling
• Creating your own impactful documentaries

Discover how truth-telling through film can change the world!`
        },
        {
          title: 'Top Writing Tips to Sharpen Your Skills',
          thumbnail: 'https://res.cloudinary.com/diaa9pw5r/image/upload/v1735109434/Untitled_design_15_xlks6i.png',
          videoUrl: 'https://res.cloudinary.com/diaa9pw5r/video/upload/v1735290984/WhatsApp_Video_2024-12-02_at_4.22.52_PM_-_Copy_zpriqn.mp4',
          content: `Writing is more than putting words on a page—it's about expressing ideas with clarity, emotion, and purpose. Whether you're crafting a blog post, a short story, or professional content, the key lies in consistency, simplicity, and authenticity.

Start by reading widely to absorb different styles and voices. Then, write regularly—even if it's just a few lines a day—to build your creative muscle. Don't be afraid to edit ruthlessly; great writing often emerges in the rewrite. Use vivid language and sensory details to bring your words to life, and always aim for structure that guides the reader smoothly from start to finish. Most importantly, write about what moves you—because passion is the heartbeat of powerful writing.

Essential writing tips:

• Building a consistent writing practice
• Reading widely to improve your craft
• The art of ruthless editing and revision
• Using vivid language and sensory details
• Creating compelling structure and flow
• Finding your authentic voice
• Writing with passion and purpose
• Overcoming writer's block and creative blocks
• Developing your unique writing style
• Building confidence as a writer

Master the art of powerful writing with these proven techniques!`
        }
      ]
    }
  ];

  // Carousel scroll functions with infinite loop
  const scrollCarousel = (sectionIndex, direction) => {
    const carousel = carouselRefs.current[sectionIndex];
    if (carousel) {
      // Responsive card widths
      const cardWidth = window.innerWidth >= 1024 ? 400 : 
                       window.innerWidth >= 768 ? 350 : 
                       window.innerWidth >= 640 ? 320 : 288; // w-72 = 288px
      const gap = window.innerWidth >= 768 ? 24 : 16; // space-x-4 = 16px, space-x-6 = 24px
      const scrollAmount = cardWidth + gap;
      
      if (direction === 'right') {
        const maxScroll = carousel.scrollWidth - carousel.clientWidth;
        if (carousel.scrollLeft >= maxScroll - 10) {
          // Reset to beginning for infinite loop
          carousel.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          carousel.scrollTo({
            left: carousel.scrollLeft + scrollAmount,
            behavior: 'smooth'
          });
        }
      } else {
        if (carousel.scrollLeft <= 10) {
          // Go to end for infinite loop
          const maxScroll = carousel.scrollWidth - carousel.clientWidth;
          carousel.scrollTo({ left: maxScroll, behavior: 'smooth' });
        } else {
          carousel.scrollTo({
            left: carousel.scrollLeft - scrollAmount,
            behavior: 'smooth'
          });
        }
      }
    }
  };

  // Auto-scroll carousel with smooth infinite loop
  useEffect(() => {
    const intervals = videoSections.map((_, sectionIndex) => {
      return setInterval(() => {
        scrollCarousel(sectionIndex, 'right');
      }, 4000 + sectionIndex * 500);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '-50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    }, observerOptions);

    // Observe all video cards and section headers
    const elementsToObserve = document.querySelectorAll('.video-card, .section-header');
    elementsToObserve.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Handle shared URL parameters and page refresh
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const sharedVideo = urlParams.get('video');
    const sharedSection = urlParams.get('section');
    
    if (sharedVideo && sharedSection) {
      // Find the video in the sections
      for (const section of videoSections) {
        const video = section.videos.find(v => v.title === sharedVideo);
        if (video) {
          // Auto-open the video detail view for shared content
            setActiveVideo({...video, section: section.title});
          break;
        }
      }
    }
  }, []);

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const sharedVideo = urlParams.get('video');
      const sharedSection = urlParams.get('section');
      
      if (sharedVideo && sharedSection) {
        // Find the video in the sections
        for (const section of videoSections) {
          const video = section.videos.find(v => v.title === sharedVideo);
          if (video) {
            setActiveVideo({...video, section: section.title});
            return;
          }
        }
      } else {
        setActiveVideo(null);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Handle video selection and URL update
  const handleVideoSelect = (video) => {
    setActiveVideo(video);
    // Update URL to maintain state on refresh
    const url = new URL(window.location.href);
    url.searchParams.set('video', video.title);
    url.searchParams.set('section', video.section || 'videos');
    window.history.pushState({}, '', url);
  };

  // Handle closing video and clearing URL
  const handleVideoClose = () => {
    setActiveVideo(null);
    // Clear URL parameters
    const url = new URL(window.location.href);
    url.searchParams.delete('video');
    url.searchParams.delete('section');
    window.history.pushState({}, '', url);
  };

  // Share video function
  const handleShare = (video) => {
    const currentUrl = window.location.origin + window.location.pathname;
    const shareUrl = `${currentUrl}?video=${encodeURIComponent(video.title)}&section=${encodeURIComponent(video.section || 'videos')}`;
    setShareLink(shareUrl);
    setShareVideo(video);
    setShowShareModal(true);
  };

  // Copy link to clipboard
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareLink);
      alert('Link copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy: ', err);
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = shareLink;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.execCommand('copy');
      document.body.removeChild(textArea);
      alert('Link copied to clipboard!');
    }
  };

  // Video Detail View Component (similar to blog detail view)
  const VideoDetailView = ({ video, onClose }) => {
    if (!video) return null;

    const onRightScroll = (e: React.UIEvent<HTMLDivElement>) => {
      const el = e.currentTarget;
      const pct = (el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100;
      if (progressRef.current) progressRef.current.style.width = `${Math.min(100, Math.max(0, pct))}%`;
    };

    return (
      <div className="min-h-screen bg-background custom-scrollbar">
        <Navigation />
        <main className="pt-16">
          {/* Mobile Layout */}
          <div className="block lg:hidden">
            {/* Mobile Video Section */}
            <div className="relative h-64 md:h-80 w-full bg-black flex items-center justify-center">
              <LazyVideo 
                src={video.videoUrl}
                poster={video.thumbnail}
                controls 
                autoPlay
                className="w-full h-full object-contain"
                style={{ maxHeight: '100%', maxWidth: '100%' }}
              />
              <div className="absolute top-4 right-4 z-10">
                <button 
        onClick={onClose}
                  className="bg-black bg-opacity-70 text-white rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center hover:bg-opacity-90 transition-all"
                >
                  <X className="w-4 h-4 md:w-6 md:h-6" />
                </button>
              </div>
            </div>

            {/* Mobile Content Section */}
            <div className="h-[calc(100vh-64px-16rem)] md:h-[calc(100vh-64px-20rem)] overflow-y-auto p-4 md:p-6 relative" onScroll={onRightScroll}>
              {/* Scroll Progress Bar */}
              <div className="sticky top-0 left-0 w-full h-1 bg-gray-200 z-10">
                <div ref={progressRef} className="bg-purple-600 h-1 transition-all duration-200" style={{ width: '0%' }} />
              </div>

              <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6">{video.title}</h1>
              <p className="leading-6 md:leading-8 text-gray-700 whitespace-pre-line text-sm md:text-base">
                {video.content}
              </p>

              <div className="mt-6 md:mt-10 flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
                <button className="flex items-center space-x-2 px-4 py-2 md:px-6 md:py-3 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-colors text-sm md:text-base">
                  <Volume2 className="w-4 h-4 md:w-5 md:h-5" />
                  <span>Like</span>
                </button>
                <button 
                  onClick={() => handleShare(video)}
                  className="flex items-center space-x-2 px-4 py-2 md:px-6 md:py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors text-sm md:text-base"
                >
                  <Share2 className="w-4 h-4 md:w-5 md:h-5" />
                  <span>Share</span>
                </button>
              </div>

              <button
                onClick={onClose}
                className="mt-6 md:mt-10 px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl shadow-lg hover:scale-105 transition text-sm md:text-base"
              >
                ← Back to Videos
              </button>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:flex h-[calc(100vh-64px)] bg-gray-100">
            {/* Left Fixed Video Player */}
            <div className="relative w-1/2 h-full fixed left-0 top-16 bg-black flex items-center justify-center">
              <LazyVideo 
                src={video.videoUrl}
                poster={video.thumbnail}
                controls 
                autoPlay
                className="w-full h-full object-contain"
                style={{ maxHeight: '100%', maxWidth: '100%' }}
              />
              <div className="absolute top-4 right-4 z-10">
          <button 
            onClick={onClose}
                  className="bg-black bg-opacity-70 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-90 transition-all"
          >
            <X className="w-6 h-6" />
          </button>
              </div>
            </div>

            {/* Right Scrollable Content */}
            <div className="w-1/2 ml-auto h-[calc(100vh-64px)] overflow-y-auto p-10 relative" onScroll={onRightScroll}>
              {/* Scroll Progress Bar */}
              <div className="sticky top-0 left-0 w-full h-1 bg-gray-200 z-10">
                <div ref={progressRef} className="bg-purple-600 h-1 transition-all duration-200" style={{ width: '0%' }} />
              </div>

              <h1 className="text-5xl font-bold text-gray-800 mb-6">{video.title}</h1>
              <p className="leading-8 text-gray-700 whitespace-pre-line">
                {video.content}
              </p>

              <div className="mt-10 flex items-center space-x-4">
                <button className="flex items-center space-x-2 px-6 py-3 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-colors">
                  <Volume2 className="w-5 h-5" />
                <span>Like</span>
              </button>
              <button 
                  onClick={() => handleShare(video)}
                  className="flex items-center space-x-2 px-6 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors"
                >
                  <Share2 className="w-5 h-5" />
                  <span>Share</span>
                </button>
              </div>

              <button
                onClick={onClose}
                className="mt-10 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl shadow-lg hover:scale-105 transition"
              >
                ← Back to Videos
              </button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  };

  // Share Modal Component
  const ShareModal = ({ video, onClose, shareLink, onCopy }) => {
    if (!video) return null;

    return (
      <div 
        className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <div 
          className="relative max-w-sm md:max-w-md w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <button 
            onClick={onClose}
            className="absolute top-3 right-3 md:top-4 md:right-4 z-20 bg-gray-200 hover:bg-gray-300 text-gray-600 rounded-full w-7 h-7 md:w-8 md:h-8 flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4 md:w-5 md:h-5" />
          </button>
          
          <div className="p-4 md:p-6">
            <div className="text-center mb-4 md:mb-6">
              <Share2 className="w-10 h-10 md:w-12 md:h-12 text-blue-500 mx-auto mb-3 md:mb-4" />
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">Share Video</h3>
              <p className="text-sm md:text-base text-gray-600 line-clamp-2">{video.title}</p>
            </div>
            
            <div className="space-y-3 md:space-y-4">
              <div className="bg-gray-50 rounded-lg p-3 md:p-4">
                <p className="text-xs md:text-sm text-gray-600 mb-2">Share this link:</p>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-2 sm:space-y-0 sm:space-x-2">
                  <input
                    type="text"
                    value={shareLink}
                    readOnly
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-xs md:text-sm bg-white"
                  />
                  <button
                    onClick={onCopy}
                    className="px-3 py-2 md:px-4 md:py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-xs md:text-sm font-medium"
                  >
                    Copy
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 md:gap-3">
                <button
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: video.title,
                        text: `Check out this video: ${video.title}`,
                        url: shareLink
                      });
                    }
                  }}
                  className="px-3 py-2 md:px-4 md:py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-medium text-xs md:text-sm"
                >
                  Share via App
                </button>
                <button
                  onClick={() => {
                    window.open(`https://twitter.com/intent/tweet?text=Check out this video: ${video.title}&url=${encodeURIComponent(shareLink)}`, '_blank');
                  }}
                  className="px-3 py-2 md:px-4 md:py-3 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition-colors font-medium text-xs md:text-sm"
                >
                  Twitter
                </button>
                <button
                  onClick={() => {
                    window.open(`https://wa.me/?text=Check out this video: ${video.title}%0A${encodeURIComponent(shareLink)}`, '_blank');
                  }}
                  className="px-3 py-2 md:px-4 md:py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium text-xs md:text-sm"
                >
                  WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Video Card Component
  const VideoCard = ({ video, sectionColor, sectionLightColor }) => {
    return (
      <div 
        className="video-card flex-shrink-0 w-72 sm:w-80 md:w-[350px] lg:w-[400px] bg-white rounded-2xl md:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:scale-105 border border-gray-100 opacity-0 translate-y-8"
        onClick={() => handleVideoSelect(video)}
      >
        <div className="relative overflow-hidden rounded-t-2xl md:rounded-t-3xl group">
          <LazyImage 
            src={video.thumbnail} 
            alt={video.title}
            className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
            <div 
              className="transform scale-0 group-hover:scale-100 transition-all duration-300 rounded-full p-3 md:p-4 shadow-lg"
              style={{ backgroundColor: sectionColor }}
            >
              <Play className="w-6 h-6 md:w-8 md:h-8 text-white ml-1" />
            </div>
          </div>

          {/* Nature-themed corner decoration */}
          <div 
            className="absolute top-3 right-3 md:top-4 md:right-4 w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center opacity-80"
            style={{ backgroundColor: sectionLightColor }}
          >
            <div className="w-2 h-2 md:w-3 md:h-3 rounded-full" style={{ backgroundColor: sectionColor }}></div>
          </div>
        </div>
        
        <div className="p-4 md:p-6 lg:p-8">
          <h4 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-800 mb-2 md:mb-3 line-clamp-2 leading-tight">
            {video.title}
          </h4>
          <div className="flex items-center justify-between">
            <div 
              className="px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm lg:text-base font-semibold"
              style={{ backgroundColor: sectionLightColor, color: sectionColor }}
            >
              Watch Now
            </div>
            <div className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: sectionLightColor }}>
              <Play className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5" style={{ color: sectionColor }} />
            </div>
          </div>
        </div>
      </div>
    );
  };

  // If a video is selected, show the detail view
  if (activeVideo) {
    return <VideoDetailView video={activeVideo} onClose={handleVideoClose} />;
  }

  return (
    <>
      <div className="min-h-screen bg-white">
        <Navigation />
        {/* Nature-themed background pattern */}
        <div 
          className="fixed inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234CAF50' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm10 0c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>

        {/* Hero Section with Balloon Ballpit */}
        <div className="relative z-10 pt-16">
          <div className="relative h-[500px] w-full overflow-hidden">
            <SimpleBallpit
              count={80}
              colors={['#4CAF50', '#2196F3', '#E91E63', '#FF9800', '#9C27B0', '#00BCD4']}
              className="absolute inset-0"
            />
            {/* Overlay Content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center bg-black/20 backdrop-blur-sm rounded-2xl p-6 md:p-8 max-w-4xl mx-auto">
                <div className="inline-flex items-center space-x-2 md:space-x-3 bg-white/20 px-3 md:px-4 lg:px-6 py-2 md:py-3 rounded-full mb-4 md:mb-6">
                  <BookOpen className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white" />
                  <span className="text-white font-medium text-xs md:text-sm lg:text-base">Interactive Stories</span>
              </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight px-4">
                Video 
                  <span className="text-green-300"> Showcase</span>
              </h1>
                <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed px-4">
                  Discover amazing content across creativity, travel, and wellness
              </p>
              <div className="flex justify-center space-x-2">
                  <div className="w-6 md:w-8 lg:w-12 h-1 bg-green-300 rounded-full"></div>
                  <div className="w-6 md:w-8 lg:w-12 h-1 bg-blue-300 rounded-full"></div>
                  <div className="w-6 md:w-8 lg:w-12 h-1 bg-pink-300 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Video Sections */}
        <div className="relative z-10 py-12 md:py-16">
          {videoSections.map((section, sectionIndex) => (
            <ScrollAnimation key={section.id} animation="fadeInUp" delay={sectionIndex * 200}>
              <section className="mb-16 md:mb-20">
              <div className="container mx-auto px-4 md:px-6">
                {/* Section Header */}
                  <ScrollAnimation animation="fadeInUp" delay={100}>
                    <div className="section-header flex flex-col md:flex-row items-start md:items-center justify-between mb-8 md:mb-12">
                  <div className="flex items-center space-x-3 md:space-x-4 mb-4 md:mb-0">
                    <div 
                      className="p-3 md:p-4 lg:p-5 rounded-2xl shadow-lg"
                      style={{ backgroundColor: section.lightColor }}
                    >
                      <div style={{ color: section.color }}>
                        {section.icon}
                      </div>
                    </div>
                    <div>
                      <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-800">{section.title}</h2>
                      <p className="text-gray-600 mt-1 text-xs md:text-sm lg:text-base">{section.description}</p>
                    </div>
                  </div>
                  
                  {/* Navigation Arrows - Hidden on mobile, shown on tablet+ */}
                  <div className="hidden md:flex items-center space-x-2">
                    <button 
                      onClick={() => scrollCarousel(sectionIndex, 'left')}
                      className="p-2 md:p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors shadow-md"
                    >
                      <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 text-gray-600" />
                    </button>
                    <button 
                      onClick={() => scrollCarousel(sectionIndex, 'right')}
                      className="p-2 md:p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors shadow-md"
                    >
                      <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-gray-600" />
                    </button>
                  </div>
                </div>
                  </ScrollAnimation>

                {/* Video Carousel */}
                  <ScrollAnimation animation="fadeInUp" delay={200}>
                <div className="relative">
                  <div 
                    ref={el => carouselRefs.current[sectionIndex] = el}
                        className="flex space-x-4 md:space-x-6 lg:space-x-8 overflow-x-auto scroll-smooth pb-6 scrollbar-hide"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                  >
                            {section.videos.map((video, videoIndex) => (
                          <ScrollAnimation key={`${section.id}-${videoIndex}`} animation="fadeInUp" delay={videoIndex * 100}>
          <VideoCard 
            video={{...video, section: section.title}}
            sectionColor={section.color}
            sectionLightColor={section.lightColor}
          />
                          </ScrollAnimation>
        ))}
                  </div>
                </div>
                  </ScrollAnimation>
              </div>
            </section>
            </ScrollAnimation>
          ))}
        </div>

        {/* Share Modal */}
        {showShareModal && (
          <ShareModal 
            video={shareVideo} 
            onClose={() => setShowShareModal(false)} 
            shareLink={shareLink}
            onCopy={copyToClipboard}
          />
        )}

        <Footer />
      </div>

      {/* Custom Styles */}
      <style>{`
        .scrollbar-hide {
          -webkit-overflow-scrolling: touch;
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
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

        .video-card {
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .video-card.animate-fade-in-up {
          opacity: 1;
          transform: translateY(0);
        }

        .section-header.animate-fade-in-up {
          opacity: 1;
          transform: translateY(0);
        }

        @media (max-width: 640px) {
          .video-card {
            width: 288px; /* w-72 */
          }
        }

        @media (min-width: 641px) and (max-width: 767px) {
          .video-card {
            width: 320px; /* w-80 */
          }
        }

        @media (min-width: 768px) and (max-width: 1023px) {
          .video-card {
            width: 350px;
          }
        }

        @media (min-width: 1024px) {
          .video-card {
            width: 400px;
          }
        }
      `}</style>
    </>
  );
};

export default VideoShowcase;