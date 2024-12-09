/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import BasicHeroSection from "../sections/basicHeroSection";
import { FlipLink, HoverWrapper } from "@/components/animations/RevealLinks";
import Image from "next/image";
import arrowRedirect from "@/../../public/assets/svgs/arrow-redirect-cta.svg";
import ContactSection from "../sections/contactSection";
import FAQSection from "../sections/faqSection";
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
      <ContactSection className="bg-white z-10" />
      <FAQSection vertical className="bg-white z-10" />
    </>
  );
}

export default Body;
