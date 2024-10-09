"use client";
import { FlipLink, HoverWrapper } from "@/components/animations/RevealLinks";
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { getChars } from "@/components/animations/GetChars";

interface LinkDetails {
  title: string;
  href: string;
  src?: string;
}

interface SectionProps {
  className?: string;
  full?: boolean;
  navigation: LinkDetails[];
}

function HeroSection({ className = "", navigation }: SectionProps) {
  const heroCTARef = useRef<HTMLDivElement>(null);
  const navdockRef = useRef<HTMLDivElement>(null);
  const heroSectionRef = useRef<HTMLDivElement>(null);

  const [isScrolled, setIsScrolled] = useState(false);
  const [isBottom, setIsBottom] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [hasPassedHero, setHasPassedHero] = useState(false);
  const [isTransforming, setIsTransforming] = useState(false);

  // Screen Size checking
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Set a breakpoint for mobile
    };

    // Check if the user is at the bottom of the page
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Detect when user reaches the bottom of the page
      setIsBottom(scrollTop + windowHeight >= documentHeight - windowHeight);

      // Set isScrolled for animation purposes
      setIsScrolled(
        scrollTop > 50 && scrollTop + windowHeight < documentHeight
      );
    };

    // Initial setup
    handleResize();
    handleScroll();

    // Event listeners for scroll and resize
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listeners
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
      if (heroCTARef.current && navdockRef.current) {
        const heroCTA = heroCTARef.current;
        const navdock = navdockRef.current;

        // const heroBounds = heroCTA.getBoundingClientRect();

        // Set navdock initial state
        gsap.set(navdock, {
          // width: heroBounds.width,
          width: "11rem",
          height: "3.313rem",
          background: "#c5a05e",
          opacity: 0,
          borderRadius: "9999px", // Matches the heroCTA's border radius
          display: "none", // Ensure it's hidden initially
        });

        gsap.set("#logo", {
          display: "none", // Ensure it's hidden initially
        });

        gsap.set(".nav-item", {
          display: "none", // Ensure it's hidden initially
        });

        gsap.set("#navdock-cta", {
          display: "contents", // Ensure it's hidden initially
        });

        // First ScrollTrigger (heroCTA & Navdock): Handle initial fade transition
        ScrollTrigger.create({
          trigger: heroCTA,
          start: "top 40px", // When heroCTA reaches navdock position
          end: "+=50",
          // markers: true,
          onEnter: () => {
            gsap.set(heroCTA, { display: "none" }); // Hide heroCTA completely
            gsap.set(navdock, { display: "flex" }); // Show navdock
            gsap.to(navdock, {
              opacity: 1,
              duration: 0,
              ease: "none", // No easing, instant transition
            });
          },
          onLeaveBack: () => {
            gsap.set(navdock, { display: "none", background: "#c5a05e" }); // Hide navdock
            gsap.set(heroCTA, { display: "flex" }); // Show heroCTA
            gsap.to(heroCTA, {
              opacity: 1,
              duration: 0,
              ease: "none", // No easing, instant transition
            });
          },
        });

        // Second ScrollTrigger (Navdock): Handle navdock transformation and element animations
        ScrollTrigger.create({
          trigger: heroCTA,
          start: "200px 40px", // Slightly after the first trigger
          end: "+=50vh",
          // markers: true,
          onEnter: () => {
            setIsTransforming(true);

            // Animate the navdock
            gsap.to(navdock, {
              background: "#1b1a17",
              width: "auto",
              height: "3.313rem",
              paddingRight: "0px",
              paddingTop: "0px",
              paddingBottom: "0px",
              gap: "1.313rem",
              border: "0.125rem solid #1b1a17",
              borderRadius: "9999px",

              duration: 0.2,
              onComplete: () => {
                setHasPassedHero(true);

                // Once the navdock is transformed, animate the logo and nav items

                // Animate the logo (from hidden to expanded)
                gsap.fromTo(
                  "#logo", // Ensure your logo has this ID
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

                // Animate nav items (from hidden to visible with staggered effect)
                gsap.fromTo(
                  ".nav-item", // Ensure your nav items have this class
                  { opacity: 0, y: 0, width: "0px", display: "none" }, // Hidden state
                  {
                    opacity: 1,
                    y: 0,
                    width: "auto",
                    display: "flex",
                    duration: 0.2,
                    stagger: 0,
                  } // Visible state
                );

                // Animate the navdock cta (from no styles to identical to hero cta styles)
                gsap.fromTo(
                  "#navdock-cta", // Ensure your logo has this ID
                  {
                    dislay: "contents",
                    width: "11rem",
                    padding: "none",
                    backgroundColor: "transparent",
                  },
                  {
                    display: "flex",
                    width: "11rem",
                    height: "3.313rem",
                    padding: "0.875rem 1.5rem",
                    backgroundColor: "#c5a05e",
                    borderRadius: "9999px",
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
              width: "11rem",
              height: "3.313rem",
              padding: "0.875rem 1.5rem",
              background: "#c5a05e",
              borderRadius: "9999px",
              duration: 0,
            });

            // Hide the logo (reset to hidden state)
            gsap.to("#logo", {
              x: isMobile ? 0 : 150,
              display: "none",
              width: "2.25rem",
              opacity: 0,
              duration: 0,
            });

            // Hide nav items (reset to hidden state)
            gsap.to(".nav-item", {
              display: "none",
              width: "0px",
              opacity: 0,
              duration: 0,
            });

            // Hide nav items (reset to default state
            gsap.to("#navdock-cta", {
              dislay: "contents",
              width: "100%",
              background: "transparent",
              border: "none",
              padding: "0",
              duration: 0,
            });
          },
        });
      }

      return () => {
        ScrollTrigger.getAll().forEach((st) => st.kill());
      };
    };

    loadGSAP();
  }, []);

  // const logoVariants = (isMobile: any) => ({
  //   hidden: {
  //     x: isMobile ? 0 : 150, // No x animation on mobile
  //     width: "2.25rem",
  //     transition: { duration: 0 },
  //   },
  //   expanded: {
  //     x: isMobile ? 0 : 0, // No x animation on mobile
  //     transition: { duration: isMobile ? 0 : 0.5 },
  //   },
  // });

  // const itemVariants = {
  //   hidden: {
  //     opacity: 0,
  //     y: 0,
  //     width: "0px",
  //     transition: { duration: 0 },
  //   },
  //   visible: { opacity: 1, y: 0, transition: { delay: 0, duration: 0.5 } },
  // };

  // // Update navdock variants to consider hasPassedHero
  // const navdockVariants = (isMobile: boolean) => ({
  //   hidden: {
  //     width: isMobile ? "auto" : "auto",
  //     transition: { duration: 0 },
  //   },
  //   expanded: {
  //     width: isMobile ? "100%" : "auto",
  //     transition: {
  //       duration: isMobile ? 0 : 0.5,
  //       when: "beforeChildren",
  //       staggerChildren: 0.1,
  //     },
  //   },
  // });

  return (
    <>
      <div
        ref={heroSectionRef}
        className={`section-container hero-container ${className} overflow-hidden`}
      >
        <div className="flex flex-col items-center my-auto max-w-[100vw]">
          {/* Main Copy */}
          <h1
            // data-speed={1.1}
            className="pn-regular-96 uppercase text-center max-w-[20ch] my-[0.625rem]"
          >
            Meet the{"  "}
            <span className="text-goldenbrown font-bold">Gold Standard</span> in
            Real Estate Marketing
          </h1>

          {/* Hero CTA */}
          <div className="flex h-[3.313rem] my-[0.625rem]">
            <div
              ref={heroCTARef}
              className="flex flex-col lg:flex-row gap-[1rem]"
            >
              <HoverWrapper
                href="/"
                className="button cursor-select-hover !bg-goldenbrown shadow-customShadow shadow-ash/5 hover:shadow-goldenrod/5 w-[11rem] !gap-0 !justify-between"
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
        </div>

        {/* Circle CTA */}
        <div
          data-speed={1.3}
          className="cursor-select-hover relative size-[7.5rem] mx-auto bg-goldenbrown shadow-customShadow shadow-ash/5 rounded-full border-[0.125rem] border-ash"
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

      {/* Navdock */}
      <div className="fixed flex flex-row items-center justify-center bottom-0 lg:top-[2.5rem] w-[100vw] h-[3.313rem] z-[1000] max-w-[100vw]">
        <div
          ref={navdockRef}
          className={`flex flex-row items-center justify-between px-[1.5rem] py-[0.875rem] border-[0.125rem] border-ash transition-all rounded-full shadow-customShadow shadow-ash/5 hover:shadow-goldenrod/5 w-[11rem] overflow-hidden
            ${!isTransforming ? "" : ""}
            ${hasPassedHero ? "" : "pointer-events-none"}`}
        >
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
            {navigation.map((nav, index) => (
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
            className="cursor-select-hover flex flex-row items-center justify-center gap-[0.625rem]"
          >
            <FlipLink className={``}>Get In Touch</FlipLink>
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

          {/* Logo always visible */}
          {/* <motion.div
            className="gap-[1.25rem] w-full lg:mx-auto flex flex-row justify-between items-center"
            initial="hidden"
            animate={
              isScrolled && hasPassedHero && !isBottom ? "expanded" : "hidden"
            }
            variants={navdockVariants(isMobile)}
          >
            <motion.div
              className="bg-ash z-10 w-[2.25rem] h-[1.375rem] lg:ml-[1.5rem]"
              initial="hidden"
              animate={isScrolled && !isBottom ? "expanded" : "hidden"}
              variants={logoVariants(isMobile)}
            >
              <Link
                href="/"
                passHref
                className="cursor-select-hover flex size-full h-[1.375rem] overflow-hidden"
              >
                <Image
                  src="/images/logo2.png"
                  alt="logo"
                  width={36}
                  height={22}
                  className=""
                />
              </Link>
            </motion.div>

            <motion.nav
              className="contents lg:flex flex-row gap-[1.25rem]"
              variants={itemVariants}
              initial="hidden"
              animate={isScrolled ? "visible" : "hidden"}
            >
              {navigation.map((nav, index) => (
                <HoverWrapper
                  key={index}
                  className="cursor-select-hover text-nowrap transition-all duration-300"
                  // variants={itemVariants}
                >
                  <motion.div
                    variants={itemVariants}
                    initial="hidden"
                    animate={isScrolled ? "visible" : "hidden"}
                  >
                    <Link key={`l_${index}`} href={nav.href} passHref>
                      <FlipLink>{getChars(nav.title)}</FlipLink>
                    </Link>
                  </motion.div>
                </HoverWrapper>
              ))}
            </motion.nav>

            <HoverWrapper className="cursor-select-hover">
              <motion.div
                variants={itemVariants}
                initial="hidden"
                animate={isScrolled ? "visible" : "hidden"}
              >
                <Link
                  href={"/#contact"}
                  className="pn-regular-16 relative group hidden md:flex button !border-none !bg-goldenbrown text-ash shadow-customShadow shadow-ash/5 hover:shadow-goldenrod/5 !rounded-full !py-[0.688rem] !px-[1.25rem]"
                  passHref
                >
                  <FlipLink>{getChars("Contact Us")}</FlipLink>
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
                        stroke="#1B1A17"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M7.16656 6.33398H14.6666V13.834"
                        stroke="#1B1A17"
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
                </Link>
              </motion.div>
            </HoverWrapper>
          </motion.div> */}
        </div>
      </div>
    </>
  );
}

export default HeroSection;
