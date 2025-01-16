// ViewportContext.tsx
"use client";
import { createContext, useContext, useEffect, useState } from "react";
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

function ViewportProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<ViewportContextType>(() => ({
    isMobile: false,
    isSMDesktop: false,
    windowWidth: 0,
    isClient: false,
  }));

  useEffect(() => {
    const updateViewport = () => {
      const width = window.innerWidth;
      setState({
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

    // Initial update
    updateViewport();

    let resizeTimer: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        const newWidth = window.innerWidth;
        const oldWidth = state.windowWidth;

        // const crossedMobileBreakpoint =
        //   (oldWidth <= MOBILE_BREAKPOINT && newWidth > MOBILE_BREAKPOINT) ||
        //   (oldWidth > MOBILE_BREAKPOINT && newWidth <= MOBILE_BREAKPOINT);

        // if (crossedMobileBreakpoint) {
        //   window.location.reload();
        //   return;
        // }

        updateViewport();
      }, 100);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimer);
    };
  }, [state.windowWidth]);

  return (
    <ViewportContext.Provider value={state}>{children}</ViewportContext.Provider>
  );
}

const useViewport = () => useContext(ViewportContext);

export { ViewportProvider, useViewport };