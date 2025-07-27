import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, Award } from "lucide-react";

const EducationSection = () => {
  const educationData = [
    {
      degree: "B.Tech – Computer Science Engineering",
      institution: "Anurag University",
      duration: "2022 – 2026",
      grade: "CGPA: 9.01",
      type: "Undergraduate",
      status: "Current",
      icon: <GraduationCap className="h-6 w-6" />
    },
    {
      degree: "Intermediate",
      institution: "Sri Chaitanya Junior Kalasala",
      duration: "2020 – 2022",
      grade: "Percentage: 96%",
      type: "Higher Secondary",
      status: "Completed",
      icon: <Award className="h-6 w-6" />
    },
    {
      degree: "Class 10",
      institution: "Narayana High School",
      duration: "2020",
      grade: "GPA: 10.0",
      type: "Secondary",
      status: "Completed",
      icon: <Award className="h-6 w-6" />
    }
  ];

  return (
    <section id="education" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="px-4 py-2">
            Education
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Academic Journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A strong foundation in computer science with consistent academic excellence
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-1/2" />

            <div className="space-y-8">
              {educationData.map((edu, index) => (
                <div 
                  key={index}
                  className={`relative flex items-start ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } animate-fade-in`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full transform md:-translate-x-1/2 z-10 mt-6" />

                  {/* Content */}
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} ml-8 md:ml-0`}>
                    <Card className="bg-card border-border shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-[1.02]">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="p-3 bg-primary/10 rounded-lg text-primary">
                            {edu.icon}
                          </div>
                          
                          <div className="flex-1 space-y-3">
                            <div className="flex items-start justify-between flex-wrap gap-2">
                              <div>
                                <h3 className="font-semibold text-lg text-foreground">
                                  {edu.degree}
                                </h3>
                                <p className="text-muted-foreground">
                                  {edu.institution}
                                </p>
                              </div>
                              <Badge 
                                variant={edu.status === 'Current' ? 'default' : 'secondary'}
                                className="shrink-0"
                              >
                                {edu.status}
                              </Badge>
                            </div>

                            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                              <div className="flex items-center space-x-1">
                                <Calendar className="h-4 w-4" />
                                <span>{edu.duration}</span>
                              </div>
                              <div className="w-1 h-1 bg-muted-foreground rounded-full" />
                              <span className="font-medium text-success">
                                {edu.grade}
                              </span>
                            </div>

                            <Badge variant="outline" className="w-fit">
                              {edu.type}
                            </Badge>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;