import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Database, Brain, DollarSign } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Reveal } from "@/hooks/use-reveal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ProjectsSection = () => {
  const isMobile = useIsMobile();
  const projects = [
    {
      title: "Personal Finance Manager",
      description: "A comprehensive MERN stack application for managing personal finances with transaction tracking, interactive charts, and secure authentication.",
      techStack: ["React", "Node.js", "MongoDB", "Express", "Ant Design"],
      features: [
        "Transaction tracking with categories",
        "Advanced filtering and search",
        "CRUD operations for financial data",
        "Interactive charts and analytics",
        "JWT-based authentication"
      ],
      github: "https://github.com/V-Sudharshan/Personal-Finance-Manager",
      icon: <DollarSign className="h-6 w-6" />,
      color: "bg-success/10 text-success"
    },
    {
      title: "Blood Bank Management System",
      description: "A web-based system for managing blood bank operations including donor records, hospital requests, and blood inventory management.",
      techStack: ["Java", "HTML", "CSS", "JavaScript", "MySQL"],
      features: [
        "Donor registration and management",
        "Hospital request processing",
        "Blood inventory tracking",
        "Real-time availability updates",
        "Admin dashboard"
      ],
      github: "https://github.com/V-Sudharshan/Blood-Bank-Management",
      icon: <Database className="h-6 w-6" />,
      color: "bg-destructive/10 text-destructive"
    },
    {
      title: "AgriBot AI Assistant",
      description: "An intelligent agricultural assistant using Python, Streamlit, and TensorFlow for crop disease detection and agricultural guidance.",
      techStack: ["Python", "Streamlit", "TensorFlow", "NLP", "Computer Vision"],
      features: [
        "Crop disease detection using AI",
        "Market price prediction",
        "Fertilizer recommendations",
        "Voice-based Q&A system",
        "Multi-language support"
      ],
      github: "https://github.com/V-Sudharshan/Agribot",
      icon: <Brain className="h-6 w-6" />,
      color: "bg-primary/10 text-primary"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="px-4 py-2">
            Projects
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical skills through real-world applications and innovative solutions
          </p>
        </div>

        {isMobile ? (
          <Carousel className="w-full max-w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {projects.map((project, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4">
                  <Card 
                    className="bg-gradient-card border-border shadow-card transition-all duration-300 group animate-scale-in h-full"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <CardHeader className="space-y-4">
                      <div className="flex items-start justify-between">
                        <div className={`p-3 rounded-lg ${project.color}`}>
                          {project.icon}
                        </div>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          asChild
                          className="opacity-100"
                        >
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                      
                      <div>
                        <CardTitle className="text-xl mb-2 text-foreground">
                          {project.title}
                        </CardTitle>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-6">
                      {/* Tech Stack */}
                      <div>
                        <h4 className="text-sm font-medium text-foreground mb-3">
                          Tech Stack
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.map((tech, techIndex) => (
                            <Badge 
                              key={techIndex} 
                              variant="secondary" 
                              className="text-xs"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Features */}
                      <div>
                        <h4 className="text-sm font-medium text-foreground mb-3">
                          Key Features
                        </h4>
                        <ul className="space-y-1">
                          {project.features.slice(0, 3).map((feature, featureIndex) => (
                            <li 
                              key={featureIndex}
                              className="text-xs text-muted-foreground flex items-start"
                            >
                              <span className="w-1 h-1 bg-primary rounded-full mt-2 mr-2 shrink-0" />
                              {feature}
                            </li>
                          ))}
                          {project.features.length > 3 && (
                            <li className="text-xs text-muted-foreground">
                              +{project.features.length - 3} more features
                            </li>
                          )}
                        </ul>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2 pt-2">
                        <Button 
                          size="sm" 
                          asChild
                          className="flex-1 bg-gradient-primary hover:shadow-glow transition-all duration-300"
                        >
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="h-4 w-4 mr-2" />
                            Code
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-4">
              <CarouselPrevious className="relative left-0 top-0 translate-x-0 translate-y-0" />
              <CarouselNext className="relative right-0 top-0 translate-x-0 translate-y-0" />
            </div>
          </Carousel>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="bg-gradient-card border-border shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-[1.02] group animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className={`p-3 rounded-lg ${project.color}`}>
                      {project.icon}
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      asChild
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                  
                  <div>
                    <CardTitle className="text-xl mb-2 text-foreground">
                      {project.title}
                    </CardTitle>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Tech Stack */}
                  <div>
                    <h4 className="text-sm font-medium text-foreground mb-3">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="secondary" 
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="text-sm font-medium text-foreground mb-3">
                      Key Features
                    </h4>
                    <ul className="space-y-1">
                      {project.features.slice(0, 3).map((feature, featureIndex) => (
                        <li 
                          key={featureIndex}
                          className="text-xs text-muted-foreground flex items-start"
                        >
                          <span className="w-1 h-1 bg-primary rounded-full mt-2 mr-2 shrink-0" />
                          {feature}
                        </li>
                      ))}
                      {project.features.length > 3 && (
                        <li className="text-xs text-muted-foreground">
                          +{project.features.length - 3} more features
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-2">
                    <Button 
                      size="sm" 
                      asChild
                      className="flex-1 bg-gradient-primary hover:shadow-glow transition-all duration-300"
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            asChild
            className="border-primary/20 hover:bg-primary/5"
          >
            <a
              href="https://github.com/V-Sudharshan"
              target="_blank"
              rel="noopener noreferrer"
            >
              View All Projects
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;