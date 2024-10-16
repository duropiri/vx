"use client";
import { Reveal } from "@/components/animations/Reveal";
import { FlipLink, HoverWrapper } from "@/components/animations/RevealLinks";
import ScrollingBanner from "@/components/animations/ScrollingBanner";
import SectionHeader from "@/components/ui/sectionHeader";
import { motion, MotionValue } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

interface SectionProps {
  className?: string;
  scrollYProgress?: MotionValue<number>; // Proper type for scrollYProgress
}

function SolutionSection({ className }: SectionProps) {
  const bentosRef = useRef<HTMLDivElement>(null);
  const bentoRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleOnMouseMove = (e: MouseEvent) => {
      bentoRefs.current.forEach((card) => {
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      });
    };

    const bentosContainer = bentosRef.current;
    if (bentosContainer) {
      bentosContainer.addEventListener("mousemove", handleOnMouseMove);
    }

    return () => {
      if (bentosContainer) {
        bentosContainer.removeEventListener("mousemove", handleOnMouseMove);
      }
    };
  }, []);

  return (
    <motion.div
      className={`section-container !flex-row ${className} bg-ash relative`}
    >
      {/* Background Text Parallax */}
      <div className="select-none blur-[0.125rem] absolute pointer-events-none top-0 flex flex-col h-full w-[100vw] text-goldenbrown gap-y-[10.625rem] max-w-[100vw] overflow-hidden">
        <ScrollingBanner
          baseVelocity={10}
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
          baseVelocity={-10}
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
          baseVelocity={10}
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
          baseVelocity={-10}
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
        <div
          id="bentos"
          ref={bentosRef}
          className="flex flex-col size-full items-start justify-center gap-y-[1rem] lg:gap-y-[0.5rem]"
        >
          {/* Top Row */}
          <Reveal
            once
            slide={false}
            xOverflow={false}
            yOverflow={false}
            duration={0.6}
            width="100%"
            className="bento-row !gap-y-[1rem]"
          >
            <div
              className="solution-bento"
              ref={(el: HTMLDivElement | null) => {
                bentoRefs.current[0] = el;
              }}
            >
              <div className="bento-border"></div>
              <div className="bento-content">
                <div className="flex flex-col justify-center lg:justify-start items-start gap-[1.5rem] text-white lg:max-w-[42%]">
                  <span className="subheading pn-semibold-16 bg-ash text-goldenbrown text-center lg:text-start">
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
          </Reveal>
          {/* Middle Row */}
          <Reveal
            once
            slide={false}
            xOverflow={false}
            yOverflow={false}
            duration={0.6}
            width="100%"
            className="bento-row !gap-y-[1rem]"
          >
            <div className="bento-row !gap-y-[1rem]">
              {/* First Bento */}
              <div
                className="solution-bento bento-center lg:max-w-[29%]"
                ref={(el: HTMLDivElement | null) => {
                  bentoRefs.current[1] = el;
                }}
              >
                <div className="bento-border"></div>
                <div className="bento-content h-full">
                  <div className="flex flex-col justify-start items-center gap-[1.5rem] text-white text-center h-full">
                    <span className="subheading pn-semibold-16 bg-ash text-goldenbrown">
                      Social Media Managed by Experts
                    </span>
                    <div className="flex flex-col justify-center items-center gap-[1.5rem] my-auto">
                      <h1 className="pn-bold-20 !leading-[1.5rem]">
                        Stop Managing Social Media—Start Seeing Results.
                      </h1>
                      <p className="pn-regular-16">
                        Forget the hassle of managing your own social media. Our
                        team of experts takes care of everything—from posting
                        and scheduling to audience engagement. With a strategy
                        tailored to your brand, you&apos;ll see a measurable
                        impact without the stress.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Second Bento */}
              <div
                className="solution-bento"
                ref={(el: HTMLDivElement | null) => {
                  bentoRefs.current[2] = el;
                }}
              >
                <div className="bento-border"></div>
                <div className="bento-content">
                  <div className="flex flex-col justify-start items-start gap-[1.5rem] text-white lg:max-w-[51%]">
                    <span className="subheading pn-semibold-16 bg-ash text-goldenbrown">
                      High-Quality Content Creation
                    </span>
                    <h1 className="pn-regular-28">
                      Professional Content Designed to Convert.
                    </h1>
                    <p className="pn-regular-22">
                      In today&apos;s market, content is everything. Our
                      in-house team produces high-quality videos, photos, and
                      social media assets that resonate with your audience and
                      help you close more deals. From scripting to production,
                      we ensure every piece of content aligns with your brand.
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
          </Reveal>

          {/* Bottom Row */}
          <Reveal
            once
            slide={false}
            xOverflow={false}
            yOverflow={false}
            duration={0.6}
            width="100%"
            className="bento-row !gap-y-[1rem]"
          >
            <div className="bento-row !gap-y-[1rem]">
              {/* First Bento */}
              <div
                className="solution-bento"
                ref={(el: HTMLDivElement | null) => {
                  bentoRefs.current[3] = el;
                }}
              >
                <div className="bento-border"></div>
                <div className="bento-content">
                  <div className="flex flex-col justify-start items-start gap-[1.5rem] text-white lg:max-w-[37%]">
                    <span className="subheading pn-semibold-16 bg-ash text-goldenbrown">
                      Strategic Growth for Realtors{" "}
                    </span>
                    <h1 className="pn-regular-28">
                      Grow Your Business with Proven Strategies.{" "}
                    </h1>
                    <p className="pn-regular-22">
                      At VX, we don&apos;t just post content—we help your
                      business grow. Our custom social media strategies are
                      designed specifically for real estate professionals,
                      ensuring you&apos;re reaching the right audience and
                      driving real engagement that leads to sales.
                    </p>
                  </div>
                </div>
              </div>
              {/* Second Bento */}
              <div
                className="solution-bento bento-center lg:max-w-[28%]"
                ref={(el: HTMLDivElement | null) => {
                  bentoRefs.current[4] = el;
                }}
              >
                <div className="bento-border"></div>
                <div className="bento-content h-full">
                  <div className="flex flex-col justify-start items-center gap-[1.5rem] text-white text-center h-full">
                    <span className="subheading pn-semibold-16 bg-ash text-goldenbrown">
                      Data-Driven Results & Reporting
                    </span>
                    <div className="flex flex-col justify-center items-center gap-[1.5rem] my-auto">
                      <h1 className="pn-bold-20 !leading-[1.5rem]">
                        Measure What Matters with Comprehensive Reporting.
                      </h1>
                      <p className="pn-regular-16">
                        See the direct impact of your digital marketing efforts
                        with data-driven reports that track growth, engagement,
                        and return on investment. Our reporting tools give you
                        the clarity you need to make informed decisions and
                        continuously improve.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* CTA */}
        <div className="flex flex-col lg:flex-row items-center justify-center w-full text-white gap-[1rem] my-[0.625rem]">
          <HoverWrapper
            href="/"
            className="button group cursor-select-hover !bg-transparent !border-white shadow-customShadow shadow-white/5 hover:shadow-goldenrod/5"
          >
            <FlipLink className="font-semibold">See More</FlipLink>
            <Image
              alt="arrow"
              src="/svgs/arrow-redirect-cta-white.svg"
              className="text-white group-hover:rotate-45 transition-all duration-300"
              height={21}
              width={21}
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
              className="flex size-full items-center gap-[1rem] px-[1.5rem] py-[0.875rem]"
            >
              <FlipLink className="font-semibold">Get In Touch</FlipLink>
              <Image
                alt="arrow"
                src="/svgs/arrow-redirect-cta.svg"
                className="text-white group-hover:rotate-45 transition-all duration-300"
                height={21}
                width={21}
              />
            </HoverWrapper>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default SolutionSection;
