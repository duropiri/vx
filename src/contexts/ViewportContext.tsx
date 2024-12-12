"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { gsap } from "@/utils/gsap";
// import { initGSAP } from "@/utils/gsap";
// import { ParallaxProvider } from "./ParallaxContext";

const MOBILE_BREAKPOINT = 768;
const SMDESKTOP_BREAKPOINT = 1280;

interface ViewportContextType {
  isMobile: boolean;
  isSMDesktop: boolean;
}

const ViewportContext = createContext<ViewportContextType>({
  isMobile: false,
  isSMDesktop: false,
});

export function ViewportProvider({ children }: { children: React.ReactNode }) {
  const [isMobile, setIsMobile] = useState(false);
  const [isSMDesktop, setIsSMDesktop] = useState(false);
  const [previousWidth, setPreviousWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      const isMobileView = newWidth <= MOBILE_BREAKPOINT;
      setIsMobile(isMobileView);
      const isSMDesktopView = newWidth < SMDESKTOP_BREAKPOINT;
      setIsSMDesktop(isSMDesktopView);

      if (isMobileView) {
        gsap.globalTimeline.clear();
        document.querySelectorAll<HTMLElement>("[data-gsap]").forEach((el) => {
          el.style.opacity = "1";
          el.style.transform = "none";
        });
      } else {
        // initGSAP();
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
  }, [isMobile, isSMDesktop, previousWidth]);

  return (
    <ViewportContext.Provider value={{ isMobile, isSMDesktop }}>
      {/* <ParallaxProvider> */}
      {children}
      {/* </ParallaxProvider> */}
    </ViewportContext.Provider>
  );
}

export const useViewport = () => useContext(ViewportContext);
