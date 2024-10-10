"use client";
import ZoomParallax from "@/components/animations/ZoomParallax";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { media } from "@/data/media";
import SectionHeader from "@/components/ui/sectionHeader";

gsap.registerPlugin(ScrollTrigger);

interface SectionProps {
  className?: string;
}

function ProblemSection({ className = "" }: SectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(1);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLSpanElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);
  const bgRef = useRef<HTMLDivElement>(null); // Ref for the background container

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
    // const translateX = isEven ? "translate-x-[100%]" : "-translate-x-[100%]";

    // First animate the text out
    gsap.to(textRef.current, {
      opacity: 0,
      x: isEven ? "-100%" : "100%", // Move based on isEven
      duration: 0.25, // Adjust duration as needed
      onComplete: () => {
        // Once hidden, update text content
        const [header, body] = media[activeStep - 1].text;
        headerRef.current!.textContent = header;
        bodyRef.current!.textContent = body;

        // Update alignment classes
        textContainerRef.current!.classList.remove(
          "justify-start",
          "justify-end"
        );
        textContainerRef.current!.classList.add(
          isEven ? "justify-end" : "justify-start"
        );

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

        // Update alignment classes
        headerRef.current!.classList.remove("self-start", "self-end");
        headerRef.current!.classList.add(isEven ? "self-end" : "self-start");

        // Animate the text back in
        gsap.fromTo(
          textRef.current,
          { x: isEven ? "100%" : "-100%", opacity: 0 }, // Start offscreen
          { x: "0%", opacity: 1, duration: 0.5 } // Bring it back
        );
      },
    });

    // Update background image with animation
    // const currentMedia = media[activeStep - 1];
    // if (bgRef.current && currentMedia) {
    //   // Fade out the current image
    //   gsap.to(bgRef.current, {
    //     opacity: 0,
    //     duration: 0.3,
    //     onComplete: () => {
    //       // Change the background image immediately (before fade-in)
    //       bgRef.current.style.backgroundImage = `url(${encodeURIComponent(
    //         currentMedia.src
    //       )})`;

    //       // Fade in the new image without waiting for fade out to finish
    //       gsap.to(bgRef.current, {
    //         opacity: 1,
    //         duration: 0.3,
    //       });
    //     },
    //   });
    //   console.log(encodeURIComponent(currentMedia.src));
    // }
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
          className="fixed inset-0 w-[100vw] h-[100vh] bg-cover bg-center transition-opacity duration-300 blur-[10rem] brightness-50"
          style={{
            backgroundImage: `url(${encodeURIComponent(media[0].src)})`,
          }}
        /> */}

        {/* Progress Bar */}
        <div className="sticky top-0 flex flex-col w-[2.875rem] items-center justify-center z-10 h-[100vh] mr-[1rem] lg:mr-[5rem]">
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
          ref={textContainerRef}
          className="sticky top-0 left-0 w-full max-w-[87.5rem] -mt-[100vh] h-[100vh] flex py-[5rem] items-start lg:items-center self-center md:pr-[10rem] 2xl:pr-[5rem] [@media(min-width:1920px)]:pr-0"
        >
          <SectionHeader
            ref={textRef}
            medium
            heading={media[0].text[0]}
            subheading={media[0].text[1]}
            headingRef={headerRef}
            subheadingRef={bodyRef}
            className="ml-[1rem] mr-[5rem] lg:ml-0 lg:mr-0"
          />
        </div>

        {/* ZoomParallax with images */}
        <ZoomParallax
          className="pointer-events-none -mt-[100vh]"
          media={media}
          onStepChange={setActiveStep}
        />
      </div>
    </div>
  );
}

export default ProblemSection;
