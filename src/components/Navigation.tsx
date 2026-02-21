import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.png';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'my-story', path: '/my-story' },
  { name: 'Contact', path: '#contact', isAnchor: true },
];


  const isActivePath = (path: string) => location.pathname === path;

  return (
   <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/40 backdrop-blur-xl border-b border-white/20 shadow-[0_8px_32px_rgba(31,38,135,0.1)]'
          : 'bg-transparent'
      }`}
   >

      <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center">
              <img
                src={logo}
                alt="Logo"
                className="h-10 w-auto object-contain"
              />
            </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
  link.isAnchor ? (
    <a
      key={link.name}
      href="/#contact"
      onClick={(e) => {
        // If already on homepage, smooth scroll instead of reloading
        if (location.pathname === "/") {
          e.preventDefault();
          document.getElementById("contact")?.scrollIntoView({
            behavior: "smooth",
          });
        }
      }}
      className="relative text-sm font-medium transition-colors hover:text-primary text-background/70"
    >
      Contact
    </a>
  ) : (
    <Link
      key={link.path}
      to={link.path}
      className={`relative text-sm font-medium transition-colors hover:text-primary ${
        isActivePath(link.path)
          ? "text-primary"
          : "text-background/70"
      }`}
    >
      {link.name}
      {isActivePath(link.path) && (
        <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary glow-cyan" />
      )}
    </Link>
  )
)}

          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-background"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-card border-b border-border">
          <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-sm font-medium montserrat transition-colors hover:text-primary ${
                  isActivePath(link.path)
                    ? 'text-primary'
                    : 'text-muted-foreground'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
