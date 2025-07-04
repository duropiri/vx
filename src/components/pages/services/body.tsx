// @/components/pages/services/body.tsx
"use client";
import React, { useEffect, useRef } from "react";
import dynamic from "next/dynamic";

// above-thefold static components
import HeroSection from "@/components/pages/services/sections/heroSection";
// import PricingSection from "@/components/pages/sections/pricingSection";

const Dynamic = {
  SocialProofSection: dynamic(
    () => import("@/components/pages/sections/socialProofSection"),
    {
      loading: () => <div className="min-h-[60vh]" />,
      ssr: false,
    }
  ),

  CTASection: dynamic(() => import("@/components/pages/sections/ctaSection"), {
    loading: () => <div className="min-h-[45vh]" />,
    ssr: false,
  }),

  FAQSection: dynamic(() => import("@/components/pages/sections/faqSection"), {
    loading: () => <div className="min-h-[60vh]" />,
    ssr: false,
  }),

  ContactSection: dynamic(
    () => import("@/components/pages/sections/contactSection"),
    {
      loading: () => <div className="min-h-[100vh]" />,
      ssr: false,
    }
  ),

  TestimonialsSection: dynamic(
    () => import("@/components/pages/sections/testimonialsSection"),
    {
      loading: () => <div className="min-h-[110vh]" />,
      ssr: false,
    }
  ),

  BasicSection: dynamic(
    () => import("@/components/pages/sections/basicSection"),
    {
      loading: () => <div className="min-h-[220vh]" />,
      ssr: false,
    }
  ),

  PricingSection: dynamic(
    () => import("@/components/pages/sections/pricingSection"),
    {
      loading: () => <div className="min-h-[220vh]" />,
      ssr: false,
    }
  ),

  Basic2ColumnSection: dynamic(
    () => import("@/components/pages/sections/basic2ColumnSection"),
    {
      loading: () => <div className="min-h-[60vh]" />,
      ssr: false,
    }
  ),

  FloorplansSection: dynamic(
    () => import("@/components/pages/services/sections/floorplansSection"),
    {
      loading: () => <div className="min-h-[80vh]" />,
      ssr: false,
    }
  ),

  PhotographySection: dynamic(
    () => import("@/components/pages/services/sections/photographySection"),
    {
      loading: () => <div className="min-h-[100vh]" />,
      ssr: false,
    }
  ),

  VirtualSection: dynamic(
    () => import("@/components/pages/services/sections/virtualSection"),
    {
      loading: () => <div className="min-h-[180vh]" />,
      ssr: false,
    }
  ),
};

// Complex components
import WhyUsSection from "@/components/pages/sections/whyUsSection";
import ScaleInVisible from "@/components/animations/ScaleInVisible";
import {
  setupColorAnimation,
  cleanupGSAPAnimations,
} from "@/components/pages/sections/animations/Animations";

// Data
import { listingMediaFAQ } from "@/data/faq";
import VirtualSection from "@/components/pages/services/sections/virtualSection";
import { useViewport } from "@/contexts/ViewportContext";
import { FAQProps } from "@/components/pages/sections/faqSection";
import { PricingPackages } from "@/components/pages/sections/pricingSection";
import SocialProofSection from "@/components/pages/sections/socialProofSection";

interface CTA {
  label: string;
  href: string;
}

interface DetailItem {
  icon: React.ReactNode; // This allows for SVG or component icons
  text: string;
}

interface SectionProps {
  title: string;
  copy: string;
  detailList?: DetailItem[];
  cta: CTA | CTA[];  // Allow single CTA or array of CTAs
  src: string;

  whyusSection?: boolean;
  socialproofSection?: boolean;
  ctaSection?: boolean;
  testimonialsSection?: boolean;
  pricing?: PricingPackages;
  faq?: FAQProps[];
  faqSection?: boolean;

  whatisitSection?: React.ReactElement | React.ReactElement[];
  benefitsSection?: React.ReactElement;
  stepsSection?: React.ReactElement[];
  unlimitedSection?: React.ReactElement[];
  advantageSection?: React.ReactElement;

  staging?: boolean;
  renovation?: boolean;
  photography?: boolean;
  floorplan?: boolean;
  regularSection?: React.ReactElement;
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
  whyusSection = true,
  stepsSection,
  socialproofSection = true,
  ctaSection = true,
  unlimitedSection,
  testimonialsSection = true,
  pricing,
  faq,
  faqSection = true,
  staging,
  renovation,
  photography,
  floorplan,
  regularSection,
}: SectionProps) {
  const container = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<Array<HTMLDivElement | null>>([]);
  // const contentRef = useRef<HTMLDivElement>(null);
  const { windowWidth } = useViewport();

  useEffect(() => {
    if (!container.current) return;

    // const scrollAnimation = setupScrollAnimation(
    //   container.current,
    //   contentRef.current
    // );

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
      {/* <ChatWidget /> */}
      {/* Hero */}
      <div
        // ref={heroRef}
        className="w-full z-0 bg-ash"
      >
        <HeroSection
          title={title}
          copy={copy}
          detailList={detailList}
          cta={cta}
          src={src}
          // className="fixed inset-0 w-full"
        />
      </div>
      {/* Spacer div that matches hero height */}
      {/* <div style={{ height: 0 }} /> */}
      <div className="relative -mt-[4rem] z-[99] rounded-t-3xl overflow-hidden bg-white">
        {regularSection && (
          <Dynamic.BasicSection content={regularSection} />
        )}
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

        {floorplan && (
          <Dynamic.BasicSection content={<Dynamic.FloorplansSection />} />
        )}
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
          <Dynamic.PricingSection
            noSwitch
            className="bg-white z-10"
            pricingPackages={pricing}
          />
        )}
      </div>
      <div
        ref={container}
        className="relative size-full bg-white max-w-[100vw]"
      >
        {/* Why Us? */}
        {whyusSection && (
          <WhyUsSection
            // ref={contentRef}
            // scrollProgress={scrollProgress}
            // shrinkSize={0.75}
            // rotationAmount={-20}
            className="z-0 sticky top-0"
          />
        )}
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
        {socialproofSection && (
          <Dynamic.SocialProofSection
            subheading="Trusted By The Best"
            body="The VX team have built a strong reputation in the real estate industry and earned the trust of many respected names in the business. From major developers to high-end boutique brokers, we have a wide range of clients who rely on us to get the job done right every time."
            className="bg-white z-10 relative"
          />
        )}
      </div>
      {/* CTA */}
      {ctaSection && (
        <div className="bg-white z-10">
          <ScaleInVisible>
            <Dynamic.CTASection className="bg-white z-10" />
          </ScaleInVisible>
        </div>
      )}
      {/* Unlimited? */}
      {unlimitedSection && (
        <Dynamic.Basic2ColumnSection
          className="bg-white z-10 relative"
          leftContent={unlimitedSection[0]}
          rightContent={unlimitedSection[1]}
        />
      )}
      {/* Testimonials */}
      {testimonialsSection && (
        <Dynamic.TestimonialsSection
          noCarousel
          className="bg-white z-10 relative"
        />
      )}

      {/* Case Studies? */}
      {photography && (
        <Dynamic.BasicSection
          content={<Dynamic.PhotographySection dark={false} />}
        />
      )}

      {/* Contact */}
      {/* <div className="bg-white z-10">
        <ScaleInVisible>
          <Dynamic.ContactSection className="bg-white z-10" />
        </ScaleInVisible>
      </div> */}
      {/* FAQ */}
      {faqSection && (
        <Dynamic.FAQSection
          faq={faq || listingMediaFAQ}
          vertical
          className="bg-white z-10"
        />
      )}
    </>
  );
}

export default Body;
