import { useRef, useCallback } from "react";

interface SwipeVelocityOptions {
  velocityThreshold?: number; // pixels per millisecond
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
}

export const useSwipeVelocity = ({
  velocityThreshold = 0.5,
  onSwipeLeft,
  onSwipeRight,
}: SwipeVelocityOptions = {}) => {
  const touchStartX = useRef<number>(0);
  const touchStartTime = useRef<number>(0);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartTime.current = Date.now();
  }, []);

  const handleTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      const touchEndX = e.changedTouches[0].clientX;
      const touchEndTime = Date.now();

      const distance = touchEndX - touchStartX.current;
      const time = touchEndTime - touchStartTime.current;
      const velocity = Math.abs(distance) / time;

      // If velocity exceeds threshold, trigger swipe
      if (velocity >= velocityThreshold) {
        if (distance < 0 && onSwipeLeft) {
          // Swiped left - go to next
          onSwipeLeft();
        } else if (distance > 0 && onSwipeRight) {
          // Swiped right - go to previous
          onSwipeRight();
        }
      }
    },
    [velocityThreshold, onSwipeLeft, onSwipeRight]
  );

  return {
    handleTouchStart,
    handleTouchEnd,
  };
};
