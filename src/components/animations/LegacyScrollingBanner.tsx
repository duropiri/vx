import React, { useRef, useEffect } from "react";
import { gsap } from "@/utils/gsap";

interface ScrollingBannerProps {
  children: React.ReactNode;
  baseVelocity?: number;
  length?: number;
  className?: string;
  child?: string;
  innerChild?: string;
  slowOnHover?: boolean;
  direction?: "horizontal" | "vertical";
}

export default function ScrollingBanner({
  children,
  baseVelocity = 600,
  length = 6,
  className = "",
  child = "",
  innerChild = "",
  slowOnHover = false,
  direction = "horizontal",
}: ScrollingBannerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);
  const currentScroll = useRef(0);
  const isScrollingDown = useRef(true);
  
  const isVertical = direction === "vertical";
  const isNegative = baseVelocity < 0;
  
  useEffect(() => {
    let ctx = gsap.context(() => {
      if (!innerRef.current) return;
  
      // Use viewport dimensions instead of content size
      const distance = isVertical ? window.innerHeight : window.innerWidth;
      
      gsap.set(innerRef.current, { 
        [isVertical ? 'yPercent' : 'xPercent']: -50 
      });
  
      tweenRef.current = gsap.to(".scroll-banner-part", {
        [isVertical ? 'yPercent' : 'xPercent']: isNegative ? 100 : -100,
        repeat: -1,
        duration: (distance / Math.abs(baseVelocity)) * 2, // Multiply by 2 for smoother scrolling
        ease: "none",
      }).totalProgress(0.5);

      // Handle scroll direction
      const handleScroll = () => {
        if (window.pageYOffset > currentScroll.current) {
          isScrollingDown.current = true;
        } else {
          isScrollingDown.current = false;
        }

        gsap.to(tweenRef.current, {
          timeScale: isScrollingDown.current ? 1 : -1
        });

        currentScroll.current = window.pageYOffset;
      };

      window.addEventListener("scroll", handleScroll);

      // Handle hover effect
      if (slowOnHover) {
        const handleMouseEnter = () => {
          if (tweenRef.current) {
            gsap.to(tweenRef.current, { timeScale: 0.2 });
          }
        };

        const handleMouseLeave = () => {
          if (tweenRef.current) {
            gsap.to(tweenRef.current, { 
              timeScale: isScrollingDown.current ? 1 : -1 
            });
          }
        };

        containerRef.current?.addEventListener("mouseenter", handleMouseEnter);
        containerRef.current?.addEventListener("mouseleave", handleMouseLeave);

        return () => {
          window.removeEventListener("scroll", handleScroll);
          containerRef.current?.removeEventListener("mouseenter", handleMouseEnter);
          containerRef.current?.removeEventListener("mouseleave", handleMouseLeave);
        };
      }

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, containerRef);

    return () => ctx.revert();
  }, [baseVelocity, slowOnHover, isVertical, isNegative]);

  return (
    <div 
      ref={containerRef}
      className={`relative ${className}`}
    >
      <div 
        ref={innerRef}
        className={`w-fit ${isVertical ? 'flex-col' : 'flex-row'} flex flex-auto ${child}`}
        aria-hidden="true"
      >
        {Array.from({ length }).map((_, index) => (
          <div 
            key={index}
            className={`scroll-banner-part flex-shrink-0 ${
              isVertical ? 'py-1' : 'px-1'
            } ${innerChild}`}
          >
            {children}
          </div>
        ))}
      </div>
    </div>
  );
}