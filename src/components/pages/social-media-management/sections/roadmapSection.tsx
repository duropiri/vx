/* eslint-disable @typescript-eslint/no-explicit-any */
import LetterRevealOnScroll from "@/components/animations/LetterRevealOnScroll";
import SVGScroll from "@/components/animations/svgScroll";
import SectionHeader from "@/components/ui/sectionHeader";
import Image from "next/image";
import React, { useEffect } from "react";

import launchImage from "@/../../public/assets/images/instant-launch.webp";
import powerUploadImage from "@/../../public/assets/images/power-upload.webp";
import strategyImage from "@/../../public/assets/images/strategy-surge.webp";
import machineImage from "@/../../public/assets/images/content-machine.webp";
import { gsap, ScrollTrigger } from "@/utils/gsap";
import MotionPathPlugin from "gsap/dist/MotionPathPlugin";
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
import { ParallaxSection } from "@/components/animations/SmoothScrolling";
import { useViewport } from "@/contexts/ViewportContext";

interface SectionProps {
  className?: string;
}

function RoadmapSection({ className }: SectionProps) {
  const { windowWidth } = useViewport();
  const steps = [
    {
      id: 1,
      title: "The Instant Launch",
      description: "We kick things off immediately. Your invoice is sent, and you'll get a streamlined welcome email laying out your next moves, so you can hit the ground running with a clear plan in place.",
      image: launchImage,
      imageAlt: "vx launch",
    },
    {
      id: 2,
      title: "The Power Upload",
      description: "Provide your business insights and marketing materials, and you're one step closer to success. Once payment is secured, we'll schedule your onboarding call, setting the stage for a strategy that's built to deliver results.",
      image: powerUploadImage,
      imageAlt: "vx power upload",
    },
    {
      id: 3,
      title: "The Strategy Surge",
      description: "This is where your brand takes off. We audit and optimize your social media accounts, then create a customized strategy designed to drive engagement, boost visibility, and get you real growth fast.",
      image: strategyImage,
      imageAlt: "vx strategy surge",
    },
    {
      id: 4,
      title: "The Content Machine",
      description: "Our team produces premium content tailored to your brand's voice. Once you approve, we start posting and get your content live—billing only begins once your brand's online presence is in action!",
      image: machineImage,
      imageAlt: "vx content machine",
    },
  ];

  return (
    <div
      id="roadmap"
      className={`section-container !flex-row ${className} overflow-hidden !pb-0 mb-[3.125rem] sm:mb-[6.25rem]`}
    >
      <div className="relative flex size-full flex-col items-start justify-between sm:gap-0">
        {/* Header */}
        <SectionHeader
          noCenter
          heading="Roadmap"
          subheading={
            <>
              Your <span className="text-goldenbrown">90-Day Growth Plan</span>
            </>
          }
          noBodyAnimation
          body="Our 90-Day Growth Plan is designed to rapidly increase your real estate brand's visibility and engagement through a customized content strategy, social media management, and lead generation. In just 90 days, you'll see measurable growth in online presence and leads, giving you a competitive edge in the market."
          className="bg-white z-10 pb-[10rem] sm:pb-[3.75rem]"
        />

        {/* Content */}
        <div className="relative flex flex-col size-full items-center justify-center sm:min-h-[400vh]">
          {/* Gradient Top */}
          <div className="pointer-events-none absolute z-10 top-0 w-[100dvw] h-[7.5rem] bg-gradient-to-b from-white to-transparent" />
          {/* Gradient Bottom */}
          <div className="pointer-events-none absolute z-10 bottom-0 w-[100dvw] h-[7.5rem] bg-gradient-to-t from-white to-transparent" />

          {/* Trail SVG */}
          <div className="pointer-events-none absolute -top-[10rem] scrollPath">
            <SVGScroll>
              <svg
                // width="1572"
                // height="4394"
                viewBox="0 0 1572 4394"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[300dvw] sm:w-[100dvw] h-[300vh] sm:h-[420vh]"
              >
                <path
                  d="M811 20.5C811 20.5 740.499 997.501 1250.5 1019.5C1749.5 1000.9 1705 563 1284.5 563C863.999 563 383.5 966 549.5 1460.5C715.5 1955 1564.64 1229 1579 1792.5C1593.35 2356 433.999 2047.79 221 2248.64C8.00008 2449.5 237 2637.5 668.5 2665.5C1100 2693.5 1164.5 2337 934 2379C703.5 2421 -21.5 2811.5 22 3093.5C65.5 3375.5 287 3435.5 550 3216.5C813 2997.5 772 3514.5 1131.5 3314C1491 3113.5 1664 3578 1284.5 3685C904.999 3792 -149.5 4406 155.5 3834.5C460.5 3263 884.5 4873.5 884.5 4873.5"
                  stroke="url(#paint0_linear_207_668)"
                  strokeWidth="40"
                  strokeLinecap="round"
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
                    <stop stopColor="white" stopOpacity="0" />
                    <stop offset="0.0501897" stopColor="#C5A05E" />
                    <stop offset="0.500104" stopColor="#FDD98A" />
                    <stop offset="0.945896" stopColor="#FDD98A" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </SVGScroll>
          </div>

          {/* Steps Copy */}
          <div className="flex flex-col size-full sm:min-h-[400vh] max-w-[--section-width] items-start justify-between z-10 snap-y">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`sm:min-h-[100vh] flex flex-col sm:flex-row ${
                  index % 2 === 1 ? "sm:flex-row-reverse" : ""
                } size-full sm:h-[100vh] items-center justify-between gap-y-[8rem] ${
                  index % 2 === 0 ? "sm:pl-[2.5rem]" : "sm:pr-[2.5rem]"
                } sm:gap-[6.25rem] py-[1.875rem] ${
                  index === steps.length - 1 ? "sm:pb-[7.5rem]" : ""
                }`}
              >
                {/* Text Section */}
                <ParallaxSection
                  speed={1 - 1.1}
                  className="flex flex-col justify-start items-start gap-[0.438rem] sm:max-w-[50rem]"
                >
                  <LetterRevealOnScroll
                    end="bottom 95%"
                    className="text-ash pn-regular-16 uppercase leading-normal"
                  >
                    <p className="flex flex-row items-center gap-[0.3em]">{"Step " + step.id}</p>
                  </LetterRevealOnScroll>
                  <div className="flex self-stretch justify-start items-start gap-2.5">
                    <LetterRevealOnScroll className="relative" end="bottom 95%">
                      <h2 className="text-ash pn-bold-24">{step.title}</h2>
                    </LetterRevealOnScroll>
                  </div>
                  <LetterRevealOnScroll className="relative" end="bottom 95%">
                    <p className="text-ash pn-regular-20">{step.description}</p>
                  </LetterRevealOnScroll>
                </ParallaxSection>
                {/* Image Section */}
                <ParallaxSection
                  speed={1 - 1.25}
                  className={`select-none flex flex-col items-center justify-center w-full sm:w-[31.25rem] ${
                    index % 2 === 1 ? "translate-x-[2rem]" : "-translate-x-[2rem]"
                  } sm:translate-x-0 ${
                    index % 2 === 1 ? "rounded-l-[2.5rem]" : "rounded-r-[2.5rem]"
                  }`}
                >
                  <ParallaxSection speed={1 - 0.9} className="absolute w-[60%]">
                    <div className="aspect-square bg-goldenrod/60 rounded-full" />
                  </ParallaxSection>
                  <Image
                    src={step.image}
                    alt={step.imageAlt}
                    className="pointer-events-none size-full object-cover z-10"
                    placeholder="blur"
                    quality={75}
                  />
                </ParallaxSection>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoadmapSection;
