// @/components/pages/testimonials/body.tsx
"use client";
import React, {
  useEffect,
  useRef,
  // Suspense
} from "react";
import dynamic from "next/dynamic";

// above-thefold static components
import BasicHeroSection from "@/components/pages/sections/basicHeroSection";

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

  Basic2ColumnSection: dynamic(
    () => import("@/components/pages/sections/basic2ColumnSection"),
    {
      loading: () => <div className="min-h-[60vh]" />,
    }
  ),
};

// Complex components
import Image from "next/image";
import csImage from "@/../../public/assets/svgs/VX-Website-CS-Bar-1.svg";
import StatsSection from "@/components/pages/sections/statsSection";
import {
  // setupScrollAnimation,
  setupColorAnimation,
  cleanupGSAPAnimations,
} from "@/components/pages/sections/animations/Animations";

// Data
import { TestimonialsStats } from "@/data/stats";

function Body() {
  const container = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<Array<HTMLDivElement | null>>([]);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!container.current) return;

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
      <BasicHeroSection
        className="top"
        heading="Testimonials"
        subheading="Here's What Real Estate Professionals Are Saying"
        content={
          <>
            {/* <Image
              src={csImage}
              alt="hero-image"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              priority={true}
              loading={true ? "eager" : "lazy"}
              className="pointer-events-none"
              quality={75}
            /> */}
            <Dynamic.TestimonialsSection
              noHeader
              
              className="bg-white z-20 !p-0 !w-[100vw] sm:!w-full !-mx-[2rem] sm:!mx-0"
            />
          </>
        }
      />

      <div ref={container} className="relative h-full bg-white min-w-[100vw]">
        <StatsSection
          ref={contentRef}
          shrinkSize={0.75}
          rotationAmount={-15}
          stats={TestimonialsStats}
          className="z-0"
          // scrollYProgress={scrollYProgress}
        />
        <Dynamic.CopySection
          className="bg-white"
          copy={
            <>
              We are what we repeatedly do. Excellence, therefore, is not an
              act, but a
              <span className="text-goldenbrown italic gold-text">habit.</span>
              <span className="pn-regular-16">– Aristotle</span>
            </>
          }
        />
      </div>
      <Dynamic.ContactSection className="bg-white z-10" />
    </>
  );
}

export default Body;
