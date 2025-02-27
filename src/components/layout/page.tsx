// layout/page.tsx
"use client";
import React, { ReactNode, useEffect } from "react";
import { usePathname } from "next/navigation";
import { PreloaderProvider, usePreloader } from "@/contexts/PreloaderContext";
import Preloader from "@/components/Preloader";
import { useViewport } from "@/contexts/ViewportContext";

interface PageProps {
  children: ReactNode;
}

const Page = ({ children }: PageProps) => {
  const pathname = usePathname();
  const isAdminPage = pathname.startsWith("/admin");
  const isHomePage = pathname === "/";

  const { isLoaded, finishLoading, isAnimating, finishAnimation } = usePreloader();
  const { windowWidth } = useViewport();

  useEffect(() => {
    if (!isLoaded) {
      finishLoading();
    }
  }, [isLoaded, finishLoading, windowWidth]);

  // NEW: Remove the preloader on any window resize
  useEffect(() => {
    const handleResize = () => {
      // If the preloader is still active, force its removal
      if (!isLoaded || isAnimating) {
        finishAnimation();
        console.log("Preloader removed due to window resize");
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isLoaded, isAnimating, finishAnimation]);

  return (
    <PreloaderProvider>
      <div className="relative flex size-full min-w-[100vw] max-w-[100vw] min-h-screen flex-col items-center justify-start select-none">
        {/* Splash Screen Overlay */}
        {isHomePage && !isAdminPage && (!isLoaded || isAnimating) && (
          <Preloader finishLoading={finishLoading} finishAnimation={finishAnimation} />
        )}
        {children}
      </div>
    </PreloaderProvider>
  );
};

export default Page;