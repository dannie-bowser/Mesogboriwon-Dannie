import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen relative">
      <ParticleBackground />
      <Navigation />
      
      <main className="relative z-10 flex items-center justify-center min-h-[calc(100vh-200px)]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            {/* 404 Number */}
            <div className="space-y-4">
              <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold text-secondary/20">
                404
              </h1>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-background">
                Page Under <span className="text-secondary text-glow-cyan">Construction</span>
              </h2>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl text-black/70 leading-relaxed">
              This page is being customized with beautiful images and content. 
              In the meantime, you can reach out using the contact form in the footer of any page or scroll to the contact section on the homepage.
            </p>

            {/* Placeholder for Image */}
            <div className="my-12">
              <div className="w-full h-64 sm:h-80 md:h-96 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl border-2 border-dashed border-primary/30 flex items-center justify-center">
                <p className="text-black/50 text-center px-4">
                  📸 Custom image coming soon
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Link to="/">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                  <ArrowLeft className="mr-2 w-5 h-5" />
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
