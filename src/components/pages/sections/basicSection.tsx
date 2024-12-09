// import SectionHeader from "@/components/ui/sectionHeader";
import React, { forwardRef, useRef, useState } from "react";

interface SectionProps {
  className?: string;
  content?: React.ReactElement;
  originalColor?: string;
  transitionColor?: string;
  id?: string;
}

const BasicSection = forwardRef<HTMLDivElement, SectionProps>(
  (
    { className, content, originalColor, transitionColor, id, ...props },
    forwardedRef
  ) => {
    const containerRef =
      useRef() as React.MutableRefObject<HTMLDivElement | null>;

    const commonProps = {
      id,
    };

    return (
      <div
        ref={(node) => {
          containerRef.current = node;
          if (typeof forwardedRef === "function") {
            forwardedRef(node);
          }
        }}
        className={`section-container !flex-col ${className}`}
        style={{ backgroundColor: originalColor }}
        data-original-color={originalColor}
        data-transition-color={transitionColor}
        {...commonProps}
      >
        <div className="relative flex size-full min-h-fit max-w-[--section-width] flex-col sm:flex-row items-start justify-between gap-[3rem] sm:gap-[3.75rem]">
          {content && <div className="flex flex-col size-full">{content}</div>}
        </div>
      </div>
    );
  }
);

BasicSection.displayName = "BasicSection";

export default BasicSection;
