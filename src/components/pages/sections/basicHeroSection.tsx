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
    <div className={`section-container !pt-[6rem] lg:!pt-[3.125rem] !flex-col ${className} bg-white`}>
      <div className="relative flex size-full max-w-[87.5rem] flex-col items-start justify-between gap-[1.5rem] lg:gap-[3.75rem]">
        {/* Header */}
        <SectionHeader
          center
          heading={heading}
          subheading={subheading}
          body={body}
        />
        {content && <div className="flex flex-col size-full">{content}</div>}
      </div>
    </div>
  );
}

export default BasicHeroSection;
