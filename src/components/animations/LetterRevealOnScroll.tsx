"use client";

import React, { useEffect, useRef, useState } from "react";

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

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const loadGSAP = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      if (!isClient || !containerRef.current) return;

      const chars = containerRef.current.querySelectorAll(".char");

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
    };

    loadGSAP();
  }, [isClient, staggerDuration, start, end, duration, markers]);

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
