import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';
import { Mail, Linkedin, Twitter, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
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
                Let's <span className="text-primary text-glow-cyan">Connect</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Ready to transform your email marketing? Get in touch and let's discuss your goals.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="pb-20">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <div className="animate-fade-in-left">
                <form onSubmit={handleSubmit} className="space-y-6 p-8 bg-card/50 backdrop-blur-sm rounded-xl border neon-border-cyan">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      required
                      className="bg-background/50 border-border focus:neon-border-cyan"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                      className="bg-background/50 border-border focus:neon-border-cyan"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      placeholder="Project Inquiry"
                      required
                      className="bg-background/50 border-border focus:neon-border-cyan"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project..."
                      rows={6}
                      required
                      className="bg-background/50 border-border focus:neon-border-cyan resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground glow-cyan"
                  >
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-8 animate-fade-in-right">
                <div className="p-8 bg-card/50 backdrop-blur-sm rounded-xl border neon-border-magenta">
                  <MessageSquare className="w-12 h-12 text-secondary mb-4" />
                  <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
                  <p className="text-muted-foreground mb-6">
                    Whether you need a complete email marketing overhaul or just want to optimize your current campaigns, I'm here to help.
                  </p>
                  <div className="space-y-4">
                    <div>
                      <div className="font-medium mb-1">Email</div>
                      <a href="mailto:hello@example.com" className="text-primary hover:text-primary/80 transition-colors">
                        hello@example.com
                      </a>
                    </div>
                    <div>
                      <div className="font-medium mb-1">Response Time</div>
                      <p className="text-muted-foreground">Within 24 hours</p>
                    </div>
                  </div>
                </div>

                <div className="p-8 bg-card/50 backdrop-blur-sm rounded-xl border neon-border-cyan">
                  <h3 className="text-2xl font-semibold mb-4">Connect on Social</h3>
                  <div className="space-y-4">
                    <a
                      href="#"
                      className="flex items-center gap-3 p-3 rounded-lg bg-background/50 hover:bg-background transition-colors group"
                    >
                      <Linkedin className="w-5 h-5 text-primary" />
                      <span className="group-hover:text-primary transition-colors">LinkedIn</span>
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-3 p-3 rounded-lg bg-background/50 hover:bg-background transition-colors group"
                    >
                      <Twitter className="w-5 h-5 text-primary" />
                      <span className="group-hover:text-primary transition-colors">Twitter</span>
                    </a>
                    <a
                      href="mailto:hello@example.com"
                      className="flex items-center gap-3 p-3 rounded-lg bg-background/50 hover:bg-background transition-colors group"
                    >
                      <Mail className="w-5 h-5 text-primary" />
                      <span className="group-hover:text-primary transition-colors">Email</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
