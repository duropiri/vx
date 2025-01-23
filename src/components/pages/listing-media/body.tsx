// @/components/pages/listing-media/body.tsx
"use client";
import React, { useEffect, useRef, Suspense } from "react";
import dynamic from "next/dynamic";

// above-thefold static components
import HeroSection from "@/components/pages/listing-media/sections/heroSection";
import PricingSection from "@/components/pages/sections/pricingSection";

// below-the-fold dynamic components
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

  TestimonialsSection: dynamic(
    () => import("@/components/pages/sections/testimonialsSection"),
    {
      loading: () => <div className="min-h-[110vh]" />,
    }
  ),

  BasicSection: dynamic(
    () => import("@/components/pages/sections/basicSection"),
    {
      loading: () => <div className="min-h-[220vh]" />,
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
import ChatWidget from "@/components/ui/chatWidget";
import WhyUsSection from "@/components/pages/sections/whyUsSection";
import ScaleInVisible from "@/components/animations/ScaleInVisible";
import {
  // setupScrollAnimation,
  setupColorAnimation,
  cleanupGSAPAnimations,
} from "@/components/pages/sections/animations/Animations";

import { LMSNavdockLinks } from "@/data/navLinks";
import { listingMediaFAQ } from "@/data/faq";
import { ListingMediaPackages } from "@/data/pricingPackages";
import { useViewport } from "@/contexts/ViewportContext";

function Body() {
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
  }, [, windowWidth]);

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
        navigation={LMSNavdockLinks}
        ref={(el: HTMLDivElement | null) => {
          sectionRefs.current[0] = el;
        }}
      />
      <PricingSection
        originalColor="#EFE6CF"
        transitionColor="#FFFFFF"
        ref={(el: HTMLDivElement | null) => {
          sectionRefs.current[1] = el;
        }}
        noSwitch
        className="bg-white z-10"
        pricingPackages={ListingMediaPackages}
      />

      <Dynamic.SocialProofSection
        id="socialProof1"
        // originalColor="#EFE6CF"
        transitionColor="#FFFFFF"
        className="z-10 min-w-[100vw]"
        ref={(el: HTMLDivElement | null) => {
          sectionRefs.current[2] = el;
        }}
        subheading="Trusted By The Best"
        body="The VX team have built a strong reputation in the real estate industry and earned the trust of many respected names in the business. From major developers to high-end boutique brokers, we have a wide range of clients who rely on us to get the job done right every time."
      />
      <Dynamic.BasicSection
        id="services"
        // originalColor="#EFE6CF"
        transitionColor="#FFFFFF"
        ref={(el: HTMLDivElement | null) => {
          sectionRefs.current[3] = el;
        }}
        className={``}
        content={<Dynamic.ServicesSection />}
      />

      <Dynamic.CopySection
        // originalColor="#EFE6CF"
        transitionColor="#FFFFFF"
        className="z-10 min-w-[100vw]"
        ref={(el: HTMLDivElement | null) => {
          sectionRefs.current[4] = el;
        }}
        copy={
          <>
            The gold standard in real estate
            <span className="text-goldenbrown gold-text">media</span>&
            <span className="text-goldenbrown gold-text">marketing</span>
          </>
        }
      />

      <div ref={container} className="relative h-full bg-white min-w-[100vw]">
        {/* Why Us? */}
        <WhyUsSection
          // ref={contentRef}
          shrinkSize={0.75}
          rotationAmount={-20}
          className="z-0"
        />

        {/* Who is it for? */}
        {/* Styles? */}
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
      {/* CTA */}
      <ScaleInVisible className="flex flex-col items-center justify-center">
        <Dynamic.CTASection className="bg-white z-10" />
      </ScaleInVisible>

      {/* Testimonials */}
      <Dynamic.TestimonialsSection
        noAnimation
        noCarousel
        className="bg-white z-10 relative"
      />

      {/* Case Studies? */}
      {/* Contact */}
      {/* <ScaleInVisible className="flex flex-col items-center justify-center">
        <Dynamic.ContactSection className="bg-white z-10" />
      </ScaleInVisible> */}
      {/* FAQ */}
      <Dynamic.FAQSection
        faq={listingMediaFAQ}
        vertical
        className="bg-white z-10"
      />
    </>
  );
}

export default Body;
