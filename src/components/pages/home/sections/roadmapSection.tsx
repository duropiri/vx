/* eslint-disable @typescript-eslint/no-explicit-any */
import CharByCharOnScroll from "@/components/animations/CharByCharOnScroll";
import LetterRevealOnScroll from "@/components/animations/LetterRevealOnScroll";
import OpacityOnScroll from "@/components/animations/OpacityOnScroll";
import SVGScroll from "@/components/animations/svgScroll";
import SectionHeader from "@/components/ui/sectionHeader";
import Image from "next/image";
import React, { useEffect } from "react";

import launchImage from "@/../../public/images/instant-launch.webp";
import powerUploadImage from "@/../../public/images/power-upload.webp";
import strategyImage from "@/../../public/images/strategy-surge.webp";
import machineImage from "@/../../public/images/content-machine.webp";

interface SectionProps {
  className?: string;
}

function RoadmapSection({ className }: SectionProps) {
  // GSAP Animations
  useEffect(() => {
    const loadGSAP = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      // Parallax effect
      const effectElements = gsap.utils.toArray("[data-speed]");
      (effectElements as HTMLElement[]).forEach((el: HTMLElement) => {
        const speed = parseFloat(el.getAttribute("data-speed") || "0");
        gsap.fromTo(
          el,
          { y: 0 },
          {
            y: 0,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
              onRefresh: (self: any) => {
                const start = Math.max(0, self.start); // ensure no negative values
                const distance = self.end - start;
                const end = start + distance / speed;
                self.setPositions(start, end);
                if (self.animation) {
                  // Check if self.animation is defined
                  self.animation.vars.y = (end - start) * (1 - speed);
                  self.animation
                    .invalidate()
                    .progress(1)
                    .progress(self.progress);
                }
              },
            },
          }
        );
      });
    };

    loadGSAP();
  }, []);

  return (
    <div
      className={`section-container !flex-row ${className} overflow-hidden !pb-0 mb-[3.125rem] lg:mb-[6.25rem]`}
    >
      <div className="relative flex size-full flex-col items-start justify-between lg:gap-0">
        {/* Header */}
        <SectionHeader
          center
          heading="Roadmap"
          subheading={
            <>
              Your <span className="text-goldenbrown">90-Day Growth Plan</span>
            </>
          }
          body="Our 90-Day Growth Plan is designed to rapidly increase your real estate brand's visibility and engagement through a customized content strategy, social media management, and lead generation. In just 90 days, you'll see measurable growth in online presence and leads, giving you a competitive edge in the market."
          className="bg-white z-10 pb-[10rem] lg:pb-[3.75rem]"
        />

        {/* Content */}
        <div className="relative flex flex-col size-full items-center justify-center lg:min-h-[400vh]">
          {/* Gradient Top */}
          <div className="pointer-events-none absolute z-10 top-0 w-[100dvw] h-[7.5rem] bg-gradient-to-b from-white to-transparent" />
          {/* Gradient Bottom */}
          <div className="pointer-events-none absolute z-10 bottom-0 w-[100dvw] h-[7.5rem] bg-gradient-to-t from-white to-transparent" />

          {/* Road SVG */}
          {/* <Image
            alt="road"
            src="/svgs/curved-road.svg"
            className="pointer-events-none absolute top-0 left-0 w-full"
            height={4370}
            width={1420}
          /> */}
          <div className="pointer-events-none absolute -top-[10rem] scrollPath">
            <SVGScroll>
              <svg
                // width="1572"
                // height="4394"
                viewBox="0 0 1572 4394"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[300dvw] lg:w-[100dvw] h-[300vh] lg:h-[420vh]"
              >
                <path
                  d="M811 20.5C811 20.5 740.499 997.501 1250.5 1019.5C1749.5 1000.9 1705 563 1284.5 563C863.999 563 383.5 966 549.5 1460.5C715.5 1955 1564.64 1229 1579 1792.5C1593.35 2356 433.999 2047.79 221 2248.64C8.00008 2449.5 237 2637.5 668.5 2665.5C1100 2693.5 1164.5 2337 934 2379C703.5 2421 -21.5 2811.5 22 3093.5C65.5 3375.5 287 3435.5 550 3216.5C813 2997.5 772 3514.5 1131.5 3314C1491 3113.5 1664 3578 1284.5 3685C904.999 3792 -149.5 4406 155.5 3834.5C460.5 3263 884.5 4873.5 884.5 4873.5"
                  stroke="url(#paint0_linear_207_668)"
                  stroke-width="40"
                  stroke-linecap="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_207_668"
                    x1="845.231"
                    y1="183.5"
                    x2="845.231"
                    y2="4537"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="white" stop-opacity="0" />
                    <stop offset="0.0501897" stop-color="#C5A05E" />
                    <stop offset="0.500104" stop-color="#FDD98A" />
                    <stop offset="0.945896" stop-color="#FDD98A" />
                    <stop offset="1" stop-color="white" stop-opacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </SVGScroll>
          </div>

          {/* Steps Copy */}
          <div className="flex flex-col size-full lg:min-h-[400vh] max-w-[87.5rem] items-start justify-between z-10">
            {/* Step 1 */}
            <div className="flex flex-col lg:flex-row size-full lg:h-[100vh] items-center justify-between lg:pl-[2.5rem] gap-y-[8rem] lg:gap-[6.25rem] lg:pt-[7.5rem] py-[1.875rem]">
              <div
                data-speed={1.1}
                className="flex flex-col justify-start items-start gap-[0.438rem] max-w-[48ch]"
              >
                <CharByCharOnScroll
                  className="text-ash pn-regular-16 uppercase leading-normal"
                  shadow={true}
                  lineStyles={{
                    marginTop: "0.6ch", // Custom line height
                    marginRight: "0.4ch", // Custom character spacing
                  }}
                  start={100}
                  end={85}
                >
                  Step 1
                </CharByCharOnScroll>
                <div className="flex self-stretch justify-start items-start gap-2.5">
                  <LetterRevealOnScroll end="bottom 60%">
                    <h2 className="text-ash pn-bold-28">The Instant Launch</h2>
                  </LetterRevealOnScroll>
                  <OpacityOnScroll end={85}>
                    <div className="flex lg:p-[0.625rem] w-[1rem] lg:w-auto justify-start items-center">
                      <svg
                        width="23"
                        height="23"
                        viewBox="0 0 23 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex size-full"
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
              <div
                data-speed={1.25}
                className="select-none flex flex-col items-center justify-center w-full lg:w-[31.25rem] -translate-x-[2rem] lg:translate-x-0 rounded-r-[2.5rem]"
              >
                <div
                  data-speed={0.9}
                  className="absolute w-[60%] aspect-square bg-goldenrod/60 rounded-full"
                />
                <Image
                  src={launchImage}
                  alt="vx"
                  className="pointer-events-none size-full object-cover z-10"
                  placeholder="blur"
                  quality={80}
                />
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col lg:flex-row-reverse size-full lg:h-[100vh] items-center justify-between gap-y-[8rem] lg:pr-[2.5rem] lg:gap-[6.25rem] py-[1.875rem]">
              <div
                data-speed={1.1}
                className="flex flex-col justify-start items-start gap-[0.438rem] max-w-[48ch]"
              >
                <CharByCharOnScroll
                  className="text-ash pn-regular-16 uppercase leading-normal"
                  shadow={true}
                  lineStyles={{
                    marginTop: "0.6ch", // Custom line height
                    marginRight: "0.4ch", // Custom character spacing
                  }}
                  start={100}
                  end={85}
                >
                  Step 2
                </CharByCharOnScroll>
                <div className="self-stretch justify-start items-start gap-2.5 inline-flex">
                  <LetterRevealOnScroll end="bottom 60%">
                    <h2 className="text-ash pn-bold-28">The Power Upload</h2>
                  </LetterRevealOnScroll>
                  <OpacityOnScroll end={85}>
                    <div className="flex lg:p-[0.625rem] w-[1rem] lg:w-auto justify-start items-center">
                      <svg
                        width="23"
                        height="23"
                        viewBox="0 0 23 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex size-full"
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
                    Provide your business insights and marketing materials, and
                    you&apos;re one step closer to success. Once payment is
                    secured, we&apos;ll schedule your onboarding call, setting
                    the stage for a strategy that&apos;s built to deliver
                    results.
                  </p>
                </OpacityOnScroll>
              </div>
              <div
                data-speed={1.25}
                className="select-none flex flex-col items-center justify-center w-full lg:w-[31.25rem] translate-x-[2rem] lg:translate-x-0 rounded-l-[2.5rem]"
              >
                <div
                  data-speed={0.9}
                  className="absolute w-[60%] aspect-square bg-goldenrod/60 rounded-full"
                />
                <Image
                  src={powerUploadImage}
                  alt="vx"
                  className="pointer-events-none size-full object-cover z-10"
                  placeholder="blur"
                  quality={80}
                />
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col lg:flex-row size-full lg:h-[100vh] items-center justify-between lg:pl-[2.5rem] gap-y-[8rem] lg:gap-[6.25rem] py-[1.875rem]">
              <div
                data-speed={1.1}
                className="flex flex-col justify-start items-start gap-[0.438rem] max-w-[48ch]"
              >
                <CharByCharOnScroll
                  className="text-ash pn-regular-16 uppercase leading-normal"
                  shadow={true}
                  lineStyles={{
                    marginTop: "0.6ch", // Custom line height
                    marginRight: "0.4ch", // Custom character spacing
                  }}
                  start={100}
                  end={85}
                >
                  Step 3
                </CharByCharOnScroll>
                <div className="self-stretch justify-start items-start gap-2.5 inline-flex">
                  <LetterRevealOnScroll end="bottom 60%">
                    <h2 className="text-ash pn-bold-28">The Strategy Surge</h2>
                  </LetterRevealOnScroll>
                  <OpacityOnScroll end={85}>
                    <div className="flex lg:p-[0.625rem] w-[1rem] lg:w-auto justify-start items-center">
                      <svg
                        width="23"
                        height="23"
                        viewBox="0 0 23 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex size-full"
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
                    This is where your brand takes off. We audit and optimize
                    your social media accounts, then create a customized
                    strategy designed to drive engagement, boost visibility, and
                    get you real growth fast.
                  </p>
                </OpacityOnScroll>
              </div>
              <div
                data-speed={1.25}
                className="select-none flex flex-col items-center justify-center w-full lg:w-[31.25rem] -translate-x-[2rem] lg:translate-x-0 rounded-r-[2.5rem]"
              >
                <div
                  data-speed={0.9}
                  className="absolute w-[60%] aspect-square bg-goldenrod/60 rounded-full"
                />
                <Image
                  src={strategyImage}
                  alt="vx"
                  className="pointer-events-none size-full object-cover z-10"
                  placeholder="blur"
                  quality={80}
                />
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col lg:flex-row-reverse size-full lg:h-[100vh] items-center justify-between gap-y-[8rem] lg:pr-[2.5rem] lg:gap-[6.25rem] py-[1.875rem] lg:pb-[7.5rem]">
              <div
                data-speed={1.1}
                className="flex flex-col justify-start items-start gap-[0.438rem] max-w-[48ch]"
              >
                <CharByCharOnScroll
                  className="text-ash pn-regular-16 uppercase leading-normal"
                  shadow={true}
                  lineStyles={{
                    marginTop: "0.6ch", // Custom line height
                    marginRight: "0.4ch", // Custom character spacing
                  }}
                  start={100}
                  end={85}
                >
                  Step 4
                </CharByCharOnScroll>
                <div className="self-stretch justify-start items-start gap-2.5 inline-flex">
                  <LetterRevealOnScroll end="bottom 60%">
                    <h2 className="text-ash pn-bold-28">The Content Machine</h2>
                  </LetterRevealOnScroll>
                  <OpacityOnScroll end={85}>
                    <div className="flex lg:p-[0.625rem] w-[1rem] lg:w-auto justify-start items-center">
                      <svg
                        width="23"
                        height="23"
                        viewBox="0 0 23 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex size-full"
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
                    Our team produces premium content tailored to your
                    brand&apos;s voice. Once you approve, we start posting and
                    get your content live—billing only begins once your
                    brand&apos;s online presence is in action!
                  </p>
                </OpacityOnScroll>
              </div>
              <div
                data-speed={1.25}
                className="select-none flex flex-col items-center justify-center w-full lg:w-[31.25rem] translate-x-[2rem] lg:translate-x-0 rounded-l-[2.5rem]"
              >
                <div
                  data-speed={0.9}
                  className="absolute w-[60%] aspect-square bg-goldenrod/60 rounded-full"
                />
                <Image
                  src={machineImage}
                  alt="vx"
                  className="pointer-events-none size-full object-cover z-10"
                  placeholder="blur"
                  quality={80}
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
