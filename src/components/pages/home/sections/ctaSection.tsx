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
      <div className="flex flex-col items-center justify-center w-full bg-ash rounded-[1rem] px-[2.5rem] lg:px-[12.5rem] py-[2.5rem] lg:py-[5rem] gap-y-[1rem] lg:gap-y-[2rem] text-white text-center">
        <LetterRevealOnScroll className="relative">
          <h1 className="pn-regular-96">2X Money Back Guarantee</h1>
        </LetterRevealOnScroll>
        <OpacityOnScroll start={100} end={90}>
          <p className="pn-regular-16 max-w-[45ch] text-center">
            Yes. if you aren&apos;t completely blown away we&apos;ll{" "}
            <span className="text-goldenbrown underline pn-bold-16">
              double
            </span>{" "}
            your initial investment in our services.
          </p>
        </OpacityOnScroll>
        <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-[1rem] my-[0.625rem]">
          <HoverWrapper
            href="/"
            className="button group cursor-select-hover !bg-transparent !border-white shadow-customShadow shadow-white/5 hover:shadow-goldenrod/5"
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
            className={`button text-ash !p-0 group cursor-select-hover !bg-goldenbrown !border-white shadow-customShadow shadow-white/5 hover:shadow-goldenrod/5`}
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
              className="flex size-full items-center justify-center gap-[1rem] px-[1.5rem] py-[0.5rem]"
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
