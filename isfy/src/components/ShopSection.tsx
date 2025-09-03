import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Star, ShoppingCart, Filter } from 'lucide-react';

const ShopSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Books', 'Merchandise', 'Digital', 'Bundles'];

  const products = [
    {
      id: 1,
      title: "Flying with Words - Hardcover",
      description: "The debut novel in beautiful hardcover edition with dust jacket and author's signature.",
      price: "$24.99",
      originalPrice: "$29.99",
      category: "Books",
      rating: 4.8,
      reviews: 127,
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=500&fit=crop",
      amazonLink: "https://amazon.com/flying-with-words-ishrat-fayaz",
      badge: "Bestseller",
      inStock: true
    },
    {
      id: 2,
      title: "Flying with Words - Paperback",
      description: "The paperback edition of the acclaimed debut novel, perfect for travel reading.",
      price: "$14.99",
      originalPrice: "$16.99",
      category: "Books",
      rating: 4.7,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=500&fit=crop",
      amazonLink: "https://amazon.com/flying-with-words-paperback",
      badge: null,
      inStock: true
    },
    {
      id: 3,
      title: "Flying with Words - Kindle Edition",
      description: "Digital edition for instant download. Includes bonus content and author's notes.",
      price: "$9.99",
      originalPrice: "$12.99",
      category: "Digital",
      rating: 4.9,
      reviews: 203,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
      amazonLink: "https://amazon.com/flying-with-words-kindle",
      badge: "Digital",
      inStock: true
    },
    {
      id: 4,
      title: "Flying with Words - Audiobook",
      description: "Narrated by the author herself. Experience the story as intended with authentic Kashmiri pronunciation.",
      price: "$19.99",
      originalPrice: "$24.99",
      category: "Digital",
      rating: 4.9,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=400&h=500&fit=crop",
      amazonLink: "https://audible.com/flying-with-words-audiobook",
      badge: "Author Narrated",
      inStock: true
    },
    {
      id: 5,
      title: "Kashmir Literary Collection Bookmark Set",
      description: "Beautiful set of 5 bookmarks featuring quotes from Flying with Words and Kashmir landscapes.",
      price: "$12.99",
      originalPrice: null,
      category: "Merchandise",
      rating: 4.6,
      reviews: 45,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=500&fit=crop",
      amazonLink: "https://amazon.com/kashmir-bookmark-set",
      badge: null,
      inStock: true
    },
    {
      id: 6,
      title: "Author's Choice Bundle",
      description: "Complete collection: Hardcover book, audiobook, bookmark set, and signed author photo.",
      price: "$49.99",
      originalPrice: "$69.99",
      category: "Bundles",
      rating: 5.0,
      reviews: 23,
      image: "https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?w=400&h=500&fit=crop",
      amazonLink: "https://amazon.com/authors-choice-bundle",
      badge: "Limited Edition",
      inStock: true
    },
    {
      id: 7,
      title: "Flying with Words Literary Tote Bag",
      description: "Eco-friendly canvas tote featuring book cover art and inspirational quote.",
      price: "$18.99",
      originalPrice: null,
      category: "Merchandise",
      rating: 4.4,
      reviews: 31,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=500&fit=crop",
      amazonLink: "https://amazon.com/literary-tote-bag",
      badge: null,
      inStock: false
    },
    {
      id: 8,
      title: "Digital Writing Workshop Access",
      description: "6-hour recorded workshop on regional storytelling and character development techniques.",
      price: "$39.99",
      originalPrice: "$59.99",
      category: "Digital",
      rating: 4.8,
      reviews: 67,
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=500&fit=crop",
      amazonLink: "https://gumroad.com/writing-workshop-access",
      badge: "New",
      inStock: true
    }
  ];

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`h-4 w-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-muted-foreground'}`} 
      />
    ));
  };

  return (
    <section id="shop" className="py-20 bg-gradient-to-b from-background to-sage-green/5">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            Literary Shop
          </h2>
          <p className="font-cormorant text-xl text-muted-foreground max-w-2xl mx-auto">
            Books, merchandise, and digital content to enhance your literary journey
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <div className="flex items-center gap-2 text-muted-foreground mb-4 md:mb-0">
            <Filter className="h-4 w-4" />
            <span className="font-cormorant text-sm">Filter by:</span>
          </div>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-cormorant font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'bg-card border border-border hover:bg-muted'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product, index) => (
            <Card 
              key={product.id} 
              className="group hover:shadow-xl transition-all duration-300 overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Product Badge */}
                {product.badge && (
                  <div className="absolute top-3 left-3 bg-accent text-white px-3 py-1 rounded-full text-sm font-cormorant">
                    {product.badge}
                  </div>
                )}
                
                {/* Stock Status */}
                {!product.inStock && (
                  <div className="absolute inset-0 bg-charcoal/60 flex items-center justify-center">
                    <span className="bg-red-600 text-white px-4 py-2 rounded-lg font-cormorant font-medium">
                      Out of Stock
                    </span>
                  </div>
                )}
              </div>
              
              <CardContent className="p-6">
                <h3 className="font-playfair text-lg font-semibold mb-2 line-clamp-2 group-hover:text-accent transition-colors duration-300">
                  {product.title}
                </h3>
                
                <p className="font-cormorant text-muted-foreground text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>
                
                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {renderStars(product.rating)}
                  </div>
                  <span className="font-cormorant text-sm text-muted-foreground">
                    {product.rating} ({product.reviews})
                  </span>
                </div>
                
                {/* Price */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="font-playfair text-xl font-bold text-primary">
                    {product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="font-cormorant text-muted-foreground line-through">
                      {product.originalPrice}
                    </span>
                  )}
                </div>
                
                {/* Buy Button */}
                <Button 
                  className="w-full font-cormorant group"
                  disabled={!product.inStock}
                  onClick={() => window.open(product.amazonLink, '_blank')}
                >
                  {product.inStock ? (
                    <>
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Buy Now
                      <ExternalLink className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </>
                  ) : (
                    'Notify When Available'
                  )}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Shipping & Returns Info */}
        <div className="mt-16">
          <div className="bg-card border border-border rounded-lg p-8">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShoppingCart className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-playfair text-lg font-semibold mb-2">Free Shipping</h4>
                <p className="font-cormorant text-muted-foreground text-sm">
                  Free shipping on orders over $25 worldwide
                </p>
              </div>
              
              <div>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ExternalLink className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-playfair text-lg font-semibold mb-2">Secure Checkout</h4>
                <p className="font-cormorant text-muted-foreground text-sm">
                  All purchases secured through Amazon & verified partners
                </p>
              </div>
              
              <div>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-playfair text-lg font-semibold mb-2">Quality Guaranteed</h4>
                <p className="font-cormorant text-muted-foreground text-sm">
                  30-day return policy on all physical products
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopSection;