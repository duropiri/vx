// @/components/pages/testimonials/body.tsx
"use client";
import React, {
  useEffect,
  useRef,
  useState,
  // Suspense
} from "react";
import dynamic from "next/dynamic";

// above-thefold static components
import BasicHeroSection from "@/components/pages/sections/basicHeroSection";

const Dynamic = {
  SocialProofSection: dynamic(
    () => import("@/components/pages/sections/socialProofSection"),
    {
      loading: () => <div className="min-h-[60vh]" />,
    }
  ),

  CopySection: dynamic(
    () => import("@/components/pages/sections/copySection"),
    {
      loading: () => <div className="min-h-[400vh]" />,
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

  ServicesSection: dynamic(
    () => import("@/components/pages/listing-media/sections/servicesSection"),
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
};

// Complex components
import Image from "next/image";
import csImage from "@/../../public/assets/svgs/VX-Website-CS-Bar-1.svg";
import StatsSection from "@/components/pages/sections/statsSection";
import {
  // setupScrollAnimation,
  setupColorAnimation,
  cleanupGSAPAnimations,
} from "@/components/pages/sections/animations/Animations";

// Data
import { TestimonialsStats } from "@/data/stats";
import { testimonials } from "@/data/testimonials";
import { renderStars } from "@/components/ui/renderStars";
import { useViewport } from "@/contexts/ViewportContext";
import { ServiceIcons } from "@/data/serviceIcons";

function Body() {
  const container = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<Array<HTMLDivElement | null>>([]);
  const contentRef = useRef<HTMLDivElement>(null);
  const { windowWidth } = useViewport();

  useEffect(() => {
    if (!container.current) return;

    const triggerSection = sectionRefs.current[1];
    if (triggerSection) {
      setupColorAnimation(triggerSection, sectionRefs.current as HTMLElement[]);
    }

    return () => {
      cleanupGSAPAnimations();
    };
  }, [, windowWidth]);

  interface QuoteProps {
    quote: string;
    white?: boolean;
  }

  const Quote = ({ quote, white = false }: QuoteProps) => {
    const pRef = useRef<HTMLParagraphElement>(null);
    const spanRef = useRef<HTMLSpanElement>(null);
    const [textHeight, setTextHeight] = useState(0);
    const [maxHeight, setMaxHeight] = useState(0);
    const [isOverflowing, setIsOverflowing] = useState(false);
    const { windowWidth } = useViewport();

    useEffect(() => {
      if (spanRef.current && pRef.current) {
        setTextHeight(parseFloat(getComputedStyle(spanRef.current).height));
        setMaxHeight(parseFloat(getComputedStyle(pRef.current).height)); // Set your desired line limit
      }
      // console.log("maxHeight:", maxHeight);
      // console.log("textHeight:", textHeight);
      setIsOverflowing(textHeight > maxHeight);
    }, [quote, textHeight, maxHeight, windowWidth]);

    return (
      <p
        ref={pRef}
        className={`pn-regular-16  text-wrap overflow-hidden relative w-full after:absolute after:bottom-0 after:w-full after:h-[1ch] after:bg-gradient-to-t ${
          white ? "after:from-white" : "after:from-ash"
        } after:group-hover:opacity-0 transition-all duration-500 ease-in-out`}
      >
        <span
          ref={spanRef}
          className={`block transition-transform duration-500 ease-in-out group-hover:[transform:translateY(var(--translate-y))]`}
          style={
            {
              "--translate-y": isOverflowing
                ? `${maxHeight - textHeight}px`
                : "0px",
            } as React.CSSProperties
          }
        >
          {quote}
        </span>
      </p>
    );
  };

  return (
    <>
      <BasicHeroSection
        className="top"
        heading="Testimonials"
        subheading="Here's What Real Estate Professionals Are Saying"
        content={
          <div className="relative size-full flex flex-col gap-[2.5rem]">
            {/* <Image
              src={csImage}
              alt="hero-image"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              priority={true}
              loading={true ? "eager" : "lazy"}
              className="pointer-events-none"
              quality={75}
            /> */}
            {/* <Dynamic.TestimonialsSection
              noHeader
              
              className="bg-white z-20 !p-0 !w-[100vw] sm:!w-full !-mx-[2rem] sm:!mx-0"
            /> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 size-full gap-[1rem]">
              {testimonials.slice(0, 4).map((item, index) => (
                <div
                  key={index}
                  className="group bg-ash text-white rounded-[1rem] shadow-customShadow transition-all duration-300 hover:shadow-goldenbrown/25 hover:scale-[1.0125] flex items-center justify-between pn-regular-32 text-start hover:no-underline overflow-hidden"
                >
                  <div className="relative flex flex-col items-center justify-start size-full h-[32rem]">
                    {/* Headshot */}
                    <div className="relative size-full">
                      <Image
                        src={item.headshot || ""}
                        alt="who-is-it-image"
                        fill
                        sizes="(max-width: 640px) 100vw, 1200px"
                        priority={false}
                        loading={false ? "eager" : "lazy"}
                        className="w-full object-cover object-top"
                        quality={75}
                      />
                    </div>

                    {/* Content */}
                    <div className="absolute bottom-0 overflow-hidden flex flex-col items-start justify-center gap-y-[0.5rem] size-full p-[1rem] text-start h-fit sm:max-h-[40%] bg-gradient-to-t from-ash from-[60%]">
                      <div className="flex flex-row gap-[0.3rem] text-goldenbrown">
                        {renderStars(item.rating)}
                      </div>
                      <p className="pn-bold-24">{item.author}</p>
                      <p className="pn-regular-14">{item.company}</p>
                      <div className="w-full min-h-[1px] bg-white mb-[1rem]" />
                      <Quote quote={item.quote} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full min-h-[1px] bg-black" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 size-full gap-[1rem]">
              {testimonials
                .slice(4)
                .filter((item) => item.googleReview)
                .map((item, index) => (
                  <div
                    key={index}
                    className="group bg-white text-black rounded-[1rem] shadow-customShadow transition-all duration-300 hover:shadow-goldenbrown/25 hover:scale-[1.0125] flex items-center justify-between pn-regular-32 text-start hover:no-underline overflow-hidden"
                  >
                    <div className="relative flex flex-col items-center justify-start size-full">
                      <div className="overflow-hidden flex flex-col items-start justify-center gap-y-[0.5rem] size-full p-[1rem] text-start h-fit bg-gradient-to-t from-white from-[60%]">
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-center gap-[1rem] sm:mb-[1rem]">
                          <div className="relative size-[8rem] rounded-full overflow-hidden">
                            <Image
                              src={
                                `/assets/images/testimonial-headshots/${item.author
                                  .toLowerCase()
                                  .replace(/\s+/g, "-")}.webp` || ""
                              }
                              alt="who-is-it-image"
                              fill
                              sizes="(max-width: 640px) 100vw, 1200px"
                              priority={false}
                              loading={false ? "eager" : "lazy"}
                              className="w-full object-cover object-top"
                              quality={75}
                            />
                          </div>
                          <div className="flex flex-col items-start justify-center gap-y-[0.5rem]">
                            <p className="pn-bold-24">{item.author}</p>
                            <p className="pn-regular-14">{item.company}</p>
                            <div className="flex flex-row gap-[0.3rem] text-goldenbrown">
                              {renderStars(item.rating)}
                            </div>
                          </div>
                        </div>
                        <div className="w-full min-h-[1px] bg-black mb-[1rem]" />
                        <Quote white quote={item.quote} />
                        <a
                          href={item.googleReview}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center justify-center gap-[1rem] cursor-select-hover mt-[1rem]"
                        >
                          <div className="size-[1rem]">
                            {ServiceIcons.google}
                          </div>
                          <p className="pn-regular-14"> View on Google</p>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        }
      />

      <div ref={container} className="relative h-full bg-white min-w-[100vw]">
        <StatsSection
          ref={contentRef}
          shrinkSize={0.75}
          rotationAmount={-15}
          stats={TestimonialsStats}
          className="z-0"
          // scrollYProgress={scrollYProgress}
        />
        <Dynamic.CopySection
          className="bg-white"
          copy={
            <>
              We are what we repeatedly do. Excellence, therefore, is not an
              act, but a
              <span className="text-goldenbrown italic gold-text">habit.</span>
              <span className="pn-regular-16">– Aristotle</span>
            </>
          }
        />
      </div>
      {/* <Dynamic.ContactSection className="bg-white z-10" /> */}
    </>
  );
}

export default Body;
