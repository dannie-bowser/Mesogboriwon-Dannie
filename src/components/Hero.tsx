import { Button } from "@/components/ui/button";
import { ArrowRight, Facebook, Twitter, Linkedin, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import heroProfile2 from "@/assets/hero-profile2.png";

const Hero = () => {
  const handleContactScroll = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section className="relative flex items-center justify-center min-h-screen pt-16 sm:pt-20 md:pt-24 lg:pt-20 pb-12 sm:pb-16 md:pb-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center relative">

          {/* LEFT: IMAGE + OVERLAY TEXT */}
          <div className="relative flex justify-center order-1 lg:order-1">
            <img
              src={heroProfile2}
              alt="Professional Email Marketing Specialist"
              className="w-full max-w-[280px] sm:max-w-[360px] md:max-w-[420px] lg:max-w-[480px] object-cover rounded-lg sm:rounded-xl drop-shadow-2xl"
            />
            {/* Overlay Name + Socials */}
            <div className="absolute top-1/4 left-3 sm:left-4 md:left-6 lg:left-8">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold montserrat leading-tight text-primary drop-shadow-[0_4px_6px_rgba(0,0,0,0.1)] break-words">
                Mesogboriwon <br /> Daniel.
              </h1>

              <div className="flex gap-3 sm:gap-4 mt-3 sm:mt-4 text-secondary">
                <a href="https://web.facebook.com/mesogboriwon.daniel" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-purple-400 transition hover:scale-110 duration-200">
                  <Facebook className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
                <a href="https://x.com/kae_dahn" aria-label="X (Twitter)" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition hover:scale-110 duration-200">
                  <Twitter className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
                <a href="https://www.linkedin.com/in/mesogboriwon-daniel" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-purple-400 transition hover:scale-110 duration-200">
                  <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
                <a href="https://wa.me/2348145139582" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:text-purple-400 transition hover:scale-110 duration-200">
                  <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="space-y-4 sm:space-y-6 animate-fade-in-right text-left lg:text-left order-2 lg:order-2 w-full">
            <p className="uppercase text-xs sm:text-sm text-black/40 font-bold">— Introduction</p>

            <h3 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold montserrat text-background leading-snug break-words">
              Email Marketing Specialist
            </h3>

            <p className="text-sm sm:text-base md:text-lg lg:text-lg text-black/70 leading-relaxed break-words">
              Driving business growth through personalized, data-driven email campaigns. Transform your email marketing into a revenue-generating machine.
            </p>

            {/* Stats */}
            <div className="flex gap-6 sm:gap-8 md:gap-12 py-2 mt-2 sm:mt-4 justify-start lg:justify-start flex-wrap">
              <div>
                <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-secondary montserrat">
                  14+
                </p>
                <p className="text-xs sm:text-sm text-black/60 font-medium -mt-1 leading-tight">
                  Years of <br /> Experience.
                </p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-secondary montserrat">
                  187+
                </p>
                <p className="text-xs sm:text-sm text-black/60 font-medium -mt-1 leading-tight">
                  Satisfied <br /> Clients.
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-2 sm:gap-4 flex-wrap py-2 justify-start lg:justify-start">
              <button onClick={handleContactScroll} className="shrink-0">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-primary-foreground whitespace-nowrap text-xs sm:text-sm md:text-base">
                  Contact Me
                  <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform"/>
                </Button>
              </button>

              <Link to="/my-story" className="shrink-0">
                <Button
                  size="lg"
                  variant="outline"
                  className="neon-border-magenta hover:glow-magenta whitespace-nowrap text-xs sm:text-sm md:text-base"
                >
                  My Story
                </Button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
