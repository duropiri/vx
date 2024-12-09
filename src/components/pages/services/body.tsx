/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect, useRef } from "react";
import SocialProofSection from "@/components/pages/sections/socialProofSection";
import CTASection from "@/components/pages/services/sections/ctaSection";
import FAQSection from "@/components/pages/sections/faqSection";
import ContactSection from "@/components/pages/sections/contactSection";
import ChatWidget from "@/components/ui/chatWidget";
import WhyUsSection from "@/components/pages/services/sections/whyUsSection";
import TestimonialsSection from "@/components/pages/sections/testimonialsSection";
import HeroSection from "@/components/pages/services/sections/heroSection";
import { listingMediaFAQ } from "@/data/faq";
import PricingSection from "@/components/pages/sections/pricingSection";
import Basic2ColumnSection from "@/components/pages/sections/basic2ColumnSection";
import BasicSection from "@/components/pages/sections/basicSection";
import {
  FloorplansSection,
  PhotographySection,
  VirtualSection,
} from "@/app/case-studies/CaseStudiesClient";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import ScaleInVisible from "@/components/animations/ScaleInVisible";

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

  const scrollAnimationRef = useRef<gsap.core.Timeline | null>(null);
  // const { scrollYProgress } = useScroll({
  //   target: container,

  //   offset: ["start start", "end end"],
  // });

  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!container.current) return;

    scrollAnimationRef.current = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "bottom center",
        scrub: 1,
        onUpdate: (self) => {
          const newProgress = self.progress;
          // Remove references to scrollAnimationRef.current as a prop or state
          // Instead, animate the WhyUsSection content element directly:
          gsap.to(contentRef.current, {
            scale: gsap.utils.interpolate(1, 0.5, newProgress),
            rotation: gsap.utils.interpolate(0, -45, newProgress),
            filter: `blur(${gsap.utils.interpolate(0, 2.5, newProgress)}px)`,
            duration: 0,
            overwrite: "auto",
          });
        },
      },
    });

    // Color Change Animation
    const triggerSection = sectionRefs.current[1]; // Only section at index 1 will be the trigger

    if (triggerSection) {
      const updateColors = (change: boolean) => {
        sectionRefs.current.forEach((section) => {
          if (section) {
            const originalColor = section.dataset.originalColor;
            const transitionColor = section.dataset.transitionColor;

            if (!originalColor || !transitionColor) {
              console.warn(
                "Original or transition color not set for section:",
                section
              );
              return;
            }

            const newColor = change ? transitionColor : originalColor;

            // Animate background color for each section
            gsap.to(section, {
              backgroundColor: newColor,
              duration: 0.5,
              ease: "power1.inOut",
            });

            // Update the color state of the ColorChangeSection component
            const sectionComponent = section as unknown as {
              setColor: (color: string) => void;
            };
            if (sectionComponent.setColor) {
              sectionComponent.setColor(newColor);
            }

            // Animate gradient colors
            const gradientElements = section.querySelectorAll(
              ".bg-gradient-to-b, .bg-gradient-to-t"
            ) as NodeListOf<HTMLElement>;
            gradientElements.forEach((el) => {
              gsap.to(el, {
                "--tw-gradient-from": `${newColor} var(--tw-gradient-from-position)`,
                duration: 0.5,
                ease: "power1.inOut",
              });
            });
          }
        });
      };

      // Create ScrollTrigger for the section at index 1 only
      ScrollTrigger.create({
        trigger: triggerSection,
        start: "top-=400px top",
        end: "bottom top",
        onEnter: () => updateColors(true),
        onLeaveBack: () => updateColors(false),
        // markers: true, // Remove in production
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
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
              <BasicSection
                key={index}
                className={`${index % 2 && "!bg-ash"}`}
                content={section}
              />
            ))
          ) : (
            <BasicSection content={whatisitSection} />
          ))}

        {floorplan && <BasicSection content={<FloorplansSection />} />}
        {staging && (
          <BasicSection
            content={<VirtualSection renovation={false} objremoval={false} />}
          />
        )}
        {renovation && (
          <BasicSection
            content={<VirtualSection objremoval={false} staging={false} />}
          />
        )}

        {/* Benefits? */}
        {benefitsSection && <BasicSection content={benefitsSection} />}

        {/* Advantage? */}
        {advantageSection && <BasicSection content={advantageSection} />}

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
          <Basic2ColumnSection
            className="bg-white z-10 relative"
            leftContent={stepsSection[0]}
            rightContent={stepsSection[1]}
          />
        )}

        {/* Who is it for? */}
        {/* Styles? */}

        {/* Social Proof */}
        <SocialProofSection
          subheading="Trusted By The Best"
          body="The VX team have built a strong reputation in the real estate industry and earned the trust of many respected names in the business. From major developers to high-end boutique brokers, we have a wide range of clients who rely on us to get the job done right every time."
          className="bg-white z-10 relative"
        />
      </div>
      {/* CTA */}
      <div className="bg-white z-10">
        <ScaleInVisible>
          <CTASection className="bg-white z-10" />
        </ScaleInVisible>
      </div>
      {/* Unlimited? */}
      {unlimitedSection && (
        <Basic2ColumnSection
          className="bg-white z-10 relative"
          leftContent={unlimitedSection[0]}
          rightContent={unlimitedSection[1]}
        />
      )}
      {/* Testimonials */}
      <TestimonialsSection className="bg-white z-10 relative" />

      {/* Case Studies? */}
      {photography && (
        <BasicSection content={<PhotographySection dark={false} />} />
      )}

      {/* Contact */}
      <div className="bg-white z-10">
        <ScaleInVisible>
          <ContactSection className="bg-white z-10" />
        </ScaleInVisible>
      </div>
      {/* FAQ */}
      <FAQSection
        faq={faq || listingMediaFAQ}
        vertical
        className="bg-white z-10"
      />
    </>
  );
}

export default Body;
