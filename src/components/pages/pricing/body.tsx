"use client";
import React, { useEffect, useRef, useState } from "react";
import HeroSection from "@/components/pages/home/sections/heroSection";
import SocialProofSection from "@/components/pages/home/sections/socialProofSection";
import CopySection from "@/components/pages/home/sections/copySection";
import ProblemSection from "@/components/pages/home/sections/problemSection";
import StatsSection from "@/components/pages/home/sections/statsSection";
import SolutionSection from "@/components/pages/home/sections/solutionSection";
import ServicesSection from "@/components/pages/home/sections/servicesSection";
import RoadmapSection from "@/components/pages/home/sections/roadmapSection";
import PricingSection from "@/components/pages/home/sections/pricingSection";
import CTASection from "@/components/pages/home/sections/ctaSection";
import FAQSection from "@/components/pages/home/sections/faqSection";
import ContactSection from "@/components/pages/home/sections/contactSection";
import { useScroll, MotionValue } from "framer-motion";
import ScrollingBanner from "@/components/animations/ScrollingBanner";
import Image from "next/image";
import { NavLinks } from "@/data/navLinks";
import Link from "next/link";
import { FlipLink, HoverWrapper } from "@/components/animations/RevealLinks";
import { getChars } from "@/components/animations/GetChars";

function body() {
  const heroCTARef = useRef<HTMLDivElement>(null);
  const navdockRef = useRef<HTMLDivElement>(null);
  const heroSectionRef = useRef<HTMLDivElement>(null);

  const [isScrolled, setIsScrolled] = useState(false);
  const [isBottom, setIsBottom] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [hasPassedHero, setHasPassedHero] = useState(false);
  const [isTransforming, setIsTransforming] = useState(false);
  const [shouldHideNavdock, setShouldHideNavdock] = useState(false);

  // GSAP Animations
  useEffect(() => {
    const loadGSAP = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      // Parallax effect
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

      // Hero CTA to Navdock transition
      if (!isMobile && navdockRef.current) {
        // const heroCTA = heroCTARef.current;
        const navdock = navdockRef.current;

        // const heroBounds = heroCTA.getBoundingClientRect();

        // Set navdock initial state (SIZE AND COLOR)
        gsap.set(navdock, {
          display: "flex",
          padding: 0,
          width: isMobile ? "100%" : "11rem",
          height: "3.313rem",
          background: isMobile ? "#1b1a17" : "#c5a05e",
          borderRadius: "9999px",
          opacity: 0,
        });

        // Hide elements initially (HIDDEN)
        gsap.set(["#logo", ".nav-item"], {
          display: "none",
        });

        // First ScrollTrigger (heroCTA & Navdock): Handle initial fade transition
        ScrollTrigger.create({
          // trigger: heroCTA,
          start: isMobile ? `top -10vh` : `top 2.5rem`, // When heroCTA reaches navdock position
          // end: "+=50",
          // markers: true,
          onEnter: () => {
            // gsap.set(heroCTA, { opacity: isMobile ? 1 : 0 }); // Hide heroCTA
            gsap.set(navdock, { opacity: 1 }); // Show navdock
          },
          onLeaveBack: () => {
            gsap.set(navdock, { opacity: 0 }); // Hide navdock
            // gsap.set(heroCTA, { opacity: 1 }); // Show heroCTA
          },
        });

        // Second ScrollTrigger (Navdock): Handle navdock transformation and element animations
        ScrollTrigger.create({
          // trigger: heroCTA,
          start: "200px 40px", // Slightly after the first trigger
          // end: "+=50vh",
          // markers: true,
          onEnter: () => {
            setIsTransforming(true);

            // Animate the navdock (to navdock final style)
            gsap.to(navdock, {
              background: "#1b1a17",
              width: isMobile ? "100%" : "auto",
              height: "3.313rem",
              paddingLeft: isMobile ? "0px" : "1.5rem",
              paddingRight: "0px",
              paddingTop: "0px",
              paddingBottom: "0px",
              gap: "1.313rem",
              border: "0.125rem solid #1b1a17",
              borderRadius: isMobile ? "0px" : "9999px",

              duration: 0.2,
              onComplete: () => {
                setHasPassedHero(true);

                // Once the navdock is transformed, animate the logo and nav items

                // Animate the logo (from hidden to expanded)
                gsap.fromTo(
                  "#logo",
                  {
                    x: isMobile ? 0 : 150,
                    width: "2.25rem",
                    opacity: 0,
                    display: "none",
                  }, // Hidden state
                  {
                    x: isMobile ? 0 : 0,
                    width: "auto",
                    opacity: 1,
                    display: "flex",
                    duration: isMobile ? 0 : 0.2,
                  } // Expanded state
                );

                // Animate nav items (from hidden to visible with no staggered effect)
                gsap.fromTo(
                  ".nav-item",
                  { opacity: 0, y: 1, display: "none" }, // Hidden state
                  {
                    opacity: 1,
                    y: 0,
                    display: "flex",
                    duration: 0.2,
                    stagger: 0,
                  } // Visible state
                );

                // Animate the navdock cta (from transparent to goldenbrown)
                gsap.fromTo(
                  "#navdock-cta",
                  {
                    backgroundColor: "transparent",
                  }, // HEROCTA STYLE
                  {
                    backgroundColor: "#c5a05e",
                  }
                );
              },
            });
          },
          onLeaveBack: () => {
            setIsTransforming(false);
            setHasPassedHero(false);

            // Animate the navdock back to its default state
            gsap.to(navdock, {
              display: "flex",
              padding: 0,
              width: isMobile ? "100%" : "11rem",
              height: "3.313rem",
              background: isMobile ? "#1b1a17" : "#c5a05e",
            });

            // Hide the logo (reset to hidden state)
            gsap.to("#logo", {
              x: isMobile ? 0 : 150,
              display: "none",
            });

            // Hide nav items (reset to hidden state)
            gsap.to(".nav-item", {
              display: "none",
            });

            // Reset navdock cta (reset to default state, HEROCTA STYLES)
            gsap.to("#navdock-cta", {
              background: "transparent",
            });
          },
        });
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
                duration: 0.2,
                onComplete: () => {
                  setShouldHideNavdock(progress === 1);
                },
              });
            } else {
              // Ensure navdock is visible on desktop
              gsap.to(navdockRef.current, {
                opacity: 1,
                duration: 0.2,
                onComplete: () => {
                  setShouldHideNavdock(false);
                },
              });
            }
          },
        });
      }

      return () => {
        ScrollTrigger.getAll().forEach((st) => st.kill());
      };
    };

    loadGSAP();
  }, [isMobile]);

  return (
    <>
      {/* Navdock */}
      <div
        className={`fixed flex flex-row items-center justify-center bottom-[0.75rem] lg:top-[2.5rem] w-[100vw] h-[3.313rem] z-[1000] max-w-[100vw]`}
      >
        <div
          ref={navdockRef}
          className={`flex flex-row items-center justify-between border-[0.125rem] border-ash lg:rounded-full shadow-customShadow shadow-ash/5 hover:shadow-goldenrod/5 overflow-hidden`}
        >
          {/* Navdock Final Form */}
          <div id="logo" className="">
            <Link
              href="/"
              passHref
              className="cursor-select-hover flex overflow-hidden"
            >
              <Image
                src="/images/logo2.png"
                alt="logo"
                width={36}
                height={22}
                className="size-full"
              />
            </Link>
          </div>

          <nav className="contents flex-row gap-[1.25rem] text-white">
            {NavLinks.map((nav, index) => (
              <HoverWrapper
                key={index}
                className="nav-item cursor-select-hover text-nowrap transition-all duration-300"
              >
                <div>
                  <Link key={`l_${index}`} href={nav.href} passHref>
                    <FlipLink>{getChars(nav.title)}</FlipLink>
                  </Link>
                </div>
              </HoverWrapper>
            ))}
          </nav>

          {/* Initial state content (matches heroCTA exactly) */}
          <HoverWrapper
            href="/"
            id="navdock-cta"
            className="button !border-none h-full cursor-select-hover !bg-goldenbrown shadow-customShadow shadow-ash/5 hover:shadow-goldenrod/5 w-[11rem]"
          >
            <FlipLink className={`flex items-center w-full`}>
              Get In Touch
            </FlipLink>
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className=""
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
      <PricingSection className="bg-white z-10 mt-[6rem]" />
      <SocialProofSection full className="bg-white z-10" />
      <CTASection className="bg-white z-10" />
      <FAQSection className="bg-white z-10" />
      <ContactSection className="bg-white z-10" />
    </>
  );
}

export default body;
