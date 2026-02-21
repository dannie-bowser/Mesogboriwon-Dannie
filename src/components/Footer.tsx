import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative border-t border-secondary bg-background">
      <div className="container mx-auto px-6 py-6 max-w-4xl">

        {/* Contact + Right CTA Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 text-foreground">

          {/* Left Contact Section */}
          <div className="flex flex-col gap-4">
            {/* Email */}
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-muted-foreground" />
              <a
                href="mailto:Mesogboriwond@gmail.com"
                className="hover:text-secondary transition-colors"
              >
                Mesogboriwond@gmail.com
              </a>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-muted-foreground" />
              <a
                href="tel:+2348145139582"
                className="hover:text-secondary transition-colors"
              >
                +234-814-513-9582
              </a>
            </div>

            {/* Location */}
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-muted-foreground" />
              <p className="text-foreground/80">Lekki, NIG</p>
            </div>
          </div>

          {/* Right CTA Text */}
          <div className="text-right w-full md:w-auto">
            <p className="text-2xl font-bold text-secondary">
              Sales Easy.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border mt-10 pt-8 text-right text-muted-foreground text-sm">
          <p>mesogboriwondaniel.co © 2026</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
