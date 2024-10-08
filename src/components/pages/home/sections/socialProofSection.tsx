import ScrollingBanner from "@/components/animations/ScrollingBanner";
import SectionHeader from "@/components/ui/sectionHeader";
import Image from "next/image";
import React from "react";

interface SectionProps {
  className?: string;
  full?: boolean;
}

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

function SocialProofSection({ className = "", full = false }: SectionProps) {
  return (
    <div className={`section-container lg:!flex-row ${className}`}>
      <div className="relative flex size-full max-w-[87.5rem] flex-col lg:flex-row items-center justify-between gap-y-[1rem] lg:gap-y-[2rem]">
        {/* Header */}
        <SectionHeader
          small
          className={`${full ? "!hidden" : ""}`}
          heading="Our Partners"
          subheading="A Few Of Our Clients In The Real Estate Industry"
        />

        <div
          className={`relative flex size-full flex-row items-center gap-[2.5rem] max-h-[22.5rem] overflow-hidden ${
            full ? "justify-center" : "justify-end lg:max-w-[50%]"
          }`}
        >
          <div className="absolute z-10 top-0 w-full h-[7.5rem] bg-gradient-to-b from-white to-transparent" />
          <div className="absolute z-10 bottom-0 w-full h-[7.5rem] bg-gradient-to-t from-white to-transparent" />
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

export default SocialProofSection;
