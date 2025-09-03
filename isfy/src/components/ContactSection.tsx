import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Send, MessageCircle, Calendar, Globe } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    type: 'general'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form or show success message
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "hello@ishratfayaz.com",
      description: "For general inquiries and collaboration opportunities",
      link: "mailto:hello@ishratfayaz.com"
    },
    {
      icon: MessageCircle,
      title: "Media Inquiries",
      details: "press@ishratfayaz.com",
      description: "For interviews, press, and media requests",
      link: "mailto:press@ishratfayaz.com"
    },
    {
      icon: Calendar,
      title: "Speaking Engagements",
      details: "events@ishratfayaz.com",
      description: "For book readings, workshops, and speaking events",
      link: "mailto:events@ishratfayaz.com"
    },
    {
      icon: MapPin,
      title: "Location",
      details: "Kashmir, India",
      description: "Available for virtual and in-person events",
      link: null
    }
  ];

  const socialLinks = [
    { name: "Twitter", handle: "@ishratfayaz", url: "https://twitter.com/ishratfayaz" },
    { name: "Instagram", handle: "@ishratfayaz.author", url: "https://instagram.com/ishratfayaz.author" },
    { name: "LinkedIn", handle: "ishrat-fayaz", url: "https://linkedin.com/in/ishrat-fayaz" },
    { name: "Goodreads", handle: "Ishrat Fayaz", url: "https://goodreads.com/ishratfayaz" }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-lavender/5">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            Get in Touch
          </h2>
          <p className="font-cormorant text-xl text-muted-foreground max-w-2xl mx-auto">
            I'd be happy to hear from readers, fellow writers, and anyone interested in literature and storytelling
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Contact Form */}
          <div>
            <Card className="shadow-xl">
              <CardContent className="p-8">
                <h3 className="font-playfair text-2xl font-semibold mb-6">Send a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block font-cormorant font-medium mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background font-cormorant focus:outline-none focus:ring-2 focus:ring-accent"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block font-cormorant font-medium mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background font-cormorant focus:outline-none focus:ring-2 focus:ring-accent"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="type" className="block font-cormorant font-medium mb-2">
                      Inquiry Type
                    </label>
                    <select
                      id="type"
                      name="type"
                      value={formData.type}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background font-cormorant focus:outline-none focus:ring-2 focus:ring-accent"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="media">Media/Press</option>
                      <option value="speaking">Speaking Engagement</option>
                      <option value="collaboration">Collaboration</option>
                      <option value="bookclub">Book Club</option>
                      <option value="fan">Fan Mail</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block font-cormorant font-medium mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background font-cormorant focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="Brief subject of your message"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block font-cormorant font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background font-cormorant focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                      placeholder="Your message..."
                    />
                  </div>
                  
                  <Button type="submit" className="w-full font-cormorant text-lg py-3">
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            
            {/* Contact Methods */}
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <Card 
                  key={index} 
                  className="hover:shadow-lg transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <item.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-playfair text-lg font-semibold mb-1">
                          {item.title}
                        </h4>
                        {item.link ? (
                          <a 
                            href={item.link}
                            className="font-cormorant text-accent hover:text-accent/80 transition-colors duration-300 font-medium"
                          >
                            {item.details}
                          </a>
                        ) : (
                          <p className="font-cormorant font-medium text-foreground">
                            {item.details}
                          </p>
                        )}
                        <p className="font-cormorant text-muted-foreground text-sm mt-1">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Media */}
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-playfair text-lg font-semibold mb-3">
                      Social Media
                    </h4>
                    <div className="space-y-2">
                      {socialLinks.map((social, index) => (
                        <a
                          key={index}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block font-cormorant text-accent hover:text-accent/80 transition-colors duration-300"
                        >
                          {social.name}: {social.handle}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Response Time */}
            <Card className="bg-accent/5 border-accent/20">
              <CardContent className="p-6 text-center">
                <h4 className="font-playfair text-lg font-semibold mb-2">
                  Response Time
                </h4>
                <p className="font-cormorant text-muted-foreground">
                  I typically respond to messages within 2-3 business days. 
                  For urgent media inquiries, please mark your subject line as "URGENT".
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="font-playfair text-2xl font-semibold mb-4">Stay Connected</h3>
              <p className="font-cormorant text-muted-foreground mb-6">
                Join my newsletter for updates on new books, events, and exclusive content
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
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;