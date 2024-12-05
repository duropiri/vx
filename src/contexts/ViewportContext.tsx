// contexts/ViewportContext.tsx
import { createContext, useContext, useEffect, useState } from "react";

const MOBILE_BREAKPOINT = 768;

interface ViewportContextType {
  isMobile: boolean;
}

const ViewportContext = createContext<ViewportContextType>({ isMobile: false });

export function ViewportProvider({ children }) {
  const [isMobile, setIsMobile] = useState(false);
  const [previousWidth, setPreviousWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      setIsMobile(newWidth <= MOBILE_BREAKPOINT);

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

      console.log("isMobile: " + isMobile);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [previousWidth]);

  return (
    <ViewportContext.Provider value={{ isMobile }}>
      {children}
    </ViewportContext.Provider>
  );
}

export const useViewport = () => useContext(ViewportContext);
