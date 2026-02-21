import { Star, Quote } from 'lucide-react';
import React, { useRef, useState, useEffect } from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Marketing Director',
      company: 'TechStart Inc.',
      content:
        'Working with this email marketing specialist transformed our campaigns. We saw a 150% increase in engagement and 85% boost in conversions within three months.',
      rating: 5,
      image: '', // placeholder for future image
    },
    {
      name: 'Michael Chen',
      role: 'CEO',
      company: 'GrowthLabs',
      content:
        'The automation workflows and segmentation strategies delivered exceptional ROI. Our email marketing is now our top revenue driver.',
      rating: 5,
      image: '',
    },
    {
      name: 'Emily Rodriguez',
      role: 'E-commerce Manager',
      company: 'StyleHub',
      content:
        'Professional, creative, and results-driven. The landing pages and campaign designs exceeded all expectations and significantly improved our customer retention.',
      rating: 5,
      image: '',
    },
    {
      name: 'David Miller',
      role: 'Founder',
      company: 'NextGen Studios',
      content:
        'A seamless experience from start to finish. Our automated sequences now run flawlessly and generate consistent revenue daily.',
      rating: 5,
      image: '',
    },
  ];

  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const CARD_WIDTH = 320; 

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      // Using CARD_WIDTH + 32px (for the gap-8) in calculation
      const newIndex = Math.round(scrollLeft / (CARD_WIDTH + 32)); 
      setActiveIndex(newIndex);
    }
  };

  useEffect(() => {
    const element = scrollRef.current;
    if (element) {
      element.addEventListener('scroll', handleScroll);
      return () => {
        element.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  const scrollTo = (index) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: index * (CARD_WIDTH + 32), 
        behavior: 'smooth',
      });
      setActiveIndex(index);
    }
  };

  return (
    <section className="py-3 relative bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            what <span className="text-secondary">they Said</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from businesses that transformed their email marketing
          </p>
        </div>

        {/* Testimonial Cards Container */}
        {/* ***CHANGE: Used custom utility class 'lg-1120-grid' for the 1120px breakpoint switch.*** */}
        <div 
          ref={scrollRef}
          // The component is 'flex' by default (for horizontal scroll) up to 1120px
          className="flex overflow-x-auto gap-8 lg-1120-grid hide-scrollbar-on-mobile snap-x snap-mandatory"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              // ***CHANGE: Added 'lg-1120-w-full' for card sizing at the new breakpoint.***
              className="group relative p-8 bg-white/10 backdrop-blur-sm rounded-xl border neon-border-cyan hover:glow-cyan transition-all duration-300 animate-fade-in 
                       w-full flex-shrink-0 sm:w-80 lg-1120-w-full lg-1120-shrink snap-center"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-primary/20" />

              {/* Circular Image Placeholder */}
              <div className="w-20 h-20 rounded-full bg-white/20 border border-accent/30 mx-auto mb-6" />

              <div className="flex gap-1 mb-4 justify-center">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-white text-white" />
                ))}
              </div>

              <p className="text-muted-foreground mb-6 relative z-10 text-center">
                "{testimonial.content}"
              </p>

              <div className="border-t border-border pt-4 text-center">
                <div className="font-semibold text-secondary">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.role}, {testimonial.company}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Positional Indicator Dots - ***CHANGE: Hidden when the custom grid is active (>= 1120px)*** */}
        <div className="flex justify-center gap-2 mt-6 lg-1120-hidden">
          {testimonials.map((_, index) => (
            <button
              key={index}
              aria-label={`Go to testimonial ${index + 1}`}
              onClick={() => scrollTo(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? 'bg-secondary w-5' // Active dot is yellow and wider
                  : 'bg-muted-foreground/50' // Inactive dot is muted gray
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;