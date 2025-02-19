"use client";
import SectionHeader from "@/components/ui/sectionHeader";
import React from "react";

interface SectionProps {
  className?: string;
  largeText?: boolean;
  heading?: string;
  subheading?: string;
  body?: string;
  content?: React.ReactElement;
  contentClassName?: string;
  headingClassName?: string;
  subheadingClassName?: string;
  bodyClassName?: string;
  dark?: boolean;
  center?: boolean;
}

function BasicHeroSection({
  className,
  largeText,
  heading,
  headingClassName,
  subheading,
  subheadingClassName,
  body,
  bodyClassName,
  content,
  contentClassName,
  dark,
  center = false,
}: SectionProps) {
  return (
    <div className={`section-container top !flex-col ${className} bg-white relative flex size-full max-w-[--section-width] flex-col items-start justify-between gap-[1.5rem] sm:gap-[3.75rem]`}>
        {/* Header */}
        <SectionHeader
          center={center}
          noCenter={!center}
          noAnimation
          dark={dark}
          largeText={largeText}
          heading={heading}
          headingClassName={headingClassName}
          subheading={subheading}
          subheadingClassName={subheadingClassName}
          body={body}
          bodyClassName={bodyClassName}
        />
        {content && (
          <div className={`${contentClassName} relative flex flex-col items-center size-full`}>
            {content}
          </div>
        )}
    </div>
  );
}

export default BasicHeroSection;
