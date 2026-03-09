import { MapPin, Phone, Mail } from "lucide-react";

const FooterSection = () => (
  <footer id="contact" className="section-padding border-t border-border">
    <div className="container mx-auto">
      <div className="grid md:grid-cols-3 gap-12 mb-12">
        <div>
          <h3 className="font-display text-3xl tracking-wider text-gradient mb-4">IRONFORGE</h3>
          <p className="font-body text-sm text-muted-foreground leading-relaxed">
            Building strength, confidence, and community since 2015. Your transformation starts here.
          </p>
        </div>
        <div>
          <h4 className="font-display text-xl tracking-wider text-foreground mb-4">QUICK LINKS</h4>
          <div className="space-y-2">
            {["Home", "Facilities", "Services", "Pricing"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="block font-body text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-display text-xl tracking-wider text-foreground mb-4">CONTACT</h4>
          <div className="space-y-3">
            <p className="flex items-center gap-3 font-body text-sm text-muted-foreground">
              <MapPin size={16} className="text-primary shrink-0" /> 123 Iron Street, Fitness City
            </p>
            <p className="flex items-center gap-3 font-body text-sm text-muted-foreground">
              <Phone size={16} className="text-primary shrink-0" /> (555) 123-4567
            </p>
            <p className="flex items-center gap-3 font-body text-sm text-muted-foreground">
              <Mail size={16} className="text-primary shrink-0" /> info@ironforge.com
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-border pt-6 text-center">
        <p className="font-body text-xs text-muted-foreground">
          © 2026 IronForge Gym. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default FooterSection;
