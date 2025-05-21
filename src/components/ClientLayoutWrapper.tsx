"use client";

import React from "react";
import { ViewportProvider } from "@/contexts/ViewportContext";
import { PreloaderProvider } from "@/contexts/PreloaderContext";

interface ClientLayoutWrapperProps {
  children: React.ReactNode;
}

export default function ClientLayoutWrapper({
  children,
}: ClientLayoutWrapperProps) {
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
