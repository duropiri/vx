import React, { forwardRef, useRef, useState } from "react";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import WordByWordOnScroll from "@/components/animations/WordByWordOnScroll";

interface SectionProps {
  className?: string;
  copy: React.ReactNode;
  originalColor?: string;
  transitionColor?: string;
  scrollYProgress?: MotionValue<number>;
}

const CopySection = forwardRef<HTMLDivElement, SectionProps>(
  ({ className, copy, originalColor, transitionColor }, forwardedRef) => {
    const [color] = useState(originalColor);
    const containerRef =
      useRef() as React.MutableRefObject<HTMLDivElement | null>;
    const stickyRef = useRef() as React.MutableRefObject<HTMLDivElement | null>;

    const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ["start start", "end start"],
    });

    // Transform the scroll progress to only animate during the sticky section
    const transformedProgress = useTransform(scrollYProgress, (latest) => {
      if (!containerRef.current || !stickyRef.current) return 0;

      const containerHeight = containerRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;
      const scrollableDistance = containerHeight - viewportHeight;

      // Map the scroll progress to start later and end earlier
      const startThreshold = 0.1;
      const endThreshold = 2;

      // Normalize progress to the start/end thresholds
      const normalizedProgress =
        (latest - startThreshold) / (endThreshold - startThreshold);

      // Calculate progress only during the sticky section
      const progress = Math.max(
        0,
        Math.min(1, (normalizedProgress * scrollableDistance) / viewportHeight)
      );

      return progress;
    });

    // Create scale animation based on scroll progress
    const scale = useTransform(
      transformedProgress,
      [0, 0.85, 1],
      [0.9, 1, 1]
    );

    const blur = useTransform(
      transformedProgress,
      [0.1, 0.2, 0.85, 1],
      ["blur(2px)", "blur(0px)", "blur(0px)", "blur(0px)"] // Convert blur values to CSS blur filter
    );
    const opacity = useTransform(
      transformedProgress,
      [0, 0.2, 0.85, 1],
      [1, 1, 1, 1]
    );

    return (
      <motion.div
        ref={(node) => {
          containerRef.current = node;
          if (typeof forwardedRef === "function") {
            forwardedRef(node);
          }
        }}
        className={`section-container flex ${className} relative h-[400vh] min-h-[100vh] !justify-start !px-0`}
        style={{ backgroundColor: color }}
        data-original-color={originalColor}
        data-transition-color={transitionColor}
      >
        <div
          ref={stickyRef}
          className="sticky top-0 flex flex-col w-full h-[100vh] items-center justify-center gap-y-[0.75rem] pn-regular-60 uppercase py-[5rem] max-w-[100vw] overflow-hidden"
        >
          {/* <LetterRevealOnScroll end="bottom 40%" className="relative">
            <h2 className="text-center text-ash max-w-[28ch]">{copy}</h2>
          </LetterRevealOnScroll> */}
          <motion.div style={{ scale, filter: blur, opacity }}>
            <WordByWordOnScroll
              shadow
              lineStyles={{ marginRight: "0.4ch", marginBottom: "-0.5ch" }}
              className="relative max-w-[28ch]"
              scrollProgress={transformedProgress}
            >
              <h2 className="text-center text-ash">{copy}</h2>
            </WordByWordOnScroll>
          </motion.div>
        </div>
      </motion.div>
    );
  }
);

CopySection.displayName = "CopySection";

export default CopySection;
