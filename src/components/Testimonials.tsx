import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Marketing Director',
      company: 'TechStart Inc.',
      content: 'Working with this email marketing specialist transformed our campaigns. We saw a 150% increase in engagement and 85% boost in conversions within three months.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'CEO',
      company: 'GrowthLabs',
      content: 'The automation workflows and segmentation strategies delivered exceptional ROI. Our email marketing is now our top revenue driver.',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'E-commerce Manager',
      company: 'StyleHub',
      content: 'Professional, creative, and results-driven. The landing pages and campaign designs exceeded all expectations and significantly improved our customer retention.',
      rating: 5,
    },
  ];

  return (
    <section className="py-20 relative bg-card/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Client <span className="text-accent text-glow-cyan">Success Stories</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from businesses that transformed their email marketing
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="group relative p-8 bg-card/50 backdrop-blur-sm rounded-xl border neon-border-cyan hover:glow-cyan transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-primary/20" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-muted-foreground mb-6 relative z-10">
                "{testimonial.content}"
              </p>

              <div className="border-t border-border pt-4">
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.role}, {testimonial.company}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
