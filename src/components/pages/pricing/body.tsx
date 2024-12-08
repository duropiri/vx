"use client";
import React from "react";
import SocialProofSection from "@/components/pages/sections/socialProofSection";
import PricingSection from "@/components/pages/sections/pricingSection";
import CTASection from "@/components/pages/social-media-management/sections/ctaSection";
import FAQSection from "@/components/pages/sections/faqSection";
import ContactSection from "@/components/pages/sections/contactSection";
import { socialMediaPackages } from "@/data/pricingPackages";

function body() {
  return (
    <>
      <PricingSection
        showAllFeatures
        noAnimation
        className="bg-white z-10 top"
        pricingPackages={socialMediaPackages}
      />
      <SocialProofSection full className="bg-white z-10" />
      <CTASection className="bg-white z-10" />
      <FAQSection className="bg-white z-10" />
      <ContactSection className="bg-white z-10" />
    </>
  );
}

export default body;
