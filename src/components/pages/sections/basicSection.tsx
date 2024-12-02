// import SectionHeader from "@/components/ui/sectionHeader";
import { motion, MotionValue, useScroll } from "framer-motion";
import React, { forwardRef, useRef, useState } from "react";

interface SectionProps {
  className?: string;
  scrollYProgress?: MotionValue<number>; // Proper type for scrollYProgress
  content?: React.ReactElement;
  originalColor?: string;
  transitionColor?: string;
}

const BasicSection = forwardRef<HTMLDivElement, SectionProps>(
  ({ className, content, originalColor, transitionColor }, forwardedRef) => {
    const [color] = useState(originalColor);
    const containerRef =
      useRef() as React.MutableRefObject<HTMLDivElement | null>;
    const stickyRef = useRef() as React.MutableRefObject<HTMLDivElement | null>;

    const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ["start start", "end start"],
    });

    return (
      <motion.div
        ref={(node) => {
          containerRef.current = node;
          if (typeof forwardedRef === "function") {
            forwardedRef(node);
          }
        }}
        className={`section-container !flex-col ${className}`}
        style={{ backgroundColor: color }}
        data-original-color={originalColor}
        data-transition-color={transitionColor}
      >
        <div className="relative flex size-full max-w-[--section-width] flex-col sm:flex-row items-start justify-between gap-[3rem] sm:gap-[3.75rem]">
          {content && <div className="flex flex-col size-full">{content}</div>}
        </div>
      </motion.div>
    );
  }
);

export default BasicSection;
