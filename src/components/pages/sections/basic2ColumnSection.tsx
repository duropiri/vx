// import SectionHeader from "@/components/ui/sectionHeader";
import {
  // motion,
  MotionValue,
} from "framer-motion";
import React from "react";

interface SectionProps {
  className?: string;
  scrollYProgress?: MotionValue<number>; // Proper type for scrollYProgress
  leftContent?: React.ReactElement;
  rightContent?: React.ReactElement;
}

function Basic2ColumnSection({
  className,
  leftContent,
  rightContent,
}: SectionProps) {
  return (
    <div
      className={`section-container !flex-col ${className} bg-white overflow-hidden`}
    >
      <div className="relative flex size-full min-h-fit max-w-[--section-width] flex-col sm:flex-row items-start justify-between gap-[3rem] sm:gap-[3.75rem]">
        {/* Left Panel */}
        {leftContent && (
          <div className="flex flex-col size-full">{leftContent}</div>
        )}

        {/* Right Panel */}
        {rightContent && (
          <div className="flex flex-col size-full">{rightContent}</div>
        )}
      </div>
    </div>
  );
}

export default Basic2ColumnSection;
