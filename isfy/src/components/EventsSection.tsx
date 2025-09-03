import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin, Users, BookOpen, Coffee } from 'lucide-react';

const EventsSection = () => {
  const [activeTab, setActiveTab] = useState<'book' | 'social'>('book');

  const bookEvents = [
    {
      id: 1,
      title: "Flying with Words - Book Launch",
      date: "March 15, 2025",
      time: "6:00 PM - 8:00 PM",
      location: "Kashmir Literary Center, Srinagar",
      description: "Join us for the official launch of 'Flying with Words' with readings, discussion, and book signing.",
      type: "Launch",
      capacity: "150 guests",
      status: "upcoming",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop"
    },
    {
      id: 2,
      title: "Author Reading & Q&A Session",
      date: "April 2, 2025",
      time: "3:00 PM - 5:00 PM",
      location: "Central Library, Delhi",
      description: "Intimate reading session followed by audience Q&A and book signing opportunity.",
      type: "Reading",
      capacity: "80 guests",
      status: "upcoming",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=250&fit=crop"
    },
    {
      id: 3,
      title: "Kashmir Literary Festival",
      date: "May 10-12, 2025",
      time: "All Day",
      location: "Various Venues, Srinagar",
      description: "Participating as featured author with panel discussions on regional literature and storytelling.",
      type: "Festival",
      capacity: "500+ attendees",
      status: "upcoming",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop"
    },
    {
      id: 4,
      title: "Writing Workshop: Regional Storytelling",
      date: "June 5, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Community Center, Mumbai",
      description: "Full-day workshop on crafting authentic regional narratives and character development.",
      type: "Workshop",
      capacity: "25 participants",
      status: "upcoming",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=250&fit=crop"
    }
  ];

  const socialEvents = [
    {
      id: 1,
      title: "Literary Coffee Morning",
      date: "March 22, 2025",
      time: "10:00 AM - 12:00 PM",
      location: "Café Literati, Srinagar",
      description: "Casual coffee meetup for book enthusiasts to discuss literature, writing, and creative inspiration.",
      type: "Social",
      capacity: "30 guests",
      status: "upcoming",
      image: "https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=400&h=250&fit=crop"
    },
    {
      id: 2,
      title: "Book Club Discussion: Flying with Words",
      date: "April 15, 2025",
      time: "7:00 PM - 9:00 PM",
      location: "Online & Local Chapters",
      description: "Monthly book club meeting focused on discussing themes, characters, and cultural elements.",
      type: "Book Club",
      capacity: "Unlimited",
      status: "upcoming",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop"
    },
    {
      id: 3,
      title: "Kashmir Culture & Literature Evening",
      date: "May 20, 2025",
      time: "6:30 PM - 9:30 PM",
      location: "Cultural Center, Jammu",
      description: "Evening celebrating Kashmir's rich literary heritage with music, poetry, and traditional refreshments.",
      type: "Cultural",
      capacity: "100 guests",
      status: "upcoming",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop"
    },
    {
      id: 4,
      title: "Writers' Networking Dinner",
      date: "June 28, 2025",
      time: "7:00 PM - 10:00 PM",
      location: "Hotel Paradise, Gulmarg",
      description: "Exclusive dinner for writers, publishers, and literary enthusiasts to connect and collaborate.",
      type: "Networking",
      capacity: "50 guests",
      status: "upcoming",
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=250&fit=crop"
    }
  ];

  const currentEvents = activeTab === 'book' ? bookEvents : socialEvents;

  const getEventIcon = (type: string) => {
    switch (type) {
      case 'Launch':
      case 'Reading':
      case 'Festival':
      case 'Workshop':
        return <BookOpen className="h-5 w-5" />;
      case 'Social':
      case 'Book Club':
      case 'Cultural':
      case 'Networking':
        return <Coffee className="h-5 w-5" />;
      default:
        return <Calendar className="h-5 w-5" />;
    }
  };

  return (
    <section id="events" className="py-20 bg-gradient-to-b from-background to-blush-pink/5">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            Upcoming Events
          </h2>
          <p className="font-cormorant text-xl text-muted-foreground max-w-2xl mx-auto">
            Join me at book launches, readings, workshops, and literary gatherings
          </p>
        </div>

        {/* Event Type Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-card border border-border rounded-lg p-2 inline-flex">
            <button
              onClick={() => setActiveTab('book')}
              className={`px-6 py-3 rounded-md font-cormorant font-medium transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'book'
                  ? 'bg-primary text-primary-foreground shadow-md'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <BookOpen className="h-4 w-4" />
              Book Events
            </button>
            <button
              onClick={() => setActiveTab('social')}
              className={`px-6 py-3 rounded-md font-cormorant font-medium transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'social'
                  ? 'bg-primary text-primary-foreground shadow-md'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Coffee className="h-4 w-4" />
              Social Events
            </button>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {currentEvents.map((event, index) => (
            <Card 
              key={event.id} 
              className="group hover:shadow-xl transition-all duration-300 overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-accent/90 text-white px-3 py-1 rounded-full text-sm font-cormorant flex items-center gap-1">
                  {getEventIcon(event.type)}
                  {event.type}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <CardContent className="p-6">
                <h3 className="font-playfair text-xl font-semibold mb-4 group-hover:text-accent transition-colors duration-300">
                  {event.title}
                </h3>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Calendar className="h-4 w-4 text-accent" />
                    <span className="font-cormorant">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Clock className="h-4 w-4 text-accent" />
                    <span className="font-cormorant">{event.time}</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <MapPin className="h-4 w-4 text-accent" />
                    <span className="font-cormorant">{event.location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Users className="h-4 w-4 text-accent" />
                    <span className="font-cormorant">{event.capacity}</span>
                  </div>
                </div>
                
                <p className="font-cormorant text-muted-foreground mb-6">
                  {event.description}
                </p>
                
                <div className="flex gap-3">
                  <Button className="flex-1 font-cormorant">
                    RSVP
                  </Button>
                  <Button variant="outline" className="font-cormorant">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup for Events */}
        <div className="mt-16 text-center">
          <div className="bg-card border border-border rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="font-playfair text-2xl font-semibold mb-4">Never Miss an Event</h3>
            <p className="font-cormorant text-muted-foreground mb-6">
              Subscribe to receive notifications about upcoming book launches, readings, and literary events
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

export default EventsSection;