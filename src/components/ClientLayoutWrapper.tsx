"use client";

import React, { useEffect, useState } from "react";
import { initGSAP } from "@/utils/gsap";
import { ViewportProvider } from "@/contexts/ViewportContext";
import { PreloaderProvider } from "@/contexts/PreloaderContext";

interface ClientLayoutWrapperProps {
  children: React.ReactNode;
}

export default function ClientLayoutWrapper({
  children,
}: ClientLayoutWrapperProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Initialize GSAP here instead of at the module level
    initGSAP();
    setIsLoaded(true);
  }, []);

  // During SSR and initial client render, return a stable structure
  if (!isLoaded) {
    return (
      <PreloaderProvider>
        <ViewportProvider>
          <div className="antialiased overflow-hidden">{children}</div>
        </ViewportProvider>
      </PreloaderProvider>
    );
  }

  return (
    <PreloaderProvider>
      {/* <PageAnimatePresence> */}
        <ViewportProvider>
          <div className="antialiased">{children}</div>
        </ViewportProvider>
      {/* </PageAnimatePresence> */}
    </PreloaderProvider>
  );
}
