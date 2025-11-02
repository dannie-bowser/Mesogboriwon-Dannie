import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Target, Zap, BarChart3, Layout } from 'lucide-react';

const ServicesPreview = () => {
  const services = [
    {
      icon: Target,
      title: 'Email Marketing Strategy',
      description: 'Custom campaigns designed for your unique audience and business goals.',
    },
    {
      icon: Zap,
      title: 'Automation Setup',
      description: 'Smart workflows that increase engagement and drive conversions automatically.',
    },
    {
      icon: BarChart3,
      title: 'Analytics & Reporting',
      description: 'In-depth performance insights and data-driven optimization strategies.',
    },
    {
      icon: Layout,
      title: 'Landing Page Design',
      description: 'High-converting email-led landing pages that maximize your campaign ROI.',
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Services That <span className="text-secondary text-glow-magenta">Deliver</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive email marketing solutions tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-8 bg-card/50 backdrop-blur-sm rounded-xl border neon-border-magenta hover:glow-magenta transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-lg bg-secondary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center animate-fade-in">
          <Link to="/services">
            <Button 
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground glow-magenta group"
            >
              View All Services
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
