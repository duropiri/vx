import React, { forwardRef, RefObject } from "react";
import Image from "next/image";
import { FlipLink, HoverWrapper } from "@/components/animations/RevealLinks";
// Import all the SVG assets
import arrowRedirect from "@/../../public/assets/svgs/arrow-redirect-cta.svg";
import arrowRedirectGold from "@/../../public/assets/svgs/arrow-redirect-cta-gold.svg";
import starImage from "@/../../public/assets/svgs/star.svg";
import HeroDecorations from "@/components/heroDecorations";
import { TransitionLink } from "@/components/TransitionLink";

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
        <HeroDecorations
          className="xl:!-translate-y-[30vh]"
          iconsClassName="xl:!translate-y-[30vh]"
          originalColor={originalColor}
        />

        {/* Hero */}
        <div
          id="hero"
          className={`section-container hero-container !min-h-[60vh] xl:!h-[70vh] !justify-center ${className} !pt-[7rem] sm:!pt-[5rem] overflow-hidden z-[400]`}
        >
          <div className="relative flex flex-col items-center justify-between sm:my-auto h-auto w-full sm:max-w-[100vw] gap-[2rem] z-[100]">
            {/* Main Copy */}
            <div className="button dark thin pn-regular-16 !gap-[1rem] !border-goldenbrown">
              <div className="flex flex-row gap-[0.25rem]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Image
                    key={index}
                    alt="start"
                    src={starImage}
                    className="w-[1rem]"
                    quality={75}
                    priority
                  />
                ))}
              </div>
              <p className="pn-regular-12 text-white">500+ Agents Trust Us</p>
            </div>
            <div className="relative flex flex-col items-center justify-center my-auto">
              <div className="rounded-[5rem] blur-lg animate-pulse absolute top-0 size-[120%] bg-white/80 -z-10 pointer-events-none" />
              <h1 className="hidden pn-regular-72 uppercase text-center sm:max-w-[60vw] my-[0.625rem] sm:flex flex-col items-center">
                <span>
                  Meet the{" "}
                  <span className="text-goldenbrown gold-text font-bold">
                    Gold Standard
                  </span>{" "}
                  in Real Estate Marketing
                </span>
              </h1>

              <h1 className="sm:hidden pn-regular-72 uppercase text-center my-[0.625rem] flex flex-col items-center">
                <span>
                  Meet the{" "}
                  <span className="text-goldenbrown gold-text font-bold">
                    Gold Standard
                  </span>{" "}
                  in Real Estate Marketing
                </span>
              </h1>

              <h2 className="pn-regular-20 text-center sm:max-w-[45vw]">
                <span>
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
                  <HoverWrapper className="">
                    <TransitionLink
                      href="/services/listing-media"
                      className="button gold pn-regular-16 group h-fit cursor-select-hover !bg-transparent shadow-customShadow shadow-ash/5 hover:shadow-goldenrod/5 w-auto"
                      passHref
                    >
                      <FlipLink className={`flex items-center pn-semibold-16`}>
                        Showcase Your Listings
                      </FlipLink>

                      <Image
                        alt="arrow"
                        src={arrowRedirect}
                        className="text-ash group-hover:rotate-45 transition-all duration-300"
                        quality={75}
                      />
                    </TransitionLink>
                  </HoverWrapper>

                  <HoverWrapper className="">
                    <TransitionLink
                      href="/services/social-media-management"
                      className="button dark pn-regular-16 group h-fit cursor-select-hover shadow-customShadow !border-goldenbrown shadow-ash/5 hover:shadow-goldenrod/5 w-auto"
                      passHref
                    >
                      <FlipLink
                        className={`flex items-center text-goldenbrown pn-semibold-16`}
                      >
                        Elevate Your Online Presence
                      </FlipLink>

                      <Image
                        alt="arrow"
                        src={arrowRedirectGold}
                        className="text-ash group-hover:rotate-45 transition-all duration-300"
                        quality={75}
                      />
                    </TransitionLink>
                  </HoverWrapper>
                </div>
              </div>
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
