import LetterRevealOnScroll from "@/components/animations/LetterRevealOnScroll";
import OpacityOnScroll from "@/components/animations/OpacityOnScroll";
import { FlipLink, HoverWrapper } from "@/components/animations/RevealLinks";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

import arrowRedirect from "@/../../public/svgs/arrow-redirect-cta.svg";
import arrowRedirectWhite from "@/../../public/svgs/arrow-redirect-cta-white.svg";

interface SectionProps {
  className?: string;
  full?: boolean;
}

function CTASection({ className = "" }: SectionProps) {
  return (
    <div className={`section-container ${className}`}>
      <div className="flex flex-col items-center justify-center w-full max-w-[--section-width] bg-ash rounded-[1rem] px-[2.5rem] lg:px-[12.5rem] py-[2.5rem] lg:py-[5rem] gap-y-[1rem] lg:gap-y-[2rem] text-white text-center">
        <LetterRevealOnScroll className="relative">
          <h1 className="pn-regular-96">2X Money Back Guarantee</h1>
        </LetterRevealOnScroll>
        <OpacityOnScroll start={100} end={90}>
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
        </OpacityOnScroll>
        <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-[1rem] my-[0.625rem]">
          <HoverWrapper
            href="/"
            className="button group cursor-select-hover !bg-transparent !border-white w-full lg:w-[18.75rem] shadow-customShadow shadow-white/5 hover:shadow-goldenrod/5 !px-[1.5rem] !py-[1.25rem]"
          >
            <FlipLink className="font-semibold">See More</FlipLink>
            <Image
              alt="arrow"
              src={arrowRedirectWhite}
              className="text-white group-hover:rotate-45 transition-all duration-300"
              quality={80}
            />
          </HoverWrapper>
          <motion.div
            className={`button text-ash !p-0 group cursor-select-hover !bg-goldenbrown !border-none w-full lg:w-auto shadow-customShadow shadow-white/5 hover:shadow-goldenrod/5`}
            style={{
              background: "linear-gradient(90deg, #C5A05E, #FDD98A, #C5A05E)",
              backgroundSize: "300% 100%",
            }}
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 2,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            <HoverWrapper
              href="#contact"
              className="flex size-full items-center justify-center gap-[1rem] px-[1.5rem] py-[1.25rem] !w-[18.75rem]"
            >
              <FlipLink className="font-semibold">Get In Touch</FlipLink>
              <Image
                alt="arrow"
                src={arrowRedirect}
                className="text-white group-hover:rotate-45 transition-all duration-300"
                quality={80}
              />
            </HoverWrapper>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default CTASection;
