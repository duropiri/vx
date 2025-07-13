"use client";
import ScrollingBanner from "@/components/animations/ScrollingBanner";
import SectionHeader from "@/components/ui/sectionHeader";
const MarcusAndMillichap = "/assets/svgs/partner-logos/marcus-and-millichap.svg";
const Remax = "/assets/svgs/partner-logos/REMAX.svg";
const CirRealty = "/assets/svgs/partner-logos/CIR Realty.svg";
const Century21 = "/assets/svgs/partner-logos/Century-21.svg";
const RoyalLePage = "/assets/svgs/partner-logos/Royal_LePage.svg";
const ExpRealty = "/assets/svgs/partner-logos/EXP-Realty.svg";
const QualicoProperties = "/assets/svgs/partner-logos/Qualico Properties.svg";
const RealBroker = "/assets/svgs/partner-logos/real-broker.svg";
const MaxwellLogo = "/assets/svgs/partner-logos/maxwell.svg";
import React, { forwardRef, RefObject, useState } from "react";


const logos: { src: string; alt: string }[][] = [
  [
    { src: MarcusAndMillichap, alt: "Marcus & Millichap" },
    { src: Remax, alt: "RE/MAX" },
    { src: CirRealty, alt: "CIR Realty" },
  ],
  [
    { src: Century21, alt: "Century 21" },
    { src: RoyalLePage, alt: "Royal LePage" },
    { src: ExpRealty, alt: "EXP Realty" },
  ],
  [
    { src: QualicoProperties, alt: "Qualico Properties" },
    { src: RealBroker, alt: "Real Broker" },
    { src: MaxwellLogo, alt: "Maxwell" },
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
const LogoImage = React.memo(
  ({ src, alt }: { src: string; alt: string }) => (
    <div className="relative flex justify-center w-full h-12 mb-12">
      <img
        src={src}
        alt={alt}
        className="pointer-events-none object-contain grayscale saturate-0 w-full h-full"
        draggable={false}
      />
    </div>
  )
);

LogoImage.displayName = "LogoImage";

// Extracted ScrollingLogoColumn component for better organization
const ScrollingLogoColumn = React.memo(
  ({
    logo,
    velocity,
    className = "",
  }: {
    logo: { src: string; alt: string }[];
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
        {logo.map((logoObj, index) => (
          <LogoImage key={`logo-${index}`} src={logoObj.src} alt={logoObj.alt} />
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
      } to-transparent transition-all duration-500 pointer-events-none`}
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
