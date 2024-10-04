"use client";
import ZoomParallax from "@/components/animations/ZoomParallax";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { media } from "@/data/media";

gsap.registerPlugin(ScrollTrigger);

interface SectionProps {
  className?: string;
}

function ProblemSection({ className = "" }: SectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(1);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null); // Ref for the text container
  const bgRef = useRef<HTMLDivElement>(null); // Ref for the background container

  const stepTexts = [
    "Step 1: Introduction",
    "Step 2: Exploration",
    "Step 3: Development",
    "Step 4: Testing",
    "Step 5: Delivery",
    "Step 6: Feedback",
    "Step 7: Completion",
  ];

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

    // Animate lines forward (keep them visible as we move forward)
    if (activeStep > 1) {
      for (let i = 0; i < activeStep - 1; i++) {
        gsap.to(progressLines[i], {
          scaleY: 1, // Keep the lines visible
          duration: 0.3,
        });
      }
    }

    // When moving backward, hide the lines starting from the end
    if (activeStep < media.length) {
      for (let i = activeStep - 1; i < progressLines.length; i++) {
        gsap.to(progressLines[i], {
          scaleY: 0, // Hide the lines when moving backward
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
    const translateX = isEven ? "-translate-x-[10%]" : "translate-x-[10%]";

    textRef.current.classList.remove("-translate-x-[10%]", "translate-x-[10%]");
    textRef.current.classList.add(translateX);

    gsap.to(textRef.current, {
      opacity: 0,
      y: 50,
      duration: 0.3,
      onComplete: () => {
        textRef.current!.innerText = stepTexts[activeStep - 1];
        gsap.to(textRef.current, { opacity: 1, y: 0, duration: 0.3 });
      },
    });

    // Update background image with animation
    const currentMedia = media[activeStep - 1];
    if (bgRef.current && currentMedia) {
      gsap.to(bgRef.current, {
        opacity: 0,
        duration: 0.3,
        onComplete: () => {
          bgRef.current!.style.backgroundImage = `url(${currentMedia.src})`;
          gsap.to(bgRef.current, {
            opacity: 1,
            duration: 0.3,
          });
        },
      });
    }
  }, [activeStep, media.length]); // Re-run the effect when activeStep or media length changes

  return (
    <div
      ref={sectionRef}
      className={`section-container !px-0 !flex-row ${className}`}
    >
      <div className="relative flex flex-col w-full items-end justify-start">
        {/* Background Container */}
        {/* <div
          ref={bgRef}
          className="absolute top-0 left-0 w-full h-[100dvh] z-0 bg-goldenrod"
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(20px)",
            transition: "opacity 0.3s ease-in-out",
          }}
        ></div> */}
        {/* Progress Bar */}
        <div className="sticky top-0 flex flex-col w-[2.875rem] items-center justify-center z-10 h-[100dvh] mr-[5rem]">
          <div ref={progressBarRef} className="absolute w-[2.875rem]">
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
          ref={textRef}
          className="sticky top-1/2 left-1/2 transform -translate-y-1/2 text-4xl font-bold text-ash opacity-0 z-10 transition-transform"
        >
          {stepTexts[0]}
        </div>

        {/* ZoomParallax with images */}
        <ZoomParallax
          className="pointer-events-none -mt-[100dvh]"
          media={media}
          onStepChange={setActiveStep}
        />
      </div>
    </div>
  );
}

export default ProblemSection;
