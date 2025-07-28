import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Calendar, Building, Trophy, Code2, Brain } from "lucide-react";

const CertificationsSection = () => {
  const certifications = [
    {
      title: "EY GDS NextGen Internship",
      organization: "Ernst & Young",
      description: "MERN stack full-stack development internship with hands-on experience in modern web technologies",
      type: "Internship",
      category: "Full-Stack Development",
      icon: <Building className="h-5 w-5" />,
      color: "bg-blue-500/10 text-blue-600",
      skills: ["React", "Node.js", "MongoDB", "Express"]
    },
    {
      title: "Java Full Stack Developer Internship",
      organization: "AICTE + Eduskills",
      description: "Comprehensive Java development program covering Spring Boot framework and enterprise-level applications",
      type: "Internship",
      category: "Backend Development",
      icon: <Code2 className="h-5 w-5" />,
      color: "bg-orange-500/10 text-orange-600",
      skills: ["Java", "Spring Boot", "REST APIs", "Microservices"]
    },
    {
      title: "ServiceNow Certified",
      organization: "ServiceNow",
      description: "System Administrator & Application Developer certification covering platform administration and development",
      type: "Certification",
      category: "Cloud Platform",
      icon: <Award className="h-5 w-5" />,
      color: "bg-green-500/10 text-green-600",
      skills: ["ServiceNow", "System Admin", "App Development", "Workflow"]
    },
    {
      title: "Infosys Springboard Courses",
      organization: "Infosys",
      description: "Completed multiple courses in programming fundamentals and data structures & algorithms",
      type: "Course",
      category: "Programming",
      icon: <Code2 className="h-5 w-5" />,
      color: "bg-purple-500/10 text-purple-600",
      skills: ["C", "Python", "Java", "Data Structures", "Algorithms"]
    },
    {
      title: "Microsoft AI Fundamentals",
      organization: "Microsoft",
      description: "Comprehensive courses in Machine Learning, Generative AI, and Natural Language Processing fundamentals",
      type: "Certification",
      category: "Artificial Intelligence",
      icon: <Brain className="h-5 w-5" />,
      color: "bg-indigo-500/10 text-indigo-600",
      skills: ["Machine Learning", "Generative AI", "NLP", "Azure AI"]
    },
    {
      title: "Parse-A-Thon NLP Hackathon",
      organization: "Anurag University",
      description: "Participated in a 3-day AI hackathon focusing on Natural Language Processing challenges and solutions",
      type: "Hackathon",
      category: "Competition",
      icon: <Trophy className="h-5 w-5" />,
      color: "bg-red-500/10 text-red-600",
      skills: ["NLP", "Python", "Machine Learning", "Problem Solving"]
    }
  ];

  const stats = [
    { label: "Programming Languages", value: "5+" },
    { label: "Frameworks", value: "8+" },
    { label: "Projects Completed", value: "15+" }
  ];

  return (
    <section id="certifications" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="px-4 py-2">
            Certifications
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Professional Development
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Continuous learning through industry certifications, internships, and hands-on experience
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-gradient-card rounded-lg border border-border shadow-card animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  <div className="flex flex-col items-end space-y-2">
                    <Badge variant="outline" className="text-xs">
                      {cert.type}
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      {cert.category}
                    </Badge>
                  </div>
                </div>
                
                <div>
                  <CardTitle className="text-lg mb-2 text-foreground group-hover:text-primary transition-colors">
                    {cert.title}
                  </CardTitle>
                  <p className="text-sm text-primary font-medium mb-2">
                    {cert.organization}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </CardHeader>

              <CardContent>
                <div>
                  <h4 className="text-sm font-medium text-foreground mb-3">
                    Key Skills
                  </h4>
                  <div className="flex flex-wrap gap-2">
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
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Learning Philosophy */}
        <div className="mt-16 text-center bg-gradient-card rounded-lg border border-border p-8 shadow-card">
          <h3 className="text-2xl font-semibold text-foreground mb-4">
            Commitment to Continuous Learning
          </h3>
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I believe in staying updated with the latest technologies and industry trends. 
            Through professional internships, certifications, and hands-on projects, I continuously 
            expand my skill set to deliver innovative solutions and contribute effectively to any development team.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;