// import OpacityOnScroll from "@/components/animations/OpacityOnScroll";
// import { Reveal } from "@/components/animations/Reveal";
import ScrollingBanner from "@/components/animations/LegacyScrollingBanner";
import SectionHeader from "@/components/ui/sectionHeader";
import { MotionValue } from "framer-motion";
import Image from "next/image";
import React, { forwardRef, RefObject, useState } from "react";

const logos = [
  [
    {
      src: "/images/partner-logos/marcus-and-millichap.webp",
      alt: "Bedrock Homes",
    },
    {
      src: "/images/partner-logos/REMAX.webp",
      alt: "Century 21 All Stars Realty Ltd.",
    },
    {
      src: "/images/partner-logos/CIR Realty.webp",
      alt: "Mutti Homes",
    },
    // {
    //   src: "/images/partner-logos/CIR Realty.webp",
    //   alt: "CIR Realty",
    // },
  ],
  [
    {
      src: "/images/partner-logos/Century-21.webp",
      alt: "EXP Realty",
    },
    {
      src: "/images/partner-logos/Royal_LePage.webp",
      alt: "Century 21 Leading",
    },
    {
      src: "/images/partner-logos/EXP-Realty.webp",
      alt: "Klair Custom Homes LTD.",
    },
    // {
    //   src: "/images/partner-logos/Century 21 Urban.webp",
    //   alt: "Century 21 Urban",
    // },
  ],
  [
    {
      src: "/images/partner-logos/Qualico Properties.webp",
      alt: "Qualico Properties",
    },
    {
      src: "/images/partner-logos/real-broker.webp",
      alt: "Royal LePage Noralta",
    },
    {
      src: "/images/partner-logos/maxwell.webp",
      alt: "Sable Realty",
    },
    // {
    //   src: "/images/partner-logos/MaxWell Central.webp",
    //   alt: "MaxWell Central",
    // },
  ],
];

interface SectionProps {
  scrollYProgress?: MotionValue<number>;
  className?: string;
  full?: boolean;
  originalColor?: string;
  transitionColor?: string;
  ref?: RefObject<HTMLDivElement>;
  id?: string;

  heading?: string;
  subheading?: string;
  body?: string;
}

const SocialProofSection = forwardRef<HTMLDivElement, SectionProps>(
  (
    {
      className = "",
      full = false,
      originalColor = "#FFFFFF",
      transitionColor = "#FFFFFF",
      id,
      heading,
      subheading,
      body,
    },
    ref
  ) => {
    const [color] = useState(originalColor);

    const commonProps = {
      id,
    };

    return (
      <div
        {...commonProps}
        ref={ref}
        className={`section-container sm:!flex-row !py-[3.125rem] ${className} min-h-[60vh]`}
        style={{ backgroundColor: color }} // Use the passed color
        data-original-color={originalColor}
        data-transition-color={transitionColor}
      >
        <div className="relative flex size-full max-w-[--section-width] flex-col sm:flex-row items-center justify-between gap-y-[2rem] sm:gap-y-[2rem]">
          {/* Header */}
          <SectionHeader
            medium
            className={`${full ? "!hidden" : ""}`}
            heading={heading || "Our Partners"}
            subheading={
              subheading || "A Few Of Our Clients In The Real Estate Industry"
            }
            body={body}
          />

          <div
            className={`select-none relative flex size-full flex-row items-center gap-[2.5rem] max-h-[22.5rem] overflow-hidden ${
              full ? "justify-center" : "justify-end sm:max-w-[50%]"
            }`}
          >
            {/* Gradient Top */}
            <div
              className={`absolute z-10 top-0 w-full h-[7.5rem] bg-gradient-to-b to-transparent transition-all duration-500`}
              style={
                {
                  "--tw-gradient-from": `${color} var(--tw-gradient-from-position)`,
                  "--tw-gradient-to": `rgb(255 255 255 / 0) var(--tw-gradient-to-position)`,
                  "--tw-gradient-stops":
                    "var(--tw-gradient-from), var(--tw-gradient-to)",
                } as React.CSSProperties
              }
            />
            {/* Gradient Bottom */}
            <div
              className={`absolute z-10 bottom-0 w-full h-[7.5rem] bg-gradient-to-t to-transparent transition-all duration-500`}
              style={
                {
                  "--tw-gradient-from": `${color} var(--tw-gradient-from-position)`,
                  "--tw-gradient-to": `rgb(255 255 255 / 0) var(--tw-gradient-to-position)`,
                  "--tw-gradient-stops":
                    "var(--tw-gradient-from), var(--tw-gradient-to)",
                } as React.CSSProperties
              }
            />
            <div className="relative flex w-[11.25rem] max-h-[22.5rem]">
              <ScrollingBanner
                direction="vertical"
                baseVelocity={250}
                className="flex flex-col"
                innerChild="flex flex-col gap-[3rem]"
              >
                {logos[0].map((logo, index) => (
                  <Image
                    key={index}
                    src={logo.src}
                    alt={logo.alt}
                    width={200}
                    height={48}
                    className="pointer-events-none h-[3rem] w-full aspect-auto object-contain grayscale saturate-0"
                    // placeholder="blur"
                    quality={80}
                  />
                ))}
              </ScrollingBanner>
            </div>
            <div className="flex flex-col w-[11.25rem] max-h-[22.5rem]">
              <ScrollingBanner
                direction="vertical"
                baseVelocity={-250}
                className="flex flex-col"
                innerChild="flex flex-col gap-[3rem]"
              >
                {logos[1].map((logo, index) => (
                  <Image
                    key={index}
                    src={logo.src}
                    alt={logo.alt}
                    width={200}
                    height={48}
                    className="pointer-events-none h-[3rem] w-full aspect-auto object-contain grayscale saturate-0"
                    // placeholder="blur"
                    quality={80}
                  />
                ))}
              </ScrollingBanner>
            </div>
            <div className="flex flex-col w-[11.25rem] max-h-[22.5rem]">
              <ScrollingBanner
                direction="vertical"
                baseVelocity={250}
                className="flex flex-col"
                innerChild="flex flex-col gap-[3rem]"
              >
                {logos[2].map((logo, index) => (
                  <Image
                    key={index}
                    src={logo.src}
                    alt={logo.alt}
                    width={200}
                    height={48}
                    className="pointer-events-none h-[3rem] w-full aspect-auto object-contain grayscale saturate-0"
                    // placeholder="blur"
                    quality={80}
                  />
                ))}
              </ScrollingBanner>
            </div>
            <div
              className={`${
                full ? "hidden sm:flex" : "hidden"
              } flex-col w-[11.25rem] max-h-[22.5rem]`}
            >
              <ScrollingBanner
                direction="vertical"
                baseVelocity={-250}
                className="flex flex-col"
                innerChild="flex flex-col gap-[3rem]"
              >
                {logos[0].map((logo, index) => (
                  <Image
                    key={index}
                    src={logo.src}
                    alt={logo.alt}
                    width={200}
                    height={48}
                    className="pointer-events-none h-[3rem] w-full aspect-auto object-contain grayscale saturate-0"
                    // placeholder="blur"
                    quality={80}
                  />
                ))}
              </ScrollingBanner>
            </div>
            <div
              className={`${
                full ? "hidden sm:flex" : "hidden"
              } flex-col w-[11.25rem] max-h-[22.5rem]`}
            >
              <ScrollingBanner
                direction="vertical"
                baseVelocity={250}
                className="flex flex-col"
                innerChild="flex flex-col gap-[3rem]"
              >
                {logos[1].map((logo, index) => (
                  <Image
                    key={index}
                    src={logo.src}
                    alt={logo.alt}
                    width={200}
                    height={48}
                    className="pointer-events-none h-[3rem] w-full aspect-auto object-contain grayscale saturate-0"
                    // placeholder="blur"
                    quality={80}
                  />
                ))}
              </ScrollingBanner>
            </div>
            <div
              className={`${
                full ? "hidden sm:flex" : "hidden"
              } flex-col w-[11.25rem] max-h-[22.5rem]`}
            >
              <ScrollingBanner
                direction="vertical"
                baseVelocity={-250}
                className="flex flex-col"
                innerChild="flex flex-col gap-[3rem]"
              >
                {logos[2].map((logo, index) => (
                  <Image
                    key={index}
                    src={logo.src}
                    alt={logo.alt}
                    width={200}
                    height={48}
                    className="pointer-events-none h-[3rem] w-full aspect-auto object-contain grayscale saturate-0"
                    // placeholder="blur"
                    quality={80}
                  />
                ))}
              </ScrollingBanner>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

SocialProofSection.displayName = "SocialProofSection";

export default SocialProofSection;
