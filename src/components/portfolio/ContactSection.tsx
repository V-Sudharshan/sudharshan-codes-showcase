import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Code,
  Send,
  ExternalLink,
  ChefHat
} from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "22eg105k35@anurag.edu.in",
      href: "mailto:22eg105k35@anurag.edu.in",
      color: "bg-blue-500/10 text-blue-600"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+91 8179643482",
      href: "tel:+918179643482",
      color: "bg-green-500/10 text-green-600"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "Hyderabad, Telangana, India",
      href: "#",
      color: "bg-purple-500/10 text-purple-600"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      href: "https://github.com/V-Sudharshan",
      color: "bg-slate-700 hover:bg-slate-800"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/vontigari-sudharshan-85782a287",
      color: "bg-blue-600 hover:bg-blue-700"
    },
    {
      icon: <Code className="h-5 w-5" />,
      label: "LeetCode",
      href: "https://leetcode.com/u/vontigarisudharshan",
      color: "bg-orange-500 hover:bg-orange-600"
    },
    {
      icon: <ChefHat className="h-5 w-5" />,
      label: "CodeChef",
      href: "https://www.codechef.com/users/sudharshan2004",
      color: "bg-amber-600 hover:bg-amber-700"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      // Create mailto link with form data
      const subject = encodeURIComponent(formData.subject || "Portfolio Contact");
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      const mailtoLink = `mailto:22eg105k35@anurag.edu.in?subject=${subject}&body=${body}`;
      
      window.location.href = mailtoLink;

      toast({
        title: "Message Prepared!",
        description: "Your default email client will open with the message ready to send.",
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="px-4 py-2">
            Contact
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Let's Work Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-in-left">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Get In Touch
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Whether you're looking for a developer, have a question about my projects, 
                or just want to connect, I'd love to hear from you. Let's create something amazing together!
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="bg-card border-border shadow-card hover:shadow-elegant transition-all duration-300">
                  <CardContent className="p-4">
                    <a 
                      href={info.href}
                      className="flex items-center space-x-4 group"
                      {...(info.href.startsWith('http') && { target: "_blank", rel: "noopener noreferrer" })}
                    >
                      <div className={`p-3 rounded-lg ${info.color} group-hover:scale-110 transition-transform`}>
                        {info.icon}
                      </div>
                      <div>
                        <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                          {info.label}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-medium text-foreground mb-4">
                Connect With Me
              </h4>
              <div className="flex space-x-4">
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

            {/* Quick Facts */}
            <div className="bg-card rounded-lg border border-border p-6 shadow-card">
              <h4 className="text-lg font-medium text-foreground mb-4">
                Quick Facts
              </h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Response Time</span>
                  <span className="text-foreground font-medium">Within 24 hours</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Location</span>
                  <span className="text-foreground font-medium">Hyderabad, India</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Availability</span>
                  <Badge variant="default" className="text-xs">Open to Opportunities</Badge>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-card border-border shadow-card animate-slide-in-right">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">
                Send a Message
              </CardTitle>
              <p className="text-muted-foreground">
                Fill out the form below and I'll get back to you as soon as possible
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      className="bg-background border-border"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      className="bg-background border-border"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?"
                    className="bg-background border-border"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project, question, or just say hello!"
                    className="bg-background border-border resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
                >
                  {isSubmitting ? (
                    "Preparing Message..."
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;