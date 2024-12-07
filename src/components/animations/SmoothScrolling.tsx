"use client";
import { useLenis, ReactLenis } from "lenis/react";
import { HTMLAttributes, useEffect, useRef, useState } from "react";

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
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
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
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
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

interface ParallaxSectionProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  isHero?: boolean; // New prop for top-of-page elements
}

export const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  children,
  className = "",
  speed,
  style,
  isHero = false, // Default to false
  ...props
}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const initialPosRef = useRef<number | null>(null);
  const transformRef = useRef(0);
  const frameRef = useRef<number>();

  useEffect(() => {
    if (!elementRef.current || !speed) return;

    const updatePosition = () => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        initialPosRef.current = rect.top + scrollTop;
      }
    };

    updatePosition();
    window.addEventListener("resize", updatePosition);

    return () => {
      window.removeEventListener("resize", updatePosition);
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [speed]);

  useLenis(({ scroll }) => {
    if (!speed || initialPosRef.current === null) return;

    if (isHero) {
      // Logic for hero/top sections
      const y = scroll * speed;

      if (y !== transformRef.current) {
        transformRef.current = y;
        if (frameRef.current) {
          cancelAnimationFrame(frameRef.current);
        }
        frameRef.current = requestAnimationFrame(() => {
          if (elementRef.current) {
            elementRef.current.style.transform = `translate3d(0, ${y}px, 0)`;
          }
        });
      }
    } else {
      // Logic for regular sections
      const windowHeight = window.innerHeight;
      const elementTop = initialPosRef.current;
      const startScrollPosition = elementTop - windowHeight;
      const scrolled = scroll - startScrollPosition;

      if (scrolled > 0) {
        const y = scrolled * speed;

        if (y !== transformRef.current) {
          transformRef.current = y;
          if (frameRef.current) {
            cancelAnimationFrame(frameRef.current);
          }
          frameRef.current = requestAnimationFrame(() => {
            if (elementRef.current) {
              elementRef.current.style.transform = `translate3d(0, ${y}px, 0)`;
            }
          });
        }
      } else if (transformRef.current !== 0) {
        transformRef.current = 0;
        if (elementRef.current) {
          elementRef.current.style.transform = "translate3d(0, 0, 0)";
        }
      }
    }
  });

  if (!speed) {
    return (
      <div className={className} style={style} {...props}>
        {children}
      </div>
    );
  }

  return (
    <div
      ref={elementRef}
      className={className}
      {...props}
      style={{
        willChange: "transform",
        transformOrigin: "center center",
        backfaceVisibility: "hidden",
        ...style,
      }}
    >
      {children}
    </div>
  );
};
