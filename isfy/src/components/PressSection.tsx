import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink, Calendar } from 'lucide-react';

const PressSection = () => {
  const pressArticles = [
    {
      id: 1,
      title: "Kashmir's Literary Voice: Author Ishrat Fayaz on Writing from Kashmir",
      publication: "Literary Kashmir",
      date: "December 2024",
      excerpt: "An in-depth conversation about the inspiration behind 'Flying with Words' and the importance of regional storytelling.",
      link: "#",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop"
    },
    {
      id: 2,
      title: "Emerging Voices in South Asian Literature",
      publication: "The Literary Review",
      date: "November 2024",
      excerpt: "Ishrat Fayaz featured among promising new authors bringing authentic Kashmir perspectives to contemporary literature.",
      link: "#",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=250&fit=crop"
    },
    {
      id: 3,
      title: "Book Review: Flying with Words - A Journey Through Kashmir's Literary Landscape",
      publication: "Mountain Echo Magazine",
      date: "October 2024",
      excerpt: "A compelling debut that captures the essence of Kashmir through lyrical prose and authentic storytelling.",
      link: "#",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=250&fit=crop"
    },
    {
      id: 4,
      title: "Interview: The Art of Storytelling in the Digital Age",
      publication: "Writers' Digest",
      date: "September 2024",
      excerpt: "Author discusses the balance between traditional storytelling and modern digital platforms.",
      link: "#",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop"
    },
    {
      id: 5,
      title: "Regional Authors Making Global Impact",
      publication: "The Book Tribune",
      date: "August 2024",
      excerpt: "How local stories from Kashmir are resonating with international audiences.",
      link: "#",
      image: "https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?w=400&h=250&fit=crop"
    },
    {
      id: 6,
      title: "Podcast Interview: Writing from the Valley",
      publication: "Author Spotlight Podcast",
      date: "July 2024",
      excerpt: "A deep dive into the creative process and the cultural influences shaping contemporary Kashmir literature.",
      link: "#",
      image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=400&h=250&fit=crop"
    }
  ];

  return (
    <section id="press" className="py-20 bg-gradient-to-b from-background to-sage-green/5">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            Press & Media
          </h2>
          <p className="font-cormorant text-xl text-muted-foreground max-w-2xl mx-auto">
            Coverage, interviews, and reviews from literary publications and media outlets
          </p>
        </div>

        {/* Press Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pressArticles.map((article, index) => (
            <Card 
              key={article.id} 
              className="group hover:shadow-xl transition-all duration-300 overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-sm text-accent mb-3">
                  <Calendar className="h-4 w-4" />
                  <span className="font-cormorant">{article.date}</span>
                  <span className="text-muted-foreground">•</span>
                  <span className="font-cormorant font-medium">{article.publication}</span>
                </div>
                
                <h3 className="font-playfair text-xl font-semibold mb-3 line-clamp-2 group-hover:text-accent transition-colors duration-300">
                  {article.title}
                </h3>
                
                <p className="font-cormorant text-muted-foreground mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                
                <a 
                  href={article.link}
                  className="inline-flex items-center gap-2 font-cormorant font-medium text-primary hover:text-accent transition-colors duration-300"
                >
                  Read Article <ExternalLink className="h-4 w-4" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Media Kit Section */}
        <div className="mt-20 text-center">
          <div className="bg-card border border-border rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="font-playfair text-2xl font-semibold mb-4">Media Kit</h3>
            <p className="font-cormorant text-muted-foreground mb-6">
              Download high-resolution photos, biography, and press materials for media coverage
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#" 
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-cormorant font-medium hover:bg-primary/90 transition-colors duration-300"
              >
                Download Media Kit
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 border border-border rounded-lg font-cormorant font-medium hover:bg-muted transition-colors duration-300"
              >
                Contact for Interviews
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PressSection;