import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink,
  Code,
  FileText,
  ChefHat
} from "lucide-react";

const HeroSection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
    },
    {
      icon: <ChefHat className="h-4 w-4" />,
      label: "CodeChef",
      href: "https://www.codechef.com/users/sudharshan2004",
      color: "bg-amber-600 hover:bg-amber-700"
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

  if (!mounted) {
    return (
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 to-background/70" />
      </section>
    );
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center animate-gradient relative overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/90 to-background/70" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-glow/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-6 sm:space-y-8 animate-fade-in">
          {/* Profile Photo */}
          <div className="flex justify-center mb-12 sm:mb-20 mt-8 sm:mt-16">
            <div className="relative">
              <img 
                src="/lovable-uploads/fcc05502-5202-40b1-b408-8cb36f3e7343.png"
                alt="Vontigari Sudharshan"
                className="w-32 h-32 sm:w-48 sm:h-48 rounded-full border-4 border-primary/20 shadow-elegant hover:shadow-glow transition-all duration-300 object-cover object-top scale-125 sm:scale-150"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-0 hover:opacity-10 transition-opacity duration-300" />
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-4 sm:space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="block text-foreground">Vontigari</span>
              <span className="block bg-gradient-primary bg-clip-text text-transparent">
                Sudharshan
              </span>
            </h1>

            <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-medium">
                Full-Stack Developer & AI Enthusiast
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-4 space-y-2 sm:space-y-0 text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <MapPin className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="text-xs sm:text-sm">Hyderabad, India</span>
                </div>
                <div className="hidden sm:block w-1 h-1 bg-muted-foreground rounded-full" />
                <div className="flex items-center space-x-1">
                  <span className="text-xs sm:text-sm">B.Tech CSE • CGPA 9.02</span>
                </div>
              </div>

              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto px-4 sm:px-0">
                Final-year Computer Science student passionate about building innovative solutions 
                with modern web technologies and AI. Experience with MERN stack, Python, and machine learning.
              </p>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-6 space-y-2 sm:space-y-0 text-xs sm:text-sm text-muted-foreground">
              <a 
                href="mailto:22eg105k35@anurag.edu.in"
                className="flex items-center space-x-1 hover:text-primary transition-colors"
              >
                <Mail className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="truncate max-w-[200px] sm:max-w-none">22eg105k35@anurag.edu.in</span>
              </a>
              <a 
                href="tel:+918179643482"
                className="flex items-center space-x-1 hover:text-primary transition-colors"
              >
                <Phone className="h-3 w-3 sm:h-4 sm:w-4" />
                <span>+91 8179643482</span>
              </a>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-6 sm:pt-8 px-4 sm:px-0">
            <Button 
              size="default" 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 w-full sm:w-auto"
              onClick={scrollToContact}
            >
              Get In Touch
              <ExternalLink className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
            </Button>
            <Button 
              size="default"
              onClick={scrollToProjects}
              className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white border-0 hover:shadow-glow transition-all duration-300 w-full sm:w-auto"
            >
              View Projects
            </Button>
            <Button 
              size="default"
              asChild
              className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white border-0 hover:shadow-glow transition-all duration-300 w-full sm:w-auto"
            >
              <a 
                href="https://drive.google.com/file/d/1IeHYItGCxT_1xK5gu9kBMcPdLoAm-dhM/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                View Resume
                <FileText className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center space-x-3 sm:space-x-4 pt-6 sm:pt-8">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2.5 sm:p-3 rounded-full text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:-translate-y-1 ${link.color}`}
                title={link.label}
                style={{ animationDelay: `${index * 0.1}s` }}
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