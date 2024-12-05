"use client";

import React, { useEffect, useState } from "react";
import { initGSAP } from "@/utils/gsap";
import { ViewportProvider } from "@/contexts/ViewportContext";
import { PreloaderProvider } from "@/contexts/PreloaderContext";
import PageAnimatePresence from "./HOC/PageAnimatePresence";

interface ClientLayoutWrapperProps {
  children: React.ReactNode;
}

// Initialize GSAP once when the app starts
if (typeof window !== "undefined") {
  initGSAP();
}

export default function ClientLayoutWrapper({
  children,
}: ClientLayoutWrapperProps) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return (
      <div className="antialiased overflow-hidden">
        {/* Loading state or nothing */}
      </div>
    );
  }

  return (
    <PreloaderProvider>
      <PageAnimatePresence>
        <ViewportProvider>
          <div className="antialiased">{children}</div>
        </ViewportProvider>
      </PageAnimatePresence>
    </PreloaderProvider>
  );
}
