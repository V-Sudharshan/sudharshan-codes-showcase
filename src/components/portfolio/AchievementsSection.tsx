import { Award, Trophy, Code2, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SwipeIndicator, ScrollDots } from "@/components/ui/swipe-indicator";
import { useState, useRef, useEffect } from "react";
import leetcode50 from "@/assets/leetcode-50-days.png";
import leetcode100 from "@/assets/leetcode-100-days.png";
import codechef250 from "@/assets/codechef-250-problems.png";
import codechef25 from "@/assets/codechef-25-contests.png";
import naukriBadges from "@/assets/naukri-badges.png";
import androidComposeCamp from "@/assets/android-compose-camp.png";
import parseAThon from "@/assets/parse-a-thon.jpg";
import youngTurksCert from "@/assets/young-turks-certificate.png";
import aincat2025 from "@/assets/aincat-2025.png";

const AchievementsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const cardWidth = container.offsetWidth * 0.85; // 85vw
      const index = Math.round(scrollLeft / cardWidth);
      setCurrentIndex(index);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  const achievements = [
    {
      title: "Skill Badges - Problem Solving & Languages",
      platform: "HackerRank",
      description: "Earned badges in Problem Solving, C++, Java, Python, and C Language",
      image: naukriBadges,
      icon: Award,
      color: "text-orange-500",
    },
    {
      title: "Young Turks 2025 - Round 1",
      platform: "Naukri Campus",
      description: "Scored 97.76 percentile in Naukri Campus Young Turks 2025, India's largest skill contest",
      image: youngTurksCert,
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
    {
      title: "Android Compose Camp",
      platform: "GDSC Anurag University",
      description: "Participated in Android Compose Camp: Build Your First App (January 5th & 6th 2024)",
      image: androidComposeCamp,
      icon: Award,
      color: "text-green-500",
    },
    {
      title: "PARSE-A-THON #1",
      platform: "Anurag University CSE",
      description: "Participated in PARSE-A-THON #1 event in collaboration with MALAI Club (January 30 to February 1, 2025)",
      image: parseAThon,
      icon: Trophy,
      color: "text-yellow-500",
    },
    {
      title: "AINCAT 2025 - Participation",
      platform: "Naukri Campus",
      description: "Successfully participated in AINCAT 2025 - India's Biggest Career Aptitude Test conducted by Naukri Campus",
      image: aincat2025,
      link: "https://www.naukri.com/campus/certificates/aincat_2025_participation/v0/683a0a83892c1f3133aae8d0",
      icon: Award,
      color: "text-blue-500",
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

        {/* Mobile: Horizontal Scroll | Desktop: Grid */}
        <div className="md:hidden relative">
          <SwipeIndicator />
          <div 
            ref={scrollContainerRef}
            className="overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4 -mx-4 px-4"
          >
            <div className="flex gap-4 w-max">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div key={index} className="w-[85vw] max-w-sm snap-center">
                    <Card
                      className="group hover:shadow-lg transition-all duration-300 hover:scale-105 h-full"
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
                  </div>
                );
              })}
            </div>
          </div>
          <ScrollDots total={achievements.length} current={currentIndex} />
          <div className="flex justify-center gap-2 mt-4">
            <Button
              variant="outline"
              size="icon"
              className="h-10 w-10 rounded-full"
              onClick={() => {
                const container = document.querySelector('#achievements .overflow-x-auto');
                if (container) container.scrollBy({ left: -300, behavior: 'smooth' });
              }}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-10 w-10 rounded-full"
              onClick={() => {
                const container = document.querySelector('#achievements .overflow-x-auto');
                if (container) container.scrollBy({ left: 300, behavior: 'smooth' });
              }}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Desktop: Grid Layout */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
