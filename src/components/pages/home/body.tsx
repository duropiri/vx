"use client";
import React, { useEffect, useRef } from "react";
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
import { useScroll } from "framer-motion";
import { HeaderLinks } from "@/data/navLinks";
import ChatWidget from "@/components/ui/chatWidget";

function Body() {
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
      <HeroSection
        originalColor="#EFE6CF"
        transitionColor="#FFFFFF"
        className="min-w-[100vw] min-h-[100vh]"
        navigation={HeaderLinks}
        ref={(el: HTMLDivElement | null) => {
          sectionRefs.current[0] = el;
        }}
      />
      <SocialProofSection
        id="socialProof1"
        originalColor="#EFE6CF"
        transitionColor="#FFFFFF"
        className="z-10 min-w-[100vw]"
        ref={(el: HTMLDivElement | null) => {
          sectionRefs.current[1] = el;
        }}
      />
      <CopySection
        originalColor="#EFE6CF"
        transitionColor="#FFFFFF"
        className="z-10 min-w-[100vw]"
        ref={(el: HTMLDivElement | null) => {
          sectionRefs.current[2] = el;
        }}
        copy={
          <>
            We now live in an <span className="text-goldenbrown">online</span>{" "}
            real estate economy
          </>
        }
      />
      <ProblemSection
        originalColor="#EFE6CF"
        transitionColor="#FFFFFF"
        className="z-0 min-w-[100vw]"
        ref={(el: HTMLDivElement | null) => {
          sectionRefs.current[3] = el;
        }}
      />
      <CopySection
        originalColor="#EFE6CF"
        transitionColor="#FFFFFF"
        className="z-10 min-w-[100vw]"
        ref={(el: HTMLDivElement | null) => {
          sectionRefs.current[4] = el;
        }}
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
              The best real estate professionals have{" "}
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

export default Body;
