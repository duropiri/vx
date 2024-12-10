"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "@/utils/gsap";

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
  className = "",
  child = "",
  innerChild = "",
  slowOnHover = false,
  vertical = false,
}: ScrollingBannerProps) {
  const bannerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const childRef = useRef<HTMLSpanElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [maxWidth, setMaxWidth] = useState("auto");
  const [maxHeight, setMaxHeight] = useState("auto");
  const animationRef = useRef<gsap.core.Tween>();
  const [isVisible, setIsVisible] = useState(false);

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

  useEffect(() => {
    if (!containerRef.current || !isVisible) return;

    const container = containerRef.current;
    const adjustedVelocity = baseVelocity;
    
    // Convert velocity to duration (higher velocity = lower duration)
    const duration = Math.abs(100000 / adjustedVelocity);
    
    // Determine direction based on velocity sign
    const direction = Math.sign(baseVelocity);
    
    // Kill any existing animation
    if (animationRef.current) {
      animationRef.current.kill();
    }

    // Set initial position based on direction
    gsap.set(container, {
      [vertical ? 'y' : 'x']: direction > 0 ? 0 : '-100%',
    });

    // Create the infinite scroll animation
    animationRef.current = gsap.to(container, {
      [vertical ? 'y' : 'x']: direction > 0 ? '-100%' : '0%',
      duration: duration,
      ease: "none",
      repeat: -1,
      paused: !isVisible,
    });

    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, [baseVelocity, isHovered, slowOnHover, vertical, isVisible]);

  const styles = {
    banner: vertical
      ? `relative m-0 flex flex-col flex-nowrap items-center whitespace-nowrap overflow-hidden min-h-[100vh]`
      : "relative m-0 flex flex-nowrap items-center whitespace-nowrap overflow-hidden",
    child: vertical
      ? "flex flex-col flex-nowrap items-center whitespace-nowrap"
      : "flex flex-row flex-nowrap items-center whitespace-nowrap",
    innerChild: vertical ? "my-4 transform -rotate-90 origin-center" : "mx-4",
  };

  return (
    <div
      ref={bannerRef}
      className={`${className} ${styles.banner}`}
      style={{
        maxWidth: vertical ? maxWidth : "100%",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        ref={containerRef}
        className={`${child} ${styles.child}`}
        style={{
          width: vertical ? maxWidth : "100%",
          height: vertical ? maxHeight : "100%",
          gap: vertical ? maxHeight : "",
        }}
      >
        {Array.from({ length }).map((_, index) => (
          <span
            className={`${innerChild} ${styles.innerChild}`}
            key={index}
            ref={index === 0 ? childRef : null}
          >
            {children}
          </span>
        ))}
      </div>
    </div>
  );
}