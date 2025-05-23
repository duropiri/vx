"use client";
import ScrollingBanner from "@/components/animations/ScrollingBanner";
import SectionHeader from "@/components/ui/sectionHeader";
import Image from "next/image";
import React, { forwardRef, RefObject, useState } from "react";

const LOGO_DIMENSIONS = {
  height: 48,
} as const;

const logos = [
  [
    {
      src: "/assets/images/partner-logos/marcus-and-millichap.webp",
      alt: "marcus-and-millichap",
      ...LOGO_DIMENSIONS,
    },
    {
      src: "/assets/images/partner-logos/REMAX.webp",
      alt: "REMAX",
      ...LOGO_DIMENSIONS,
    },
    {
      src: "/assets/images/partner-logos/CIR Realty.webp",
      alt: "CIR Realty",
      ...LOGO_DIMENSIONS,
    },
  ],
  [
    {
      src: "/assets/images/partner-logos/Century-21.webp",
      alt: "Century-21",
      ...LOGO_DIMENSIONS,
    },
    {
      src: "/assets/images/partner-logos/Royal_LePage.webp",
      alt: "Royal_LePage",
      ...LOGO_DIMENSIONS,
    },
    {
      src: "/assets/images/partner-logos/EXP-Realty.webp",
      alt: "EXP-Realty",
      ...LOGO_DIMENSIONS,
    },
  ],
  [
    {
      src: "/assets/images/partner-logos/Qualico Properties.webp",
      alt: "Qualico Properties",
      ...LOGO_DIMENSIONS,
    },
    {
      src: "/assets/images/partner-logos/real-broker.webp",
      alt: "real-broker",
      ...LOGO_DIMENSIONS,
    },
    {
      src: "/assets/images/partner-logos/maxwell.webp",
      alt: "maxwell",
      ...LOGO_DIMENSIONS,
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
  noAnimation?: boolean;

  heading?: string;
  subheading?: string;
  body?: string;
}

// Extracted Logo component for better reusability and optimization
const LogoImage = React.memo(({ src, alt }: { src: string; alt: string }) => (
  <div className="relative flex justify-center w-full h-12 mb-12">
    <Image
      src={src}
      alt={alt}
      height={LOGO_DIMENSIONS.height}
      width={500}
      className="pointer-events-none object-contain grayscale saturate-0 h-full w-auto"
      loading="lazy"
      quality={75}
    />
  </div>
));

LogoImage.displayName = "LogoImage";

// Extracted ScrollingLogoColumn component for better organization
const ScrollingLogoColumn = React.memo(
  ({
    logo,
    velocity,
    className = "",
  }: {
    logo: (typeof logos)[0];
    velocity: number;
    className?: string;
  }) => (
    <div
      className={`flex flex-col w-full sm:w-[11.25rem] max-h-[22.5rem] ${className}`}
    >
      <ScrollingBanner
        direction="vertical"
        baseVelocity={velocity}
        className="relative flex w-full sm:w-[11.25rem] max-h-[22.5rem]"
        innerChild="flex flex-col"
      >
        {logo.map((logo, index) => (
          <LogoImage
            key={`${logo.alt}-${index}`}
            src={logo.src}
            alt={logo.alt}
          />
        ))}
      </ScrollingBanner>
    </div>
  )
);

ScrollingLogoColumn.displayName = "ScrollingLogoColumn";

// Gradient overlay component
const GradientOverlay = React.memo(
  ({ position, color }: { position: "top" | "bottom"; color: string }) => (
    <div
      className={`absolute z-10 ${position}-0 w-full h-[7.5rem] bg-gradient-to-${
        position === "top" ? "b" : "t"
      } to-transparent transition-all duration-500`}
      style={
        {
          "--tw-gradient-from": `${color} var(--tw-gradient-from-position)`,
          "--tw-gradient-to":
            "rgb(255 255 255 / 0) var(--tw-gradient-to-position)",
          "--tw-gradient-stops":
            "var(--tw-gradient-from), var(--tw-gradient-to)",
        } as React.CSSProperties
      }
    />
  )
);

GradientOverlay.displayName = "GradientOverlay";

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
      noAnimation = false,
    },
    ref
  ) => {
    const [color] = useState(originalColor);

    const velocities = [200, -200, 200, -200, 200, -200];

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
        <div className="relative flex size-full max-w-[--section-width] flex-col sm:flex-row items-center justify-between gap-[2rem] sm:gap-[2rem]">
          {/* Header */}
          {!full && (
            <SectionHeader
              noCenter
              small
              heading={heading || "Our Partners"}
              subheading={
                subheading || "A Few Of Our Clients In The Real Estate Industry"
              }
              noAnimation={noAnimation}
              noBodyAnimation
              body={body}
            />
          )}

          <div
            className={`select-none relative flex size-full flex-row items-center gap-[2.5rem] max-h-[22.5rem] overflow-hidden ${
              full ? "justify-center" : "justify-end sm:max-w-[50%]"
            }`}
          >
            <GradientOverlay position="top" color={color} />
            <GradientOverlay position="bottom" color={color} />

            {/* First three columns always visible */}
            {logos.map((logoSet, index) => (
              <ScrollingLogoColumn
                key={`column-${index}`}
                logo={logoSet}
                velocity={velocities[index]}
              />
            ))}

            {/* Additional columns for full view */}
            {full &&
              logos.map((logoSet, index) => (
                <ScrollingLogoColumn
                  key={`full-column-${index}`}
                  logo={logoSet}
                  velocity={velocities[index + 3]}
                  className="hidden sm:flex"
                />
              ))}
          </div>
        </div>
      </div>
    );
  }
);

SocialProofSection.displayName = "SocialProofSection";

export default SocialProofSection;
