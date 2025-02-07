// ViewportContext.tsx
"use client";
import React, { createContext, useContext, useEffect, useState } from 'react';
import { gsap } from "@/utils/gsap";

const MOBILE_BREAKPOINT = 768;
const SMDESKTOP_BREAKPOINT = 1280;

interface ViewportContextType {
  isMobile: boolean;
  isSMDesktop: boolean;
  windowWidth: number;
  isClient: boolean;
}

const ViewportContext = createContext<ViewportContextType>({
  isMobile: false,
  isSMDesktop: false,
  windowWidth: 0,
  isClient: false,
});

export const ViewportProvider = ({ children }: { children: React.ReactNode }) => {
  const [viewport, setViewport] = useState<ViewportContextType>({
    isMobile: false,
    isSMDesktop: false,
    windowWidth: 0,
    isClient: false,
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setViewport({
        isMobile: width <= MOBILE_BREAKPOINT,
        isSMDesktop: width < SMDESKTOP_BREAKPOINT,
        windowWidth: width,
        isClient: true,
      });

      if (width <= MOBILE_BREAKPOINT) {
        gsap.globalTimeline.clear();
        document.querySelectorAll<HTMLElement>("[data-gsap]").forEach((el) => {
          el.style.opacity = "1";
          el.style.transform = "none";
        });
      }
    };

    // Initial set
    handleResize();
    
    // Debounce resize handler
    const debouncedResize = debounce(handleResize, 100);
    window.addEventListener('resize', debouncedResize);
    
    return () => window.removeEventListener('resize', debouncedResize);
  }, []);

  return (
    <ViewportContext.Provider value={viewport}>
      {children}
    </ViewportContext.Provider>
  );
};

// Helper debounce function
const debounce = (func: () => void, wait: number) => {
  let timeout: NodeJS.Timeout;
  return () => {
    clearTimeout(timeout);
    timeout = setTimeout(func, wait);
  };
};

export const useViewport = () => useContext(ViewportContext);