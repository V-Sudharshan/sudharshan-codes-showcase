import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      const isLink = target.tagName === 'A' || 
                    target.tagName === 'BUTTON' || 
                    target.closest('a') !== null ||
                    target.closest('button') !== null ||
                    window.getComputedStyle(target).cursor === 'pointer';
      
      setIsPointer(isLink);
    };

    const handleMouseLeave = () => setIsHidden(true);
    const handleMouseEnter = () => setIsHidden(false);
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    // Hide default cursor
    document.body.style.cursor = 'none';

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = 'auto';
    };
  }, []);

  if (isHidden) return null;

  return (
    <>
      {/* Main cursor */}
      <div
        className={cn(
          'fixed pointer-events-none z-[100] transition-transform duration-100',
          isClicking && 'scale-75'
        )}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div
          className={cn(
            'w-5 h-5 rounded-full border-2 border-primary transition-all duration-300',
            isPointer && 'w-10 h-10 bg-primary/20 border-primary/50'
          )}
        />
      </div>
      
      {/* Cursor trail */}
      <div
        className="fixed pointer-events-none z-[99] transition-all duration-500 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className="w-8 h-8 rounded-full bg-primary/10" />
      </div>
    </>
  );
};