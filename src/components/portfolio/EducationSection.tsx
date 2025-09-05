import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, Award } from "lucide-react";
import { Reveal } from "@/hooks/use-reveal";

const EducationSection = () => {
  const educationData = [
    {
      degree: "B.Tech – Computer Science Engineering",
      institution: "Anurag University",
      duration: "2022 – 2026",
      grade: "CGPA: 9.02",
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
            A strong foundation built through dedicated academic pursuit and continuous learning
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Academic Timeline - All on one side */}
            <div className="lg:col-span-2">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />

                <div className="space-y-8">
                  {educationData.map((edu, index) => (
                    <div 
                      key={index}
                      className="relative flex items-start animate-fade-in"
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      {/* Timeline dot */}
                      <div className="absolute left-4 w-3 h-3 bg-primary rounded-full transform -translate-x-1/2 z-10 mt-6" />

                      {/* Content */}
                      <div className="w-full ml-8">
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

            {/* Academic Summary */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-6">
                <Card className="bg-gradient-card border-border shadow-card">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      Academic Excellence
                    </h3>
                    <div className="space-y-4">
                      <div className="text-center p-4 bg-primary/5 rounded-lg">
                        <div className="text-3xl font-bold text-primary">9.02</div>
                        <div className="text-sm text-muted-foreground">Current CGPA</div>
                      </div>
                      <div className="text-center p-4 bg-success/5 rounded-lg">
                        <div className="text-3xl font-bold text-success">96%</div>
                        <div className="text-sm text-muted-foreground">Intermediate</div>
                      </div>
                      <div className="text-center p-4 bg-success/5 rounded-lg">
                        <div className="text-3xl font-bold text-success">10.0</div>
                        <div className="text-sm text-muted-foreground">Class 10 GPA</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-card border-border shadow-card">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-4">
                      Key Highlights
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span>Final year student (2026)</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;