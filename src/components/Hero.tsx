import { Button } from '@/components/ui/button';
import { ArrowRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroProfile from '@/assets/hero-profile.jpg';
const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 border neon-border-cyan backdrop-blur-sm">
              <Mail className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Available for Projects</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Hi, I'm{' '}
              <span className="text-primary text-glow-cyan">Mesogboriwon Daniel</span>
              <br />
              Email Marketing Specialist
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
              Driving business growth through personalized, data-driven email campaigns.
              Transform your email marketing into a revenue-generating machine.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground glow-cyan group">
                  Contact Me
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button size="lg" variant="outline" className="neon-border-magenta hover:glow-magenta">
                  View Portfolio
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-fade-in-right">
            <div className="relative rounded-2xl overflow-hidden neon-border-cyan glow-cyan">
              <img src={heroProfile} alt="Professional Email Marketing Specialist" className="w-full h-auto object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-card/90 backdrop-blur-sm rounded-xl p-6 neon-border-cyan glow-cyan animate-float">
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Campaigns Launched</div>
            </div>

            <div className="absolute -top-6 -right-6 bg-card/90 backdrop-blur-sm rounded-xl p-6 neon-border-magenta glow-magenta animate-float" style={{
            animationDelay: '1s'
          }}>
              <div className="text-3xl font-bold text-secondary">95%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;