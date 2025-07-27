import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink,
  Code
} from "lucide-react";

const HeroSection = () => {
  const socialLinks = [
    {
      icon: <Mail className="h-4 w-4" />,
      label: "Email",
      href: "mailto:22eg105k35@anurag.edu.in",
      color: "bg-blue-500 hover:bg-blue-600"
    },
    {
      icon: <Github className="h-4 w-4" />,
      label: "GitHub", 
      href: "https://github.com/V-Sudharshan",
      color: "bg-slate-700 hover:bg-slate-800"
    },
    {
      icon: <Linkedin className="h-4 w-4" />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/vontigari-sudharshan-85782a287",
      color: "bg-blue-600 hover:bg-blue-700"
    },
    {
      icon: <Code className="h-4 w-4" />,
      label: "LeetCode",
      href: "https://leetcode.com/u/vontigarisudharshan",
      color: "bg-orange-500 hover:bg-orange-600"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/90 to-background/70" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-glow/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8 animate-fade-in">
          {/* Status Badge */}
          <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
            <div className="w-2 h-2 bg-success rounded-full mr-2 animate-pulse" />
            Available for Opportunities
          </Badge>

          {/* Main Content */}
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="block text-foreground">Vontigari</span>
              <span className="block bg-gradient-primary bg-clip-text text-transparent">
                Sudharshan
              </span>
            </h1>

            <div className="max-w-3xl mx-auto space-y-4">
              <p className="text-xl sm:text-2xl text-muted-foreground font-medium">
                Full-Stack Developer & AI Enthusiast
              </p>
              
              <div className="flex items-center justify-center space-x-4 text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">Hyderabad, India</span>
                </div>
                <div className="w-1 h-1 bg-muted-foreground rounded-full" />
                <div className="flex items-center space-x-1">
                  <span className="text-sm">B.Tech CSE • CGPA 9.01</span>
                </div>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Final-year Computer Science student passionate about building innovative solutions 
                with modern web technologies and AI. Experience with MERN stack, Python, and machine learning.
              </p>
            </div>

            {/* Contact Info */}
            <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
              <a 
                href="mailto:22eg105k35@anurag.edu.in"
                className="flex items-center space-x-1 hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>22eg105k35@anurag.edu.in</span>
              </a>
              <a 
                href="tel:+918179643482"
                className="flex items-center space-x-1 hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>+91 8179643482</span>
              </a>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
              onClick={scrollToContact}
            >
              Get In Touch
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={scrollToProjects}
              className="border-primary/20 hover:bg-primary/5"
            >
              View Projects
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center space-x-4 pt-8">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full text-white transition-all duration-300 hover:scale-110 hover:shadow-lg ${link.color}`}
                title={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;