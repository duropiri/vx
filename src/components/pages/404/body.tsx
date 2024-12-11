// @/components/pages/404/body.tsx
"use client";
import React, { useEffect, useRef, Suspense } from "react";
import dynamic from "next/dynamic";

// above-thefold static components
import BasicHeroSection from "@/components/pages/sections/basicHeroSection";

// below-the-fold dynamic components
const Dynamic = {
  FAQSection: dynamic(() => import("@/components/pages/sections/faqSection"), {
    loading: () => <div className="min-h-[60vh]" />,
  }),

  ContactSection: dynamic(
    () => import("@/components/pages/sections/contactSection"),
    {
      loading: () => <div className="min-h-[100vh]" />,
    }
  ),
};

// Complex compponents
import { FlipLink, HoverWrapper } from "@/components/animations/RevealLinks";
import Image from "next/image";
import arrowRedirect from "@/../../public/assets/svgs/arrow-redirect-cta.svg";
import { TransitionLink } from "@/components/TransitionLink";
import { ServiceIcons } from "@/data/serviceIcons";

function Body({}) {
  return (
    <>
      <BasicHeroSection
        className="!bg-ash"
        largeText
        dark
        heading="404"
        subheading="Page Not Found"
        subheadingClassName="!mt-[5rem] !text-[3rem] sm:!text-[6rem] !leading-[6rem]"
        content={
          <>
            <HoverWrapper className="group/cta cursor-select-hover">
              <TransitionLink
                href="/"
                className="button gold pn-regular-16 h-full !bg-transparent shadow-customShadow shadow-ash/5 group-hover/cta:shadow-goldenrod/5 w-[14rem]"
                passHref
              >
                <FlipLink className={`flex items-center w-fit`}>
                  Go to Home
                </FlipLink>

                <div className="size-5 group-hover/cta:rotate-45 transition-transform duration-300">
                  {ServiceIcons.arrow}
                </div>
              </TransitionLink>
            </HoverWrapper>
          </>
        }
      />
      <Dynamic.ContactSection className="bg-white z-10" />
      <Dynamic.FAQSection vertical className="bg-white z-10" />
    </>
  );
}

export default Body;
