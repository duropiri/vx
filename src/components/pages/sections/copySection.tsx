// CopySection.tsx
"use client";
import React, { forwardRef, useRef, useEffect } from "react";
import gsap from "gsap";
import WordByWordOnScroll from "@/components/animations/WordByWordOnScroll";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface SectionProps {
  className?: string;
  copy: React.ReactNode;
  originalColor?: string;
  transitionColor?: string;
}

const CopySection = forwardRef<HTMLDivElement, SectionProps>(
  ({ className, copy, originalColor, transitionColor }, forwardedRef) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const stickyRef = useRef<HTMLDivElement | null>(null);
    const contentRef = useRef<HTMLDivElement | null>(null);
    const [progress, setProgress] = React.useState(0);

    useEffect(() => {
      if (!containerRef.current || !stickyRef.current || !contentRef.current)
        return;

      const st = ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top+=25% center",
        end: "center+=25% center",
        onUpdate: (self) => {
          // Adjust progress to ensure it starts at 0 and ends at 1 within the scroll range
          const adjustedProgress = Math.max(
            0,
            Math.min(1, self.progress * 1.5)
          );
          setProgress(adjustedProgress);
        },
        scrub: 0.5,
      });

      // Scale and blur animation
      gsap.fromTo(
        contentRef.current,
        {
          scale: 0.9,
          filter: "blur(2px)",
        },
        {
          scale: 1,
          filter: "blur(0px)",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top+=25% center",
            end: "center+=25% center",
            scrub: 0.5,
          },
        }
      );

      return () => {
        st.kill();
      };
    }, []);

    return (
      <div
        ref={(node) => {
          containerRef.current = node;
          if (typeof forwardedRef === "function") {
            forwardedRef(node);
          }
        }}
        className={`section-container flex ${className} relative h-[400vh] min-h-[100vh] !justify-start !px-0`}
        style={{ backgroundColor: originalColor }}
        data-original-color={originalColor}
        data-transition-color={transitionColor}
      >
        <div
          ref={stickyRef}
          className="sticky top-0 flex flex-col w-full h-[100vh] items-center justify-center gap-y-[0.75rem] pn-regular-40 uppercase py-[5rem] max-w-[100vw] overflow-hidden"
        >
          <div ref={contentRef}>
            <WordByWordOnScroll
              shadow
              lineStyles={{ marginRight: "0.4ch", marginBottom: "-0.5ch" }}
              className="relative max-w-[28ch]"
              scrollProgress={progress}
            >
              <h2 className="text-center text-ash">{copy}</h2>
            </WordByWordOnScroll>
          </div>
        </div>
      </div>
    );
  }
);

CopySection.displayName = "CopySection";

export default CopySection;