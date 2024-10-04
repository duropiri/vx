import React from "react";
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

function body() {
  return (
    <>
      <HeroSection />
      <SocialProofSection />
      <CopySection
        copy={
          <>
            We now live in an <br />
            <span className="text-goldenbrown">online</span> real estate economy
          </>
        }
      />
      <ProblemSection />
      <CopySection
        copy={
          <>
            A shift from person-to-person transactions to a place where almost{" "}
            <span className="text-goldenbrown">100%</span> of buyers start their
            buying process <span className="text-goldenbrown">online</span>
          </>
        }
      />
      <StatsSection />
      <CopySection
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
      <SocialProofSection full />
      <SolutionSection />
      <ServicesSection />
      <RoadmapSection />
      <SocialProofSection full />
      <PricingSection />
      <CTASection />
      <FAQSection />
      <ContactSection />
    </>
  );
}

export default body;
