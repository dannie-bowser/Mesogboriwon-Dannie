import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';
import { ArrowRight } from 'lucide-react';
import heroprofile3 from '@/assets/hero-profile3.png';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const MyStory = () => {
  return (
    <div className="min-h-screen relative text-background">
      <ParticleBackground />
      <Navigation />

      <main className="relative z-10">
        {/* =========================
            MY STORY HERO SECTION
        ========================== */}
        <section className="pt-32 pb-28">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">

              {/* LEFT — IMAGE WITH GRADIENT OVERLAY */}
            
                <div className="relative">
                  <img
                    src={heroprofile3}
                    alt="Mesogboriwon Daniel"
                    className="w-full h-full object-cover"
                  />

                </div>
              

              {/* RIGHT — STORY CONTENT */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.6 }}
                className="space-y-8"
              >
                <h2 className="text-5xl md:text-6xl font-black leading-tight text-background drop-shadow-sm">
                  From Passion
                  <br />
                  <span className="text-secondary">To Purpose</span>
                </h2>

                <p className="text-lg leading-relaxed">
                  My journey is a reflection of the vibrant energy and diverse landscapes of Nigeria, a story that began on the bustling and unpredictable streets of Ikotun, Lagos. Growing up there at twenty one years old, I learned early on that life is a constant flow of movement and color, a perspective that stayed with me as I moved through my secondary education at Federal Government College, Odogbolu. From the grit of Lagos to the discipline of my school days in Ogun State, I have always been someone who looks a little closer at the world, trying to find the beauty and the hidden patterns in everything around me.
                </p>

                <p className="text-lg leading-relaxed">
                  When I moved to Edo State to study at the University of Benin, my lifelong pull toward art finally found its voice. Those years were defined by late nights and a deep immersion into creative expression as I produced a significant body of artwork that became my way of making sense of the world. But as much as I love the stroke of a brush or the curve of a line, I found myself equally captivated by the intricate and cutting edge world of technology. I realized that my heart does not just beat for one or the other because I live at the intersection where a creative soul meets a technical mind, believing that the most sophisticated tech still needs a human heartbeat to truly matter.
                </p>

                <p className="text-lg leading-relaxed">
                  This realization is exactly what drew me into the world of email marketing. To me, a crowded inbox is not just a list of names; it is a space where I can practice the art of connection. I ventured into this field because it allows me to express myself while helping brands move past the cold and transactional nature of business to reach the actual person on the other side of the screen. I love the challenge of using my artistic eye to craft messages that feel personal and genuine, turning digital communication into something that actually resonates and builds a real relationship.
                </p>

                <p className="text-lg leading-relaxed">
                  I still call Edo State my home today, and I find that I am always seeking, searching for the next spark of inspiration, the next technical hurdle to clear, or the next way to blend my love for creativity with modern innovation. I do not believe in standing still. Whether I am diving into the latest software or conceptualizing a new piece of art, my goal is to keep pushing the boundaries of what it means to be a creator in a digital age, ensuring that everything I build remains as soulful as it is functional.
                </p>

                <div className="pt-2">
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 text-primary font-semibold text-lg hover:gap-4 transition-all"
                  >
                    Work With Me
                    <ArrowRight className="w-6 h-6" />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MyStory;
