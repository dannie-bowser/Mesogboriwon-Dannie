import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Tools from '@/components/Tools';
import ServicesPreview from '@/components/ServicesPreview';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <ParticleBackground />
      <Navigation />
      <main className="relative z-10">
        <Hero />
        <About />
        <Tools />
        <ServicesPreview />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
