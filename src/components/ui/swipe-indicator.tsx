import { ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

interface SwipeIndicatorProps {
  show?: boolean;
}

export const SwipeIndicator = ({ show = true }: SwipeIndicatorProps) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Hide after 3 seconds
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!show || !visible) return null;

  return (
    <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none z-10 md:hidden">
      {/* Gradient overlay hint */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-20 h-full bg-gradient-to-l from-background/80 to-transparent" />
      
      {/* Animated chevron */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 animate-pulse">
        <div className="relative">
          <ChevronRight className="h-8 w-8 text-primary animate-[bounce_1s_ease-in-out_infinite]" />
          <ChevronRight className="h-8 w-8 text-primary/50 absolute top-0 left-0 animate-[bounce_1s_ease-in-out_infinite_0.2s]" style={{ animationDelay: '0.2s' }} />
        </div>
      </div>

      {/* Swipe text hint */}
      <div className="absolute right-16 top-1/2 -translate-y-1/2 text-sm text-muted-foreground font-medium whitespace-nowrap animate-fade-in">
        Swipe →
      </div>
    </div>
  );
};

interface ScrollDotsProps {
  total: number;
  current: number;
}

export const ScrollDots = ({ total, current }: ScrollDotsProps) => {
  if (total <= 1) return null;

  return (
    <div className="flex justify-center gap-1.5 mt-4 md:hidden">
      {Array.from({ length: total }).map((_, index) => (
        <div
          key={index}
          className={`h-1.5 rounded-full transition-all duration-300 ${
            index === current
              ? "w-6 bg-primary"
              : "w-1.5 bg-muted-foreground/30"
          }`}
        />
      ))}
    </div>
  );
}
