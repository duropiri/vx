"use client";
import React from "react";
import SocialProofSection from "@/components/pages/home/sections/socialProofSection";
import PricingSection from "@/components/pages/home/sections/pricingSection";
import CTASection from "@/components/pages/home/sections/ctaSection";
import FAQSection from "@/components/pages/home/sections/faqSection";
import ContactSection from "@/components/pages/home/sections/contactSection";

function body() {
  return (
    <>
      <PricingSection className="bg-white z-10 pt-[6rem]" />
      <SocialProofSection full className="bg-white z-10" />
      <CTASection className="bg-white z-10" />
      <FAQSection className="bg-white z-10" />
      <ContactSection className="bg-white z-10" />
    </>
  );
}

export default body;
