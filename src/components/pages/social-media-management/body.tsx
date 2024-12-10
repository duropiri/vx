// @/components/pages/social-media-management/body.tsx
"use client";
import React, { useEffect, useRef } from "react";
import HeroSection from "@/components/pages/social-media-management/sections/heroSection";
import SocialProofSection from "@/components/pages/sections/socialProofSection";
import CopySection from "@/components/pages/sections/copySection";
import ProblemSection from "@/components/pages/social-media-management/sections/problemSection";
import StatsSection from "@/components/pages/sections/statsSection";
import SolutionSection from "@/components/pages/social-media-management/sections/solutionSection";
import ServicesSection from "@/components/pages/social-media-management/sections/servicesSection";
import RoadmapSection from "@/components/pages/social-media-management/sections/roadmapSection";
import PricingSection from "@/components/pages/sections/pricingSection";
import CTASection from "@/components/pages/social-media-management/sections/ctaSection";
import FAQSection from "@/components/pages/sections/faqSection";
import ContactSection from "@/components/pages/sections/contactSection";
import { SMMANavdockLinks } from "@/data/navLinks";
import ChatWidget from "@/components/ui/chatWidget";
import { socialMediaPackages } from "@/data/pricingPackages";
import { HomePageStats } from "@/data/stats";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScaleInVisible from "@/components/animations/ScaleInVisible";
import {
  setupColorAnimation,
  setupScrollAnimation,
} from "@/components/pages/sections/animations/Animations";

// Instead of grouping components, optimize through webpack configuration
export default function Body() {
  const container = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<Array<HTMLDivElement | null>>([]);
  const contentRef = useRef<HTMLDivElement>(null);
  const scrollAnimationRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (!container.current) return;

    scrollAnimationRef.current = setupScrollAnimation(
      container.current,
      contentRef.current
    );

    const triggerSection = sectionRefs.current[1];
    if (triggerSection) {
      setupColorAnimation(triggerSection, sectionRefs.current as HTMLElement[]);
    }

    return () => {
      if (scrollAnimationRef.current) {
        scrollAnimationRef.current.kill();
      }
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <ChatWidget />

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
      />

      <SocialProofSection
        id="socialProof1"
        originalColor="#EFE6CF"
        transitionColor="#FFFFFF"
        className="z-10 min-w-[100vw]"
        ref={(el: HTMLDivElement | null) => {
          sectionRefs.current[2] = el;
        }}
      />
      <CopySection
        originalColor="#EFE6CF"
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
      <CopySection
        originalColor="#EFE6CF"
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
          ref={contentRef}
          stats={HomePageStats}
          className=""
          // scrollProgress={scrollProgressRef.current}
        />
        <CopySection
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

      <SocialProofSection full className="bg-white z-10" />
      <SolutionSection className="bg-ash z-10" />
      <ServicesSection className="bg-white z-10" />
      <RoadmapSection className="bg-white z-10" />

      <SocialProofSection full className="bg-white z-10" />
      <ScaleInVisible>
        <CTASection className="bg-white z-10" />
      </ScaleInVisible>
      <FAQSection className="bg-white z-10" />
      <ScaleInVisible>
        <ContactSection className="bg-white z-10" />
      </ScaleInVisible>
    </>
  );
}
