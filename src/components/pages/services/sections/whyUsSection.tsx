import SectionHeader from "@/components/ui/sectionHeader";
import { motion, MotionValue, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { WhyUsItems } from "@/data/whyUsItems";
import ScrollingBanner from "@/components/animations/LegacyScrollingBanner";
import Image from "next/image";
import vxImage from "@/../../public/svgs/virtual-xposure-text.svg";

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
          child="flex flex-row h-full items-center gap-x-[9.375rem]"
          innerChild="size-max"
        >
          <Image
            alt="virtual xposure"
            src={vxImage}
            className="size-full"
            quality={80}
          />
        </ScrollingBanner>
        <ScrollingBanner
          baseVelocity={-10}
          child="flex flex-row h-full items-center gap-x-[9.375rem]"
          innerChild="size-max"
        >
          <Image
            alt="virtual xposure"
            src={vxImage}
            className="size-full"
            quality={80}
          />
        </ScrollingBanner>
      </div>
      <motion.div style={{ scale, rotate, filter: blur }}>
        <div className="relative flex size-full max-w-[--section-width] flex-col items-start justify-between gap-[1.5rem] sm:gap-[3.75rem]">
          {/* Header */}
          <SectionHeader
            dark
            center
            heading="Why Us?"
            subheading="Why Choose Virtual Xposure?"
            body="We deliver excellence at every level, combining cutting-edge technology with unmatched customer service. Our proven track record and comprehensive solutions ensure your success, backed by industry-leading guarantees and lightning-fast delivery."
          />
          <div className="grid grid-cols-4 sm:grid-cols-4 gap-[1rem] sm:gap-12 mt-[2.5rem] sm:mt-[5rem]">
            {WhyUsItems.map((item, index) => (
              <motion.div
                key={index + 4}
                className="flex flex-col items-center justify-center gap-[0.625rem] mb-[0.625rem]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{
                  once: true, // Only animate once
                  amount: 0.3, // Trigger when 30% of element is in view
                  margin: "50px", // Start animation 50px before element enters viewport
                }}
                transition={{
                  delay: (index + 4) * 0.1,
                  duration: 0.5,
                  ease: "easeOut",
                }}
              >
                <div className="cursor-select-hover group flex flex-grow flex-col items-center p-4 hover:-translate-y-1 transition-all duration-200 w-full self-stretch">
                  <div className="flex flex-col items-center justify-center gap-[2rem]">
                    <div className="transition-all duration-300 group-hover:scale-110 group-hover:text-goldenbrown group-hover:grayscale-0 text-white/50 size-[4rem]">
                      {item.icon}
                    </div>
                    <div className="w-full text-center pn-semibold-22 text-white/50 group-hover:text-white transition-all duration-300 !leading-[1.3rem]">
                      {item.title}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default WhyUsSection;
