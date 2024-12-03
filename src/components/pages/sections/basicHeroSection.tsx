import SectionHeader from "@/components/ui/sectionHeader";
import {
  // motion,
  MotionValue,
} from "framer-motion";
import React from "react";

interface SectionProps {
  className?: string;
  scrollYProgress?: MotionValue<number>; // Proper type for scrollYProgress
  heading?: string;
  subheading?: string;
  body?: string;
  content?: React.ReactElement;
}

function BasicHeroSection({
  className,
  heading,
  subheading,
  body,
  content,
}: SectionProps) {
  return (
    <div className={`section-container !pt-[6rem] lg:!pt-[4rem] !flex-col ${className} bg-white`}>
      <div className="relative flex size-full max-w-[--section-width] flex-col items-start justify-between gap-[1.5rem] sm:gap-[3.75rem]">
        {/* Header */}
        <SectionHeader
          center
          heading={heading}
          subheading={subheading}
          body={body}
        />
        {content && <div className="flex flex-col items-center size-full">{content}</div>}
      </div>
    </div>
  );
}

export default BasicHeroSection;
