/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import FAQSection from "@/components/pages/sections/faqSection";
import ContactSection from "@/components/pages/sections/contactSection";
import BasicHeroSection from "@/components/pages/sections/basicHeroSection";
import Image from "next/image";
import TestimonialsSection from "@/components/pages/sections/testimonialsSection";
import heroImage1 from "@/../../public/assets/portfolio/images/aerial drone/Virtual_Xposure_-_Aerial_Drone_Image_-_(1).webp";
import heroImage2 from "@/../../public/assets/portfolio/images/aerial drone/Virtual_Xposure_-_Aerial_Drone_Image_-_(2).webp";
import heroImage3 from "@/../../public/assets/portfolio/images/aerial drone/Virtual_Xposure_-_Aerial_Drone_Image_-_(3).webp";
import { ParallaxSection } from "@/components/animations/SmoothScrolling";

function Body() {
  return (
    <>
      <BasicHeroSection
        heading="Gallery"
        subheading="Real Estate Photography"
        content={
          <>

          </>
        }
      />
      <TestimonialsSection noCarousel noAnimation className="!bg-white/20 backdrop-blur-sm" />
      <FAQSection vertical className="bg-white z-10" />
      <ContactSection className="bg-white z-10" />
    </>
  );
}

export default Body;
