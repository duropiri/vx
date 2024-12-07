import LetterRevealOnScroll from "@/components/animations/LetterRevealOnScroll";
import OpacityOnScroll from "@/components/animations/unused/OpacityOnScroll";
import { FlipLink, HoverWrapper } from "@/components/animations/RevealLinks";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

import arrowRedirect from "@/../../public/assets/svgs/arrow-redirect-cta.svg";
import arrowRedirectWhite from "@/../../public/assets/svgs/arrow-redirect-cta-white.svg";

interface SectionProps {
  className?: string;
  full?: boolean;
}

function CTASection({ className = "" }: SectionProps) {
  return (
    <div className={`section-container ${className}`}>
      <div className="flex flex-col items-center justify-center w-full max-w-[--section-width] bg-ash rounded-[1rem] px-[2.5rem] lg:px-[12.5rem] py-[2.5rem] lg:py-[5rem] gap-y-[1rem] lg:gap-y-[2rem] text-white text-center">
        <LetterRevealOnScroll className="relative">
          <h1 className="pn-regular-96">90 Day 2X Money Back Guarantee</h1>
        </LetterRevealOnScroll>
        {/* <LetterRevealOnScroll className="relative"> */}
          <p className="pn-regular-16 text-center">
            To take it one step further, we also believe in what we do, and we
            back that up with a{" "}
            <span className="font-semibold">
              2X Money Back Satisfaction Guarantee.
            </span>{" "}
            Yes, that means if you try us out and you&apos;re not willing to
            swim through shark-infested waters just to continue using our
            services,{" "}
            <span className="text-goldenbrown underline pn-bold-16">
              we&apos;ll double your money
            </span>
            . We even give you 90 days to think about it. I know right, finally…
            a service that puts their money where their mouth is.
          </p>
        {/* </LetterRevealOnScroll> */}
        <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-[1rem] my-[0.625rem]">
          <HoverWrapper
            href="/"
            className="button pn-regular-22 group cursor-select-hover !bg-transparent !border-white w-full lg:w-[18.75rem] shadow-customShadow shadow-white/5 hover:shadow-goldenrod/5 !px-[1.5rem] !py-[1.25rem]"
          >
            <FlipLink className="font-semibold">See More</FlipLink>
            <Image
              alt="arrow"
              src={arrowRedirectWhite}
              className="text-white group-hover:rotate-45 transition-all duration-300"
              quality={75}
            />
          </HoverWrapper>

          <HoverWrapper
            href="#contact"
            className="button gold pn-regular-22 text-ash group cursor-select-hover !bg-goldenbrown !border-none w-full lg:w-auto shadow-customShadow shadow-white/5 hover:shadow-goldenrod/5"
          >
            <FlipLink className="font-semibold">Get In Touch</FlipLink>
            <Image
              alt="arrow"
              src={arrowRedirect}
              className="text-white group-hover:rotate-45 transition-all duration-300"
              quality={75}
            />
          </HoverWrapper>
        </div>
      </div>
    </div>
  );
}

export default CTASection;
