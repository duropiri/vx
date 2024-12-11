// @/components/pages/services/body.tsx
"use client";
import React, { useEffect, useRef, Suspense } from "react";
import dynamic from "next/dynamic";

// above-thefold static components
import HeroSection from "@/components/pages/services/sections/heroSection";
import PricingSection from "@/components/pages/sections/pricingSection";

const Dynamic = {
  SocialProofSection: dynamic(
    () => import("@/components/pages/sections/socialProofSection"),
    {
      loading: () => <div className="min-h-[60vh]" />,
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

  Basic2ColumnSection: dynamic(
    () => import("@/components/pages/sections/basic2ColumnSection"),
    {
      loading: () => <div className="min-h-[60vh]" />,
    }
  ),

  FloorplansSection: dynamic(
    () => import("@/components/pages/services/sections/floorplansSection"),
    {
      loading: () => <div className="min-h-[80vh]" />,
    }
  ),

  PhotographySection: dynamic(
    () => import("@/components/pages/services/sections/photographySection"),
    {
      loading: () => <div className="min-h-[100vh]" />,
    }
  ),

  VirtualSection: dynamic(
    () => import("@/components/pages/services/sections/virtualSection"),
    {
      loading: () => <div className="min-h-[180vh]" />,
    }
  ),
};

// Complex components
import ChatWidget from "@/components/ui/chatWidget";
import WhyUsSection from "@/components/pages/services/sections/whyUsSection";
import ScaleInVisible from "@/components/animations/ScaleInVisible";
import {
  setupScrollAnimation,
  setupColorAnimation,
  cleanupGSAPAnimations,
} from "@/components/pages/sections/animations/Animations";

// Data
import { listingMediaFAQ } from "@/data/faq";
import VirtualSection from "@/components/pages/services/sections/virtualSection";

interface SectionProps {
  title: string;
  copy: string;
  detailList?: DetailItem[];
  cta: CTA;
  src: string;

  whyusSection?: boolean;
  socialproofSection?: boolean;
  ctaSection?: boolean;
  testimonialsSection?: boolean;
  pricing?: any;
  faq?: any;

  whatisitSection?: any | any[];
  benefitsSection?: any;
  stepsSection?: any[];
  unlimitedSection?: any[];
  advantageSection?: any;

  staging?: boolean;
  renovation?: boolean;
  photography?: boolean;
  floorplan?: boolean;
}

interface CTA {
  label: string;
  href: string;
}

interface DetailItem {
  icon: React.ReactNode; // This allows for SVG or component icons
  text: string;
}

function Body({
  title,
  copy,
  detailList,
  cta,
  src,
  whatisitSection,
  benefitsSection,
  advantageSection,
  whyusSection,
  stepsSection,
  socialproofSection,
  ctaSection,
  unlimitedSection,
  testimonialsSection,
  pricing,
  faq,
  staging,
  renovation,
  photography,
  floorplan,
}: SectionProps) {
  const container = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<Array<HTMLDivElement | null>>([]);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!container.current) return;

    const scrollAnimation = setupScrollAnimation(
      container.current,
      contentRef.current
    );

    const triggerSection = sectionRefs.current[1];
    if (triggerSection) {
      setupColorAnimation(triggerSection, sectionRefs.current as HTMLElement[]);
    }

    return () => {
      cleanupGSAPAnimations();
    };
  }, []);

  return (
    <>
      <ChatWidget />
      {/* Hero */}
      <div
        // ref={heroRef}
        className="w-full z-0 bg-ash"
      >
        <HeroSection
          title={title}
          copy={copy}
          detailList={detailList}
          cta={{ label: cta.label, href: cta.href }}
          src={src}
          // className="fixed inset-0 w-full"
        />
      </div>
      {/* Spacer div that matches hero height */}
      {/* <div style={{ height: 0 }} /> */}
      <div className="relative -mt-[4rem] z-[99] rounded-t-3xl overflow-hidden bg-white">
        {/* What is it? */}
        {whatisitSection &&
          (Array.isArray(whatisitSection) ? (
            whatisitSection.map((section, index) => (
              <Dynamic.BasicSection
                key={index}
                className={`${index % 2 && "!bg-ash"}`}
                content={section}
              />
            ))
          ) : (
            <Dynamic.BasicSection content={whatisitSection} />
          ))}

        {floorplan && <Dynamic.BasicSection content={<Dynamic.FloorplansSection />} />}
        {staging && (
          <Dynamic.BasicSection
            content={<VirtualSection renovation={false} objremoval={false} />}
          />
        )}
        {renovation && (
          <Dynamic.BasicSection
            content={<VirtualSection objremoval={false} staging={false} />}
          />
        )}

        {/* Benefits? */}
        {benefitsSection && <Dynamic.BasicSection content={benefitsSection} />}

        {/* Advantage? */}
        {advantageSection && (
          <Dynamic.BasicSection content={advantageSection} />
        )}

        {/* Specific Pricing? */}
        {/* Pricing? */}
        {pricing && (
          <PricingSection
            noSwitch
            className="bg-white z-10"
            pricingPackages={pricing}
          />
        )}
      </div>
      <div ref={container} className="relative h-full bg-white min-w-[100vw]">
        {/* Why Us? */}
        <WhyUsSection
          ref={contentRef}
          // scrollProgress={scrollProgress}
          shrinkSize={0.75}
          rotationAmount={-20}
          className="z-0"
        />
        {/* Steps? */}
        {stepsSection && (
          <Dynamic.Basic2ColumnSection
            className="bg-white z-10 relative"
            leftContent={stepsSection[0]}
            rightContent={stepsSection[1]}
          />
        )}

        {/* Who is it for? */}
        {/* Styles? */}

        {/* Social Proof */}
        <Dynamic.SocialProofSection
          subheading="Trusted By The Best"
          body="The VX team have built a strong reputation in the real estate industry and earned the trust of many respected names in the business. From major developers to high-end boutique brokers, we have a wide range of clients who rely on us to get the job done right every time."
          className="bg-white z-10 relative"
        />
      </div>
      {/* CTA */}
      <div className="bg-white z-10">
        <ScaleInVisible>
          <Dynamic.CTASection className="bg-white z-10" />
        </ScaleInVisible>
      </div>
      {/* Unlimited? */}
      {unlimitedSection && (
        <Dynamic.Basic2ColumnSection
          className="bg-white z-10 relative"
          leftContent={unlimitedSection[0]}
          rightContent={unlimitedSection[1]}
        />
      )}
      {/* Testimonials */}
      <Dynamic.TestimonialsSection className="bg-white z-10 relative" />

      {/* Case Studies? */}
      {photography && (
        <Dynamic.BasicSection content={<Dynamic.PhotographySection dark={false} />} />
      )}

      {/* Contact */}
      <div className="bg-white z-10">
        <ScaleInVisible>
          <Dynamic.ContactSection className="bg-white z-10" />
        </ScaleInVisible>
      </div>
      {/* FAQ */}
      <Dynamic.FAQSection
        faq={faq || listingMediaFAQ}
        vertical
        className="bg-white z-10"
      />
    </>
  );
}

export default Body;
