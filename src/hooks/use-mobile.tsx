import { useState, useEffect } from 'react';

export const useIsMobile = (breakpoint: number = 768) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);

    return () => window.removeEventListener('resize', checkDevice);
  }, [breakpoint]);

  return isMobile;
};

export const useTouchDevice = () => {
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  return isTouch;
};