"use client";
import React, {
  createContext,
  useContext,
  useState,
  useRef,
  useEffect,
} from "react";
import { gsap } from "@/utils/gsap";
import { useViewport } from "@/contexts/ViewportContext";

interface FlipLinkProps extends React.HTMLAttributes<HTMLDivElement> {
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
  ...rest
}: FlipLinkProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const content = (
    <HoverContext.Provider value={isHovered}>{children}</HoverContext.Provider>
  );

  const handleMouseEnter = (event: React.MouseEvent<HTMLElement>) => setIsHovered(true);
  const handleMouseLeave = (event: React.MouseEvent<HTMLElement>) => setIsHovered(false);

  const commonProps = {
    className,
    id,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    ...rest, // <-- Pass all other props through
  };

  const { onToggle, ...restProps } = commonProps;

  const anchorProps = {
    className: commonProps.className,
    id: commonProps.id,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    // Add any other valid anchor attributes here
  };

  return href ? (
    <a href={href} {...anchorProps}>
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
  outside = "100",
  inside = "0",
  duration = 0.2,
  ease = "power2.inOut",
  ...rest
}: FlipLinkProps) => {
  const isHovered = useContext(HoverContext);
  const topTextRef = useRef<HTMLDivElement>(null);
  const bottomTextRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<gsap.Context | null>(null);
  const { windowWidth } = useViewport();

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
        }).to(
          bottomTextRef.current,
          {
            y: `${inside}%`,
            duration,
            ease,
          },
          "<"
        ); // Start at the same time as the first animation
      } else {
        tl.to(topTextRef.current, {
          y: "0%",
          duration,
          ease,
        }).to(
          bottomTextRef.current,
          {
            y: `${outside}%`,
            duration,
            ease,
          },
          "<"
        );
      }
    });

    // Cleanup function
    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, [isHovered, outside, inside, duration, ease, windowWidth]);

  // Set initial position
  useEffect(() => {
    gsap.set(bottomTextRef.current, {
      y: `${outside}%`,
    });
  }, [outside, windowWidth]);

  return (
    <div className={`relative block overflow-hidden ${className}`} {...rest}>
      <div ref={topTextRef}>{children}</div>
      <div ref={bottomTextRef} className="absolute inset-0">
        {children}
      </div>
    </div>
  );
};
