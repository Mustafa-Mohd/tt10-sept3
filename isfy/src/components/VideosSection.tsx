import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Play, ExternalLink } from 'lucide-react';

const VideosSection = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const videos = [
    {
      id: 1,
      title: "Flying with Words - Book Reading & Discussion",
      description: "Author reads excerpts from her debut novel and discusses the inspiration behind the story",
      thumbnail: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop",
      duration: "24:30",
      type: "Reading",
      youtubeId: "dQw4w9WgXcQ" // Placeholder
    },
    {
      id: 2,
      title: "Kashmir Stories: Writing from Kashmir",
      description: "An intimate conversation about growing up in Kashmir and how it influences storytelling",
      thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
      duration: "18:45",
      type: "Interview",
      youtubeId: "dQw4w9WgXcQ" // Placeholder
    },
    {
      id: 3,
      title: "The Creative Process: From Idea to Published Book",
      description: "Behind the scenes look at the writing process and journey to publication",
      thumbnail: "https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?w=600&h=400&fit=crop",
      duration: "32:15",
      type: "Documentary",
      youtubeId: "dQw4w9WgXcQ" // Placeholder
    },
    {
      id: 4,
      title: "Literary Festival Keynote: The Power of Regional Voices",
      description: "Keynote speech at the Kashmir Literary Festival about the importance of regional literature",
      thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
      duration: "45:20",
      type: "Speaking",
      youtubeId: "dQw4w9WgXcQ" // Placeholder
    },
    {
      id: 5,
      title: "Q&A Session with Readers",
      description: "Interactive session answering questions from readers and book club members",
      thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
      duration: "28:10",
      type: "Q&A",
      youtubeId: "dQw4w9WgXcQ" // Placeholder
    },
    {
      id: 6,
      title: "Writing Workshop: Character Development in Regional Fiction",
      description: "Educational workshop on creating authentic characters rooted in specific cultural contexts",
      thumbnail: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&h=400&fit=crop",
      duration: "52:30",
      type: "Workshop",
      youtubeId: "dQw4w9WgXcQ" // Placeholder
    }
  ];

  const categories = ["All", "Reading", "Interview", "Documentary", "Speaking", "Q&A", "Workshop"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredVideos = activeCategory === "All" 
    ? videos 
    : videos.filter(video => video.type === activeCategory);

  return (
    <section id="videos" className="py-20 bg-gradient-to-b from-background to-lavender/5">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            Videos & Talks
          </h2>
          <p className="font-cormorant text-xl text-muted-foreground max-w-2xl mx-auto">
            Watch readings, interviews, and behind-the-scenes content from literary events and discussions
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-cormorant font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'bg-card border border-border hover:bg-muted'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Video */}
        {selectedVideo ? (
          <div className="mb-16">
            <div className="relative bg-card rounded-lg overflow-hidden shadow-2xl max-w-4xl mx-auto">
              <div className="aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                  title="Featured Video"
                  className="w-full h-full"
                  allowFullScreen
                  allow="autoplay; encrypted-media"
                />
              </div>
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 bg-charcoal/80 text-white p-2 rounded-full hover:bg-charcoal transition-colors duration-300"
              >
                ✕
              </button>
            </div>
          </div>
        ) : null}

        {/* Videos Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVideos.map((video, index) => (
            <Card 
              key={video.id} 
              className="group hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedVideo(video.youtubeId)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-charcoal/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-primary rounded-full p-4 transform scale-90 group-hover:scale-100 transition-transform duration-300">
                    <Play className="h-8 w-8 text-primary-foreground ml-1" fill="currentColor" />
                  </div>
                </div>
                
                {/* Duration Badge */}
                <div className="absolute bottom-3 right-3 bg-charcoal/80 text-white px-2 py-1 rounded text-sm font-cormorant">
                  {video.duration}
                </div>
                
                {/* Type Badge */}
                <div className="absolute top-3 left-3 bg-accent/90 text-white px-3 py-1 rounded-full text-sm font-cormorant">
                  {video.type}
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="font-playfair text-xl font-semibold mb-3 line-clamp-2 group-hover:text-accent transition-colors duration-300">
                  {video.title}
                </h3>
                
                <p className="font-cormorant text-muted-foreground line-clamp-3">
                  {video.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* YouTube Channel Link */}
        <div className="mt-16 text-center">
          <div className="bg-card border border-border rounded-lg p-8 max-w-xl mx-auto">
            <h3 className="font-playfair text-2xl font-semibold mb-4">More Videos</h3>
            <p className="font-cormorant text-muted-foreground mb-6">
              Subscribe to my YouTube channel for regular updates on new readings, interviews, and literary discussions
            </p>
            <a 
              href="https://youtube.com/@ishratfayaz" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg font-cormorant font-medium hover:bg-red-700 transition-colors duration-300"
            >
              Visit YouTube Channel <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideosSection;