import { Award, Trophy, Code2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import leetcode50 from "@/assets/leetcode-50-days.png";
import leetcode100 from "@/assets/leetcode-100-days.png";
import codechef250 from "@/assets/codechef-250-problems.png";
import codechef25 from "@/assets/codechef-25-contests.png";

const AchievementsSection = () => {
  const achievements = [
    {
      title: "Young Turks 2025 - Round 1",
      platform: "Naukri Campus",
      description: "Successfully completed Round 1 of Young Turks 2025 competition",
      link: "https://www.naukri.com/campus/certificates/young_turks25_round_1_achievement/v0/68d9ba12fac35327673e08a0",
      icon: Trophy,
      color: "text-yellow-500",
    },
    {
      title: "100 Days Badge 2025",
      platform: "LeetCode",
      description: "Solved problems for 100+ consecutive days in 2025",
      image: leetcode100,
      icon: Code2,
      color: "text-blue-500",
    },
    {
      title: "50 Days Badge 2025",
      platform: "LeetCode",
      description: "Solved problems for 50+ consecutive days in 2025",
      image: leetcode50,
      icon: Code2,
      color: "text-green-500",
    },
    {
      title: "Problem Solver Silver Badge",
      platform: "CodeChef",
      description: "Solved 250+ problems on CodeChef",
      image: codechef250,
      icon: Award,
      color: "text-slate-400",
    },
    {
      title: "Contest Contender Silver Badge",
      platform: "CodeChef",
      description: "Participated in 25+ contests on CodeChef",
      image: codechef25,
      icon: Award,
      color: "text-slate-400",
    },
  ];

  return (
    <section id="achievements" className="py-20 px-4 md:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Achievements & Badges
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Recognition for consistent problem-solving and competitive programming excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    {achievement.image ? (
                      <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-background to-muted">
                        <img
                          src={achievement.image}
                          alt={achievement.title}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    ) : (
                      <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon className={`w-10 h-10 ${achievement.color}`} />
                      </div>
                    )}

                    <div className="space-y-2">
                      <Badge variant="secondary" className="mb-2">
                        {achievement.platform}
                      </Badge>
                      <h3 className="font-semibold text-lg">{achievement.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {achievement.description}
                      </p>
                    </div>

                    {achievement.link && (
                      <a
                        href={achievement.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary hover:underline mt-2 inline-flex items-center gap-1"
                      >
                        View Certificate
                        <Award className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
