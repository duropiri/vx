import { FlipLink, HoverWrapper } from "@/components/animations/RevealLinks";
import ScrollingBanner from "@/components/animations/ScrollingBanner";
import SectionHeader from "@/components/ui/sectionHeader";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

import completeDMSImage from "@/../../public/assets/images/complete-dms.webp";
import highQCCImage from "@/../../public/assets/images/high-quality-cc.webp";
import stratGrowthImage from "@/../../public/assets/images/strategic-growth.webp";

import vxImage from "@/../../public/assets/svgs/virtual-xposure-text.svg";
import vxImage2 from "@/../../public/assets/svgs/virtual-xposure-text-charcoal.svg";

import ScaleInVisible from "@/components/animations/ScaleInVisible";
import { ServiceIcons } from "@/data/serviceIcons";
import { useViewport } from "@/contexts/ViewportContext";
import { ParallaxSection } from "@/components/animations/SmoothScrolling";

interface SectionProps {
  className?: string;
}

function SolutionSection({ className }: SectionProps) {
  const bentosRef = useRef<HTMLDivElement>(null);
  const bentoRefs = useRef<(HTMLDivElement | null)[]>([]);
  const { windowWidth } = useViewport();

  const bentoItems = [
    {
      key: "complete",
      subheading: "Your Complete Digital Marketing Solution",
      title: "Everything You Need to Succeed Online.",
      description:
        "Virtual Xposure provides a full-service digital marketing solution for real estate professionals, from social media management to high-quality content creation. We handle every aspect of your online presence, freeing you to focus on selling homes while we build your brand.",
      bullets: [
        "Comprehensive digital marketing strategy",
        "Social media management and content creation",
        "Build a strong, consistent online presence",
      ],
      image: completeDMSImage,
    },
    {
      key: "social",
      subheading: "Social Media Managed by Experts",
      title: "Stop Managing Social Media—Start Seeing Results.",
      description:
        "Forget the hassle of managing your own social media. Our team of experts takes care of everything—from posting and scheduling to audience engagement. With a strategy tailored to your brand, you'll see a measurable impact without the stress.",
      bullets: [], // no bullets for this item
      image: null,
    },
    {
      key: "content",
      subheading: "High-Quality Content Creation",
      title: "Professional Content Designed to Convert.",
      description:
        "In today's market, content is everything. Our in-house team produces high-quality videos, photos, and social media assets that resonate with your audience and help you close more deals. From scripting to production, we ensure every piece of content aligns with your brand.",
      bullets: [
        "Scriptwriting and topic research",
        "Professional video and photo shoots",
        "Unlimited revisions until perfection",
      ],
      image: highQCCImage,
    },
    {
      key: "growth",
      subheading: "Strategic Growth for Realtors",
      title: "Grow Your Business with Proven Strategies.",
      description:
        "At VX, we don't just post content—we help your business grow. Our custom social media strategies are designed specifically for real estate professionals, ensuring you're reaching the right audience and driving real engagement that leads to sales.",
      bullets: [],
      image: stratGrowthImage,
    },
    {
      key: "reporting",
      subheading: "Data-Driven Results & Reporting",
      title: "Measure What Matters with Comprehensive Reporting.",
      description:
        "See the direct impact of your digital marketing efforts with data-driven reports that track growth, engagement, and return on investment. Our reporting tools give you the clarity you need to make informed decisions and continuously improve.",
      bullets: [],
      image: null,
    },
  ];

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
  }, [windowWidth]);

  return (
    <div
      id="solutions"
      className={`section-container !flex-row ${className} bg-ash relative`}
    >
      {/* Background Text Parallax */}
      <div className="select-none absolute pointer-events-none top-0 flex flex-col h-full w-[100vw] text-charcoal gap-y-[10.625rem] max-w-[100vw] overflow-hidden opacity-15">
        <ScrollingBanner
          baseVelocity={10}
          child="flex flex-row h-full items-center gap-x-[9.375rem]"
          innerChild="size-max"
        >
          <Image
            alt="virtual xposure"
            src={vxImage2}
            className="size-full"
            quality={50}
            loading="lazy"
            priority={false}
            width={300}
            height={100}
          />
        </ScrollingBanner>
        <ScrollingBanner
          baseVelocity={-10}
          child="flex flex-row h-full items-center gap-x-[9.375rem]"
          innerChild="size-max"
        >
          <Image
            alt="virtual xposure"
            src={vxImage2}
            className="size-full"
            quality={50}
            loading="lazy"
            priority={false}
            width={300}
            height={100}
          />
        </ScrollingBanner>
        <ScrollingBanner
          baseVelocity={10}
          child="flex flex-row h-full items-center gap-x-[9.375rem]"
          innerChild="size-max"
        >
          <Image
            alt="virtual xposure"
            src={vxImage2}
            className="size-full"
            quality={50}
            loading="lazy"
            priority={false}
            width={300}
            height={100}
          />
        </ScrollingBanner>
        <ScrollingBanner
          baseVelocity={-10}
          child="flex flex-row h-full items-center gap-x-[9.375rem]"
          innerChild="size-max"
        >
          <Image
            alt="virtual xposure"
            src={vxImage2}
            className="size-full"
            quality={50}
            loading="lazy"
            priority={false}
            width={300}
            height={100}
          />
        </ScrollingBanner>
      </div>

      {/* Content */}
      <div className="flex size-full max-w-[--section-width] flex-col items-start justify-between gap-y-[4rem] lg:gap-y-[8rem] z-10">
        {/* Header */}
        <SectionHeader
          dark
          noCenter
          heading="Our Solutions"
          subheading={
            <>
              That&apos;s Exactly Why{" "}
              <span className="text-goldenbrown">We Exist</span>
            </>
          }
          noBodyAnimation
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
          {bentoItems.map((item, index) => (
            <ScaleInVisible key={item.key} className="bento-row !gap-y-[1rem]">
              <div
                className={`solution-bento relative items-start overflow-visible ${
                  item.bullets.length === 0 ? "bento-center" : ""
                }`}
                ref={(el: HTMLDivElement | null) => {
                  bentoRefs.current[index] = el;
                }}
              >
                <div className="bento-border"></div>
                <div className="bento-content overflow-hidden">
                  <div
                    className={`z-10 flex flex-col ${
                      item.bullets.length
                        ? "justify-start items-start"
                        : "justify-center items-center"
                    } gap-[1.5rem] ${
                      item.bullets.length
                        ? "text-white lg:max-w-[51%]"
                        : "text-white text-center h-full"
                    }`}
                  >
                    <span className="subheading pn-semibold-16 bg-ash text-goldenbrown">
                      {item.subheading}
                    </span>
                    <p className="pn-regular-24">{item.title}</p>
                    <p className="pn-regular-16">{item.description}</p>
                    {item.bullets.length > 0 && (
                      <ul className="custom-bullet-list gold pn-regular-16 flex flex-col gap-[0.25rem]">
                        {item.bullets.map((bullet) => (
                          <li key={bullet} className="list">
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  {item.image && (
                    <ParallaxSection
                      speed={1 - 0.95}
                      className="absolute -top-[0.5rem] right-0 hidden lg:flex h-[calc(100%+2rem)] opacity-75 pointer-events-none overflow-visible translate-x-[10%]"
                    >
                      <Image
                        alt="icon"
                        src={item.image}
                        className="h-[150%] object-contain opacity-35 blur-sm -translate-y-[25%]"
                        placeholder="blur"
                        quality={75}
                      />
                    </ParallaxSection>
                  )}
                </div>
              </div>
            </ScaleInVisible>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col lg:flex-row items-center justify-center w-full text-white gap-[1rem] my-[0.625rem]">
          <HoverWrapper
            href="/"
            className="button pn-regular-16 group/cta !w-full lg:!w-auto cursor-select-hover !bg-transparent !border-white shadow-customShadow shadow-white/5 hover:shadow-goldenrod/5"
          >
            <FlipLink className="font-semibold">See More</FlipLink>
            <div className="size-5 group-hover/cta:rotate-45 transition-transform duration-300">
              {ServiceIcons.arrow}
            </div>
          </HoverWrapper>

          <HoverWrapper
            href="https://listings.virtualxposure.com/order"
            className="button !bg-goldenbrown text-white !border-none pn-regular-16 !w-full lg:!w-auto group/cta cursor-select-hover shadow-customShadow shadow-white/5 hover/cta:shadow-goldenrod/5"
          >
            <FlipLink className="font-semibold">Book Now</FlipLink>
            <div className="size-5 group-hover/cta:rotate-45 transition-transform duration-300">
              {ServiceIcons.arrow}
            </div>
          </HoverWrapper>
        </div>
      </div>
    </div>
  );
}

export default SolutionSection;
