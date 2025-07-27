import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Code, 
  Globe, 
  Database, 
  Wrench, 
  Brain,
  FileCode,
  Server,
  GitBranch
} from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="h-5 w-5" />,
      color: "bg-blue-500/10 text-blue-600",
      skills: [
        { name: "Java", level: 90 },
        { name: "Python", level: 85 },
        { name: "JavaScript", level: 88 },
        { name: "C", level: 75 }
      ]
    },
    {
      title: "Web Development",
      icon: <Globe className="h-5 w-5" />,
      color: "bg-green-500/10 text-green-600",
      skills: [
        { name: "React.js", level: 85 },
        { name: "Node.js", level: 80 },
        { name: "HTML/CSS", level: 90 },
        { name: "Express.js", level: 75 }
      ]
    },
    {
      title: "Databases",
      icon: <Database className="h-5 w-5" />,
      color: "bg-purple-500/10 text-purple-600",
      skills: [
        { name: "MongoDB", level: 80 },
        { name: "MySQL", level: 85 },
        { name: "SQL", level: 88 }
      ]
    },
    {
      title: "Frameworks & Tools",
      icon: <Wrench className="h-5 w-5" />,
      color: "bg-orange-500/10 text-orange-600",
      skills: [
        { name: "Streamlit", level: 80 },
        { name: "Spring Boot", level: 70 },
        { name: "Git/GitHub", level: 85 },
        { name: "Ant Design", level: 75 }
      ]
    },
    {
      title: "AI & Machine Learning",
      icon: <Brain className="h-5 w-5" />,
      color: "bg-red-500/10 text-red-600",
      skills: [
        { name: "TensorFlow", level: 75 },
        { name: "NLP", level: 70 },
        { name: "Computer Vision", level: 65 },
        { name: "Machine Learning", level: 75 }
      ]
    },
    {
      title: "Core Concepts",
      icon: <FileCode className="h-5 w-5" />,
      color: "bg-indigo-500/10 text-indigo-600",
      skills: [
        { name: "Data Structures", level: 85 },
        { name: "Algorithms", level: 80 },
        { name: "System Design", level: 70 },
        { name: "OOP", level: 85 }
      ]
    }
  ];

  const technologies = [
    "MERN Stack", "Full-Stack Development", "RESTful APIs", "Responsive Design",
    "Version Control", "Agile Methodology", "Problem Solving", "Team Collaboration"
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="px-4 py-2">
            Skills
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Technical Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive skill set built through academic learning, personal projects, and professional experience
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="bg-card border-border shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-[1.02] animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg ${category.color}`}>
                    {category.icon}
                  </div>
                  <CardTitle className="text-lg text-foreground">
                    {category.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-foreground">
                        {skill.name}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2"
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Technologies */}
        <div className="bg-card rounded-lg border border-border p-6 shadow-card">
          <h3 className="text-xl font-semibold text-foreground mb-4 text-center">
            Technologies & Methodologies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <Badge 
                key={index}
                variant="secondary"
                className="px-3 py-2 text-sm animate-scale-in hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {[
            { label: "Programming Languages", value: "4+" },
            { label: "Frameworks", value: "6+" },
            { label: "Projects Completed", value: "10+" },
            { label: "Technologies", value: "15+"  }
          ].map((stat, index) => (
            <div 
              key={index}
              className="text-center p-4 bg-card rounded-lg border border-border shadow-card animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-2xl font-bold text-primary mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;