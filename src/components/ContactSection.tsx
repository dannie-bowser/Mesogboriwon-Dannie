import { Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Let's Work <span className="text-secondary text-glow-magenta">Together</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Ready to elevate your email marketing? Get in touch and let's create something amazing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="space-y-8 animate-fade-in">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder="Your Name"
                    className="bg-card/50 border-primary/30 focus:border-primary focus:glow-cyan"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    className="bg-card/50 border-primary/30 focus:border-primary focus:glow-cyan"
                  />
                </div>
                <div>
                  <Input
                    placeholder="Subject"
                    className="bg-card/50 border-primary/30 focus:border-primary focus:glow-cyan"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    rows={6}
                    className="bg-card/50 border-primary/30 focus:border-primary focus:glow-cyan resize-none"
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
          </div>

          <div className="space-y-8 animate-fade-in" style={{ animationDelay: '100ms' }}>
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-card/50 rounded-lg border neon-border-cyan">
                  <Mail className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <a
                      href="mailto:hello@emailexpert.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      hello@emailexpert.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-card/50 rounded-lg border neon-border-cyan">
                  <Phone className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <a
                      href="tel:+1234567890"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-card/50 rounded-lg border neon-border-cyan">
                  <MapPin className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Location</h4>
                    <p className="text-muted-foreground">
                      San Francisco, CA
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-card/50 rounded-lg border neon-border-magenta">
              <h4 className="font-semibold mb-4">Business Hours</h4>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
