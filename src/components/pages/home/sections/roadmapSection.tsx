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
      <div className="relative flex size-full flex-col items-start justify-between gap-[1.5rem] lg:gap-[3.75rem]">
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
        <div className="relative flex flex-col size-full items-center justify-center min-h-[400vh] overflow-hidden">
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
                // width="1572"
                // height="4394"
                viewBox="0 0 1572 4394"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[100dvw] h-[400dvh]"
              >
                <path
                  d="M757 20.5C757 20.5 679.5 834.501 1189.5 856.5C1688.5 837.904 1644 400 1223.5 400C803 400 322.5 803 488.5 1297.5C654.5 1792 1503.65 1066 1518 1629.5C1532.35 2193 372.999 1884.79 160 2085.64C-53 2286.5 176 2474.5 607.5 2502.5C1039 2530.5 1158 2396 882.5 2305C607 2214 -21 2620.5 22.5 2902.5C66 3184.5 494 3337 757 3118C1020 2899 795.5 3406.5 1155 3206C1514.5 3005.5 1603 3415 1223.5 3522C844 3629 107 4165 43 3914C-21 3663 245 3571 469 3600C693 3629 757 4374 757 4374"
                  stroke="url(#paint0_linear_207_668)"
                  stroke-width="40"
                  stroke-linecap="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_207_668"
                    x1="784.231"
                    y1="20.5"
                    x2="784.231"
                    y2="4374"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#C5A05E" />
                    <stop offset="0.15" stop-color="#FDD98A" />
                    <stop offset="0.85" stop-color="#FDD98A" />
                    <stop offset="1" stop-color="#FFFDF9" />
                  </linearGradient>
                </defs>
              </svg>
            </SVGScroll>
          </div>

          {/* Steps Copy */}
          <div className="flex flex-col size-full min-h-[400vh] max-w-[87.5rem] items-start justify-between z-10">
            {/* Step 1 */}
            <div className="flex flex-row size-full h-[100vh] items-center justify-between pl-[2.5rem] gap-[6.25rem] pt-[7.5rem] pb-[1.875rem]">
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
              <div className="flex flex-col items-center justify-center w-[31.25rem] h-[11.875rem] overflow-hidden rounded-r-[2.5rem]">
                <Image
                  src="/images/logo5.webp"
                  alt="vx"
                  width={500}
                  height={190}
                  className="pointer-events-none size-full object-cover"
                />
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-row-reverse size-full h-[100vh] items-center justify-between pr-[2.5rem] gap-[6.25rem] py-[1.875rem]">
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
              <div className="flex flex-col items-center justify-center w-[31.25rem] h-[11.875rem] overflow-hidden rounded-l-[2.5rem]">
                <Image
                  src="/images/logo5.webp"
                  alt="vx"
                  width={500}
                  height={190}
                  className="pointer-events-none size-full object-cover"
                />
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-row size-full h-[100vh] items-center justify-between pl-[2.5rem] gap-[6.25rem] py-[1.875rem]">
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
              <div className="flex flex-col items-center justify-center w-[31.25rem] h-[11.875rem] overflow-hidden rounded-r-[2.5rem]">
                <Image
                  src="/images/logo5.webp"
                  alt="vx"
                  width={500}
                  height={190}
                  className="pointer-events-none size-full object-cover"
                />
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex flex-row-reverse size-full h-[100vh] items-center justify-between pr-[2.5rem] gap-[6.25rem] pt-[1.875rem] pb-[7.5rem]">
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
              <div className="flex flex-col items-center justify-center w-[31.25rem] h-[11.875rem] overflow-hidden rounded-l-[2.5rem]">
                <Image
                  src="/images/logo5.webp"
                  alt="vx"
                  width={500}
                  height={190}
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
