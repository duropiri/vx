import LetterRevealOnScroll from "@/components/animations/LetterRevealOnScroll";
import OpacityOnScroll from "@/components/animations/OpacityOnScroll";
import { FlipLink, HoverWrapper } from "@/components/animations/RevealLinks";
import React from "react";

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
        <div className="flex flex-col lg:flex-row gap-[1rem] my-[0.625rem]">
          <HoverWrapper
            href="/"
            className="button cursor-select-hover !bg-transparent !border-white shadow-customShadow shadow-white/5 hover:shadow-goldenrod/5"
          >
            <FlipLink className="">See More</FlipLink>
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_73_5969)">
                <path
                  d="M14.6665 6.33398L6.33319 14.6673"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.16656 6.33398H14.6666V13.834"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_73_5969">
                  <rect
                    width="20"
                    height="20"
                    fill="white"
                    transform="translate(0.499878 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </HoverWrapper>
          <HoverWrapper
            href="/"
            className="button cursor-select-hover !bg-goldenbrown !border-white shadow-customShadow shadow-white/5 hover:shadow-goldenrod/5"
          >
            <FlipLink className="">Get In Touch</FlipLink>
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_73_5969)">
                <path
                  d="M14.6665 6.33398L6.33319 14.6673"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.16656 6.33398H14.6666V13.834"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_73_5969">
                  <rect
                    width="20"
                    height="20"
                    fill="white"
                    transform="translate(0.499878 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </HoverWrapper>
        </div>
      </div>
    </div>
  );
}

export default CTASection;
