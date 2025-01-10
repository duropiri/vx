/* eslint-disable @typescript-eslint/no-explicit-any */
// import OpacityOnScroll from "@/components/animations/OpacityOnScroll";
import SectionHeader from "@/components/ui/sectionHeader";
import Image from "next/image";
import React, {
  forwardRef,
  RefObject,
  useEffect,
  // useState
} from "react";
import { FlipLink, HoverWrapper } from "@/components/animations/RevealLinks";
import arrowRedirect from "@/../../public/assets/svgs/arrow-redirect-cta.svg";
import { gsap, ScrollTrigger } from "@/utils/gsap";
gsap.registerPlugin(ScrollTrigger);
import { ParallaxSection } from "@/components/animations/SmoothScrolling";
import ScrollingBanner from "@/components/animations/LegacyScrollingBanner";
import { ServiceIcons } from "@/data/serviceIcons";

interface SectionProps {
  className?: string;
  full?: boolean;
  originalColor?: string;
  transitionColor?: string;
  ref?: RefObject<HTMLDivElement>;
  id?: string;
  title: string;
  copy: string;
  cta: CTA;
  detailList?: DetailItem[];
  src: string;
}

interface CTA {
  label: string;
  href: string;
}

interface DetailItem {
  icon: React.ReactNode; // This allows for SVG or component icons
  text: string;
}

const HeroSection = forwardRef<HTMLDivElement, SectionProps>(
  (
    {
      // className = "",
      // full = false,
      // originalColor = "#FFFFFF",
      // transitionColor = "#FFFFFF",
      id,
      title,
      copy,
      detailList,
      cta,
      src,
    },
    ref
  ) => {
    // const [color] = useState(originalColor);
    // GSAP Animations
    useEffect(() => {
      // Scale effect for background media
      const mediaWrapper = document.querySelector("[data-media-wrapper]");
      if (mediaWrapper) {
        gsap.fromTo(
          mediaWrapper,
          {
            scale: 1,
          },
          {
            scale: 1.15,
            ease: "none",
            scrollTrigger: {
              trigger: mediaWrapper,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      }

      return () => {
        ScrollTrigger.getAll().forEach((st) => st.kill());
      };
    }, []);

    return (
      <div ref={ref} id={id} className="relative flex w-full overflow-hidden">
        {/* Video Background */}
        {src.endsWith(".webm") || src.endsWith(".webm") ? (
          <ParallaxSection
            isHero
            speed={1 - 0.3}
            data-media-wrapper
            className="absolute inset-0 size-full h-[120%]"
          >
            <video
              src={src}
              autoPlay
              loop
              muted
              playsInline
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black/10" />
          </ParallaxSection>
        ) : (
          <ParallaxSection
            isHero
            speed={1 - 0.3}
            data-media-wrapper
            className="absolute flex size-full h-[120%] pointer-events-none"
          >
            <Image
              src={src}
              alt={title}
              fill
              className="object-cover"
              quality={75}
              priority={false}
              loading={false ? "eager" : "lazy"}
            />
            <div className="absolute inset-0 bg-black/40 pointer-events-none" />
          </ParallaxSection>
        )}

        {/* Content */}
        <ParallaxSection
          isHero
          speed={1 - 0.5}
          className="relative z-10 section-container sm:!flex-row min-h-[60vh] overflow-visible !pt-[6rem] !py-[8rem] sm:!py-[10rem]"
        >
          <div className="z-[999] relative flex size-full max-w-[--section-width] flex-col items-center sm:items-start justify-center gap-y-[2rem]">
            {/* Header with light text */}
            <SectionHeader
              medium
              noAnimation
              noCenter
              largeText
              subheading={title}
              body={<>{copy}</>}
              bodyClassName="sm:mt-[1rem] !leading-[1.6em]"
              className="text-white" // Add light text color
            />
            <div className="sm:contents flex flex-col-reverse size-full gap-y-[2rem]">
              {/* Detail List */}
              <div className="hidden sm:contents">
                {detailList && (
                  <ul className="flex flex-col size-full items-start space-y-[1rem]">
                    {detailList.map((detail, index) => (
                      <li
                        key={index}
                        className="group flex flex-row items-center text-start gap-[1rem] sm:gap-[0.5rem]"
                      >
                        <div className="size-[2rem] sm:size-[1.375rem] min-w-[2rem] sm:min-w-[1rem] max-w-[2rem] sm:max-w-[1.375rem] text-goldenbrown">
                          {detail.icon}
                        </div>
                        <p className="pn-regular-20 text-white/80 group-hover:text-white">
                          {detail.text}
                        </p>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="contents sm:hidden">
                {detailList && (
                  <ScrollingBanner
                    baseVelocity={25}
                    innerChild="flex flex-row gap-[1rem] !px-[0] !pr-[1rem] "
                  >
                    {detailList.map((detail, index) => (
                      <div
                        key={index}
                        className="group flex flex-col items-center gap-[0.5rem] max-w-[30ch] text-center"
                      >
                        <div className="size-[2rem] sm:size-[1.375rem] min-w-[2rem] sm:min-w-[1rem] max-w-[2rem] sm:max-w-[1.375rem] text-goldenbrown">
                          {detail.icon}
                        </div>
                        <p className="pn-regular-20 text-white/80 group-hover:text-white">
                          {detail.text}
                        </p>
                      </div>
                    ))}
                  </ScrollingBanner>
                )}
              </div>

              {/* CTA */}
              <div className="flex sm:mt-[2rem] w-full">
                <div className="flex flex-col sm:flex-row gap-[1rem] w-full">
                  <HoverWrapper
                    href={cta.href}
                    className="button !bg-transparent !text-white pn-regular-16 relative hidden md:flex !border-white shadow-customShadow shadow-ash/5 group/cta hover/cta:shadow-goldenrod/5 hover/cta:!bg-white hover/cta:!text-ash transition-all"
                  >
                    <FlipLink className="font-semibold">{cta.label}</FlipLink>
                    <div className="size-5 group-hover/cta:rotate-45 transition-transform duration-300">
                      {ServiceIcons.arrow}
                    </div>
                  </HoverWrapper>
                </div>
              </div>
            </div>
          </div>
          {/* Gradient */}
          <div className="absolute inset-0 flex flex-col w-full h-[120%] origin-top-left bg-gradient-to-b sm:bg-gradient-to-l from-transparent from-30% via-ash/50 via-45% to-ash to-100%  pointer-events-none" />
        </ParallaxSection>
      </div>
    );
  }
);

HeroSection.displayName = "HeroSection";

export default HeroSection;
