"use client";
import { FlipLink, HoverWrapper } from "@/components/animations/RevealLinks";
import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
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
  const { scrollY } = useScroll();

  const floatingAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  const rotationAnimation = {
    rotate: [-3, 3, -3],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  const heroCTARef = useRef<HTMLDivElement>(null);
  const navdockRef = useRef<HTMLDivElement>(null);
  const heroSectionRef = useRef<HTMLDivElement>(null);

  const [isScrolled, setIsScrolled] = useState(false);
  const [isBottom, setIsBottom] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [hasPassedHero, setHasPassedHero] = useState(false);
  const [isTransforming, setIsTransforming] = useState(false);
  const [shouldHideNavdock, setShouldHideNavdock] = useState(false);

  // Screen Size checking
  useEffect(() => {
    console.log("Is Mobile:", isMobile);
  }, [isMobile]); // This will run whenever isMobile changes

  // Screen Size checking (previous useEffect remains the same)
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      setIsBottom(scrollTop + windowHeight >= documentHeight - windowHeight);
      setIsScrolled(
        scrollTop > 50 && scrollTop + windowHeight < documentHeight
      );
    };

    // Initial setup
    handleResize();
    handleScroll();

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

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
      if (!isMobile && heroCTARef.current && navdockRef.current) {
        const heroCTA = heroCTARef.current;
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
          trigger: heroCTA,
          start: isMobile ? `top -10vh` : `top 2.5rem`, // When heroCTA reaches navdock position
          // end: "+=50",
          // markers: true,
          onEnter: () => {
            gsap.set(heroCTA, { opacity: isMobile ? 1 : 0 }); // Hide heroCTA
            gsap.set(navdock, { opacity: 1 }); // Show navdock
          },
          onLeaveBack: () => {
            gsap.set(navdock, { opacity: 0 }); // Hide navdock
            gsap.set(heroCTA, { opacity: 1 }); // Show heroCTA
          },
        });

        // Second ScrollTrigger (Navdock): Handle navdock transformation and element animations
        ScrollTrigger.create({
          trigger: heroCTA,
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
      {/* Hero */}
      <div
        ref={heroSectionRef}
        className={`section-container hero-container ${className} overflow-hidden`}
      >
        <div className="flex flex-col items-center my-auto w-full lg:max-w-[100vw] z-10">
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
              <div
                className={`flex flex-row items-center justify-center w-[100vw] h-[3.313rem]`}
              >
                <HoverWrapper
                  href="/"
                  className="button h-full cursor-select-hover !bg-goldenbrown shadow-customShadow shadow-ash/5 hover:shadow-goldenrod/5 w-[11rem]"
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

      {/* Assemble Icons */}
      <div className="absolute flex-none h-[100dvh] w-[100vw] !p-0 overflow-hidden saturate-50">
        {/* Light Rays */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          {/* Ray 1 */}
          <motion.div
            className="absolute left-[15%] -bottom-[10rem] h-[120vh] w-[10rem] origin-bottom bg-gradient-to-b from-transparent to-goldenrod animate-pulse"
            style={{
              rotate: -25,
            }}
            animate={{
              rotate: [-25, -20, -25],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Ray 2 */}
          <motion.div
            className="absolute left-[30%] -bottom-[10rem] h-[120vh] w-[10rem] origin-bottom bg-gradient-to-b from-transparent to-goldenrod animate-pulse"
            style={{
              rotate: -15,
            }}
            animate={{
              rotate: [-15, -10, -15],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Ray 3 */}
          <motion.div
            className="absolute left-[45%] -bottom-[10rem] h-[120vh] w-[10rem] origin-bottom bg-gradient-to-b from-transparent to-goldenrod animate-pulse"
            style={{
              rotate: 0,
            }}
            animate={{
              rotate: [0, 7, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Ray 4 */}
          <motion.div
            className="absolute left-[55%] -bottom-[10rem] h-[120vh] w-[10rem] origin-bottom bg-gradient-to-b from-transparent to-goldenrod animate-pulse"
            style={{
              rotate: 15,
            }}
            animate={{
              rotate: [15, 20, 15],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Ray 5 */}
          <motion.div
            className="absolute left-[75%] -bottom-[10rem] h-[120vh] w-[10rem] origin-bottom bg-gradient-to-b from-transparent to-goldenrod animate-pulse"
            style={{
              rotate: 25,
            }}
            animate={{
              rotate: [25, 30, 25],
            }}
            transition={{
              duration: 6.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Icons */}
        <div className="relative">
          <div className="absolute flex h-[100dvh] w-[100vw] bg-gradient-to-b from-transparent from-70% to-goldenrod to-90% z-10" />
          {/* Top Left */}
          <motion.div
            className="size-[5rem] absolute flex left-[40%] top-[60vh] lg:left-[30%] lg:top-[8rem]"
            style={{
              x: useTransform(scrollY, [0, 500], [0, 300]),
              y: useTransform(scrollY, [0, 500], [0, 1200]),
              rotate: useTransform(scrollY, [0, 500], [-15, -45]),
            }}
          >
            <motion.div className="size-full" animate={floatingAnimation}>
              <motion.div
                className="size-full rounded-[1rem] shadow-inner"
                animate={rotationAnimation}
              >
                <Image
                  alt="icon"
                  src="/svgs/hero-svgs/Instagram.svg"
                  height={16}
                  width={23}
                  className="size-full shadow-2xl rounded-[1rem]"
                />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Repeat the same structure for other icons with different positions and delays */}
          {/* Top Right */}
          <motion.div
            className="size-[5rem] absolute flex right-[20%] top-[45vh] lg:right-[40%] lg:top-[20vh]"
            style={{
              x: useTransform(scrollY, [0, 500], [0, -300]),
              y: useTransform(scrollY, [0, 500], [0, 1200]),
              rotate: useTransform(scrollY, [0, 500], [15, 45]),
            }}
          >
            <motion.div
              className="size-full"
              animate={{
                ...floatingAnimation,
                transition: {
                  ...floatingAnimation.transition,
                  delay: 0.5,
                },
              }}
            >
              <motion.div
                className="size-full rounded-[1rem] shadow-inner"
                animate={rotationAnimation}
              >
                <Image
                  alt="icon"
                  src="/svgs/hero-svgs/Twitter.svg"
                  height={16}
                  width={23}
                  className="size-full shadow-2xl rounded-[1rem]"
                />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Mid-Left Upper */}
          <motion.div
            className="size-[5rem] absolute flex left-[10%] top-[50vh] lg:left-[20%] lg:top-[30vh]"
            style={{
              x: useTransform(scrollY, [0, 500], [0, 400]),
              y: useTransform(scrollY, [0, 500], [0, 1000]),
              rotate: useTransform(scrollY, [0, 500], [-20, -40]),
            }}
          >
            <motion.div
              className="size-full"
              animate={{
                ...floatingAnimation,
                transition: {
                  ...floatingAnimation.transition,
                  delay: 1.0,
                },
              }}
            >
              <motion.div
                className="size-full rounded-[1rem] shadow-inner"
                animate={rotationAnimation}
              >
                <Image
                  alt="icon"
                  src="/svgs/hero-svgs/Facebook.svg"
                  height={16}
                  width={23}
                  className="size-full shadow-2xl rounded-[1rem]"
                />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Mid-Right Upper */}
          <motion.div
            className="size-[5rem] absolute flex right-[10%] top-[60vh] lg:right-[15rem] lg:top-[16rem]"
            style={{
              x: useTransform(scrollY, [0, 500], [0, -400]),
              y: useTransform(scrollY, [0, 500], [0, 1000]),
              rotate: useTransform(scrollY, [0, 500], [20, 40]),
            }}
          >
            <motion.div
              className="size-full"
              animate={{
                ...floatingAnimation,
                transition: {
                  ...floatingAnimation.transition,
                  delay: 1.5,
                },
              }}
            >
              <motion.div
                className="size-full rounded-[1rem] shadow-inner"
                animate={rotationAnimation}
              >
                <Image
                  alt="icon"
                  src="/svgs/hero-svgs/TikTok.svg"
                  height={16}
                  width={23}
                  className="size-full shadow-2xl rounded-[1rem]"
                />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Mid-Left Lower */}
          <motion.div
            className="size-[5rem] absolute flex left-[5%] top-[65vh] lg:left-[5rem] lg:top-[24rem]"
            style={{
              x: useTransform(scrollY, [0, 500], [0, 400]),
              y: useTransform(scrollY, [0, 500], [0, 800]),
              rotate: useTransform(scrollY, [0, 500], [-30, -60]),
            }}
          >
            <motion.div
              className="size-full"
              animate={{
                ...floatingAnimation,
                transition: {
                  ...floatingAnimation.transition,
                  delay: 2.0,
                },
              }}
            >
              <motion.div
                className="size-full rounded-[1rem] shadow-inner"
                animate={rotationAnimation}
              >
                <Image
                  alt="icon"
                  src="/svgs/hero-svgs/LinkedIn.svg"
                  height={16}
                  width={23}
                  className="size-full shadow-2xl rounded-[1rem]"
                />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Mid-Right Lower */}
          <motion.div
            className="size-[5rem] absolute flex right-[5%] top-[80vh] lg:right-[5rem] lg:top-[40vh]"
            style={{
              x: useTransform(scrollY, [0, 500], [0, -400]),
              y: useTransform(scrollY, [0, 500], [0, 800]),
              rotate: useTransform(scrollY, [0, 500], [30, 60]),
            }}
          >
            <motion.div
              className="size-full"
              animate={{
                ...floatingAnimation,
                transition: {
                  ...floatingAnimation.transition,
                  delay: 2.5,
                },
              }}
            >
              <motion.div
                className="size-full rounded-[1rem] shadow-inner"
                animate={rotationAnimation}
              >
                <Image
                  alt="icon"
                  src="/svgs/hero-svgs/Pinterest.svg"
                  height={16}
                  width={23}
                  className="size-full shadow-2xl rounded-[1rem]"
                />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Bottom Left */}
          <motion.div
            className="size-[5rem] absolute hidden lg:flex left-[20rem] top-[55vh]"
            style={{
              x: useTransform(scrollY, [0, 500], [0, 300]),
              y: useTransform(scrollY, [0, 500], [0, 600]),
              rotate: useTransform(scrollY, [0, 500], [-25, -50]),
            }}
          >
            <motion.div
              className="size-full"
              animate={{
                ...floatingAnimation,
                transition: {
                  ...floatingAnimation.transition,
                  delay: 3.0,
                },
              }}
            >
              <motion.div
                className="size-full rounded-[1rem] shadow-inner"
                animate={rotationAnimation}
              >
                <Image
                  alt="icon"
                  src="/svgs/hero-svgs/Youtube.svg"
                  height={16}
                  width={23}
                  className="size-full shadow-2xl rounded-[1rem]"
                />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Bottom Right */}
          <motion.div
            className="size-[5rem] absolute hidden lg:flex right-[20rem] top-[60vh]"
            style={{
              x: useTransform(scrollY, [0, 500], [0, -300]),
              y: useTransform(scrollY, [0, 500], [0, 600]),
              rotate: useTransform(scrollY, [0, 500], [25, 50]),
            }}
          >
            <motion.div
              className="size-full"
              animate={{
                ...floatingAnimation,
                transition: {
                  ...floatingAnimation.transition,
                  delay: 3.5,
                },
              }}
            >
              <motion.div
                className="size-full rounded-[1rem] shadow-inner"
                animate={rotationAnimation}
              >
                <Image
                  alt="icon"
                  src="/svgs/hero-svgs/WhatsApp.svg"
                  height={16}
                  width={23}
                  className="size-full shadow-2xl rounded-[1rem]"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
