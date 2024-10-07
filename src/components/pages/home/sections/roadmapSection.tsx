"use client";
import CharByCharOnScroll from "@/components/animations/CharByCharOnScroll";
import LetterRevealOnScroll from "@/components/animations/LetterRevealOnScroll";
import OpacityOnScroll from "@/components/animations/OpacityOnScroll";
import SVGScroll from "@/components/animations/svgScroll";
import SectionHeader from "@/components/ui/sectionHeader";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

interface SectionProps {
  className?: string;
}

function RoadmapSection({ className }: SectionProps) {
  return (
    <div className={`section-container !flex-row ${className}`}>
      <div className="relative flex size-full flex-col items-start justify-between gap-[3.75rem]">
        {/* Header */}
        <SectionHeader
          center
          heading="Roadmap"
          subheading={
            <>
              Your <span className="text-goldenbrown">90-Day Growth Plan</span>
            </>
          }
          body="At Virtual Xposure, we specialize in building your brand's
            digital presence, empowering realtors to thrive in today's
            competitive online marketplace. Our services cover everything from
            content creation to full-scale social media management, all backed
            by data-driven strategies to ensure results that matter."
        />

        {/* Content */}
        <div className="relative flex flex-col size-full items-center justify-center min-h-[400dvh] overflow-hidden">
          {/* Gradient Top */}
          <div className="pointer-events-none absolute z-10 top-0 w-full h-[7.5rem] bg-gradient-to-b from-white to-transparent" />
          {/* Gradient Bottom */}
          <div className="pointer-events-none absolute z-10 bottom-0 w-full h-[7.5rem] bg-gradient-to-t from-white to-transparent" />

          {/* Road SVG */}
          {/* <Image
            alt="road"
            src="/svgs/curved-road.svg"
            className="pointer-events-none absolute top-0 left-0 w-full"
            height={4370}
            width={1420}
          /> */}
          <div className="pointer-events-none absolute top-0 scrollPath">
            <SVGScroll>
              <svg
                // width="1730"
                // height="4394"
                viewBox="0 0 1730 4394"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[100dvw] h-[400dvh]"
              >
                <defs>
                  <linearGradient
                    id="paint0_linear_207_662"
                    x1="865.231"
                    y1="20.5"
                    x2="865.231"
                    y2="4374"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#C5A05E" />
                    <stop offset="0.15" stop-color="#FDD98A" />
                    <stop offset="0.85" stop-color="#FDD98A" />
                    <stop offset="1" stop-color="#FFFDF9" />
                  </linearGradient>
                  <mask id="mask" maskUnits="userSpaceOnUse"></mask>
                </defs>
                <path
                  d="M152.5 20.5C152.5 20.5 44.0001 333.501 554 355.5C1064 377.499 896.5 887.744 1395.5 869.148C1894.5 850.551 1744.5 478 1324 478C903.5 478 470.041 847.929 726 1338.7C854.106 1584.33 1707 1183.22 1678 1682.73C1649 2182.24 497 1682.73 241 2085.64C-15.0003 2488.56 280 2510.77 759 2484.94C1238 2459.12 1147 2159.51 820.5 2130.07C494 2100.62 55.5 2385.25 55.5 2806.76C55.5 3228.27 751.5 3084.15 1309.5 3043.34C1867.5 3002.54 1529.61 2551.58 842.609 2806.76C155.609 3061.94 1342 3742.25 726 4126.57C110 4510.89 -290 3971.88 336 3695C962 3418.12 838 4374 838 4374"
                  stroke="url(#paint0_linear_207_662)"
                  stroke-width="40"
                  stroke-linecap="round"
                />
                <path
                  d="M152.5 20.5C152.5 20.5 44.0001 333.501 554 355.5C1064 377.499 896.5 887.744 1395.5 869.148C1894.5 850.551 1744.5 478 1324 478C903.5 478 470.041 847.929 726 1338.7C854.106 1584.33 1707 1183.22 1678 1682.73C1649 2182.24 497 1682.73 241 2085.64C-15.0003 2488.56 280 2510.77 759 2484.94C1238 2459.12 1147 2159.51 820.5 2130.07C494 2100.62 55.5 2385.25 55.5 2806.76C55.5 3228.27 751.5 3084.15 1309.5 3043.34C1867.5 3002.54 1529.61 2551.58 842.609 2806.76C155.609 3061.94 1342 3742.25 726 4126.57C110 4510.89 -290 3971.88 336 3695C962 3418.12 838 4374 838 4374"
                  stroke="black"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-dasharray="80 80"
                  mask="url(#mask)"
                />
              </svg>
            </SVGScroll>
          </div>

          {/* Steps Copy */}
          <div className="flex flex-col size-full min-h-[400dvh] max-w-[87.5rem] items-start justify-between z-10">
            {/* Step 1 */}
            <div className="flex flex-row size-full h-[100dvh] items-center justify-between pl-[2.5rem] gap-[6.25rem] pt-[7.5rem] pb-[1.875rem]">
              <div className="flex flex-col justify-start items-start gap-[0.438rem] max-w-[48ch]">
                <CharByCharOnScroll
                  className="text-ash pn-regular-16 uppercase leading-normal"
                  shadow={true}
                  lineStyles={{
                    marginTop: "0.6ch", // Custom line height
                    marginRight: "0.4ch", // Custom character spacing
                  }}
                  start={100}
                  end={60}
                >
                  Step 1
                </CharByCharOnScroll>
                <div className="self-stretch justify-start items-start gap-2.5 inline-flex">
                  <LetterRevealOnScroll end="bottom 60%">
                    <h2 className="text-ash pn-bold-28">The Instant Launch</h2>
                  </LetterRevealOnScroll>
                  <OpacityOnScroll end={60}>
                    <div className="flex p-[0.625rem] justify-start items-center">
                      <svg
                        width="23"
                        height="23"
                        viewBox="0 0 23 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M22.5812 0H1.26717V3.60553H16.5168L0.53125 19.8303L3.04317 22.3798L19.0289 6.15482V21.6331H22.5812V0Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </OpacityOnScroll>
                </div>
                <OpacityOnScroll end={50}>
                  <p className="text-ash pn-regular-16">
                    We kick things off immediately. Your invoice is sent, and
                    you&apos;ll get a streamlined welcome email laying out your
                    next moves, so you can hit the ground running with a clear
                    plan in place.
                  </p>
                </OpacityOnScroll>
              </div>
              <div className="flex flex-col items-center justify-center w-[31.25rem] h-[11.875rem] overflow-hidden bg-ash rounded-r-[2.5rem]">
                <Image
                  src=""
                  alt=""
                  className="pointer-events-none size-full object-cover"
                />
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-row-reverse size-full h-[100dvh] items-center justify-between pr-[2.5rem] gap-[6.25rem] py-[1.875rem]">
              <div className="flex flex-col justify-start items-start gap-[0.438rem] max-w-[48ch]">
                <CharByCharOnScroll
                  className="text-ash pn-regular-16 uppercase leading-normal"
                  shadow={true}
                  lineStyles={{
                    marginTop: "0.6ch", // Custom line height
                    marginRight: "0.4ch", // Custom character spacing
                  }}
                  start={100}
                  end={60}
                >
                  Step 2
                </CharByCharOnScroll>
                <div className="self-stretch justify-start items-start gap-2.5 inline-flex">
                  <LetterRevealOnScroll end="bottom 60%">
                    <h2 className="text-ash pn-bold-28">The Instant Launch</h2>
                  </LetterRevealOnScroll>
                  <OpacityOnScroll end={60}>
                    <div className="flex p-[0.625rem] justify-start items-center">
                      <svg
                        width="23"
                        height="23"
                        viewBox="0 0 23 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M22.5812 0H1.26717V3.60553H16.5168L0.53125 19.8303L3.04317 22.3798L19.0289 6.15482V21.6331H22.5812V0Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </OpacityOnScroll>
                </div>
                <OpacityOnScroll end={50}>
                  <p className="text-ash pn-regular-16">
                    We kick things off immediately. Your invoice is sent, and
                    you&apos;ll get a streamlined welcome email laying out your
                    next moves, so you can hit the ground running with a clear
                    plan in place.
                  </p>
                </OpacityOnScroll>
              </div>
              <div className="flex flex-col items-center justify-center w-[31.25rem] h-[11.875rem] overflow-hidden bg-ash rounded-l-[2.5rem]">
                <Image
                  src=""
                  alt=""
                  className="pointer-events-none size-full object-cover"
                />
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-row size-full h-[100dvh] items-center justify-between pl-[2.5rem] gap-[6.25rem] py-[1.875rem]">
              <div className="flex flex-col justify-start items-start gap-[0.438rem] max-w-[48ch]">
                <CharByCharOnScroll
                  className="text-ash pn-regular-16 uppercase leading-normal"
                  shadow={true}
                  lineStyles={{
                    marginTop: "0.6ch", // Custom line height
                    marginRight: "0.4ch", // Custom character spacing
                  }}
                  start={100}
                  end={60}
                >
                  Step 3
                </CharByCharOnScroll>
                <div className="self-stretch justify-start items-start gap-2.5 inline-flex">
                  <LetterRevealOnScroll end="bottom 60%">
                    <h2 className="text-ash pn-bold-28">The Instant Launch</h2>
                  </LetterRevealOnScroll>
                  <OpacityOnScroll end={60}>
                    <div className="flex p-[0.625rem] justify-start items-center">
                      <svg
                        width="23"
                        height="23"
                        viewBox="0 0 23 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M22.5812 0H1.26717V3.60553H16.5168L0.53125 19.8303L3.04317 22.3798L19.0289 6.15482V21.6331H22.5812V0Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </OpacityOnScroll>
                </div>
                <OpacityOnScroll end={50}>
                  <p className="text-ash pn-regular-16">
                    We kick things off immediately. Your invoice is sent, and
                    you&apos;ll get a streamlined welcome email laying out your
                    next moves, so you can hit the ground running with a clear
                    plan in place.
                  </p>
                </OpacityOnScroll>
              </div>
              <div className="flex flex-col items-center justify-center w-[31.25rem] h-[11.875rem] overflow-hidden bg-ash rounded-r-[2.5rem]">
                <Image
                  src=""
                  alt=""
                  className="pointer-events-none size-full object-cover"
                />
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex flex-row-reverse size-full h-[100dvh] items-center justify-between pr-[2.5rem] gap-[6.25rem] pt-[1.875rem] pb-[7.5rem]">
              <div className="flex flex-col justify-start items-start gap-[0.438rem] max-w-[48ch]">
                <CharByCharOnScroll
                  className="text-ash pn-regular-16 uppercase leading-normal"
                  shadow={true}
                  lineStyles={{
                    marginTop: "0.6ch", // Custom line height
                    marginRight: "0.4ch", // Custom character spacing
                  }}
                  start={100}
                  end={60}
                >
                  Step 4
                </CharByCharOnScroll>
                <div className="self-stretch justify-start items-start gap-2.5 inline-flex">
                  <LetterRevealOnScroll end="bottom 60%">
                    <h2 className="text-ash pn-bold-28">The Instant Launch</h2>
                  </LetterRevealOnScroll>
                  <OpacityOnScroll end={60}>
                    <div className="flex p-[0.625rem] justify-start items-center">
                      <svg
                        width="23"
                        height="23"
                        viewBox="0 0 23 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M22.5812 0H1.26717V3.60553H16.5168L0.53125 19.8303L3.04317 22.3798L19.0289 6.15482V21.6331H22.5812V0Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </OpacityOnScroll>
                </div>
                <OpacityOnScroll end={50}>
                  <p className="text-ash pn-regular-16">
                    We kick things off immediately. Your invoice is sent, and
                    you&apos;ll get a streamlined welcome email laying out your
                    next moves, so you can hit the ground running with a clear
                    plan in place.
                  </p>
                </OpacityOnScroll>
              </div>
              <div className="flex flex-col items-center justify-center w-[31.25rem] h-[11.875rem] overflow-hidden bg-ash rounded-l-[2.5rem]">
                <Image
                  src=""
                  alt=""
                  className="pointer-events-none size-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoadmapSection;
