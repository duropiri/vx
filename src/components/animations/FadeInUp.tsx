"use client";
import React, { forwardRef, useEffect, useRef, MutableRefObject } from "react";
import { gsap, ScrollTrigger } from "@/utils/gsap";
gsap.registerPlugin(ScrollTrigger)

interface FadeInUpProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  index?: number;
  className?: string;
  delay?: number;
  duration?: number;
  margin?: string;
  id?: string;
  key?: string | number;
  once?: boolean;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  onHover?: gsap.TweenVars;
  onTap?: gsap.TweenVars;
}

const FadeInUp = forwardRef<HTMLDivElement, FadeInUpProps>(
  (
    {
      children,
      index = 0,
      className = "",
      delay = 0.1,
      duration = 0.5,
      margin = "50px",
      id,
      key,
      once = true,
      onClick,
      onHover,
      onTap,
      ...props
    },
    ref
  ) => {
    const elementRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
      const element = elementRef.current;
      if (!element) return;

      gsap.set(element, { opacity: 0, y: 20 });

      const scrollTrigger = ScrollTrigger.create({
        trigger: element,
        start: `top bottom-=${margin}`,
        end: "bottom top",
        onEnter: () => {
          gsap.to(element, {
            opacity: 1,
            y: 0,
            duration: duration,
            delay: (index + 2) * delay,
            ease: "power2.out",
          });
        },
        onLeave: () => {
          if (!once) {
            gsap.to(element, {
              opacity: 0,
              y: 20,
              duration: duration,
            });
          }
        },
        onEnterBack: () => {
          if (!once) {
            gsap.to(element, {
              opacity: 1,
              y: 0,
              duration: duration,
            });
          }
        },
        onLeaveBack: () => {
          if (!once) {
            gsap.to(element, {
              opacity: 0,
              y: 20,
              duration: duration,
            });
          }
        },
      });

      const handleMouseEnter = () => onHover && gsap.to(element, onHover);
      const handleMouseLeave = () => onHover && gsap.to(element, { ...onHover, reverse: true });
      const handleMouseDown = () => onTap && gsap.to(element, onTap);
      const handleMouseUp = () => onTap && gsap.to(element, { ...onTap, reverse: true });

      if (onHover) {
        element.addEventListener('mouseenter', handleMouseEnter);
        element.addEventListener('mouseleave', handleMouseLeave);
      }

      if (onTap) {
        element.addEventListener('mousedown', handleMouseDown);
        element.addEventListener('mouseup', handleMouseUp);
      }

      return () => {
        scrollTrigger.kill();
        if (onHover) {
          element.removeEventListener('mouseenter', handleMouseEnter);
          element.removeEventListener('mouseleave', handleMouseLeave);
        }
        if (onTap) {
          element.removeEventListener('mousedown', handleMouseDown);
          element.removeEventListener('mouseup', handleMouseUp);
        }
      };
    }, [delay, duration, index, margin, once, onHover, onTap]);

    return (
      <div
        id={id}
        ref={(node) => {
          elementRef.current = node;
          if (typeof ref === 'function') {
            ref(node);
          } else if (ref) {
            (ref as MutableRefObject<HTMLDivElement | null>).current = node;
          }
        }}
        key={key}
        className={className}
        onClick={onClick}
        {...props}
      >
        {children}
      </div>
    );
  }
);

FadeInUp.displayName = "FadeInUp";

export default FadeInUp;