"use client";
import React, { useRef } from "react";
import HeroSection from "@/components/pages/home/sections/heroSection";
import SocialProofSection from "@/components/pages/home/sections/socialProofSection";
import CopySection from "@/components/pages/home/sections/copySection";
import ProblemSection from "@/components/pages/home/sections/problemSection";
import StatsSection from "@/components/pages/home/sections/statsSection";
import SolutionSection from "@/components/pages/home/sections/solutionSection";
import ServicesSection from "@/components/pages/home/sections/servicesSection";
import RoadmapSection from "@/components/pages/home/sections/roadmapSection";
import PricingSection from "@/components/pages/home/sections/pricingSection";
import CTASection from "@/components/pages/home/sections/ctaSection";
import FAQSection from "@/components/pages/home/sections/faqSection";
import ContactSection from "@/components/pages/home/sections/contactSection";
import { useScroll, MotionValue } from "framer-motion";
import ScrollingBanner from "@/components/animations/ScrollingBanner";
import Image from "next/image";
import { NavLinks } from "@/data/navLinks";

function body() {
  const container = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start start", "end end"],
  });

  return (
    <>
      <HeroSection
        className="z-10 min-w-[100vw]"
        navigation={NavLinks}
      />
      <SocialProofSection className="bg-white z-10 min-w-[100vw] bg-gradient-to-t from-transparent from-90% to-goldenrod/20" />
      <CopySection
        className="bg-white z-10 min-w-[100vw]"
        copy={
          <>
            We now live in an <br />
            <span className="text-goldenbrown">online</span> real estate economy
          </>
        }
      />
      <ProblemSection className="bg-white z-0 min-w-[100vw]" />
      <CopySection
        className="bg-white z-10 min-w-[100vw]"
        copy={
          <>
            A shift from person-to-person transactions to a place where almost{" "}
            <span className="text-goldenbrown">100%</span> of buyers start their
            buying process <span className="text-goldenbrown">online</span>
          </>
        }
      />
      <div ref={container} className="relative h-full bg-white min-w-[100vw]">
        <StatsSection className="" scrollYProgress={scrollYProgress} />
        <CopySection
          scrollYProgress={scrollYProgress}
          className="bg-white z-10"
          copy={
            <>
              The best real estate professionals have
              <br />
              <span className="text-goldenbrown italic">reinvented</span>{" "}
              themselves and their businesses towards a{" "}
              <span className="text-goldenbrown">
                more substantial online presence
              </span>
            </>
          }
        />
      </div>
      <SocialProofSection full className="bg-white z-10" />

      <SolutionSection className="bg-ash z-10" />
      <ServicesSection className="bg-white z-10" />

      <RoadmapSection className="bg-white z-10" />
      <SocialProofSection full className="bg-white z-10" />
      <PricingSection className="bg-white z-10" />
      <CTASection className="bg-white z-10" />
      <FAQSection className="bg-white z-10" />
      <ContactSection className="bg-white z-10" />
    </>
  );
}

export default body;
