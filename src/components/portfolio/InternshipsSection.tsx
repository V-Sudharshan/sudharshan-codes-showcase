import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Building, Calendar, ExternalLink, Award, Shield } from "lucide-react";
import { Reveal } from "@/hooks/use-reveal";

const InternshipsSection = () => {
  const internships = [
    {
      title: "Python Developer Virtual Internship",
      company: "Virtual Internship Program",
      duration: "2024",
      description: "Completed comprehensive Python development virtual internship focusing on programming fundamentals, data structures, algorithms, and practical application development",
      type: "Python Development",
      icon: <Building className="h-5 w-5" />,
      color: "bg-green-500/10 text-green-600",
      certificateUrl: "https://drive.google.com/file/d/1hoiIKGRUzM2oVOKRBZSVfr34Q9x0nGeA/view?usp=sharing",
      skills: ["Python", "Data Structures", "Algorithms", "Problem Solving", "Software Development"]
    },
    {
      title: "EY GDS NextGen Internship",
      company: "Ernst & Young",
      duration: "2024",
      description: "MERN stack full-stack development internship with hands-on experience in modern web technologies",
      type: "Full-Stack Development",
      icon: <Building className="h-5 w-5" />,
      color: "bg-blue-500/10 text-blue-600",
      certificateUrl: "https://drive.google.com/file/d/1kBl0TD-oQM79M-T3eg903gsGVE_74mSz/view?usp=sharing",
      skills: ["React", "Node.js", "MongoDB", "Express", "JavaScript"]
    },
    {
      title: "Java Full Stack Developer Internship",
      company: "AICTE + Eduskills",
      duration: "2024",
      description: "Comprehensive Java development program covering Spring Boot framework and enterprise-level applications",
      type: "Backend Development",
      icon: <Building className="h-5 w-5" />,
      color: "bg-orange-500/10 text-orange-600",
      certificateUrl: "https://drive.google.com/file/d/1rOd0P0dS-G_XZhFtA3-PXhIJ5kSrqBhk/view?usp=sharing",
      skills: ["Java", "Spring Boot", "REST APIs", "Microservices", "SQL"]
    },
    {
      title: "Cybersecurity Internship",
      company: "Industry Program",
      duration: "2024",
      description: "Focused on cybersecurity fundamentals, threat analysis, and security best practices",
      type: "Security",
      icon: <Shield className="h-5 w-5" />,
      color: "bg-red-500/10 text-red-600",
      certificateUrl: "https://drive.google.com/file/d/1qaZ7AwLCt5ADyjZuRZLQtjiaetm7zUl7/view?usp=sharing",
      skills: ["Cybersecurity", "Threat Analysis", "Security Tools", "Risk Assessment"]
    },
    {
      title: "ServiceNow Virtual Internship Program",
      company: "ServiceNow x SmartBridge x AICTE",
      duration: "October 2025",
      description: "Comprehensive ServiceNow platform training covering Agentic AI, Administration Fundamentals, Flows, Automated Testing, Reports, and CSA exam preparation",
      type: "Platform Development",
      icon: <Building className="h-5 w-5" />,
      color: "bg-purple-500/10 text-purple-600",
      certificateUrl: "/certificates/servicenow-internship.pdf",
      skills: ["ServiceNow", "Agentic AI", "Administration", "Flows", "ATF", "Reports"]
    }
  ];

  const certifications = [
    {
      title: "ServiceNow Certified System Administrator (CSA)",
      organization: "ServiceNow",
      description: "System Administrator certification covering platform administration and configuration",
      icon: <Award className="h-5 w-5" />,
      color: "bg-green-500/10 text-green-600",
      certificateUrl: "https://drive.google.com/file/d/1kCcd9HKsoe999VnTUpg5OTJnhkSWf2Cu/view?usp=sharing",
      skills: ["ServiceNow", "System Administration", "Platform Configuration"]
    },
    {
      title: "ServiceNow Certified Application Developer (CAD)",
      organization: "ServiceNow",
      description: "Application Developer certification covering custom application development on ServiceNow platform",
      icon: <Award className="h-5 w-5" />,
      color: "bg-green-500/10 text-green-600", 
      certificateUrl: "https://drive.google.com/file/d/1jQ49wXA1Zj08GS7nxZL5HvEEV9uUmpQU/view?usp=sharing",
      skills: ["ServiceNow", "Application Development", "Custom Solutions", "Scripting"]
    }
  ];

  return (
    <section id="internships" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="px-4 py-2">
            Professional Experience
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Internships & Certifications
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hands-on experience through industry internships and professional certifications
          </p>
        </div>

        {/* Internships */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
            Professional Internships
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {internships.map((internship, index) => (
              <Card 
                key={index}
                className="bg-gradient-card border-border shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-[1.02] group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className={`p-3 rounded-lg ${internship.color} group-hover:scale-110 transition-transform`}>
                      {internship.icon}
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {internship.type}
                    </Badge>
                  </div>
                  
                  <div>
                    <CardTitle className="text-lg mb-2 text-foreground group-hover:text-primary transition-colors">
                      {internship.title}
                    </CardTitle>
                    <p className="text-sm text-primary font-medium mb-1">
                      {internship.company}
                    </p>
                    <div className="flex items-center text-xs text-muted-foreground mb-3">
                      <Calendar className="h-3 w-3 mr-1" />
                      {internship.duration}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {internship.description}
                    </p>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-foreground mb-3">
                      Skills Gained
                    </h4>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {internship.skills.map((skill, skillIndex) => (
                        <Badge 
                          key={skillIndex} 
                          variant="secondary" 
                          className="text-xs hover:bg-primary/10 hover:text-primary transition-colors"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full"
                    asChild
                  >
                    <a 
                      href={internship.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      View Certificate
                      <ExternalLink className="ml-2 h-3 w-3" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* ServiceNow Certifications */}
        <div>
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
            ServiceNow Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <Card 
                key={index}
                className="bg-gradient-card border-border shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-[1.02] group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className={`p-3 rounded-lg ${cert.color} group-hover:scale-110 transition-transform`}>
                      {cert.icon}
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      Certification
                    </Badge>
                  </div>
                  
                  <div>
                    <CardTitle className="text-lg mb-2 text-foreground group-hover:text-primary transition-colors">
                      {cert.title}
                    </CardTitle>
                    <p className="text-sm text-primary font-medium mb-3">
                      {cert.organization}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-foreground mb-3">
                      Key Skills
                    </h4>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {cert.skills.map((skill, skillIndex) => (
                        <Badge 
                          key={skillIndex} 
                          variant="secondary" 
                          className="text-xs hover:bg-primary/10 hover:text-primary transition-colors"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full"
                    asChild
                  >
                    <a 
                      href={cert.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      View Certificate
                      <ExternalLink className="ml-2 h-3 w-3" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternshipsSection;