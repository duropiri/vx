"use client";
import { getChars } from "@/components/animations/GetChars";
import LetterRevealOnScroll from "@/components/animations/LetterRevealOnScroll";
import { FlipLink, HoverWrapper } from "@/components/animations/RevealLinks";
import React, { useEffect } from "react";

function HeroSection() {
  // GSAP Animations
  useEffect(() => {
    const loadGSAP = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      let effectElements = gsap.utils.toArray("[data-speed]");
      effectElements.forEach((el: any) => {
        let speed = parseFloat(el.getAttribute("data-speed"));
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
                let start = Math.max(0, self.start); // ensure no negative values
                let distance = self.end - start;
                let end = start + distance / speed;
                (self as any).setPositions(start, end);
                if (self.animation) {
                  // Check if self.animation is defined
                  (self as any).animation.vars.y = (end - start) * (1 - speed);
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
    <div className="section-container hero-container">
      <div className="flex flex-col items-center my-auto">
        {/* <LetterRevealOnScroll className=""> */}
          <h1 className="pn-regular-96 uppercase text-center max-w-[20ch] my-[0.625rem]">
            <span className="flex justify-center gap-[1.5rem] max-h-[6rem]">
              <span>Meet the</span>{" "}
              <span className="text-goldenbrown font-bold">
                {getChars("Gold")}
              </span>{" "}
            </span>{" "}
            <span className="flex justify-center gap-[1.5rem] max-h-[6rem]">
              <span className="text-goldenbrown font-bold">{getChars("Standard")}</span> in
              Real
            </span>{" "}
            <span className="flex justify-center gap-[1.5rem] max-h-[6rem]">
              Estate Marketing
            </span>
          </h1>
        {/* </LetterRevealOnScroll> */}
        <div className="flex items-row gap-[1rem] my-[0.625rem]">
          <HoverWrapper
            href="/"
            className="button cursor-select-hover shadow-customShadow shadow-ash/5 hover:shadow-goldenrod/5"
          >
            <FlipLink className="">See More</FlipLink>
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_73_5969)">
                <path
                  d="M14.6665 6.33398L6.33319 14.6673"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.16656 6.33398H14.6666V13.834"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_73_5969">
                  <rect
                    width="20"
                    height="20"
                    fill="white"
                    transform="translate(0.499878 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </HoverWrapper>
          <HoverWrapper
            href="/"
            className="button cursor-select-hover !bg-goldenbrown shadow-customShadow shadow-ash/5 hover:shadow-goldenrod/5"
          >
            <FlipLink className="">Get In Touch</FlipLink>
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_73_5969)">
                <path
                  d="M14.6665 6.33398L6.33319 14.6673"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.16656 6.33398H14.6666V13.834"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_73_5969">
                  <rect
                    width="20"
                    height="20"
                    fill="white"
                    transform="translate(0.499878 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </HoverWrapper>
        </div>
      </div>
      <div
        data-speed={1.3}
        className="cursor-select-hover relative size-[7.5rem] mx-auto bg-goldenbrown shadow-customShadow shadow-ash/5 rounded-full border border-ash"
      >
        {/* Circular Text */}
        <svg
          className="animate-spin-slow inset-0 w-full h-full"
          viewBox="0 0 100 100"
        >
          <defs>
            <path
              id="circlePath"
              d="M 50, 50 m -30, 0 a 30,30 0 1,1 60,0 a 30,30 0 1,1 -60,0" //Radius of 30, diameter of 60
              fill="none"
            />
          </defs>
          <text
            className="pn-regular-16 !text-[12px]"
            fontSize="4.5"
            fill="currentColor"
            letterSpacing="0.1"
          >
            <textPath href="#circlePath" startOffset="0%">
              • GET IN TOUCH • GET IN TOUCH
            </textPath>
          </text>
        </svg>

        <HoverWrapper className="absolute inset-0 flex items-center justify-center">
          <FlipLink className="">
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.98019 19.8699V1.01367M9.98019 19.8699L18.465 11.385M9.98019 19.8699L1.49445 11.385"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </FlipLink>
        </HoverWrapper>
      </div>
    </div>
  );
}

export default HeroSection;
