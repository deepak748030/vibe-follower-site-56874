import { Heart, Mail } from "lucide-react";

const Footer = () => {
  const links = [
    { label: "Home", href: "#" },
    { label: "Niva Follower", href: "#" },
    { label: "Jet Follower", href: "#" },
    { label: "TikFollowers", href: "#" },
    { label: "How it works", href: "#how-it-works" },
    { label: "How to use", href: "#how-to-use" },
    { label: "Contact us", href: "#contact" },
  ];

  return (
    <footer id="contact" className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <a href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-2xl gradient-primary flex items-center justify-center shadow-glow">
                <Heart className="w-6 h-6 text-white fill-current" />
              </div>
              <span className="text-2xl font-bold text-gradient">Grow Social Life</span>
            </a>
            <p className="text-muted-foreground mb-4">
              Upgrade your Instagram account with Top Follow. Get real followers, likes, and comments instantly.
            </p>
            <a
              href="mailto:niva.application@gmail.com"
              className="flex items-center gap-2 text-primary hover:text-accent transition-colors"
            >
              <Mail className="w-5 h-5" />
              niva.application@gmail.com
            </a>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-foreground">Links</h3>
            <ul className="space-y-3">
              {links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Apps */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-foreground">Our Apps</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li>Top Follow</li>
              <li>Niva Follower</li>
              <li>Jet Follower</li>
              <li>TikFollowers</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © Copyrights 2024. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-destructive fill-current" />
              <span>by Top Follow Team</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
