import LetterRevealOnScroll from "@/components/animations/LetterRevealOnScroll";
import React from "react";

interface SectionProps {
  className?: string;
  copy?: React.ReactNode;
}

function CopySection({ className, copy }: SectionProps) {
  return (
    <div className={`section-container flex ${className}`}>
      <div className="flex flex-col items-start gap-y-[0.75rem] pn-regular-96 uppercase py-[5rem]">
        <LetterRevealOnScroll className="relative">
          <h2 className="text-center text-ash max-w-[28ch]">{copy}</h2>
        </LetterRevealOnScroll>
      </div>
    </div>
  );
}

export default CopySection;
