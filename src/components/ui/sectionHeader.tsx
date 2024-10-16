import React, { forwardRef, RefObject } from "react";
import OpacityOnScroll from "../animations/OpacityOnScroll";
import { motion } from "framer-motion";
import { Reveal } from "../animations/Reveal";

interface SectionProps {
  className?: string;
  center?: boolean;
  small?: boolean;
  medium?: boolean;
  dark?: boolean;
  heading?: React.ReactNode | string;
  subheading?: React.ReactNode | string;
  body?: React.ReactNode | string;
  headingRef?: RefObject<HTMLSpanElement>;
  subheadingRef?: RefObject<HTMLHeadingElement>;
  bodyRef?: RefObject<HTMLParagraphElement>;
}

const SectionHeader = forwardRef<HTMLDivElement, SectionProps>(
  (
    {
      className = "",
      center = false,
      small = false,
      medium = false,
      dark = false,
      heading,
      subheading,
      body,
      headingRef,
      subheadingRef,
      bodyRef,
    }: SectionProps,
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={`section-header ${className} ${
          dark ? "text-white" : "text-ash"
        } ${center ? "text-center" : "lg:text-start lg:!items-start"} ${
          small ? "lg:max-w-[45ch]" : ""
        } ${medium ? "lg:max-w-[65ch]" : ""}`}
      >
        <span
          ref={headingRef}
          className={`subheading pn-semibold-16 ${
            dark ? "bg-charcoal text-goldenbrown" : "bg-goldenbrown/25"
          }`}
        >
          {heading}
        </span>
        <Reveal once slide={false}>
          <motion.h2
            ref={subheadingRef}
            className="pn-semibold-48 capitalize leading-snug"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            exit={{ y: -20 }}
          >
            {subheading}
          </motion.h2>
        </Reveal>
        {body && (
          <OpacityOnScroll end={80}>
            <p ref={bodyRef} className="pn-regular-16 max-w-[43.75rem]">
              {body}
            </p>
          </OpacityOnScroll>
        )}
      </div>
    );
  }
);

SectionHeader.displayName = "SectionHeader";

export default SectionHeader;
