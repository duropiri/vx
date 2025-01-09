"use client";
import React from "react";
import dynamic from "next/dynamic";

import PricingSection from "@/components/pages/sections/pricingSection";
import {
  ListingMediaPackages,
  // socialMediaPackages,
} from "@/data/pricingPackages";

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

function body() {
  return (
    <>
      <PricingSection
        showAllFeatures
        noSwitch
        noAnimation
        className="bg-white z-10 top"
        heading="Listing Media"
        body="Delivering top-tier quality visuals with no limits—crafted to elevate your listings effortlessly."
        pricingPackages={ListingMediaPackages}
      />
      {/* <PricingSection
        showAllFeatures
        noAnimation
        className="bg-white z-10 top"
        heading="Social Media"
        pricingPackages={socialMediaPackages}
      /> */}
      <Dynamic.SocialProofSection full className="bg-white z-10" />
      <Dynamic.CTASection className="bg-white z-10" />
      <Dynamic.FAQSection className="bg-white z-10" />
      <Dynamic.ContactSection className="bg-white z-10" />
    </>
  );
}

export default body;
