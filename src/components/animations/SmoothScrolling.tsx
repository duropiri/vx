"use client";
import { ReactLenis } from "lenis/react";
// import { useRef } from "react";
// import Lenis from "@studio-freight/lenis";

interface SmoothScrollingProps {
  children: React.ReactNode;
  className?: string;
}

export default function SmoothScrolling({
  children,
  className = "",
}: SmoothScrollingProps) {
  // const lenisRef = useRef<Lenis | null>(null);

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.5,
        duration: 0.75,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
        infinite: false,
      }}
      className={className}
    >
      {children}
    </ReactLenis>
  );
}
