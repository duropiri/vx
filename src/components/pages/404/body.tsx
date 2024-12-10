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
            <HoverWrapper className="">
              <TransitionLink
                href="/"
                className="button gold pn-regular-16 group h-full cursor-select-hover !bg-transparent shadow-customShadow shadow-ash/5 hover:shadow-goldenrod/5 hover:scale-110 w-[14rem]"
                passHref
              >
                <FlipLink className={`flex items-center w-fit`}>
                  Go to Home
                </FlipLink>

                <Image
                  alt="arrow"
                  src={arrowRedirect}
                  className="text-ash group-hover:rotate-45 transition-all duration-300"
                  quality={75}
                />
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
