"use client";
import { createContext, useContext, useEffect, useState } from "react";
import gsap from "gsap";
import { initGSAP } from "@/utils/gsap";
// import { ParallaxProvider } from "./ParallaxContext";

const MOBILE_BREAKPOINT = 768;

interface ViewportContextType {
  isMobile: boolean;
}

const ViewportContext = createContext<ViewportContextType>({ isMobile: false });

export function ViewportProvider({ children }: { children: React.ReactNode }) {
  const [isMobile, setIsMobile] = useState(false);
  const [previousWidth, setPreviousWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      const isMobileView = newWidth <= MOBILE_BREAKPOINT;
      setIsMobile(isMobileView);

      if (isMobileView) {
        gsap.globalTimeline.clear();
        document.querySelectorAll<HTMLElement>("[data-gsap]").forEach((el) => {
          el.style.opacity = "1";
          el.style.transform = "none";
        });
      } else {
        initGSAP();
      }

      if (!previousWidth) {
        setPreviousWidth(newWidth);
        return;
      }

      if (
        (previousWidth < MOBILE_BREAKPOINT && newWidth >= MOBILE_BREAKPOINT) ||
        (previousWidth >= MOBILE_BREAKPOINT && newWidth < MOBILE_BREAKPOINT)
      ) {
        window.location.reload();
      }
      setPreviousWidth(newWidth);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobile, previousWidth]);

  return (
    <ViewportContext.Provider value={{ isMobile }}>
      {/* <ParallaxProvider> */}
      {children}
      {/* </ParallaxProvider> */}
    </ViewportContext.Provider>
  );
}

export const useViewport = () => useContext(ViewportContext);
