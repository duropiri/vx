"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger } from "@/utils/gsap";
import { useViewport } from "@/contexts/ViewportContext";
gsap.registerPlugin(ScrollTrigger);

interface AnimationProps {
  children: React.ReactNode;
  className?: string;
  staggerDuration?: number;
  duration?: number;
  start?: string;
  end?: string;
  markers?: boolean;
}

const LetterRevealOnScroll: React.FC<AnimationProps> = ({
  children,
  className,
  staggerDuration = 0.0005,
  duration = 0.25,
  start = "top bottom",
  end = "bottom bottom",
  markers = false,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);
  const { windowWidth } = useViewport();

  useEffect(() => {
    setIsClient(true);
  }, [windowWidth]);

  useEffect(() => {
    if (!isClient || !containerRef.current) return;

    // Convert NodeList to Array and ensure elements exist
    const chars = Array.from(containerRef.current.querySelectorAll(".char"));

    if (chars.length === 0) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: start,
        end: end,
        scrub: 1,
        markers: markers,
      },
    });

    tl.fromTo(
      chars,
      { y: "100%", opacity: 0 },
      {
        y: "0%",
        opacity: 1,
        duration: duration,
        stagger: {
          each: staggerDuration,
          from: "start",
        },
        ease: "none",
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [isClient, staggerDuration, start, end, duration, markers, windowWidth]);

  const splitText = (node: React.ReactNode): React.ReactNode => {
    if (typeof node === "string") {
      return node.split(/(\S+)/).map((part, index) => {
        if (/\S/.test(part)) {
          return (
            <span
              key={index}
              className="word"
              style={{ display: "inline-block", overflow: "hidden" }}
            >
              {part.split("").map((char, charIndex) => (
                <span
                  key={charIndex}
                  className="char"
                  style={{ display: "inline-block" }}
                >
                  {char}
                </span>
              ))}
            </span>
          );
        }
        return part;
      });
    }
    if (React.isValidElement(node)) {
      return React.cloneElement(
        node,
        node.props,
        React.Children.map(node.props.children, splitText)
      );
    }
    return node;
  };

  const processedChildren = React.Children.map(children, splitText);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ position: "relative" }}
    >
      {processedChildren}
    </div>
  );
};

export default LetterRevealOnScroll;
