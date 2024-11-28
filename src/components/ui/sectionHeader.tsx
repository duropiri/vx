import React, { forwardRef, RefObject } from "react";
import OpacityOnScroll from "../animations/OpacityOnScroll";
import { motion } from "framer-motion";
import { Reveal } from "../animations/Reveal";

interface SectionProps {
  className?: string;
  subheadingClassName?: string;
  headingClassName?: string;
  bodyClassName?: string;
  center?: boolean;
  small?: boolean;
  medium?: boolean;
  dark?: boolean;
  largeText?: boolean;
  heading?: React.ReactNode | string;
  subheading?: React.ReactNode | string;
  body?: React.ReactNode | string;
  headingRef?: RefObject<HTMLSpanElement>;
  subheadingRef?: RefObject<HTMLHeadingElement>;
  subheadingMobileRef?: RefObject<HTMLHeadingElement>; // New ref for mobile
  bodyRef?: RefObject<HTMLParagraphElement>;
}

const SectionHeader = forwardRef<HTMLDivElement, SectionProps>(
  (
    {
      className = "",
      subheadingClassName = "",
      headingClassName = "",
      bodyClassName = "",
      center = false,
      small = false,
      medium = false,
      dark = false,
      largeText = false,
      heading,
      subheading,
      body,
      headingRef,
      subheadingRef,
      subheadingMobileRef, // Add the new ref
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
        {heading && (
          <span
            ref={headingRef}
            className={`subheading ${
              largeText ? "pn-semibold-24" : "pn-semibold-16"
            } ${headingClassName} ${
              dark ? "bg-charcoal text-goldenrod" : "bg-goldenbrown/25"
            }`}
          >
            {heading}
          </span>
        )}

        {subheading && (
          <Reveal once slide={false}>
            <div className="contents">
              <motion.h2
                ref={subheadingRef}
                className={`${subheadingClassName} hidden lg:block ${
                  largeText ? "pn-regular-60" : "pn-semibold-48"
                } capitalize leading-snug`}
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                exit={{ y: -20 }}
              >
                {subheading}
              </motion.h2>
              <motion.h2
                ref={subheadingMobileRef}
                className={`${subheadingClassName} lg:hidden ${
                  largeText ? "pn-semibold-40" : "pn-semibold-24"
                } max-w-[24ch] capitalize leading-snug`}
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                exit={{ y: -20 }}
              >
                {subheading}
              </motion.h2>
            </div>
          </Reveal>
        )}

        {body && (
          <OpacityOnScroll end={80}>
            <p
              ref={bodyRef}
              className={`${bodyClassName} ${
                largeText ? "pn-regular-22" : "pn-regular-16"
              } max-w-[43.75rem]`}
            >
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
