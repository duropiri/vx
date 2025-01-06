import { FlipLink, HoverWrapper } from "@/components/animations/RevealLinks";
import React, { forwardRef, RefObject, useEffect, useRef } from "react";
import Image from "next/image";
// import { AnimatedText } from "@/components/animations/GetChars";
// import GsapMagnetic from "@/components/animations/GsapMagnetic";
// import CircleCTA from "@/components/ui/circleCTA";

import logo from "@/../../public/assets/images/logo2.webp";
import { gsap, ScrollTrigger } from "@/utils/gsap";
gsap.registerPlugin(ScrollTrigger);
import { useViewport } from "@/contexts/ViewportContext";

// Import all the SVG assets
// import arrowRedirect from "@/../../public/assets/svgs/arrow-redirect-cta.svg";
import starImage from "@/../../public/assets/svgs/star.svg";
import HeroDecorations from "@/components/heroDecorations";
import { TransitionLink } from "@/components/TransitionLink";
import Link from "next/link";
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
  ({ className = "", navigation, originalColor, transitionColor }, ref) => {
    const navdockWidth = "50rem";
    const navdockHeight = "2.8125rem";

    const heroCTARef = useRef<HTMLDivElement>(null);
    const navdockRef = useRef<HTMLDivElement>(null);
    const { isMobile } = useViewport();

    // Navdock Animations
    useEffect(() => {
      // Hero CTA to Navdock transition
      if (
        !(window.innerWidth <= 768) &&
        heroCTARef.current &&
        navdockRef.current
      ) {
        const heroCTA = heroCTARef.current;
        const navdock = navdockRef.current;

        // const heroBounds = heroCTA.getBoundingClientRect();

        // START
        // Set navdock initial state (SIZE AND COLOR)
        gsap.set(navdock, {
          display: "none",
          padding: 0,
          width:
            // isMobile ? "100%" :
            "14rem",
          height: navdockHeight,
          background:
            // isMobile ? "#1b1a17" :
            "#c5a05e",
          borderRadius: "9999px",
          opacity: 0,
        });

        // Hide elements on desktop, visible on mobile
        gsap.set(["#logo", "#nav"], {
          display: "none",
        });

        // Set initial position for the CTA
        gsap.set("#navdock-cta", {
          x: 0,
        });
        // END START

        // PHASE 1
        // First ScrollTrigger (heroCTA & Navdock): Handle initial fade transition
        ScrollTrigger.create({
          trigger: heroCTA,
          start: isMobile ? `top 20px` : `top 40px`, // When heroCTA reaches navdock position
          // end: "+=50",
          // markers: true,
          onEnter: () => {
            gsap.set(heroCTA, {
              opacity: 0,
            }); // Hide heroCTA
            gsap.set(navdock, { opacity: 1, display: "flex" }); // Show navdock
          },
          onLeaveBack: () => {
            gsap.set(navdock, { opacity: 0, display: "none" }); // Hide navdock
            gsap.set(heroCTA, { opacity: 1 }); // Show heroCTA
          },
        });
        // END PHASE 1

        // PHASE 2
        // Second ScrollTrigger (Navdock): Handle navdock transformation and element animations
        ScrollTrigger.create({
          trigger: heroCTA,
          start: "200px 40px", // Slightly after the first trigger
          // end: "+=50vh",
          // markers: true,
          onEnter: () => {
            const tl = gsap.timeline();

            gsap.set("#navdock-cta", {
              opacity: 0,
              display: "none",
              x: "12rem",
              duration: 0,
            });

            // Animate the navdock (to navdock final style)
            tl.to(navdock, {
              background: "#1b1a17",
              width: navdockWidth,
              height: navdockHeight,
              paddingLeft:
                // isMobile ? "0px" :
                "1.5rem",
              paddingRight: "0px",
              paddingTop: "0px",
              paddingBottom: "0px",
              // gap: "1.313rem",
              border: "0.125rem solid #1b1a17",
              borderRadius:
                // isMobile ? "0px" :
                "9999px",

              duration: 0.5,
            });

            // Animate the logo (from hidden to expanded)
            tl.fromTo(
              "#logo",
              {
                y: 0,
                opacity: 0,
                display: "none",
              },
              {
                opacity: 1,
                display: "flex",
                duration: 0.5,
              },
              "-=0.25" // Start slightly before the navdock animation finishes
            );

            // Animate nav items (from hidden to visible)
            tl.fromTo(
              "#nav",
              { y: 10, opacity: 0, display: "none" }, // Hidden state
              {
                y: 0,
                opacity: 1,
                display: "flex",
                duration: 0.3,
                stagger: 0.1,
              }, // Visible state
              "-=0.25" // Start slightly before the navdock animation finishes
            );

            // Animate the navdock cta (from transparent to goldenbrown)
            tl.to(
              "#navdock-cta",
              {
                x: 0,
                display: "flex",
                opacity: 1,
                backgroundColor: "#c5a05e",
                duration: 0.3,
              },
              "-=0.5" // Start at the same time as the nav items
            );
          },
          onLeaveBack: () => {
            // Kill any ongoing animations for these elements
            gsap.killTweensOf(["#logo", "#nav"]);

            // Immediately hide logo and nav with zero duration
            gsap.set(["#logo", "#nav"], {
              display: "none",
              opacity: 0,
              y: 0,
              duration: 0,
            });

            // Create timeline for navdock transition
            const tl = gsap.timeline({
              onStart: () => {
                // Double-check elements are hidden at start
                gsap.set(["#logo", "#nav"], {
                  display: "none",
                  opacity: 0,
                  duration: 0,
                });
                // Reset navdock
                tl.to(navdock, {
                  display: "flex",
                  padding: 0,
                  width: "14rem",
                  height: navdockHeight,
                  background: "#1b1a17",
                  duration: 0.3,
                });
              },
              onComplete: () => {
                // Triple-check elements are hidden after completion
                gsap.set(["#logo", "#nav"], {
                  display: "none",
                  opacity: 0,
                  duration: 0,
                });
              },
            });

            // Set initial states immediately
            gsap.set("#navdock-cta", {
              opacity: 0,
              display: "none",
              x: 0,
              y: "3.5rem",
              duration: 0,
            });

            // Reset navdock
            tl.to(navdock, {
              display: "flex",
              padding: 0,
              width: "14rem",
              height: navdockHeight,
              background: "#1b1a17",
              duration: 0.3,
            });

            // Reset CTA
            tl.to(
              "#navdock-cta",
              {
                display: "flex",
                opacity: 1,
                y: 0,
                backgroundColor: "transparent",
                duration: 0.3,
              },
              "-=0.3"
            );

            // Add safety timeout to force reset if issues persist
            setTimeout(() => {
              // Final force reset of all elements
              gsap.set(["#logo", "#nav"], {
                display: "none",
                opacity: 0,
                duration: 0,
              });
              gsap.set(navdock, {
                width: "14rem",
                height: navdockHeight,
                padding: 0,
                background: "#1b1a17",
                duration: 0,
              });
              gsap.set("#navdock-cta", {
                display: "flex",
                opacity: 1,
                x: 0,
                y: 0,
                backgroundColor: "transparent",
                duration: 0,
              });
            }, 500); // 500ms delay
            // Add safety timeout to force reset if issues persist
            setTimeout(() => {
              // Final force reset of all elements
              gsap.set(["#logo", "#nav"], {
                display: "none",
                opacity: 0,
                duration: 0,
              });
              gsap.set("#navdock-cta", {
                display: "flex",
                opacity: 1,
                x: 0,
                y: 0,
                backgroundColor: "transparent",
                duration: 0,
              });
            }, 1000); // 500ms delay
          },
        });
        // END PHASE 2
      }

      // Add new ScrollTrigger for mobile navdock fade out
      if (navdockRef.current) {
        ScrollTrigger.create({
          trigger: document.documentElement, // Use the entire document as trigger
          start: "bottom bottom+=100vh", // Start trigger 100vh before document bottom
          end: "bottom bottom",
          onUpdate: (self) => {
            if (isMobile) {
              // Calculate opacity based on scroll position
              const progress = self.progress;
              gsap.to(navdockRef.current, {
                opacity: 1 - progress,
                duration: 0.5,
              });
            } else {
              // Ensure navdock is visible on desktop
              gsap.to(navdockRef.current, {
                opacity: 1,
                duration: 0.5,
              });
            }
          },
        });
      }

      return () => {
        ScrollTrigger.getAll().forEach((st) => st.kill());
      };
    }, [isMobile]);

    return (
      <div
        ref={ref}
        className="relative !bg-white"
        data-original-color={originalColor}
        data-transition-color={transitionColor}
      >
        {/* Hero Decorations */}
        <HeroDecorations originalColor={originalColor} />

        {/* Hero */}
        <div
          id="hero"
          className={`section-container hero-container !justify-center ${className} !pt-[7rem] sm:!pt-[5rem] overflow-hidden z-[400]`}
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
                    priority={false}
                    loading={false ? "eager" : "lazy"}
                  />
                ))}
              </div>
              <p className="pn-regular-12 text-white">500+ Agents Trust Us</p>
            </div>
            <div className="relative flex flex-col items-center justify-center my-auto">
              <div className="rounded-[5rem] blur-lg animate-pulse absolute top-0 size-[120%] bg-white/80 -z-10 pointer-events-none" />
              <h1 className="hidden pn-regular-72 uppercase text-center sm:max-w-[20ch] sm:flex flex-col items-center !leading-[0.9em] 2xl:!leading-[1em] mb-[1rem]">
                Dominate Social Media With The{" "}
                <span>
                  <span className="text-goldenbrown gold-text font-bold">
                    Gold Standard
                  </span>
                </span>
              </h1>

              <h1 className="sm:hidden pn-regular-72 !leading-[1em] uppercase text-center mb-[1rem] flex flex-col items-center">
                Dominate Social Media With The{" "}
                <span>
                  <span className="text-goldenbrown gold-text font-bold">
                    Gold Standard
                  </span>
                </span>
              </h1>

              <h2 className="pn-regular-20 text-center sm:max-w-[45vw]">
                Our expert digital marketing strategies—tailored social media
                management and high-impact content—help you generate valuable
                leads, boost visibility, and close deals effortlessly.
              </h2>
            </div>
            {/* Hero CTA */}
            <div ref={heroCTARef}>
              <div className="flex my-[0.625rem]">
                <div className="flex flex-col sm:flex-row gap-[1rem]">
                  <HoverWrapper
                    href="https://listings.virtualxposure.com/order"
                    className="button gold pn-regular-16 group/cta h-full cursor-select-hover !bg-transparent shadow-customShadow shadow-ash/5 group/cta:shadow-goldenrod/5 w-[14rem]"
                  >
                    <FlipLink className={`flex items-center w-fit`}>
                      Book Now
                    </FlipLink>

                    <div className="size-5 group-hover/cta:rotate-45 transition-transform duration-300">
                      {ServiceIcons.arrow}
                    </div>
                  </HoverWrapper>
                </div>
              </div>
            </div>
            {/* </div> */}
          </div>
        </div>

        {/* Navdock */}
        <div
          id="navdock"
          className={`fixed hidden sm:flex flex-row items-center justify-center top-[1.25rem] sm:top-[2.5rem] w-[100vw] z-[999] max-w-[100vw]`}
        >
          <div
            ref={navdockRef}
            id="inner-navdock"
            className={`flex flex-row items-center justify-between border-[0.125rem] border-ash sm:rounded-full shadow-customShadow shadow-ash/5 hover:shadow-goldenrod/5 overflow-hidden`}
          >
            {/* Navdock Final Form */}
            <div id="logo" className="flex items-center h-full">
              <TransitionLink
                href="/"
                passHref
                className="cursor-select-hover flex w-[2.25rem] aspect-square overflow-hidden"
              >
                <Image
                  src={logo}
                  alt="logo"
                  className="size-full"
                  placeholder="blur"
                  quality={75}
                />
              </TransitionLink>
            </div>

            {/* Navigation Links */}
            <nav
              id="nav"
              className="nav flex flex-row gap-[1rem] sm:gap-[2rem] items-center justify-between mx-[1.5rem] h-full text-white pn-regular-16"
            >
              {navigation.map((nav, index) => (
                <HoverWrapper
                  key={index}
                  className="nav-item cursor-select-hover text-nowrap transition-all duration-300"
                >
                  <Link key={`l_${index}`} href={nav.href} passHref>
                    <FlipLink>
                      {/* <AnimatedText text={nav.title} /> */}
                      {nav.title}
                    </FlipLink>
                  </Link>
                </HoverWrapper>
              ))}
            </nav>

            {/* Initial state content (matches heroCTA exactly) */}
            <HoverWrapper
              id="navdock-cta"
              href="https://listings.virtualxposure.com/order"
              className="button gold pn-regular-16 group/cta !border-none h-fit cursor-select-hover !bg-transparent shadow-customShadow shadow-ash/5 hover/cta:shadow-goldenrod/5 w-[14rem]"
            >
              <FlipLink className={`flex items-center w-fit`}>
                Book Now
              </FlipLink>

              <div className="size-5 group-hover/cta:rotate-45 transition-transform duration-300">
                {ServiceIcons.arrow}
              </div>
            </HoverWrapper>
          </div>
        </div>
      </div>
    );
  }
);

HeroSection.displayName = "HeroSection";

export default HeroSection;
