import { Send, Facebook, Twitter, Linkedin, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6 max-w-5xl">

        {/* 2-COLUMN LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">

          {/* LEFT — TITLE */}
          <div className="animate-fade-in space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Let's Get Things <br />
              <span className="text-secondary text-glow-magenta">Done</span>
            </h2>
          </div>

          {/* RIGHT — DESCRIPTION + BUTTON + SOCIAL ICONS */}
          <div className="animate-fade-in space-y-10">

            <p className="text-base md:text-lg text-white leading-relaxed">
               Whether you need a complete email marketing overhaul or just want to optimize your current campaigns, I'm here to help.
            </p>

            {/* Button + Social Icons Row */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">

              {/* Message Me Button & Dialog */}
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    size="lg"
                    className="flex items-center gap-3 bg-primary hover:bg-primary/90 
                    text-primary-foreground glow-cyan text-lg py-6 px-10 rounded-2xl"
                  >
                    <Send className="w-6 h-6" />
                    Message Me
                  </Button>
                </DialogTrigger>

                <DialogContent className="bg-card/40 backdrop-blur-xl 
                  border border-primary/30 shadow-xl rounded-2xl max-w-lg">

                  <DialogHeader>
                    <DialogTitle className="text-3xl font-bold text-center">
                      Send Me a Message
                    </DialogTitle>
                  </DialogHeader>

                  <form onSubmit={handleSubmit} className="space-y-4 mt-6">
                    <Input
                      placeholder="Your Name"
                      className="bg-card/60 border-primary/30 focus:border-primary focus:glow-cyan"
                    />

                    <Input
                      type="email"
                      placeholder="Your Email"
                      className="bg-card/60 border-primary/30 focus:border-primary focus:glow-cyan"
                    />

                    <Input
                      placeholder="Subject"
                      className="bg-card/60 border-primary/30 focus:border-primary focus:glow-cyan"
                    />

                    <Textarea
                      placeholder="Your Message"
                      rows={5}
                      className="bg-card/60 border-primary/30 focus:border-primary focus:glow-cyan resize-none"
                    />

                    <Button
                      type="submit"
                      className="w-full bg-secondary hover:bg-primary/90 text-primary-foreground glow-cyan rounded-xl"
                    >
                      Send Message
                    </Button>
                  </form>

                </DialogContent>
              </Dialog>

              {/* SOCIAL ICONS */}
               <div className="flex gap-3 sm:gap-4 mt-0 sm:mt-4 text-background text-lg sm:text-xl">
                <a href="https://web.facebook.com/mesogboriwon.daniel" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-purple-400 transition text-secondary">
                  <Facebook className="w-5 sm:w-6 h-5 sm:h-6 " />
                </a>
                <a href="https://x.com/kae_dahn" aria-label="X (Twitter)" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition text-secondary">
                  <Twitter className="w-5 sm:w-6 h-5 sm:h-6" />
                </a>
                <a href="https://www.linkedin.com/in/mesogboriwon-daniel" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-purple-400 transition text-secondary">
                  <Linkedin className="w-5 sm:w-6 h-5 sm:h-6" />
                </a>
                <a href="https://wa.me/2348145139582" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:text-purple-400 transition text-secondary">
                  <MessageCircle className="w-5 sm:w-6 h-5 sm:h-6" />
                </a>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
