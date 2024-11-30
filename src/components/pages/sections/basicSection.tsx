// import SectionHeader from "@/components/ui/sectionHeader";
import {
  // motion,
  MotionValue,
} from "framer-motion";
import React from "react";

interface SectionProps {
  className?: string;
  scrollYProgress?: MotionValue<number>; // Proper type for scrollYProgress
  content?: React.ReactElement;
}

function BasicSection({ className, content }: SectionProps) {
  return (
    <div className={`section-container !flex-col ${className} bg-white`}>
      <div className="relative flex size-full max-w-[--section-width] flex-col sm:flex-row items-start justify-between gap-[3rem] sm:gap-[3.75rem]">
        {content && <div className="flex flex-col size-full">{content}</div>}
      </div>
    </div>
  );
}

export default BasicSection;
