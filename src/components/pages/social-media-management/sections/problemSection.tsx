import ZoomParallax from "@/components/animations/ZoomParallax";
import React, { forwardRef, useEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger } from "@/utils/gsap";
gsap.registerPlugin(ScrollTrigger);
import { media } from "@/data/media";
import SectionHeader from "@/components/ui/sectionHeader";

interface SectionProps {
  className?: string;
  originalColor?: string;
  transitionColor?: string;
}

const ProblemSection = forwardRef<HTMLDivElement, SectionProps>(
  ({ className = "", originalColor, transitionColor }, ref) => {
    const [color] = useState(originalColor);

    const containerRef = useRef<HTMLDivElement>(null);
    const roadRef = useRef<HTMLDivElement>(null);
    const svgRef = useRef<SVGSVGElement | null>(null);
    const lineRef = useRef<SVGLineElement | null>(null);

    const [activeStep, setActiveStep] = useState(1);
    const progressBarRef = useRef<HTMLDivElement>(null);
    const textContainerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const headingRef = useRef<HTMLSpanElement>(null);
    const subheadingRef = useRef<HTMLHeadingElement>(null);
    const subheadingMobileRef = useRef<HTMLHeadingElement>(null); // Add new ref
    // const bgRef = useRef<HTMLDivElement>(null); // Ref for the background container

    useEffect(() => {
      if (!svgRef.current || !lineRef.current || !containerRef.current) return;

      const line = lineRef.current;

      // Set up the dashed stroke
      const dashLength = 60;
      const dashGap = 30;
      const patternLength = dashLength + dashGap;
      const slowdownFactor = 30;
      const virtualLength = patternLength * slowdownFactor;

      line.style.strokeDasharray = `${dashLength} ${dashGap}`;

      // Set initial position
      gsap.set(line, { strokeDashoffset: virtualLength });

      // Create the animation
      gsap.to(line, {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom-=110px bottom",
          scrub: true,
          markers: false,
        },
      });

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }, [svgRef, lineRef]);

    useEffect(() => {
      if (!progressBarRef.current || !textRef.current) return;

      const progressItems =
        progressBarRef.current.querySelectorAll(".progress-item");
      const progressLines =
        progressBarRef.current.querySelectorAll(".progress-line");

      // Reset all items to default styles
      gsap.set(progressItems, { autoAlpha: 0.5, scale: 0.8 });

      // Animate only the current active step item
      gsap.to(progressItems[activeStep - 1], {
        autoAlpha: 1,
        scale: 1,
        duration: 0.3,
      });

      // Animate lines forward (reveal them from top to bottom)
      if (activeStep > 1) {
        for (let i = 0; i < activeStep - 1; i++) {
          gsap.to(progressLines[i], {
            clipPath: "inset(0 0 0% 0)", // Fully reveal the line
            duration: 0.3,
          });
        }
      }

      // When moving backward, hide the lines starting from the end (hide from bottom to top)
      if (activeStep < media.length) {
        for (let i = activeStep - 1; i < progressLines.length; i++) {
          gsap.to(progressLines[i], {
            clipPath: "inset(0 0 100% 0)", // Fully hide the line
            duration: 0.3,
          });
        }
      }

      // Optionally, fade out the previous step (reset styles)
      if (activeStep > 1) {
        gsap.to(progressItems[activeStep - 2], {
          autoAlpha: 0.5,
          scale: 0.8,
          duration: 0.3,
        });
      }

      // Set the text translation based on the step (odd/even index)
      const isEven = (activeStep - 1) % 2 === 0;

      // First animate the text out
      gsap.to(textRef.current, {
        opacity: 0,
        x: isEven ? "-100%" : "100%", // Move based on isEven
        duration: 0.25, // Adjust duration as needed
        onComplete: () => {
          // Once hidden, update text content
          const [header, subheading] = media[activeStep - 1].text;

          // Update heading
          if (headingRef.current) {
            headingRef.current.textContent = header;
          }

          // Update both desktop and mobile subheadings
          if (subheadingRef.current) {
            subheadingRef.current.innerHTML = subheading;
          }
          if (subheadingMobileRef.current) {
            subheadingMobileRef.current.innerHTML = subheading;
          }

          if (textContainerRef.current) {
            // Update alignment classes
            textContainerRef.current!.classList.remove(
              "justify-start",
              "justify-end"
            );
            textContainerRef.current!.classList.add(
              isEven ? "justify-end" : "justify-start"
            );
          }
          // Add/remove alignment classes to textRef
          if (textRef.current) {
            textRef.current.classList.remove(
              "!text-start",
              "justify-start",
              "!text-end",
              "justify-end"
            );
            textRef.current.classList.add(
              isEven ? "!text-end" : "!text-start",
              isEven ? "justify-end" : "justify-start"
            );
          }
          if (headingRef.current) {
            // Update alignment classes
            headingRef.current!.classList.remove("self-start", "self-end");
            headingRef.current!.classList.add(
              isEven ? "self-end" : "self-start"
            );
          }
          // Animate the text back in
          if (textRef.current) {
            gsap.fromTo(
              textRef.current,
              { x: isEven ? "100%" : "-100%", opacity: 0 }, // Start offscreen
              { x: "0%", opacity: 1, duration: 0.5 } // Bring it back
            );
          }
        },
      });
    }, [activeStep]); // Re-run the effect when activeStep or media length changes

    return (
      <div
        ref={ref}
        id="problem"
        className={`section-container !px-0 !flex-row ${className} relative scroll-smooth`}
        data-original-color={originalColor}
        data-transition-color={transitionColor}
      >
        <div
          ref={containerRef}
          className="relative flex flex-col w-full items-end justify-start snap-section overflow-clip"
        >
          {/* Road SVG */}
          <div
            id="road"
            className="sticky top-0 flex flex-col h-[100vh] w-[100dvw] items-center justify-end"
          >
            <div
              ref={roadRef}
              className="relative flex justify-center max-h-[50vh] w-full text-ash overflow-hidden"
            >
              <div
                className="absolute top-0 w-full min-w-[100vw] h-[5rem] bg-gradient-to-b to-transparent z-10"
                style={
                  {
                    "--tw-gradient-from": `${color} var(--tw-gradient-from-position)`,
                    "--tw-gradient-to": `rgb(255 255 255 / 0) var(--tw-gradient-to-position)`,
                    "--tw-gradient-stops":
                      "var(--tw-gradient-from), var(--tw-gradient-to)",
                  } as React.CSSProperties
                }
              />
              <div
                className="absolute bottom-0 w-full min-w-[100vw] h-[5rem] bg-gradient-to-t to-transparent z-10"
                style={
                  {
                    "--tw-gradient-from": `${color} var(--tw-gradient-from-position)`,
                    "--tw-gradient-to": `rgb(255 255 255 / 0) var(--tw-gradient-to-position)`,
                    "--tw-gradient-stops":
                      "var(--tw-gradient-from), var(--tw-gradient-to)",
                  } as React.CSSProperties
                }
              />
              <svg
                ref={svgRef}
                width="357"
                height="215"
                viewBox="0 0 357 215"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full max-h-[40vh] lg:max-h-[50vh] min-w-[200vw] lg:min-w-[100vw] opacity-50"
              >
                <path
                  d="M145.929 0.0078125H138.105L0 215.004H15.0758L145.929 0.0078125Z"
                  fill="#C5A05E"
                />
                <path
                  d="M341.944 214.996H357.005L218.9 0H211.076L341.944 214.996Z"
                  fill="#C5A05E"
                />
                <path
                  d="M205.879 0.0078125H151.11L27.4805 215.004L329.543 214.989L205.879 0.0078125Z"
                  fill="#C5A05E"
                />
                <line
                  ref={lineRef}
                  x1="179"
                  y1="-7.43094e-07"
                  x2="179"
                  y2="215"
                  stroke="white"
                  strokeWidth="34"
                />
                <path
                  d="M162 214.996L174.769 0H157L162 214.996Z"
                  fill="#C5A05E"
                />
                <path
                  d="M183.738 0L196.526 214.982L201.53 0H183.738Z"
                  fill="#C5A05E"
                />
              </svg>
            </div>
          </div>

          {/* Progress Bar */}
          <div
            id="progressBar"
            className="sticky top-0 flex flex-col w-full items-center justify-center z-10 h-[100vh] -mt-[100vh] section-container"
          >
            <div
              ref={progressBarRef}
              className="absolute right-[1rem] w-[2.875rem]"
            >
              <div className="inset-0 flex flex-col items-center text-ash">
                <svg
                  width="10"
                  height="8"
                  viewBox="0 0 10 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mb-[0.625rem] shadow-customShadow"
                >
                  <path d="M4.7946 0L10 7.5H0L4.7946 0Z" fill="currentColor" />
                </svg>

                {media.map((_, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center gap-[0.625rem] mb-[0.625rem]"
                  >
                    <div
                      className={`progress-item flex flex-col items-center justify-center pn-semibold-16 rounded-[0.75rem] bg-ash text-goldenbrown px-[0.625rem] py-[0.5rem] shadow-customShadow`}
                    >
                      {index + 1}/{media.length}
                    </div>
                    {index < media.length - 1 && (
                      <div className="progress-line flex h-[3.125rem] w-[0.625rem] bg-goldenbrown shadow-customShadow"></div>
                    )}
                  </div>
                ))}

                <svg
                  width="10"
                  height="8"
                  viewBox="0 0 10 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="shadow-customShadow"
                >
                  <path
                    d="M5.2054 8L0 0.5L10 0.5L5.2054 8Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Centered Text for Steps */}
          <div
            id="problemCopy"
            ref={textContainerRef}
            className="sticky top-[2.5rem] sm:top-0 left-0 w-full max-w-[--section-width] -mt-[100vh] h-[100vh] flex pt-[7.5rem] pb-[5rem] items-start lg:items-center self-center md:pr-[10rem] xl:pr-[5rem] [@media(min-width:1920px)]:pr-0"
          >
            <SectionHeader
              noCenter
              ref={textRef}
              medium
              noAnimation
              heading={media[0].text[0]}
              subheading={media[0].text[1]}
              headingRef={headingRef}
              subheadingRef={subheadingRef}
              subheadingMobileRef={subheadingMobileRef}
              className="!w-auto ml-[1rem] mr-[5rem] lg:ml-0 lg:mr-0"
              subheadingClassName="!text-[1.5rem] lg:!text-[2rem] !font-normal lg:!leading-tight lg:!max-w-[22ch] !w-full"
            />
          </div>

          {/* ZoomParallax with images */}
          <ZoomParallax
            id="problemImages"
            className="pointer-events-none -mt-[100vh]"
            media={media}
            onStepChange={setActiveStep}
          />
        </div>
      </div>
    );
  }
);

ProblemSection.displayName = "ProblemSection";

export default ProblemSection;
