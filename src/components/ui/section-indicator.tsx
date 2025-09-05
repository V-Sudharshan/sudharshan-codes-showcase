import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface Section {
  id: string;
  label: string;
}

const sections: Section[] = [
  { id: 'hero', label: 'Home' },
  { id: 'education', label: 'Education' },
  { id: 'internships', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
];

export const SectionIndicator = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
      <nav className="flex flex-col gap-4">
        {sections.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            className="group relative flex items-center justify-end"
            aria-label={`Navigate to ${label}`}
          >
            <span
              className={cn(
                'mr-4 px-3 py-1 rounded-full text-xs font-medium transition-all duration-300',
                'opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0',
                'bg-primary/10 text-primary backdrop-blur-sm',
                activeSection === id && 'opacity-100 translate-x-0'
              )}
            >
              {label}
            </span>
            <span
              className={cn(
                'w-3 h-3 rounded-full border-2 transition-all duration-300',
                'border-primary/30 bg-transparent',
                'group-hover:border-primary group-hover:scale-125',
                activeSection === id && 'bg-primary border-primary scale-125 shadow-glow'
              )}
            />
          </button>
        ))}
      </nav>
    </div>
  );
};