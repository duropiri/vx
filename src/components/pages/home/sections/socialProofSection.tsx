import ScrollingBanner from "@/components/animations/ScrollingBanner";
import SectionHeader from "@/components/ui/sectionHeader";
import Image from "next/image";
import React, { forwardRef, RefObject, useState } from "react";

const logos = [
  [
    {
      src: "/images/Bedrock Homes.webp",
      alt: "Bedrock Homes",
    },
    {
      src: "/images/Century 21 All Stars Realty.webp",
      alt: "Century 21 All Stars Realty Ltd.",
    },
    {
      src: "/images/Mutti Homes.webp",
      alt: "Mutti Homes",
    },
    {
      src: "/images/CIR Realty.webp",
      alt: "CIR Realty",
    },
  ],
  [
    {
      src: "/images/EXP Realty.webp",
      alt: "EXP Realty",
    },
    {
      src: "/images/Century 21 Leading.webp",
      alt: "Century 21 Leading",
    },
    {
      src: "/images/Klair Custom Homes LTD.webp",
      alt: "Klair Custom Homes LTD.",
    },
    {
      src: "/images/Century 21 Urban.webp",
      alt: "Century 21 Urban",
    },
  ],
  [
    {
      src: "/images/Qualico Properties.webp",
      alt: "Qualico Properties",
    },
    {
      src: "/images/Royal LePage Noralta.webp",
      alt: "Royal LePage Noralta",
    },
    {
      src: "/images/Sable Realty.webp",
      alt: "Sable Realty",
    },
    {
      src: "/images/MaxWell Central.webp",
      alt: "MaxWell Central",
    },
  ],
];

interface SectionProps {
  className?: string;
  full?: boolean;
  originalColor?: string;
  transitionColor?: string;
  ref?: RefObject<HTMLDivElement>;
  id?: string;
}

const SocialProofSection = forwardRef<HTMLDivElement, SectionProps>(
  (
    {
      className = "",
      full = false,
      originalColor = "#FFFFFF",
      transitionColor = "#FFFFFF",
      id,
    },
    ref
  ) => {
    const [color, setColor] = useState(originalColor);

    const commonProps = {
      id,
    };

    return (
      <div
        {...commonProps}
        ref={ref}
        className={`section-container lg:!flex-row ${className}`}
        style={{ backgroundColor: color }} // Use the passed color
        data-original-color={originalColor}
        data-transition-color={transitionColor}
      >
        <div className="relative flex size-full max-w-[87.5rem] flex-col lg:flex-row items-center justify-between gap-y-[1rem] lg:gap-y-[2rem]">
          {/* Header */}
          <SectionHeader
            small
            className={`${full ? "!hidden" : ""}`}
            heading="Our Partners"
            subheading="A Few Of Our Clients In The Real Estate Industry"
          />

          <div
            className={`select-none relative flex size-full flex-row items-center gap-[2.5rem] max-h-[22.5rem] overflow-hidden ${
              full ? "justify-center" : "justify-end lg:max-w-[50%]"
            }`}
          >
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
            <div className="relative flex w-[11.25rem]">
              <ScrollingBanner
                direction="vertical"
                baseVelocity={250}
                className="flex flex-col"
                innerChild="flex flex-col gap-[1.5rem]"
              >
                {logos[0].map((logo, index) => (
                  <Image
                    key={index}
                    src={logo.src}
                    alt={logo.alt}
                    width={200}
                    height={48}
                    className="pointer-events-none h-[3rem] w-full object-contain grayscale saturate-0"
                  />
                ))}
              </ScrollingBanner>
            </div>
            <div className="flex flex-col w-[11.25rem]">
              <ScrollingBanner
                direction="vertical"
                baseVelocity={-250}
                className="flex flex-col"
                innerChild="flex flex-col gap-[1.5rem]"
              >
                {logos[1].map((logo, index) => (
                  <Image
                    key={index}
                    src={logo.src}
                    alt={logo.alt}
                    width={200}
                    height={48}
                    className="pointer-events-none h-[3rem] w-full object-contain grayscale saturate-0"
                  />
                ))}
              </ScrollingBanner>
            </div>
            <div className="flex flex-col w-[11.25rem]">
              <ScrollingBanner
                direction="vertical"
                baseVelocity={250}
                className="flex flex-col"
                innerChild="flex flex-col gap-[1.5rem]"
              >
                {logos[2].map((logo, index) => (
                  <Image
                    key={index}
                    src={logo.src}
                    alt={logo.alt}
                    width={200}
                    height={48}
                    className="pointer-events-none h-[3rem] w-full object-contain grayscale saturate-0"
                  />
                ))}
              </ScrollingBanner>
            </div>
            <div
              className={`${
                full ? "hidden lg:flex" : "hidden"
              } flex-col w-[11.25rem]`}
            >
              <ScrollingBanner
                direction="vertical"
                baseVelocity={-250}
                className="flex flex-col"
                innerChild="flex flex-col gap-[1.5rem]"
              >
                {logos[0].map((logo, index) => (
                  <Image
                    key={index}
                    src={logo.src}
                    alt={logo.alt}
                    width={200}
                    height={48}
                    className="pointer-events-none h-[3rem] w-full object-contain grayscale saturate-0"
                  />
                ))}
              </ScrollingBanner>
            </div>
            <div
              className={`${
                full ? "hidden lg:flex" : "hidden"
              } flex-col w-[11.25rem]`}
            >
              <ScrollingBanner
                direction="vertical"
                baseVelocity={250}
                className="flex flex-col"
                innerChild="flex flex-col gap-[1.5rem]"
              >
                {logos[1].map((logo, index) => (
                  <Image
                    key={index}
                    src={logo.src}
                    alt={logo.alt}
                    width={200}
                    height={48}
                    className="pointer-events-none h-[3rem] w-full object-contain grayscale saturate-0"
                  />
                ))}
              </ScrollingBanner>
            </div>
            <div
              className={`${
                full ? "hidden lg:flex" : "hidden"
              } flex-col w-[11.25rem]`}
            >
              <ScrollingBanner
                direction="vertical"
                baseVelocity={-250}
                className="flex flex-col"
                innerChild="flex flex-col gap-[1.5rem]"
              >
                {logos[2].map((logo, index) => (
                  <Image
                    key={index}
                    src={logo.src}
                    alt={logo.alt}
                    width={200}
                    height={48}
                    className="pointer-events-none h-[3rem] w-full object-contain grayscale saturate-0"
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

export default SocialProofSection;
