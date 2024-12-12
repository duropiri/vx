import React, { forwardRef, RefObject } from "react";
import Image from "next/image";
import { FlipLink, HoverWrapper } from "@/components/animations/RevealLinks";
// Import all the SVG assets
import arrowRedirect from "@/../../public/assets/svgs/arrow-redirect-cta.svg";
import arrowRedirectGold from "@/../../public/assets/svgs/arrow-redirect-cta-gold.svg";
import starImage from "@/../../public/assets/svgs/star.svg";
import HeroDecorations from "@/components/heroDecorations";
import { TransitionLink } from "@/components/TransitionLink";
import { ServiceIcons } from "@/data/serviceIcons";

interface LinkDetails {
  title: string;
  href: string;
  src?: string;
}

interface SectionProps {
  className?: string;
  full?: boolean;
  navigation: LinkDetails[];
  originalColor?: string;
  transitionColor?: string;
  ref?: RefObject<HTMLDivElement>;
}

const HeroSection = forwardRef<HTMLDivElement, SectionProps>(
  ({ className = "", originalColor, transitionColor }, ref) => {
    return (
      <div
        ref={ref}
        className={`relative !bg-white ${className}`}
        data-original-color={originalColor}
        data-transition-color={transitionColor}
      >
        {/* Hero Decorations Container */}
        {/* <HeroDecorations
          className="2xl:!-translate-y-[30vh]"
          iconsClassName="2xl:!translate-y-[30vh]"
          originalColor={originalColor}
        /> */}

        {/* Hero */}
        <div
          id="hero"
          className={`${className} section-container hero-container !min-h-[50vh] max-h-[100vh] !h-fit !justify-start !pt-[6rem] sm:!py-[5rem] overflow-hidden z-[400]`}
        >
          <div className="flex flex-col items-center justify-between h-auto w-full sm:max-w-[100vw] gap-[2rem] z-[100]">
            <HeroDecorations
              className="!w-[100vw] -z-10 -bottom-[3.125rem] sm:-bottom-[5rem]"
              iconsClassName="size-full sm:scale-75 sm:translate-y-[15rem]"
              originalColor={originalColor}
            />
            {/* Main Copy */}
            {/* Ratings */}
            <div className="button dark thin pn-regular-16 !gap-[1rem] !border-none pointer-events-none">
              <div className="flex flex-row gap-[0.25rem]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Image
                    key={index}
                    alt="start"
                    src={starImage}
                    className="w-[1rem]"
                    quality={75}
                    priority={false}
                    loading={false ? "eager" : "lazy"}
                  />
                ))}
              </div>
              <p className="pn-regular-12 text-white">500+ Agents Trust Us</p>
            </div>
            {/* Heading */}
            <div className="relative flex flex-col items-center justify-center my-auto">
              <div className="rounded-[5rem] blur-lg animate-pulse absolute top-0 size-[130%] bg-white/90 -z-10 pointer-events-none" />
              <h1 className="hidden pn-regular-72 uppercase text-center sm:max-w-[60vw] sm:flex flex-col items-center">
                <span>
                  Meet the{" "}
                  <span className="text-goldenbrown gold-text font-bold">
                    Gold Standard
                  </span>{" "}
                  in Real Estate Marketing
                </span>
              </h1>

              <h1 className="sm:hidden pn-regular-72 !leading-[1em] uppercase text-center mb-[1rem] flex flex-col items-center">
                <span>
                  Meet the{" "}
                  <span className="text-goldenbrown gold-text font-bold">
                    Gold Standard
                  </span>{" "}
                  in Real Estate Marketing
                </span>
              </h1>
              {/* Body */}
              <h2 className="text-center sm:max-w-[45vw]">
                <span className="hidden sm:flex pn-regular-20">
                  Our premium services combine cutting-edge listing media and
                  tailored social media management to help you attract more
                  leads, enhance your visibility, and close deals with
                  confidence.
                </span>
                <span className="sm:hidden flex pn-regular-16">
                  Our premium services combine cutting-edge listing media and
                  tailored social media management to help you attract more
                  leads, enhance your visibility, and close deals with
                  confidence.
                </span>
              </h2>
            </div>
            {/* Hero CTA */}
            <div className="z-[999]">
              <div className="flex my-[0.625rem]">
                <div className="flex flex-col sm:flex-row gap-[1rem]">
                  <HoverWrapper className="group/cta cursor-select-hover">
                    <TransitionLink
                      href="https://listings.virtualxposure.com/order"
                      className="button gold pn-bold-16 h-fit !bg-transparent shadow-customShadow !border-none shadow-ash/5 group-hover/cta:shadow-goldenrod/5 w-auto !text-ash"
                      passHref
                    >
                      <FlipLink className={`flex items-center`}>
                        Book Now
                      </FlipLink>

                      <div className="size-5 group-hover/cta:rotate-45 transition-transform duration-300">
                        {ServiceIcons.arrow}
                      </div>
                    </TransitionLink>
                  </HoverWrapper>

                  {/* <HoverWrapper className="group/cta cursor-select-hover">
                    <TransitionLink
                      href="/services/social-media-management"
                      className="button dark pn-bold-16 h-fit cursor-select-hover shadow-customShadow !border-none shadow-ash/5 group-hover/cta:shadow-goldenrod/5 w-auto !text-goldenbrown"
                      passHref
                    >
                      <FlipLink className={`flex items-center`}>
                        Elevate Your Online Presence
                      </FlipLink>

                      <div className="size-5 group-hover/cta:rotate-45 transition-transform duration-300">
                        {ServiceIcons.arrow}
                      </div>
                    </TransitionLink>
                  </HoverWrapper> */}
                </div>
              </div>
            </div>
            {/* Guarantees */}
            <div className="">
              <ul className="flex flex-row gap-[2rem] custom-bullet-list gold pn-regular-20">
                <li className="list">24-hour Turnaround</li>
                <li className="list">2X Money-back Guarantee</li>
              </ul>
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    );
  }
);

HeroSection.displayName = "HeroSection";

export default HeroSection;
