import SectionHeader from "@/components/ui/sectionHeader";
import React, { forwardRef, RefObject } from "react";
import { WhyUsItems } from "@/data/whyUsItems";
import ScrollingBanner from "@/components/animations/ScrollingBanner";
import Image from "next/image";
import vxImage from "@/../../public/assets/svgs/virtual-xposure-text.svg";
import vxImage2 from "@/../../public/assets/svgs/virtual-xposure-text-charcoal.svg";

import FadeInUp from "@/components/animations/FadeInUp";

interface SectionProps {
  className?: string;
  scrollProgress?: number;
  shrinkSize?: number;
  rotationAmount?: number;
  ref?: RefObject<HTMLDivElement>;
}

const WhyUsSection = forwardRef<HTMLDivElement, SectionProps>(
  (
    {
      className,
      // scrollProgress,
      // shrinkSize = 0,
      // rotationAmount = -45
    },
    ref
  ) => {
    // const sectionRef = useRef<HTMLDivElement>(null);
    // const contentRef = useRef<HTMLDivElement>(null);

    // useEffect(() => {
    //   if (!contentRef.current) return;

    //   gsap.to(contentRef.current, {
    //     scale: gsap.utils.interpolate(1, shrinkSize, scrollProgress),
    //     rotation: gsap.utils.interpolate(0, rotationAmount, scrollProgress),
    //     filter: `blur(${gsap.utils.interpolate(0, 2.5, scrollProgress)}px)`,
    //     duration: 0,
    //     overwrite: "auto",
    //   });
    // }, [scrollProgress, shrinkSize, rotationAmount]);

    return (
      <div
        // ref={ref}
        id="why"
        className={`section-container !flex-row ${className} bg-ash relative overflow-hidden`}
      >
        {/* Background Text Parallax */}
        <div className="select-none absolute pointer-events-none top-0 flex flex-col h-full w-[100vw] text-charcoal gap-y-[10.625rem] max-w-[100vw] overflow-hidden opacity-15">
          {/* <ScrollingBanner
            baseVelocity={10}
            child="flex flex-row h-full items-center gap-x-[9.375rem]"
            innerChild="size-max"
          > */}
          <div className="h-full size-max -translate-x-[100ch]">
            <Image
              alt="virtual xposure"
              src={vxImage2}
              className="size-full"
              quality={50}
              loading="lazy"
              priority={false}
              width={300}
              height={100}
            />
          </div>
          {/* </ScrollingBanner> */}
          {/* <ScrollingBanner
            baseVelocity={-10}
            child="sm:flex flex-row h-full items-center gap-x-[9.375rem] hidden"
            innerChild="size-max"
          > */}
          <div className="h-full size-max -translate-x-[300ch]">
            <Image
              alt="virtual xposure"
              src={vxImage2}
              className="size-full"
              quality={50}
              loading="lazy"
              priority={false}
              width={300}
              height={100}
            />
          </div>
          {/* </ScrollingBanner> */}
        </div>
        <div
          ref={ref}
          className="relative flex size-full max-w-[--section-width] flex-col items-start justify-between gap-[5rem] xl:gap-[3.75rem]"
        >
          {/* Header */}
          <SectionHeader
            dark
            noCenter
            noAnimation
            noBodyAnimation
            heading="Why Us?"
            subheading="Why Choose Virtual Xposure?"
            body="We deliver excellence at every level, combining cutting-edge technology with unmatched customer service. Our proven track record and comprehensive solutions ensure your success, backed by industry-leading guarantees and lightning-fast delivery."
          />
          <div className="hidden xl:grid grid-cols-4 gap-[1rem] xl:gap-[2rem] xl:mt-[2rem] select-text">
            {WhyUsItems.map((item, index) => (
              <div
                key={index + 4}
                className="flex flex-col items-center justify-center gap-[0.625rem] mb-[0.625rem] z-10"
              >
                <div className="cursor-select-hover group flex flex-grow flex-col items-center xl:p-[1rem] hover:-translate-y-1 transition-all duration-200 w-full self-stretch">
                  <div className="flex flex-col items-center justify-center gap-[1rem] xl:gap-[2rem]">
                    <div className="transition-all duration-300 group-hover:scale-110 group-hover:text-goldenbrown group-hover:grayscale-0 text-white/90 size-[3rem] xl:size-[4rem]">
                      {item.icon}
                    </div>
                    <div className="w-full text-center pn-semibold-16 text-white/90 group-hover:text-white transition-all duration-300 !leading-[1.3rem] max-w-[20ch] text-wrap">
                      {item.title}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* <ScrollingBanner
            baseVelocity={-25}
            className="xl:hidden flex flex-row"
            innerChild="flex flex-row gap-[3rem]"
          >
            {WhyUsItems.map((item, index) => (
              <FadeInUp
                key={index + 4}
                className="flex flex-col items-center justify-center gap-[0.625rem] mb-[0.625rem]"
              >
                <div className="cursor-select-hover group flex flex-grow flex-col items-center xl:p-[1rem] hover:-translate-y-1 transition-all duration-200 w-full self-stretch">
                  <div className="flex flex-col items-center justify-center gap-[1rem] xl:gap-[2rem]">
                    <div className="transition-all duration-300 group-hover:scale-110 group-hover:text-goldenbrown group-hover:grayscale-0 text-white/90 size-[3rem] xl:size-[4rem]">
                      {item.icon}
                    </div>
                    <div className="w-full text-center pn-semibold-16 text-white/90 group-hover:text-white transition-all duration-300 !leading-[1.3rem] text-wrap">
                      {item.title}
                    </div>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </ScrollingBanner> */}
        </div>
      </div>
    );
  }
);

WhyUsSection.displayName = "WhyUsSection";

export default WhyUsSection;
