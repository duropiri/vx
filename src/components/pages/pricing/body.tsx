"use client";
import React, { useEffect, useRef, useState } from "react";
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
import { useScroll, MotionValue } from "framer-motion";
import ScrollingBanner from "@/components/animations/ScrollingBanner";
import Image from "next/image";
import { NavLinks } from "@/data/navLinks";
import Link from "next/link";
import { FlipLink, HoverWrapper } from "@/components/animations/RevealLinks";
import { getChars } from "@/components/animations/GetChars";

function body() {
  return (
    <>
      <PricingSection className="bg-white z-10 mt-[6rem]" />
      <SocialProofSection full className="bg-white z-10" />
      <CTASection className="bg-white z-10" />
      <FAQSection className="bg-white z-10" />
      <ContactSection className="bg-white z-10" />
    </>
  );
}

export default body;
