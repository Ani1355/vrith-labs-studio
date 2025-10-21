import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    Product: ["Features", "Pricing", "Case Studies", "FAQ"],
    Company: ["About", "Blog", "Careers", "Contact"],
    Resources: ["Documentation", "Guides", "Support", "Community"],
    Legal: ["Privacy", "Terms", "Security", "Cookies"],
  };

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
  ];

  return (
    <footer className="relative bg-card-dark text-card-dark-foreground py-20 px-6 overflow-hidden">
      {/* Large Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <div className="text-[12rem] md:text-[20rem] lg:text-[28rem] font-black opacity-[0.02] select-none whitespace-nowrap">
          VRITH
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 text-xl font-bold mb-4">
              <div className="w-8 h-8 bg-card-dark-foreground rounded-lg flex items-center justify-center">
                <span className="text-card-dark text-sm font-black">V</span>
              </div>
              Vrith Labs
            </div>
            <p className="text-card-dark-foreground/70 mb-6 max-w-xs">
              Building MVPs that move at startup speed. From idea to launch in 21 days.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-card-dark-foreground/10 flex items-center justify-center hover:bg-card-dark-foreground/20 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold mb-4">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-card-dark-foreground/70 hover:text-card-dark-foreground transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-card-dark-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-card-dark-foreground/70">
              © 2024 Vrith Labs. All rights reserved.
            </div>
            <div className="text-sm text-card-dark-foreground/70">
              contact@vrithlabs.com
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
