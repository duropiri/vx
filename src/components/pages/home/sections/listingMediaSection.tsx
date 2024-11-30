import { MotionValue } from "framer-motion";
import React, { forwardRef } from "react";

interface SectionProps {
    className?: string;
    scrollYProgress?: MotionValue<number>;
    content?: React.ReactElement;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
    style?: React.CSSProperties;
    ref?: React.Ref<HTMLDivElement>;
  }

const ListingMediaSection = forwardRef<HTMLDivElement, SectionProps>(
  ({ className, content, onMouseEnter, onMouseLeave, style }, ref) => {
    return (
      <div
        ref={ref}
        className={`relative flex !flex-col ${className} bg-white`}
        style={style}
        onMouseEnter={(e) => {
          // Prevent event bubbling if needed
          e.stopPropagation();
          onMouseEnter?.();
        }}
        onMouseLeave={(e) => {
          // Prevent event bubbling if needed
          e.stopPropagation();
          onMouseLeave?.();
        }}
      >
        <div className="relative flex size-full max-w-[--section-width] flex-col sm:flex-row items-start justify-between gap-[3rem] sm:gap-[3.75rem]">
          {content && <div className="relative flex flex-col size-full">{content}</div>}
        </div>
      </div>
    );
  }
);

// Add display name for dev tools
ListingMediaSection.displayName = "ListingMediaSection";

export default ListingMediaSection;
