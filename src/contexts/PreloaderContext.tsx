// contexts/PreloaderContext.tsx
"use client";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

interface PreloaderContextProps {
  isLoaded: boolean;
  isAnimating: boolean;
  finishLoading: () => void;
  finishAnimation: () => void;
}

const PreloaderContext = createContext<PreloaderContextProps | undefined>(
  undefined
);

export const usePreloader = () => {
  const context = useContext(PreloaderContext);
  if (!context) {
    throw new Error("usePreloader must be used within a PreloaderProvider");
  }
  return context;
};

export const PreloaderProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isAnimating, setIsAnimating] = useState(true);

  // useEffect(() => {
  //   let scrollPosition = 0;

  //   const disableScroll = () => {
  //     scrollPosition = window.pageYOffset;
  //     document.body.style.overflow = "hidden";
  //     document.body.style.position = "fixed";
  //     document.body.style.top = `-${scrollPosition}px`;
  //     document.body.style.width = "100%";
  //   };

  //   const enableScroll = () => {
  //     document.body.style.overflow = "";
  //     document.body.style.position = "";
  //     document.body.style.top = "";
  //     document.body.style.width = "";
  //     window.scrollTo(0, scrollPosition);
  //   };

  //   disableScroll();

  //   if (isLoaded) {
  //     enableScroll();
  //   } else {
  //     disableScroll();
  //   }
  // }, [isAnimating]);

  useEffect(() => {
    // console.log(`Context - isLoaded: ${isLoaded}, isAnimating: ${isAnimating}`);
  }, [isLoaded, isAnimating]);

  const finishLoading = () => {
    // console.log("finishLoading called");
    setIsLoaded(true);
  };

  const finishAnimation = () => {
    // console.log("finishAnimation called");
    setIsAnimating(false);
  };

  return (
    <PreloaderContext.Provider
      value={{
        isLoaded,
        isAnimating,
        finishLoading,
        finishAnimation,
      }}
    >
      {children}
    </PreloaderContext.Provider>
  );
};
