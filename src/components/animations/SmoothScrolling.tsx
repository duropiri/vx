"use client";
import { useLenis, ReactLenis } from "lenis/react";
import { useEffect, useState } from "react";

interface SmoothScrollingProps {
  children: React.ReactNode;
  className?: string;
}

export default function SmoothScrolling({
  children,
  className = "",
}: SmoothScrollingProps) {
  const lenis = useLenis();
  // Add mounting state to prevent hydration mismatch
  const [isMounted, setIsMounted] = useState(false);

  // Handle mounting state
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Handle hash links on page load
  useEffect(() => {
    if (!isMounted) return;

    const hash = window.location.hash;
    
    if (hash && lenis) {
      const timeoutId = setTimeout(() => {
        const element = document.getElementById(hash.replace("#", ""));
        if (element) {
          lenis.scrollTo(element, {
            offset: 0,
            duration: 1.5,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
          });
        }
      }, 100);

      return () => clearTimeout(timeoutId);
    }
  }, [lenis, isMounted]);

  // Handle smooth scrolling for anchor links
  const handleAnchorClick = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const anchor = target.closest("a");
    
    if (anchor?.hash && lenis) {
      e.preventDefault();
      const element = document.getElementById(anchor.hash.replace("#", ""));
      
      if (element) {
        lenis.scrollTo(element, {
          offset: 0,
          duration: 1.5,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
        });
      }
    }
  };

  // Add click listener for anchor links only after mounting
  useEffect(() => {
    if (!isMounted) return;

    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, [lenis, isMounted]);

  // Return null or loading state before mounting
  if (!isMounted) {
    return <div className={className}>{children}</div>;
  }

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