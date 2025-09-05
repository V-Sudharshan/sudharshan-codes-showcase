import { useEffect, useRef, useState } from 'react';

interface UseRevealOptions {
  threshold?: number;
  rootMargin?: string;
  delay?: number;
}

export const useReveal = ({
  threshold = 0.15,
  rootMargin = '0px',
  delay = 0,
}: UseRevealOptions = {}) => {
  const ref = useRef<HTMLElement | null>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isRevealed) {
          setTimeout(() => {
            setIsRevealed(true);
            element.classList.add('revealed');
          }, delay);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, delay, isRevealed]);

  return { ref, isRevealed };
};

// Component for easy reveal animations
interface RevealProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-up' | 'scale' | 'slide-left' | 'slide-right';
  delay?: number;
}

export const Reveal: React.FC<RevealProps> = ({ 
  children, 
  className = '', 
  animation = 'fade-up',
  delay = 0 
}) => {
  const { ref } = useReveal({ delay });
  
  return (
    <div 
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`reveal-${animation} ${className}`}
    >
      {children}
    </div>
  );
};