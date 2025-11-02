import { Link } from 'react-router-dom';
import { Mail, Linkedin, Twitter, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Navigation: [
      { name: 'Home', path: '/' },
      { name: 'Services', path: '/services' },
      { name: 'Portfolio', path: '/portfolio' },
      { name: 'Blog', path: '/blog' },
    ],
    Services: [
      { name: 'Email Strategy', path: '/services' },
      { name: 'Automation', path: '/services' },
      { name: 'Analytics', path: '/services' },
      { name: 'Landing Pages', path: '/services' },
    ],
    Connect: [
      { name: 'Contact', path: '/contact' },
      { name: 'LinkedIn', path: '#' },
      { name: 'Twitter', path: '#' },
      { name: 'Email', path: 'mailto:hello@example.com' },
    ],
  };

  return (
    <footer className="relative border-t border-border bg-card/20 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link to="/" className="text-2xl font-bold mb-4 inline-block">
              <span className="text-foreground">Email</span>
              <span className="text-primary text-glow-cyan">Pro</span>
            </Link>
            <p className="text-muted-foreground mb-4">
              Driving business growth through personalized, data-driven email campaigns.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="mailto:hello@example.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-8 text-center text-muted-foreground">
          <p>© {currentYear} EmailPro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
