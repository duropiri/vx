import React, { useRef, useEffect, useState } from "react";

function useOnScrollDirection() {
  const [isDown, setIsDown] = useState(true);
  const lastY = useRef(0);
  useEffect(() => {
    const handle = () => {
      const y = window.pageYOffset;
      setIsDown(y >= lastY.current);
      lastY.current = y;
    };
    window.addEventListener("scroll", handle);
    return () => window.removeEventListener("scroll", handle);
  }, []);
  return isDown;
}

interface ScrollingBannerProps {
  children: React.ReactNode;
  baseVelocity?: number;
  length?: number;
  className?: string;
  child?: string;
  innerChild?: string;
  slowOnHover?: boolean;
  direction?: "horizontal" | "vertical";
  toggleOnScroll?: boolean;
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
  toggleOnScroll = false,
}: ScrollingBannerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  const isVertical = direction === "vertical";
  const isNegative = baseVelocity < 0;

  const isDown = useOnScrollDirection();

  useEffect(() => {
    const inner = innerRef.current;
    if (!inner) return;
    const distance = isVertical ? window.innerHeight : window.innerWidth;
    const duration = (distance / Math.abs(baseVelocity)) * 2;
    inner.style.setProperty("--scroll-duration", `${duration}s`);
    const staticDir = isNegative ? "reverse" : "normal";
    const dynamicDir = isNegative
      ? isDown
        ? "reverse"
        : "normal"
      : isDown
      ? "normal"
      : "reverse";
    inner.style.setProperty(
      "--scroll-direction",
      toggleOnScroll ? dynamicDir : staticDir
    );
  }, [baseVelocity, isVertical, isNegative, isDown, length, toggleOnScroll]);

  useEffect(() => {
    const container = containerRef.current;
    const inner = innerRef.current;
    if (!slowOnHover || !container || !inner) return;
    const enter = () => (inner.style.animationPlayState = "paused");
    const leave = () => (inner.style.animationPlayState = "running");
    container.addEventListener("mouseenter", enter);
    container.addEventListener("mouseleave", leave);
    return () => {
      container.removeEventListener("mouseenter", enter);
      container.removeEventListener("mouseleave", leave);
    };
  }, [slowOnHover]);

  return (
    <>
      <style>{`
        @keyframes scroll-x { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes scroll-y { from { transform: translateY(0); } to { transform: translateY(-50%); } }
        .scroll-banner-inner {
          display: flex;
          animation: var(--scroll-animation);
          animation-iteration-count: infinite;
          animation-timing-function: linear;
          animation-duration: var(--scroll-duration);
          animation-direction: var(--scroll-direction);
        }
        .scroll-banner-inner.horizontal { animation-name: scroll-x; }
        .scroll-banner-inner.vertical { animation-name: scroll-y; flex-direction: column; }
      `}</style>
      <div 
        ref={containerRef}
        className={`relative ${className}`}
      >
        <div
          ref={innerRef}
          className={`scroll-banner-inner ${direction} ${child}`}
          aria-hidden="true"
          style={{ "--scroll-animation": "none" } as React.CSSProperties}
        >
          {Array.from({ length: 2 }).flatMap((_, seriesIndex) =>
            Array.from({ length }).map((_, index) => (
              <div
                key={`${seriesIndex}-${index}`}
                className={`scroll-banner-part flex-shrink-0 ${
                  isVertical ? 'py-1' : 'px-1'
                } ${innerChild}`}
              >
                {children}
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}