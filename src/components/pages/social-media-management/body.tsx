// @/components/pages/social-media-management/body.tsx
"use client";
import React, { useEffect, useRef } from "react";
import dynamic from "next/dynamic";

// above-thefold static components
import HeroSection from "@/components/pages/social-media-management/sections/heroSection";
import PricingSection from "@/components/pages/sections/pricingSection";

const Dynamic = {
  SocialProofSection: dynamic(
    () => import("@/components/pages/sections/socialProofSection"),
    {
      loading: () => <div className="min-h-[60vh]" />,
    }
  ),

  CopySection: dynamic(
    () => import("@/components/pages/sections/copySection"),
    {
      loading: () => <div className="min-h-[400vh]" />,
    }
  ),

  CTASection: dynamic(() => import("@/components/pages/sections/ctaSection"), {
    loading: () => <div className="min-h-[45vh]" />,
  }),

  FAQSection: dynamic(() => import("@/components/pages/sections/faqSection"), {
    loading: () => <div className="min-h-[60vh]" />,
  }),

  ContactSection: dynamic(
    () => import("@/components/pages/sections/contactSection"),
    {
      loading: () => <div className="min-h-[100vh]" />,
    }
  ),

  ServicesSection: dynamic(
    () => import("@/components/pages/listing-media/sections/servicesSection"),
    {
      loading: () => <div className="min-h-[220vh]" />,
    }
  ),
};

// Complex components
import ProblemSection from "@/components/pages/social-media-management/sections/problemSection";
import StatsSection from "@/components/pages/sections/statsSection";
import SolutionSection from "@/components/pages/social-media-management/sections/solutionSection";
import ServicesSection from "@/components/pages/social-media-management/sections/servicesSection";
import RoadmapSection from "@/components/pages/social-media-management/sections/roadmapSection";
import ScaleInVisible from "@/components/animations/ScaleInVisible";
import {
  setupColorAnimation,
  cleanupGSAPAnimations,
} from "@/components/pages/sections/animations/Animations";

// Data
import { SMMANavdockLinks } from "@/data/navLinks";
import { socialMediaPackages } from "@/data/pricingPackages";
import { HomePageStats } from "@/data/stats";
import { useViewport } from "@/contexts/ViewportContext";

export default function Body() {
  const container = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<Array<HTMLDivElement | null>>([]);
  // const contentRef = useRef<HTMLDivElement>(null);
  const { windowWidth } = useViewport();

  useEffect(() => {
    if (!container.current) return;

    const triggerSection = sectionRefs.current[1];
    if (triggerSection) {
      setupColorAnimation(triggerSection, sectionRefs.current as HTMLElement[]);
    }

    return () => {
      cleanupGSAPAnimations();
    };
  }, [windowWidth]);

  return (
    <>
      {/* <Suspense fallback={null}>
        <ChatWidget />
      </Suspense> */}

      {/* Critical above-the-fold content */}
      <HeroSection
        originalColor="#EFE6CF"
        transitionColor="#FFFFFF"
        className="min-w-[100vw] min-h-[100vh]"
        navigation={SMMANavdockLinks}
        ref={(el) => {
          sectionRefs.current[0] = el;
        }}
      />
      <PricingSection
        originalColor="#EFE6CF"
        transitionColor="#FFFFFF"
        ref={(el) => {
          sectionRefs.current[1] = el;
        }}
        className="bg-white z-10"
        pricingPackages={socialMediaPackages}
        showAllFeatures
      />

      <Dynamic.SocialProofSection
        id="socialProof1"
        // originalColor="#EFE6CF"
        transitionColor="#FFFFFF"
        className="z-10 min-w-[100vw]"
        ref={(el: HTMLDivElement | null) => {
          sectionRefs.current[2] = el;
        }}
      />
      <Dynamic.CopySection
        // originalColor="#EFE6CF"
        transitionColor="#FFFFFF"
        className="z-10 min-w-[100vw]"
        ref={(el: HTMLDivElement | null) => {
          sectionRefs.current[3] = el;
        }}
        copy={
          <>
            We now live in an
            <span className="text-goldenbrown gold-text">online</span>
            real estate economy
          </>
        }
      />
      <ProblemSection
        originalColor="#EFE6CF"
        transitionColor="#FFFFFF"
        className="z-0 min-w-[100vw]"
        ref={(el: HTMLDivElement | null) => {
          sectionRefs.current[4] = el;
        }}
      />
      <Dynamic.CopySection
        // originalColor="#EFE6CF"
        transitionColor="#FFFFFF"
        className="z-10 min-w-[100vw]"
        ref={(el: HTMLDivElement | null) => {
          sectionRefs.current[5] = el;
        }}
        copy={
          <>
            A shift from person-to-person transactions to a place where almost
            <span className="text-goldenbrown gold-text">100%</span>of buyers
            start their buying process
            <span className="text-goldenbrown gold-text">online</span>
          </>
        }
      />

      <div ref={container} className="relative h-full bg-white min-w-[100vw]">
        <StatsSection
          // ref={contentRef}
          stats={HomePageStats}
          className=""
        />
        <Dynamic.CopySection
          className="bg-white z-10"
          copy={
            <>
              The best real estate professionals have
              <br />
              <span className="text-goldenbrown italic gold-text">
                reinvented
              </span>
              themselves and their businesses towards a
              <span className="text-goldenbrown gold-text text-nowrap">
                more substantial
              </span>
              <span className="text-goldenbrown gold-text text-nowrap">
                online presence
              </span>
            </>
          }
        />
      </div>

      <Dynamic.SocialProofSection full className="bg-white z-10" />
      <SolutionSection className="bg-ash z-10" />
      <ServicesSection className="bg-white z-10" />
      <RoadmapSection className="bg-white z-10" />

      <Dynamic.SocialProofSection full className="bg-white z-10" />
      <ScaleInVisible>
        <Dynamic.CTASection className="bg-white z-10" />
      </ScaleInVisible>
      <Dynamic.FAQSection className="bg-white z-10" />
      {/* <ScaleInVisible>
        <Dynamic.ContactSection className="bg-white z-10" />
      </ScaleInVisible> */}
    </>
  );
}
