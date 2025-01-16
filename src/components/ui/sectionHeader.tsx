"use client";
import React, { forwardRef, RefObject } from "react";
// import OpacityOnScroll from "../animations/OpacityOnScroll";
// import { Reveal } from "../animations/Reveal";
import LetterRevealOnScroll from "../animations/LetterRevealOnScroll";

interface SectionProps {
  className?: string;
  subheadingClassName?: string;
  headingClassName?: string;
  bodyClassName?: string;
  center?: boolean;
  noCenter?: boolean;
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
  noAnimation?: boolean;
  noSubheadingAnimation?: boolean;
  noBodyAnimation?: boolean;
}

const SectionHeader = forwardRef<HTMLDivElement, SectionProps>(
  (
    {
      className = "",
      subheadingClassName = "",
      headingClassName = "",
      bodyClassName = "",
      center = false,
      noCenter = false,
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
      noAnimation = true, // New prop to disable animations
      noSubheadingAnimation = false, // New prop to disable animations
      noBodyAnimation = false, // New prop to disable animations
    }: SectionProps,
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={`section-header ${className} ${
          dark ? "text-white" : "text-ash"
        } ${center ? "text-center" : "sm:text-start !items-start"} ${
          small ? "sm:max-w-[30vw]" : ""
        } ${medium ? "sm:max-w-[50vw]" : ""}`}
      >
        {heading && (
          <span
            ref={headingRef}
            className={`subheading mb-[1rem] ${
              largeText ? "pn-semibold-24" : "pn-semibold-16"
            } ${headingClassName} ${
              dark ? "bg-charcoal text-goldenrod" : "bg-goldenbrown/25"
            }`}
          >
            {heading}
          </span>
        )}

        {subheading && (
          <div className="contents">
            {!noAnimation && !noSubheadingAnimation ? (
              <LetterRevealOnScroll end="bottom 60%">
                <div className="contents">
                  <h2
                    ref={subheadingRef}
                    className={`${subheadingClassName} hidden -space-y-[10rem] sm:block ${
                      largeText ? "pn-regular-72" : "pn-semibold-40"
                    } capitalize leading-snug text-start`}
                  >
                    {subheading}
                  </h2>
                  <h2
                    ref={subheadingMobileRef}
                    className={`${subheadingClassName} ${
                      noCenter && "text-start"
                    } sm:hidden ${
                      largeText ? "pn-semibold-40" : "pn-semibold-24"
                    } ${
                      medium ? "sm:max-w-[24ch]" : ""
                    } capitalize leading-snug w-full text-start`}
                  >
                    {subheading}
                  </h2>
                </div>
              </LetterRevealOnScroll>
            ) : (
              <div className="contents">
                <h2
                  ref={subheadingRef}
                  className={`${subheadingClassName} hidden -space-y-[10rem] sm:block ${
                    largeText ? "pn-regular-72" : "pn-semibold-40"
                  } capitalize leading-snug`}
                >
                  {subheading}
                </h2>
                <h2
                  ref={subheadingMobileRef}
                  className={`${subheadingClassName} ${
                    noCenter && "text-start"
                  } sm:hidden ${
                    largeText ? "pn-semibold-72" : "pn-semibold-40"
                  } ${medium ? "sm:max-w-[24ch]" : ""} capitalize leading-snug w-full sm:text-start`}
                >
                  {subheading}
                </h2>
              </div>
            )}
          </div>
        )}

        {body && (
          <div className="contents">
            {!noAnimation && !noBodyAnimation ? (
              <LetterRevealOnScroll end="bottom 60%">
                <p
                  ref={bodyRef}
                  className={`${bodyClassName} ${noCenter && "text-start"} ${
                    largeText ? "pn-regular-20" : "pn-regular-20"
                  } sm:max-w-[50vw]`}
                >
                  {body}
                </p>
              </LetterRevealOnScroll>
            ) : (
              <p
                ref={bodyRef}
                className={`${bodyClassName} ${noCenter && "text-start"} ${
                  largeText ? "pn-regular-20" : "pn-regular-20"
                } sm:max-w-[50vw] text-start`}
              >
                {body}
              </p>
            )}
          </div>
        )}
      </div>
    );
  }
);

SectionHeader.displayName = "SectionHeader";

export default SectionHeader;
