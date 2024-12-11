"use client";
import React, { forwardRef, useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/utils/gsap";

interface ScaleInVisibleProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  amount?: number;
  margin?: string;
  id?: string;
  key?: string | number;
  once?: boolean;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  hoverScale?: number;
  tapScale?: number;
}

const ScaleInVisible = forwardRef<HTMLDivElement, ScaleInVisibleProps>(
  (
    {
      children,
      className = "",
      delay = 0.1,
      duration = 0.2,
      amount = 0.3,
      margin = "50px",
      id,
      key,
      once = true,
      onClick,
      hoverScale,
      tapScale,
    },
    ref
  ) => {
    const elementRef = useRef<HTMLDivElement>(null);
    const actualRef =
      (ref as React.MutableRefObject<HTMLDivElement>) || elementRef;

    useEffect(() => {
      const element = actualRef.current;
      if (!element) return;

      // Initial state
      gsap.set(element, {
        opacity: 0,
        scale: 0.9,
      });

      // Scroll trigger animation
      const scrollTrigger = ScrollTrigger.create({
        trigger: element,
        start: `top bottom-=${margin}`,
        end: "bottom top",
        toggleActions: once
          ? "play none none none"
          : "play reverse play reverse",
        onEnter: () => {
          gsap.to(element, {
            opacity: 1,
            scale: 1,
            duration: duration,
            delay: delay,
            ease: "power2.out",
          });
        },
      });

      // Hover animation
      if (hoverScale) {
        element.addEventListener("mouseenter", () => {
          gsap.to(element, {
            scale: hoverScale,
            duration: 0.2,
          });
        });

        element.addEventListener("mouseleave", () => {
          gsap.to(element, {
            scale: 1,
            duration: 0.2,
          });
        });
      }

      // Click/tap animation
      if (tapScale) {
        element.addEventListener("mousedown", () => {
          gsap.to(element, {
            scale: tapScale,
            duration: 0.1,
          });
        });

        element.addEventListener("mouseup", () => {
          gsap.to(element, {
            scale: hoverScale || 1,
            duration: 0.1,
          });
        });
      }

      // Cleanup
      return () => {
        scrollTrigger.kill();
        if (hoverScale || tapScale) {
          element.removeEventListener("mouseenter", () => {});
          element.removeEventListener("mouseleave", () => {});
          element.removeEventListener("mousedown", () => {});
          element.removeEventListener("mouseup", () => {});
        }
      };
    }, [actualRef, delay, duration, margin, once, hoverScale, tapScale]);

    return (
      <div
        id={id}
        ref={actualRef}
        key={key}
        className={className}
        onClick={onClick}
      >
        {children}
      </div>
    );
  }
);

ScaleInVisible.displayName = "ScaleInVisible";

export default ScaleInVisible;
