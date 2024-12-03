// ScrollingBanner.tsx
"use client";
import {
  motion,
  useMotionValue,
  useTransform,
  wrap,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface ScrollingBannerProps {
  children: React.ReactNode;
  baseVelocity?: number;
  length?: number;
  className?: string;
  child?: string;
  innerChild?: string;
  slowOnHover?: boolean;
  vertical?: boolean;
}

export default function ScrollingBanner({
  children,
  baseVelocity = 300,
  length = 180,
  className,
  child,
  innerChild,
  slowOnHover = false,
  vertical = false,
}: ScrollingBannerProps) {
  const basePosition = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const bannerRef = useRef<HTMLDivElement>(null);
  const childRef = useRef<HTMLSpanElement | null>(null);
  const [maxWidth, setMaxWidth] = useState("auto");
  const [maxHeight, setMaxHeight] = useState("auto");
  const animationRef = useRef<number>();

  // Intersection Observer setup
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (bannerRef.current) {
      observer.observe(bannerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (vertical && childRef.current) {
      const height = childRef.current.offsetHeight;
      const width = childRef.current.offsetWidth;
      setMaxWidth(`${height}px`);
      setMaxHeight(`${width}px`);
    }
  }, [vertical]);

  const adjustedBaseVelocity =
    slowOnHover && isHovered ? baseVelocity / 3 : baseVelocity;
  const totalScrollableSize = vertical ? 45 * length : 45;
  const position = useTransform(
    basePosition,
    (v) => `${wrap(-20, -totalScrollableSize, v)}%`
  );

  // Optimized animation
  useEffect(() => {
    let lastTime = performance.now();
    const directionFactor = 1;

    const animate = (time: number) => {
      if (!isVisible) return;
      
      const deltaTime = time - lastTime;
      lastTime = time;

      const moveBy = directionFactor * (adjustedBaseVelocity / 1000) * (deltaTime / 1000);
      basePosition.set(basePosition.get() + moveBy);

      animationRef.current = requestAnimationFrame(animate);
    };

    if (isVisible) {
      animationRef.current = requestAnimationFrame(animate);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isVisible, adjustedBaseVelocity, basePosition]);

  const styles = {
    banner: vertical
      ? `relative m-0 flex flex-col flex-nowrap items-center whitespace-nowrap min-h-[100vh]`
      : "relative m-0 flex flex-nowrap items-center whitespace-nowrap",
    child: vertical
      ? "flex flex-col flex-nowrap items-center whitespace-nowrap"
      : "flex flex-row flex-nowrap items-center whitespace-nowrap",
    innerChild: vertical ? "my-4 transform -rotate-90 origin-center" : "mx-4",
  };

  return (
    <div
      ref={bannerRef}
      className={className + " " + styles.banner}
      style={{
        maxWidth: vertical ? maxWidth : "100%",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        style={{
          [vertical ? "y" : "x"]: position,
          transform: vertical ? "translateY(0)" : "none",
          width: vertical ? maxWidth : "100%",
          height: vertical ? maxHeight : "100%",
          gap: vertical ? maxHeight : "",
        }}
        className={child + " " + styles.child}
      >
        {Array.from({ length }).map((_, index) => (
          <span
            className={innerChild + " " + styles.innerChild}
            key={index}
            ref={index === 0 ? childRef : null}
          >
            {children}
          </span>
        ))}
      </motion.div>
    </div>
  );
}