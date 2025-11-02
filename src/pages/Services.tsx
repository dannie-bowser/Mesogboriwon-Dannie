import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';
import { Target, Zap, BarChart3, Layout, Users, Mail, TrendingUp, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: Target,
      title: 'Email Marketing Strategy',
      description: 'Custom campaigns designed for your audience',
      features: [
        'Audience research and persona development',
        'Campaign calendar planning',
        'Content strategy and messaging',
        'A/B testing frameworks',
        'KPI tracking and optimization',
      ],
      color: 'cyan',
    },
    {
      icon: Zap,
      title: 'Automation Setup',
      description: 'Smart workflows to increase engagement',
      features: [
        'Welcome series automation',
        'Abandoned cart recovery',
        'Re-engagement campaigns',
        'Drip campaign sequences',
        'Trigger-based workflows',
      ],
      color: 'magenta',
    },
    {
      icon: BarChart3,
      title: 'Analytics & Reporting',
      description: 'In-depth performance insights',
      features: [
        'Custom dashboard creation',
        'Monthly performance reports',
        'Conversion tracking setup',
        'ROI analysis and forecasting',
        'Competitive benchmarking',
      ],
      color: 'blue',
    },
    {
      icon: Layout,
      title: 'Landing Page Design',
      description: 'High-converting email-led pages',
      features: [
        'Conversion-focused design',
        'Mobile-responsive layouts',
        'Form optimization',
        'CTA strategy and placement',
        'Performance testing',
      ],
      color: 'cyan',
    },
    {
      icon: Users,
      title: 'Audience Segmentation',
      description: 'Personalized messaging for better results',
      features: [
        'Behavioral segmentation',
        'Demographic targeting',
        'Engagement-based groups',
        'Custom segment creation',
        'Dynamic content delivery',
      ],
      color: 'magenta',
    },
    {
      icon: TrendingUp,
      title: 'Growth Consulting',
      description: 'Strategic guidance for scaling',
      features: [
        'Email marketing audits',
        'Growth strategy development',
        'Team training and workshops',
        'Tool selection and integration',
        'Best practice implementation',
      ],
      color: 'blue',
    },
  ];

  const glowClass = (color: string) => {
    switch (color) {
      case 'cyan': return 'neon-border-cyan hover:glow-cyan';
      case 'magenta': return 'neon-border-magenta hover:glow-magenta';
      case 'blue': return 'neon-border-cyan hover:glow-blue';
      default: return 'neon-border-cyan hover:glow-cyan';
    }
  };

  return (
    <div className="min-h-screen relative">
      <ParticleBackground />
      <Navigation />
      
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-20">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Email Marketing <span className="text-primary text-glow-cyan">Services</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Comprehensive solutions to transform your email marketing into a revenue-generating machine
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="pb-20">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className={`group p-8 bg-card/50 backdrop-blur-sm rounded-xl border ${glowClass(service.color)} transition-all duration-300 animate-fade-in`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  
                  <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-card/20">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <Mail className="w-16 h-16 text-primary mx-auto mb-6 animate-glow-pulse" />
              <h2 className="text-4xl font-bold mb-6">
                Ready to <span className="text-secondary text-glow-magenta">Transform</span> Your Email Marketing?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Let's discuss how we can help you achieve your email marketing goals
              </p>
              <Link to="/contact">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground glow-cyan"
                >
                  Get Started Today
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
