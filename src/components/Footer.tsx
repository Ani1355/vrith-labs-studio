import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Dribbble,
} from "lucide-react";
import { FooterBackgroundGradient } from "@/components/ui/hover-footer";
import { TextHoverEffect } from "@/components/ui/hover-footer";

const Footer = () => {
  const footerLinks = [
    {
      title: "About Us",
      links: [
        { label: "Company History", href: "#" },
        { label: "Meet the Team", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Case Studies", href: "#" },
      ],
    },
    {
      title: "Helpful Links",
      links: [
        { label: "FAQs", href: "#" },
        { label: "Support", href: "#" },
        { label: "Documentation", href: "#" },
      ],
    },
  ];

  const contactInfo = [
    {
      icon: <Mail size={18} className="text-stat-blue" />,
      text: "contact@vrithlabs.com",
      href: "mailto:contact@vrithlabs.com",
    },
    {
      icon: <Phone size={18} className="text-stat-blue" />,
      text: "+1 (555) 123-4567",
      href: "tel:+15551234567",
    },
    {
      icon: <MapPin size={18} className="text-stat-blue" />,
      text: "San Francisco, CA",
    },
  ];

  const socialLinks = [
    { icon: <Github size={20} />, label: "GitHub", href: "#" },
    { icon: <Twitter size={20} />, label: "Twitter", href: "#" },
    { icon: <Linkedin size={20} />, label: "LinkedIn", href: "#" },
    { icon: <Dribbble size={20} />, label: "Dribbble", href: "#" },
  ];

  return (
    <footer className="bg-card-dark relative h-fit rounded-3xl overflow-hidden m-8">
      <div className="max-w-7xl mx-auto p-14 z-40 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 lg:gap-16 pb-12">
          {/* Brand section */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-stat-blue rounded-lg flex items-center justify-center">
                <span className="text-white text-sm font-black">V</span>
              </div>
              <span className="text-card-dark-foreground text-3xl font-bold">Vrith Labs</span>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Building MVPs that move at startup speed. From idea to launch in 21 days.
            </p>
          </div>

          {/* Footer link sections */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-card-dark-foreground text-lg font-semibold mb-6">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label} className="relative">
                    <a
                      href={link.href}
                      className="hover:text-stat-blue transition-colors text-muted-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact section */}
          <div>
            <h4 className="text-card-dark-foreground text-lg font-semibold mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              {contactInfo.map((item, i) => (
                <li key={i} className="flex items-center space-x-3">
                  {item.icon}
                  {item.href ? (
                    <a
                      href={item.href}
                      className="hover:text-stat-blue transition-colors text-muted-foreground text-sm"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="hover:text-stat-blue transition-colors text-muted-foreground text-sm">
                      {item.text}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social icons - moved above the line */}
        <div className="flex justify-center md:justify-start space-x-6 text-muted-foreground py-8">
          {socialLinks.map(({ icon, label, href }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="hover:text-stat-blue transition-colors"
            >
              {icon}
            </a>
          ))}
        </div>

        <hr className="border-t border-muted my-8" />

        {/* Footer bottom */}
        <div className="flex justify-center md:justify-end items-center text-sm">
          {/* Copyright */}
          <p className="text-center md:text-right text-muted-foreground">
            &copy; {new Date().getFullYear()} Vrith Labs. All rights reserved.
          </p>
        </div>
      </div>

      {/* Text hover effect */}
      <div className="lg:flex hidden h-[30rem] -mt-52 -mb-36">
        <TextHoverEffect text="VRITH" className="z-50" />
      </div>

      <FooterBackgroundGradient />
    </footer>
  );
};

export default Footer;
