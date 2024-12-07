import SectionHeader from "@/components/ui/sectionHeader";
import { motion, MotionValue, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { WhyUsItems } from "@/data/whyUsItems";
import ScrollingBanner from "@/components/animations/LegacyScrollingBanner";
import Image from "next/image";
import vxImage from "@/../../public/assets/svgs/virtual-xposure-text.svg";
import FadeInUp from "@/components/animations/FadeInUp";

interface SectionProps {
  className?: string;
  scrollYProgress: MotionValue<number>;
  shrinkSize?: number;
  rotationAmount?: number;
}

function WhyUsSection({
  className,
  scrollYProgress,
  shrinkSize = 0,
  rotationAmount = -45,
}: SectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scale = useTransform(scrollYProgress, [0, 1], [1, shrinkSize]);

  const rotate = useTransform(scrollYProgress, [0, 1], [0, rotationAmount]);

  const blur = useTransform(
    scrollYProgress,
    [0, 1],
    ["blur(0px)", "blur(2.5px)"] // Use actual blur values with units
  );

  return (
    <div
      ref={sectionRef}
      id="why"
      className={`sticky top-0 section-container !flex-row ${className} bg-ash relative overflow-hidden`}
    >
      {/* Background Text Parallax */}
      <div className="select-none absolute pointer-events-none top-0 flex flex-col h-full w-[100vw] text-goldenbrown gap-y-[10.625rem] max-w-[100vw] overflow-hidden">
        <ScrollingBanner
          baseVelocity={10}
          child="flex flex-row items-center gap-x-[9.375rem]"
          innerChild="size-max"
        >
          <Image
            alt="virtual xposure"
            src={vxImage}
            className="size-full"
            quality={75}
          />
        </ScrollingBanner>
        <ScrollingBanner
          baseVelocity={-10}
          child="flex flex-row items-center gap-x-[9.375rem]"
          innerChild="size-max"
        >
          <Image
            alt="virtual xposure"
            src={vxImage}
            className="size-full"
            quality={75}
          />
        </ScrollingBanner>
      </div>
      <motion.div style={{ scale, rotate, filter: blur }}>
        <div className="relative flex size-full max-w-[--section-width] flex-col items-start justify-between gap-[5rem] sm:gap-[3.75rem]">
          {/* Header */}
          <SectionHeader
            dark
            center
            noBodyAnimation
            heading="Why Us?"
            subheading="Why Choose Virtual Xposure?"
            body="We deliver excellence at every level, combining cutting-edge technology with unmatched customer service. Our proven track record and comprehensive solutions ensure your success, backed by industry-leading guarantees and lightning-fast delivery."
          />
          <div className="hidden sm:grid grid-cols-4 gap-[1rem] sm:gap-[2rem] sm:mt-[5rem]">
            {WhyUsItems.map((item, index) => (
              <FadeInUp
                key={index + 4}
                className="flex flex-col items-center justify-center gap-[0.625rem] mb-[0.625rem]"
              >
                <div className="cursor-select-hover group flex flex-grow flex-col items-center sm:p-[1rem] hover:-translate-y-1 transition-all duration-200 w-full self-stretch">
                  <div className="flex flex-col items-center justify-center gap-[1rem] sm:gap-[2rem]">
                    <div className="transition-all duration-300 group-hover:scale-110 group-hover:text-goldenbrown group-hover:grayscale-0 text-white/90 size-[3rem] sm:size-[4rem]">
                      {item.icon}
                    </div>
                    <div className="w-full text-center pn-semibold-16 text-white/90 group-hover:text-white transition-all duration-300 !leading-[1.3rem] max-w-[20ch] text-wrap">
                      {item.title}
                    </div>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
          <ScrollingBanner
            baseVelocity={-25}
            className="sm:hidden flex flex-row"
            innerChild="flex flex-row gap-[3rem]"
          >
            {WhyUsItems.map((item, index) => (
              <FadeInUp
                key={index + 4}
                className="flex flex-col items-center justify-center gap-[0.625rem] mb-[0.625rem]"
              >
                <div className="cursor-select-hover group flex flex-grow flex-col items-center sm:p-[1rem] hover:-translate-y-1 transition-all duration-200 w-full self-stretch">
                  <div className="flex flex-col items-center justify-center gap-[1rem] sm:gap-[2rem]">
                    <div className="transition-all duration-300 group-hover:scale-110 group-hover:text-goldenbrown group-hover:grayscale-0 text-white/90 size-[3rem] sm:size-[4rem]">
                      {item.icon}
                    </div>
                    <div className="w-full text-center pn-semibold-16 text-white/90 group-hover:text-white transition-all duration-300 !leading-[1.3rem] text-wrap">
                      {item.title}
                    </div>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </ScrollingBanner>
        </div>
      </motion.div>
    </div>
  );
}

export default WhyUsSection;
