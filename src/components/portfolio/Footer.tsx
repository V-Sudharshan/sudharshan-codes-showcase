import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Code, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github className="h-4 w-4" />,
      href: "https://github.com/V-Sudharshan",
      label: "GitHub"
    },
    {
      icon: <Linkedin className="h-4 w-4" />,
      href: "https://linkedin.com/in/vontigari-sudharshan-85782a287",
      label: "LinkedIn"
    },
    {
      icon: <Code className="h-4 w-4" />,
      href: "https://leetcode.com/u/vontigarisudharshan",
      label: "LeetCode"
    },
    {
      icon: <Mail className="h-4 w-4" />,
      href: "mailto:22eg105k35@anurag.edu.in",
      label: "Email"
    }
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.slice(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                VS
              </span>
              <span className="text-lg font-semibold text-foreground">
                Vontigari Sudharshan
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Full-Stack Developer & AI Enthusiast passionate about creating 
              innovative solutions with modern technologies. Currently pursuing 
              B.Tech CSE with a CGPA of 9.01.
            </p>
            <div className="flex items-center space-x-2">
              <Badge variant="secondary" className="text-xs">
                <div className="w-2 h-2 bg-success rounded-full mr-1 animate-pulse" />
                Available for Opportunities
              </Badge>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              Quick Links
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  className="text-muted-foreground hover:text-primary transition-colors text-left text-sm"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Connect Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              Let's Connect
            </h3>
            <p className="text-muted-foreground text-sm">
              Feel free to reach out for collaborations, opportunities, or just to say hello!
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg transition-all duration-300 hover:scale-110"
                  title={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>© {currentYear} Vontigari Sudharshan. Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>and React</span>
            </div>
            
            <div className="flex items-center space-x-4 text-xs text-muted-foreground">
              <span>Built with React + TypeScript</span>
              <div className="w-1 h-1 bg-muted-foreground rounded-full" />
              <span>Styled with Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;