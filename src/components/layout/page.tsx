// layout/page.tsx
"use client";
import React, { ReactNode, useEffect } from "react";
import { usePathname } from "next/navigation";
import { PreloaderProvider, usePreloader } from "@/contexts/PreloaderContext";
import Preloader from "@/components/Preloader";

interface PageProps {
  children: ReactNode;
}

const Page = ({ children }: PageProps) => {
  const pathname = usePathname();
  const isAdminPage = pathname.startsWith("/admin");
  const isHomePage = pathname === "/";

  const { isLoaded, finishLoading, isAnimating, finishAnimation } =
    usePreloader();

  useEffect(() => {
    if (!isLoaded) {
      finishLoading();
    }
  }, [isLoaded, finishLoading]);

  return (
    <PreloaderProvider>
      <div className="relative flex size-full min-w-[100vw] max-w-[100vw] min-h-screen flex-col items-center justify-start select-none">
        {/* Splash Screen Overlay */}
        {isHomePage && !isAdminPage && (!isLoaded || isAnimating) && (
          <>
            <Preloader
              finishLoading={finishLoading}
              finishAnimation={finishAnimation}
            />
          </>
        )}
        {children}
      </div>
    </PreloaderProvider>
  );
};

export default Page;
