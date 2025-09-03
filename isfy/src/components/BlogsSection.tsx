import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Search, Calendar, Tag, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BlogsSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Writing', 'Kashmir', 'Literature', 'Culture', 'Personal', 'Reviews'];

  const blogPosts = [
    {
      id: 1,
      title: "The Art of Weaving Stories from Kashmir's Landscapes",
      excerpt: "How the breathtaking valleys and mountains of Kashmir inspire the narratives that flow through my writing, creating a tapestry of emotion and place.",
      category: "Writing",
      tags: ["Kashmir", "Inspiration", "Landscape"],
      date: "January 15, 2025",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
      featured: true
    },
    {
      id: 2,
      title: "Regional Literature in a Global World",
      excerpt: "Exploring how local stories can resonate with universal themes and connect readers across cultural boundaries.",
      category: "Literature",
      tags: ["Regional Literature", "Global Reach", "Storytelling"],
      date: "January 8, 2025",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?w=600&h=400&fit=crop",
      featured: false
    },
    {
      id: 3,
      title: "Behind the Scenes: Writing 'Flying with Words'",
      excerpt: "A deep dive into the creative process, challenges, and moments of inspiration that shaped my debut novel.",
      category: "Personal",
      tags: ["Writing Process", "Debut Novel", "Creativity"],
      date: "December 28, 2024",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&h=400&fit=crop",
      featured: false
    },
    {
      id: 4,
      title: "The Oral Tradition: Kashmir's Storytelling Heritage",
      excerpt: "Examining how traditional Kashmir storytelling influences contemporary literature and the importance of preserving cultural narratives.",
      category: "Culture",
      tags: ["Oral Tradition", "Cultural Heritage", "Kashmir"],
      date: "December 20, 2024",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
      featured: false
    },
    {
      id: 5,
      title: "Book Review: Contemporary Voices from South Asia",
      excerpt: "A review of recent publications that are reshaping the landscape of South Asian literature and bringing fresh perspectives.",
      category: "Reviews",
      tags: ["Book Review", "South Asian Literature", "Contemporary"],
      date: "December 15, 2024",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop",
      featured: false
    },
    {
      id: 6,
      title: "Finding Your Voice as a Regional Writer",
      excerpt: "Tips and insights for writers who want to authentically represent their regional culture while appealing to broader audiences.",
      category: "Writing",
      tags: ["Writing Tips", "Regional Writing", "Authenticity"],
      date: "December 10, 2024",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
      featured: false
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <section id="blogs" className="py-20 bg-gradient-to-b from-background to-powder-blue/5">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            Literary Blog
          </h2>
          <p className="font-cormorant text-xl text-muted-foreground max-w-2xl mx-auto">
            Thoughts on writing, literature, culture, and the art of storytelling from Kashmir and beyond
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-card font-cormorant focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-cormorant font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-card border border-border hover:bg-muted'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Post */}
        {featuredPost && selectedCategory === 'All' && !searchTerm && (
          <div className="mb-16">
            <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-accent text-white px-3 py-1 rounded-full text-sm font-cormorant">
                      Featured
                    </span>
                    <span className="text-muted-foreground font-cormorant text-sm">
                      {featuredPost.category}
                    </span>
                  </div>
                  
                  <h3 className="font-playfair text-2xl md:text-3xl font-bold mb-4 hover:text-accent transition-colors duration-300">
                    {featuredPost.title}
                  </h3>
                  
                  <p className="font-cormorant text-muted-foreground mb-6 text-lg">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span className="font-cormorant">{featuredPost.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span className="font-cormorant">{featuredPost.readTime}</span>
                      </div>
                    </div>
                    
                    <Button className="font-cormorant">
                      Read Article <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Regular Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post, index) => (
            <Card 
              key={post.id} 
              className="group hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-cormorant">
                  {post.category}
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="font-playfair text-xl font-semibold mb-3 line-clamp-2 group-hover:text-accent transition-colors duration-300">
                  {post.title}
                </h3>
                
                <p className="font-cormorant text-muted-foreground mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span 
                      key={tag}
                      className="inline-flex items-center gap-1 text-xs bg-muted px-2 py-1 rounded-full font-cormorant"
                    >
                      <Tag className="h-3 w-3" />
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span className="font-cormorant">{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span className="font-cormorant">{post.readTime}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <div className="bg-card border border-border rounded-lg p-8 max-w-md mx-auto">
              <h3 className="font-playfair text-xl font-semibold mb-4">No articles found</h3>
              <p className="font-cormorant text-muted-foreground mb-6">
                Try adjusting your search terms or category filter
              </p>
              <Button 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                }}
                variant="outline"
                className="font-cormorant"
              >
                Clear Filters
              </Button>
            </div>
          </div>
        )}

        {/* Newsletter Signup */}
        <div className="mt-16 text-center">
          <div className="bg-card border border-border rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="font-playfair text-2xl font-semibold mb-4">Stay Updated</h3>
            <p className="font-cormorant text-muted-foreground mb-6">
              Subscribe to receive new blog posts and literary insights directly in your inbox
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-3 rounded-lg border border-border bg-background font-cormorant focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <Button className="px-6 py-3 font-cormorant">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;