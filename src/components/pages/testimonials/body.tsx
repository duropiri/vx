"use client";
import React, { useEffect, useRef } from "react";
import ContactSection from "@/components/pages/sections/contactSection";
import StatsSection from "@/components/pages/sections/statsSection";
import TestimonialsSection from "@/components/pages/sections/testimonialsSection";
import { TestimonialsStats } from "@/data/stats";
import CopySection from "@/components/pages/sections/copySection";
import BasicHeroSection from "@/components/pages/sections/basicHeroSection";
import Image from "next/image";
import csImage from "@/../../public/assets/svgs/VX-Website-CS-Bar-1.svg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Body() {
  const container = useRef<HTMLDivElement>(null);
  // const { scrollYProgress } = useScroll({
  //   target: container,

  //   offset: ["start start", "end end"],
  // });

  const scrollAnimationRef = useRef<gsap.core.Timeline | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!container.current) return;

    scrollAnimationRef.current = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "bottom center",
        scrub: 1,
        onUpdate: (self) => {
          const newProgress = self.progress;
          // Remove references to scrollAnimationRef.current as a prop or state
          // Instead, animate the WhyUsSection content element directly:
          gsap.to(contentRef.current, {
            scale: gsap.utils.interpolate(1, 0.5, newProgress),
            rotation: gsap.utils.interpolate(0, -45, newProgress),
            filter: `blur(${gsap.utils.interpolate(0, 2.5, newProgress)}px)`,
            duration: 0,
            overwrite: "auto",
          });
        },
      },
    });
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <BasicHeroSection
        className="top"
        heading="Testimonials"
        subheading="Here's What Real Estate Professionals Are Saying"
        content={
          <>
            <Image
              src={csImage}
              alt="hero-image"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              priority={true}
              loading={true ? "eager" : "lazy"}
              className="pointer-events-none"
              quality={75}
            />
            <TestimonialsSection
              noHeader
              className="bg-white z-20 !p-0 !w-[100vw] sm:!w-full !-mx-[2rem] sm:!mx-0"
            />
          </>
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
        <CopySection
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
      <ContactSection className="bg-white z-10" />
    </>
  );
}

export default Body;
