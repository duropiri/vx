"use client";
import { FlipLink, HoverWrapper } from "@/components/animations/RevealLinks";
import ScrollingBanner from "@/components/animations/ScrollingBanner";
import SectionHeader from "@/components/ui/sectionHeader";
import { motion, MotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import React from "react";

interface SectionProps {
  className?: string;
  scrollYProgress?: MotionValue<number>; // Proper type for scrollYProgress
}

function SolutionSection({ className, scrollYProgress }: SectionProps) {
  return (
    <motion.div
      className={`section-container !flex-row ${className} bg-ash relative`}
    >
      {/* Background Text Parallax */}
      <div className="absolute pointer-events-none top-0 flex flex-col h-full w-[100vw] text-goldenbrown gap-y-[10.625rem] max-w-[100vw] overflow-hidden">
        <ScrollingBanner
          baseVelocity={25}
          child="flex flex-row h-full items-center gap-x-[9.375rem]"
          innerChild="size-max"
        >
          <Image
            alt="virtual xposure"
            src="/svgs/virtual-xposure-text.svg"
            className="size-full"
            height={453}
            width={6074}
          />
        </ScrollingBanner>
        <ScrollingBanner
          baseVelocity={-25}
          child="flex flex-row h-full items-center gap-x-[9.375rem]"
          innerChild="size-max"
        >
          <Image
            alt="virtual xposure"
            src="/svgs/virtual-xposure-text.svg"
            className="size-full"
            height={453}
            width={6074}
          />
        </ScrollingBanner>
        <ScrollingBanner
          baseVelocity={25}
          child="flex flex-row h-full items-center gap-x-[9.375rem]"
          innerChild="size-max"
        >
          <Image
            alt="virtual xposure"
            src="/svgs/virtual-xposure-text.svg"
            className="size-full"
            height={453}
            width={6074}
          />
        </ScrollingBanner>
        <ScrollingBanner
          baseVelocity={-25}
          child="flex flex-row h-full items-center gap-x-[9.375rem]"
          innerChild="size-max"
        >
          <Image
            alt="virtual xposure"
            src="/svgs/virtual-xposure-text.svg"
            className="size-full"
            height={453}
            width={6074}
          />
        </ScrollingBanner>
      </div>

      {/* Content */}
      <div className="flex size-full max-w-[87.5rem] flex-col items-start justify-between gap-y-[4rem] lg:gap-y-[8rem] z-10">
        {/* Header */}
        <SectionHeader
          dark
          center
          heading="Our Services"
          subheading={
            <>
              That&apos;s Exactly Why{" "}
              <span className="text-goldenbrown">We Exist</span>
            </>
          }
          body="At Virtual Xposure, we specialize in building your brand's
            digital presence, empowering realtors to thrive in today's
            competitive online marketplace. Our services cover everything from
            content creation to full-scale social media management, all backed
            by data-driven strategies to ensure results that matter."
        />

        {/* Bentos */}
        <div className="flex flex-col size-full items-start justify-center gap-y-[1rem] lg:gap-y-[2rem]">
          {/* Top Row */}
          <div className="flex flex-row size-full items-start justify-start gap-[2rem]">
            <div className="flex flex-col size-full items-start justify-start p-[2.5rem] rounded-[1rem] border border-goldenbrown bg-charcoal">
              <div className="flex flex-col lg:flex-row items-center justify-start gap-[2rem]">
                <div className="flex flex-col justify-center lg:justify-start items-start gap-[1.5rem] text-white lg:max-w-[42%]">
                  <span className="flex items-start pn-semibold-16 uppercase bg-ash text-goldenbrown px-[0.625rem] py-[0.5rem] rounded-[0.75rem] text-center lg:text-start">
                    Your Complete Digital Marketing Solution
                  </span>
                  <h1 className="pn-regular-28">
                    Everything You Need to Succeed Online.
                  </h1>
                  <p className="pn-regular-22">
                    Virtual Xposure provides a full-service digital marketing
                    solution for real estate professionals, from social media
                    management to high-quality content creation. We handle every
                    aspect of your online presence, freeing you to focus on
                    selling homes while we build your brand.
                  </p>
                  <ul className="custom-bullet-list gold pn-regular-16 flex flex-col gap-[0.25rem]">
                    <li>Comprehensive digital marketing strategy</li>

                    <li>Social media management and content creation</li>

                    <li>Build a strong, consistent online presence</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Middle Row */}
          <div className="flex flex-col lg:flex-row h-full items-stretch justify-start gap-[2rem]">
            {/* First Bento */}
            <div className="flex flex-col items-center justify-center p-[2.5rem] rounded-[1rem] border border-goldenbrown bg-charcoal lg:max-w-[29%]">
              <div className="flex flex-col lg:flex-row items-center justify-start gap-[2rem] h-full">
                <div className="flex flex-col justify-start items-center gap-[1.5rem] text-white text-center h-full">
                  <span className="flex items-start pn-semibold-16 uppercase bg-ash text-goldenbrown px-[0.625rem] py-[0.5rem] rounded-[0.75rem]">
                    Social Media Managed by Experts
                  </span>
                  <div className="flex flex-col justify-center items-center gap-[1.5rem] my-auto">
                    <h1 className="pn-bold-20 !leading-[1.5rem]">
                      Stop Managing Social Media—Start Seeing Results.
                    </h1>
                    <p className="pn-regular-16">
                      Forget the hassle of managing your own social media. Our
                      team of experts takes care of everything—from posting and
                      scheduling to audience engagement. With a strategy
                      tailored to your brand, you&apos;ll see a measurable
                      impact without the stress.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Bento */}
            <div className="flex flex-col size-full items-start justify-start p-[2.5rem] rounded-[1rem] border border-goldenbrown bg-charcoal">
              <div className="flex flex-col lg:flex-row items-center justify-start gap-[2rem]">
                <div className="flex flex-col justify-start items-start gap-[1.5rem] text-white lg:max-w-[51%]">
                  <span className="flex items-start pn-semibold-16 uppercase bg-ash text-goldenbrown px-[0.625rem] py-[0.5rem] rounded-[0.75rem]">
                    High-Quality Content Creation
                  </span>
                  <h1 className="pn-regular-28">
                    Professional Content Designed to Convert.
                  </h1>
                  <p className="pn-regular-22">
                    In today&apos;s market, content is everything. Our in-house
                    team produces high-quality videos, photos, and social media
                    assets that resonate with your audience and help you close
                    more deals. From scripting to production, we ensure every
                    piece of content aligns with your brand.
                  </p>
                  <ul className="custom-bullet-list gold pn-regular-16 flex flex-col gap-[0.25rem]">
                    <li>Scriptwriting and topic research</li>
                    <li>Professional video and photo shoots</li>
                    <li>Unlimited revisions until perfection</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="flex flex-col lg:flex-row size-full items-stretch justify-start gap-[2rem]">
            {/* First Bento */}
            <div className="flex flex-col size-full items-start justify-start p-[2.5rem] rounded-[1rem] border border-goldenbrown bg-charcoal">
              <div className="flex flex-col lg:flex-row items-center justify-start gap-[2rem]">
                <div className="flex flex-col justify-start items-start gap-[1.5rem] text-white lg:max-w-[37%]">
                  <span className="flex items-start pn-semibold-16 uppercase bg-ash text-goldenbrown px-[0.625rem] py-[0.5rem] rounded-[0.75rem]">
                    Strategic Growth for Realtors{" "}
                  </span>
                  <h1 className="pn-regular-28">
                    Grow Your Business with Proven Strategies.{" "}
                  </h1>
                  <p className="pn-regular-22">
                    At VX, we don&apos;t just post content—we help your business
                    grow. Our custom social media strategies are designed
                    specifically for real estate professionals, ensuring
                    you&apos;re reaching the right audience and driving real
                    engagement that leads to sales.
                  </p>
                </div>
              </div>
            </div>
            {/* Second Bento */}
            <div className="flex flex-col items-center justify-center p-[2.5rem] rounded-[1rem] border border-goldenbrown bg-charcoal lg:max-w-[28%]">
              <div className="flex flex-col lg:flex-row items-center justify-start gap-[2rem] h-full">
                <div className="flex flex-col justify-start items-center gap-[1.5rem] text-white text-center h-full">
                  <span className="flex items-start pn-semibold-16 uppercase bg-ash text-goldenbrown px-[0.625rem] py-[0.5rem] rounded-[0.75rem]">
                    Data-Driven Results & Reporting
                  </span>
                  <div className="flex flex-col justify-center items-center gap-[1.5rem] my-auto">
                    <h1 className="pn-bold-20 !leading-[1.5rem]">
                      Measure What Matters with Comprehensive Reporting.
                    </h1>
                    <p className="pn-regular-16">
                      See the direct impact of your digital marketing efforts
                      with data-driven reports that track growth, engagement,
                      and return on investment. Our reporting tools give you the
                      clarity you need to make informed decisions and
                      continuously improve.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col lg:flex-row items-center justify-center w-full text-white gap-[1rem] my-[0.625rem]">
          <HoverWrapper
            href="/"
            className="button cursor-select-hover !bg-ash !border-white shadow-customShadow shadow-white/5 hover:shadow-goldenrod/5"
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
    </motion.div>
  );
}

export default SolutionSection;
