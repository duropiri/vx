"use client";
import React, { createContext, useContext, useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

interface FlipLinkProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  outside?: string;
  inside?: string;
  id?: string;
  duration?: number;
  ease?: string;
}

// Create a context for hover state
const HoverContext = createContext(false);

// HoverWrapper component stays mostly the same
export const HoverWrapper = ({
  children,
  className,
  href,
  id,
}: FlipLinkProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const content = (
    <HoverContext.Provider value={isHovered}>{children}</HoverContext.Provider>
  );

  const commonProps = {
    className,
    id,
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
  };

  return href ? (
    <a href={href} {...commonProps}>
      {content}
    </a>
  ) : (
    <div {...commonProps}>{content}</div>
  );
};

// Modified FlipLink component using GSAP
export const FlipLink = ({
  children,
  className = "",
  outside = "200",
  inside = "0",
  duration = 0.4,
  ease = "power2.inOut",
}: FlipLinkProps) => {
  const isHovered = useContext(HoverContext);
  const topTextRef = useRef<HTMLDivElement>(null);
  const bottomTextRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<gsap.Context | null>(null);

  useEffect(() => {
    // Clean up previous context if it exists
    if (animationRef.current) {
      animationRef.current.kill();
    }

    // Create a new GSAP context
    animationRef.current = gsap.context(() => {
      const tl = gsap.timeline();
      
      if (isHovered) {
        tl.to(topTextRef.current, {
          y: `-${outside}%`,
          duration,
          ease,
        })
        .to(bottomTextRef.current, {
          y: `${inside}%`,
          duration,
          ease,
        }, "<"); // Start at the same time as the first animation
      } else {
        tl.to(topTextRef.current, {
          y: "0%",
          duration,
          ease,
        })
        .to(bottomTextRef.current, {
          y: `${outside}%`,
          duration,
          ease,
        }, "<");
      }
    });

    // Cleanup function
    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, [isHovered, outside, inside, duration, ease]);

  // Set initial position
  useEffect(() => {
    gsap.set(bottomTextRef.current, {
      y: `${outside}%`,
    });
  }, [outside]);

  return (
    <div className={`relative block overflow-hidden ${className}`}>
      <div ref={topTextRef}>
        {children}
      </div>
      <div 
        ref={bottomTextRef}
        className="absolute inset-0"
      >
        {children}
      </div>
    </div>
  );
};