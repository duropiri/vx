"use client";
import React, { useEffect, useRef } from "react";
import SocialProofSection from "@/components/pages/sections/socialProofSection";

import CTASection from "@/components/pages/services/sections/ctaSection";
import FAQSection from "@/components/pages/services/sections/faqSection";
import ContactSection from "@/components/pages/sections/contactSection";
import { useScroll } from "framer-motion";
import { HeaderLinks } from "@/data/navLinks";
import ChatWidget from "@/components/ui/chatWidget";
import WhyUsSection from "@/components/pages/services/sections/whyUsSection";
import TestimonialsSection from "@/components/pages/services/sections/testimonialsSection";
import HeroSection from "@/components/pages/services/sections/heroSection";

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
  whyusSection,
  socialproofSection,
  ctaSection,
  testimonialsSection,
}: SectionProps) {
  const container = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<Array<HTMLDivElement | null>>([]);

  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const triggerSection = sectionRefs.current[1]; // Only section at index 1 will be the trigger
    // const heroSection = sectionRefs.current[0];

    const loadGSAP = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

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
    };

    loadGSAP();
  }, []);

  return (
    <>
      <ChatWidget />
      {/* Hero */}
      <HeroSection
        title={title}
        copy={copy}
        detailList={detailList}
        cta={{ label: cta.label, href: cta.href }}
        src={src}
      />
      <div className="z-[99] rounded-t-3xl overflow-hidden">
        {/* What is it? */}

        {/* Benefits? */}
        {/* Advantage? */}

        {/* Specific Pricing? */}
        {/* Pricing? */}

        {/* Why Us? */}
        {whyusSection && <WhyUsSection />}
        {/* Steps? */}
        {/* Who is it for? */}
        {/* Styles? */}
        {socialproofSection && (
          <SocialProofSection full className="bg-white z-10" />
        )}
        {ctaSection && <CTASection className="bg-white z-10" />}
        {/* Unlimited? */}
        {/* Testimonials? */}
        {testimonialsSection && <TestimonialsSection />}
      </div>
      {/* Case Studies? */}
      <ContactSection className="bg-white z-10" />
      <FAQSection className="bg-white z-10" />
    </>
  );
}

export default Body;
