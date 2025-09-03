import React, { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Button } from '@/components/ui/button';
import { Play, Search, Filter, Clock, Calendar } from 'lucide-react';

const Podcasts = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const categories = [
    { id: 'all', label: 'All Episodes' },
    { id: 'writing', label: 'Writing Process' },
    { id: 'kashmir', label: 'Kashmir Stories' },
    { id: 'interviews', label: 'Author Interviews' },
    { id: 'behind-scenes', label: 'Behind the Scenes' },
  ];

  const podcasts = [
    {
      id: 1,
      title: "The Birth of 'Flying with Words'",
      description: "Join me as I share the intimate journey behind my latest work...",
      category: 'behind-scenes',
      duration: '28 min',
      publishDate: '2024-01-15',
      featured: true,
      spotifyLink: '#',
      youtubeLink: '#',
      image: 'https://res.cloudinary.com/diaa9pw5r/image/upload/v1735109434/Untitled_design_17_wzkgr5.png'
    },
    {
      id: 2,
      title: "Kashmir's Oral Tradition in Modern Literature",
      description: "Exploring how ancient storytelling traditions from Kashmir continue to influence...",
      category: 'kashmir',
      duration: '35 min',
      publishDate: '2024-01-08',
      featured: false,
      spotifyLink: '#',
      youtubeLink: '#',
      image: 'https://res.cloudinary.com/diaa9pw5r/image/upload/v1735109434/Untitled_design_14_eg8o3z.png'
    },
    {
      id: 3,
      title: "The Writer's Daily Ritual",
      description: "A deep dive into the daily practices and creative rituals that fuel the writing process.",
      category: 'writing',
      duration: '22 min',
      publishDate: '2024-01-01',
      featured: false,
      spotifyLink: '#',
      youtubeLink: '#',
      image: 'https://res.cloudinary.com/diaa9pw5r/image/upload/v1735109434/Untitled_design_18_oeuynk.png'
    },
    {
      id: 4,
      title: "Conversation with Arundhati Roy",
      description: "An inspiring conversation about literature, activism, and the power of words to create change.",
      category: 'interviews',
      duration: '45 min',
      publishDate: '2023-12-25',
      featured: true,
      spotifyLink: '#',
      youtubeLink: '#',
      image: 'https://res.cloudinary.com/diaa9pw5r/image/upload/v1735109434/Untitled_design_16_qjhgmo.png'
    }
  ];

  const filteredPodcasts = podcasts.filter(podcast => {
    const matchesFilter = selectedFilter === 'all' || podcast.category === selectedFilter;
    const matchesSearch = podcast.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      podcast.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-background custom-scrollbar">
      <Navigation />
      <main className="pt-24">
        <section className="py-20 bg-gradient-to-b from-[#f7f8fc] via-[#eef2ff] to-white">
          <div className="container mx-auto px-6">
            
            {/* Section Header */}
            <div className="text-center mb-12" data-aos="fade-up">
              <h2 className="text-title mb-4 text-4xl font-playfair">
                Literary <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Conversations</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-cormorant">
                Join intimate conversations about the craft of writing, the stories behind the stories, and the literary landscape of Kashmir and beyond.
              </p>
            </div>

            {/* Search and Filter Bar */}
            <div className="mb-12" data-aos="fade-up">
              <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search episodes..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-white font-cormorant text-base focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>

                <div className="flex items-center gap-2 flex-wrap">
                  <Filter className="h-5 w-5 text-muted-foreground mr-2" />
                  {categories.map((category) => (
                    <Button
                      key={category.id}
                      variant={selectedFilter === category.id ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedFilter(category.id)}
                      className="font-cormorant"
                    >
                      {category.label}
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            {/* Featured Episodes */}
            <div className="mb-16">
              <h3 className="font-playfair text-2xl mb-8" data-aos="fade-up">Featured Episodes</h3>
              <div className="grid lg:grid-cols-2 gap-8">
                {filteredPodcasts
                  .filter(podcast => podcast.featured)
                  .map(podcast => (
                    <div key={podcast.id} data-aos="fade-up" className="flex bg-gradient-to-br from-white to-lavender border border-muted rounded-xl p-6 gap-6 shadow-lg hover:shadow-xl transition">
                      <div className="w-32 h-32 rounded-lg overflow-hidden">
                        <img src={podcast.image || '/images/default.jpg'} alt={podcast.title} className="w-full h-full object-cover" />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2 text-sm font-cormorant text-charcoal">
                            <span className="bg-charcoal/10 px-3 py-1 rounded-full">
                              {categories.find(cat => cat.id === podcast.category)?.label}
                            </span>
                            <div className="flex items-center gap-1 text-charcoal/70">
                              <Clock className="h-4 w-4" />
                              {podcast.duration}
                            </div>
                          </div>
                          <Button size="icon" className="bg-charcoal hover:bg-primary text-white rounded-full">
                            <Play className="h-5 w-5" />
                          </Button>
                        </div>
                        <h4 className="font-playfair text-xl mb-1">{podcast.title}</h4>
                        <p className="font-cormorant text-charcoal/80 mb-3">{podcast.description}</p>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-1 text-sm text-charcoal/60">
                            <Calendar className="h-4 w-4" />
                            {formatDate(podcast.publishDate)}
                          </div>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">Spotify</Button>
                            <Button variant="outline" size="sm">YouTube</Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            {/* All Episodes */}
            <div>
              <h3 className="font-playfair text-2xl mb-8" data-aos="fade-up">All Episodes</h3>
              <div className="space-y-6">
                {filteredPodcasts.map(podcast => (
                  <div key={podcast.id} data-aos="fade-up" className="bg-white border border-border p-6 rounded-xl shadow-sm flex gap-6 hover:shadow-md transition-all">
                    <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                      <img src={podcast.image || '/images/default-thumb.jpg'} alt={podcast.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col lg:flex-row justify-between gap-4 mb-2">
                        <div className="flex items-center gap-3 text-sm text-muted-foreground font-cormorant">
                          <span className="bg-muted px-3 py-1 rounded-full">{categories.find(c => c.id === podcast.category)?.label}</span>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {podcast.duration}
                          </div>
                          {podcast.featured && (
                            <span className="bg-accent text-white px-2 py-1 rounded-full text-xs">Featured</span>
                          )}
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">Spotify</Button>
                          <Button variant="outline" size="sm">YouTube</Button>
                        </div>
                      </div>
                      <h4 className="font-playfair text-lg mb-1">{podcast.title}</h4>
                      <p className="font-cormorant text-muted-foreground mb-2">{podcast.description}</p>
                      <div className="flex items-center gap-1 text-muted-foreground text-sm">
                        <Calendar className="h-4 w-4" />
                        {formatDate(podcast.publishDate)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Subscribe CTA */}
            <div className="mt-20 text-center bg-gradient-to-r from-purple-100 to-pink-100 p-8 rounded-xl shadow-lg" data-aos="zoom-in">
              <h3 className="font-playfair text-2xl mb-4">Never Miss an Episode</h3>
              <p className="font-cormorant text-lg mb-6 max-w-2xl mx-auto">
                Subscribe to get notified when new episodes are released and join our growing community of literary enthusiasts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-charcoal hover:bg-primary text-white font-cormorant">Subscribe on Spotify</Button>
                <Button variant="outline" size="lg" className="border-charcoal text-charcoal hover:bg-charcoal hover:text-white font-cormorant">Subscribe on YouTube</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Podcasts;



