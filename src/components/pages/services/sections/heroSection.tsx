// import OpacityOnScroll from "@/components/animations/OpacityOnScroll";
// import { Reveal } from "@/components/animations/Reveal";
import ScrollingBanner from "@/components/animations/ScrollingBanner";
import SectionHeader from "@/components/ui/sectionHeader";
import Image from "next/image";
import React, { forwardRef, RefObject, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FlipLink, HoverWrapper } from "@/components/animations/RevealLinks";
import arrowRedirectWhite from "@/../../public/svgs/arrow-redirect-cta-white.svg";

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
      className = "",
      full = false,
      originalColor = "#FFFFFF",
      transitionColor = "#FFFFFF",
      id,
      title,
      copy,
      detailList,
      cta,
      src,
    },
    ref
  ) => {
    const [color] = useState(originalColor);
    // GSAP Animations
    useEffect(() => {
      const loadGSAP = async () => {
        const { gsap } = await import("gsap");
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");
        gsap.registerPlugin(ScrollTrigger);

        // Parallax effect
        const effectElements = gsap.utils.toArray("[data-speed]");
        (effectElements as HTMLElement[]).forEach((el: HTMLElement) => {
          const speed = parseFloat(el.getAttribute("data-speed") || "0");
          gsap.fromTo(
            el,
            { y: 0 },
            {
              y: 0,
              ease: "none",
              scrollTrigger: {
                trigger: el,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
                onRefresh: (self) => {
                  const start = Math.max(0, self.start); // ensure no negative values
                  const distance = self.end - start;
                  const end = start + distance / speed;
                  (self as any).setPositions(start, end);
                  if (self.animation) {
                    // Check if self.animation is defined
                    (self as any).animation.vars.y =
                      (end - start) * (1 - speed);
                    self.animation
                      .invalidate()
                      .progress(1)
                      .progress(self.progress);
                  }
                },
              },
            }
          );
        });

        return () => {
          ScrollTrigger.getAll().forEach((st) => st.kill());
        };
      };

      loadGSAP();
    }, []);

    return (
      <div ref={ref} id={id} className="relative w-full">
        {/* Video Background */}
        {src.endsWith(".mp4") || src.endsWith(".webm") ? (
          <div
            data-speed={0.75}
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
          </div>
        ) : (
          <div
            data-speed={0.75}
            className="absolute inset-0 size-full h-[120%]"
          >
            <Image
              src={src}
              alt={title}
              fill
              className="object-cover"
              quality={80}
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        )}

        {/* Content */}
        <div className="relative z-10 section-container lg:!flex-row !py-[3.125rem] min-h-[60vh] overflow-visible !pt-[10rem]">
          <div className="z-[999] relative flex size-full max-w-[87.5rem] flex-col items-center lg:items-start justify-center gap-y-[2rem] lg:gap-y-[2rem]">
            {/* Header with light text */}
            <SectionHeader
              small
              subheading={title}
              body={<>{copy}</>}
              className="text-white" // Add light text color
            />

            {/* Detail List */}
            {detailList && (
              <ul className="flex flex-col items-start space-y-[1rem]">
                {detailList.map((detail, index) => (
                  <li
                    key={index}
                    className="group flex flex-row items-center text-start gap-[0.5rem]"
                  >
                    <div className="w-[1rem] h-[1rem] text-white/80 group-hover:text-white">
                      {detail.icon}
                    </div>
                    <div></div>
                    <p className="pn-regular-16 text-white/80 group-hover:text-white">
                      {detail.text}
                    </p>
                  </li>
                ))}
              </ul>
            )}

            {/* CTA */}
            <div className="flex h-[3.313rem] mt-[2rem]">
              <div className="flex flex-col lg:flex-row gap-[1rem]">
                <HoverWrapper
                  href={cta.href}
                  className="button group cursor-select-hover !bg-transparent !border-white shadow-customShadow shadow-white/5 hover:shadow-goldenrod/5"
                >
                  <FlipLink className="font-semibold text-white">
                    {cta.label}
                  </FlipLink>
                  <Image
                    alt="arrow"
                    src={arrowRedirectWhite}
                    className="text-white group-hover:rotate-45 transition-all duration-300"
                    quality={80}
                  />
                </HoverWrapper>
              </div>
            </div>
          </div>
          {/* Gradient */}
          <div className="absolute inset-0 size-full h-[120%] flex flex-col w-full h-[120%] origin-top-left bg-gradient-to-l from-transparent from-50% via-ash/50 via-75% to-ash to-100%  pointer-events-none" />
        </div>
      </div>
    );
  }
);

HeroSection.displayName = "HeroSection";

export default HeroSection;