"use client";

import SectionHeader from "@/components/ui/sectionHeader";
import Image from "next/image";
import whatisitImage from "@/../../public/assets/portfolio/virtual renovation images/DEMO_(33).webp";
import LetterRevealOnScroll from "@/components/animations/LetterRevealOnScroll";
import { ParallaxSection } from "@/components/animations/SmoothScrolling";

export const WhatIsItSection = () => (
  <div className="z-[999] relative flex size-full max-w-[--section-width] flex-col items-center sm:items-start justify-center gap-y-[2rem]">
    <div className="relative group flex size-full sm:pt-[5rem] max-w-[--section-width] flex-col-reverse sm:flex-row items-end justify-end gap-[3rem] sm:gap-0">
      <div className="relative sm:absolute top-0 left-0 flex flex-col size-full items-center justify-center rounded-[1rem] overflow-hidden bg-ash">
        <ParallaxSection
          speed={1 - 0.95}
          data-media-wrapper
          className="size-full min-h-[30vh] pointer-events-none"
        >
          <Image
            src={whatisitImage}
            alt="what-is-it-image"
            fill
            sizes="(max-width: 640px) 100vw, 1200px"
            priority={false}
            loading={false ? "eager" : "lazy"}
            className="w-full h-[125%] scale-125 -translate-y-[10%] sm:group-hover:scale-110 opacity-100 sm:group-hover:opacity-50 transition-all duration-500 object-cover"
            quality={75}
          />
        </ParallaxSection>
      </div>
      {/* Inverted Border Radius */}
      <div className="relative hidden sm:flex flex-col items-start justify-start w-[1rem] h-[1rem] overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 flex flex-col bg-white backdrop-blur-lg transition-all duration-500 size-[5rem] inv-rad inv-rad-t-l-4 " />
      </div>
      <div className="relative flex flex-col items-end h-full justify-end max-h-full sm:max-h-[80%] sm:max-w-[40%]">
        {/* Inverted Border Radius */}
        <div className="relative hidden sm:flex flex-col items-start justify-start w-[1rem] h-[1rem] overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 flex flex-col bg-white backdrop-blur-lg transition-all duration-500 size-[5rem] inv-rad inv-rad-t-l-4 " />
        </div>
        <div className="relative flex size-full flex-col items-start justify-start gap-[1.5rem] p-0 sm:p-[2rem] bg-white backdrop-blur-lg transition-all duration-500 rounded-tl-[1rem]">
          <SectionHeader noAnimation
            heading="GROW WITH TECHNOLOGY"
            subheading="What is Virtual Renovation and Remodeling?"
            className="text-black"
          />
          {/* <LetterRevealOnScroll end="bottom 90%"> */}
            <p className={`pn-regular-16 max-w-[43.75rem]`}>
              Virtual renovation and remodeling allow you to reimagine the
              property and renovate it from top to bottom without the time and
              resource investment of a real-world renovation.
            </p>
          {/* </LetterRevealOnScroll> */}
          {/* <LetterRevealOnScroll end="bottom 90%"> */}
            <p className={`pn-regular-16 max-w-[43.75rem]`}>
              Our virtual renovation and remodeling process includes updates to
              structural elements such as flooring, walls, paint, kitchen
              remodels, drywall or ceiling updates, backyard improvements, and
              more.
            </p>
          {/* </LetterRevealOnScroll> */}
          {/* <LetterRevealOnScroll end="bottom 90%"> */}
            <p className={`pn-regular-16 max-w-[43.75rem]`}>
              We understand that preparing a property to appeal to different
              generations of buyers with varying tastes and design preferences
              can be challenging, and we&apos;re here to help!
            </p>
          {/* </LetterRevealOnScroll> */}
        </div>
      </div>
    </div>
  </div>
);
