/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { FlipLink, HoverWrapper } from "@/components/animations/RevealLinks";
import React, {
  forwardRef,
  RefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import { motion, useScroll, useTransform, easeInOut } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { getChars } from "@/components/animations/GetChars";
import GsapMagnetic from "@/components/animations/GsapMagnetic";
import { Reveal } from "@/components/animations/Reveal";
import { GradientText } from "@/components/ui/gradientText";

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
    const [color] = useState(originalColor);
    const { scrollY } = useScroll();
    const opacity = useTransform(scrollY, [0, 500], [1, 0], {
      ease: easeInOut,
    });

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
    // const heroSectionRef = useRef<HTMLDivElement>(null);

    const [isScrolled, setIsScrolled] = useState(false);
    const [isBottom, setIsBottom] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    // const [hasPassedHero, setHasPassedHero] = useState(false);
    // const [isTransforming, setIsTransforming] = useState(false);
    const [shouldHideNavdock, setShouldHideNavdock] = useState(false);

    const [revealDelay, setRevealDelay] = useState(0);

    useEffect(() => {
      const handleNavigation = (event) => {
        if (
          event.type === "popstate" ||
          document.referrer.includes(window.location.origin)
        ) {
          setRevealDelay(0);
        } else {
          setRevealDelay(3.5);
        }
      };

      // Set initial delay
      handleNavigation({ type: "initial" });

      // Listen for navigation events
      window.addEventListener("popstate", handleNavigation);

      return () => {
        window.removeEventListener("popstate", handleNavigation);
      };
    }, []);

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

    // Screen Size checking
    useEffect(() => {
      console.log("Is Mobile:", isMobile);
    }, [isMobile]); // This will run whenever isMobile changes

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

        // Hero CTA to Navdock transition
        if (
          // !isMobile &&
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
              "11rem",
            height: "3.313rem",
            background:
              // isMobile ? "#1b1a17" :
              "#c5a05e",
            borderRadius: "9999px",
            opacity: 0,
          });

          // Hide elements on desktop, visible on mobile
          gsap.set(["#logo", ".nav"], {
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
            start: isMobile ? `bottom top` : `top 40px`, // When heroCTA reaches navdock position
            // end: "+=50",
            // markers: true,
            onEnter: () => {
              gsap.set(heroCTA, {
                opacity: isMobile ? 1 : 0,
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
                width:
                  // isMobile ? "100%" :
                  "25rem",
                height: "3.313rem",
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
                ".nav",
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
              const tl = gsap.timeline();

              gsap.set(["#logo", ".nav", "#navdock-cta"], {
                opacity: 0,
              });

              gsap.set("#navdock-cta", {
                display: "none",
                y: "3.5rem",
              });

              // Animate the navdock back to its default state
              tl.to(navdock, {
                display: "flex",
                padding: 0,
                width:
                  // isMobile ? "100%" :
                  "11rem",
                height: "3.313rem",
                background:
                  // isMobile ? "#1b1a17" :
                  "#1b1a17",
              });

              // Hide the logo and nav items
              tl.to(
                ["#logo", ".nav"],
                {
                  display: "none",
                  duration: 0.3,
                },
                "-=0.3"
              );

              // Reset navdock cta (reset to default state, HEROCTA STYLES)
              tl.to(
                "#navdock-cta",
                {
                  display: "flex",
                  opacity: 1,
                  y: 0,
                  backgroundColor: "transparent",
                  duration: 0.5,
                },
                "-=0.5"
              );
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
                  onComplete: () => {
                    setShouldHideNavdock(progress === 1);
                  },
                });
              } else {
                // Ensure navdock is visible on desktop
                gsap.to(navdockRef.current, {
                  opacity: 1,
                  duration: 0.5,
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
      <div
        ref={ref}
        className="relative !bg-white"
        data-original-color={originalColor}
        data-transition-color={transitionColor}
      >
        {/* Assemble Icons */}
        <div
          id="icons"
          className="pointer-events-none absolute !bg-transparent top-0 h-[100vh] w-[100vw] !p-0 overflow-hidden blur-[1px] lg:blur-none"
        >
          {/* Light Rays */}

          <div className="pointer-events-none absolute inset-0 w-full h-full overflow-hidden">
            <div
              className="pointer-events-none absolute flex h-[100vh] w-[100vw] bg-gradient-to-t from-10% to-transparent to-30% transition-all z-30"
              style={
                {
                  "--tw-gradient-from": `${color} var(--tw-gradient-from-position)`,
                  "--tw-gradient-to": `rgb(255 255 255 / 0) var(--tw-gradient-to-position)`,
                  "--tw-gradient-stops":
                    "var(--tw-gradient-from), var(--tw-gradient-to)",
                } as React.CSSProperties
              }
            />
            {/* Ray 1 */}
            <motion.div
              className="absolute left-[15%] -bottom-[10rem] h-[120vh] w-[10rem] origin-bottom bg-gradient-to-t to-transparent animate-pulse"
              style={
                {
                  "--tw-gradient-from": `${color} var(--tw-gradient-from-position)`,
                  "--tw-gradient-to": `rgb(255 255 255 / 0) var(--tw-gradient-to-position)`,
                  "--tw-gradient-stops":
                    "var(--tw-gradient-from), var(--tw-gradient-to)",
                  rotate: "-25",
                } as React.CSSProperties
              }
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
              className="absolute left-[30%] -bottom-[10rem] h-[120vh] w-[10rem] origin-bottom bg-gradient-to-t to-transparent animate-pulse"
              style={
                {
                  "--tw-gradient-from": `${color} var(--tw-gradient-from-position)`,
                  "--tw-gradient-to": `rgb(255 255 255 / 0) var(--tw-gradient-to-position)`,
                  "--tw-gradient-stops":
                    "var(--tw-gradient-from), var(--tw-gradient-to)",
                  rotate: "-15",
                } as React.CSSProperties
              }
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
              className="absolute left-[45%] -bottom-[10rem] h-[120vh] w-[10rem] origin-bottom bg-gradient-to-t to-transparent animate-pulse"
              style={
                {
                  "--tw-gradient-from": `${color} var(--tw-gradient-from-position)`,
                  "--tw-gradient-to": `rgb(255 255 255 / 0) var(--tw-gradient-to-position)`,
                  "--tw-gradient-stops":
                    "var(--tw-gradient-from), var(--tw-gradient-to)",
                  rotate: "0",
                } as React.CSSProperties
              }
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
              className="absolute left-[55%] -bottom-[10rem] h-[120vh] w-[10rem] origin-bottom bg-gradient-to-t to-transparent animate-pulse"
              style={
                {
                  "--tw-gradient-from": `${color} var(--tw-gradient-from-position)`,
                  "--tw-gradient-to": `rgb(255 255 255 / 0) var(--tw-gradient-to-position)`,
                  "--tw-gradient-stops":
                    "var(--tw-gradient-from), var(--tw-gradient-to)",
                  rotate: "15",
                } as React.CSSProperties
              }
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
              className="absolute left-[75%] -bottom-[10rem] h-[120vh] w-[10rem] origin-bottom bg-gradient-to-t to-transparent animate-pulse"
              style={
                {
                  "--tw-gradient-from": `${color} var(--tw-gradient-from-position)`,
                  "--tw-gradient-to": `rgb(255 255 255 / 0) var(--tw-gradient-to-position)`,
                  "--tw-gradient-stops":
                    "var(--tw-gradient-from), var(--tw-gradient-to)",
                  rotate: "25",
                } as React.CSSProperties
              }
              animate={{
                rotate: [25, 30, 25],
              }}
              transition={{
                duration: 6.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            {/* Icons */}
            <div className="relative z-10">
              {/* Top Left */}
              <motion.div
                className="size-[5rem] absolute flex left-[20%] top-[20vh] lg:left-[30%] lg:top-[8rem]"
                style={{
                  x: useTransform(scrollY, [0, 500], [0, 300]),
                  y: useTransform(scrollY, [0, 500], [0, 1200]),
                  opacity,
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
                className="size-[5rem] absolute flex right-[10%] top-[10vh] lg:right-[40%] lg:top-[20vh]"
                style={{
                  x: useTransform(scrollY, [0, 500], [0, -300]),
                  y: useTransform(scrollY, [0, 500], [0, 1200]),
                  opacity,
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
                  opacity,
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
                className="size-[5rem] absolute flex right-[10%] top-[40vh] lg:right-[15rem] lg:top-[16rem]"
                style={{
                  x: useTransform(scrollY, [0, 500], [0, -400]),
                  y: useTransform(scrollY, [0, 500], [0, 1000]),
                  opacity,
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
                  opacity,
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
                className="size-[5rem] absolute flex right-[5%] top-[70vh] lg:right-[5rem] lg:top-[40vh]"
                style={{
                  x: useTransform(scrollY, [0, 500], [0, -400]),
                  y: useTransform(scrollY, [0, 500], [0, 800]),
                  opacity,
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
                  opacity,
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
                  opacity,
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
        </div>

        {/* Hero */}
        <div
          id="hero"
          className={`section-container hero-container ${className} overflow-hidden z-[100] !h-[100dvh]`}
        >
          <div className="flex flex-col items-center my-auto w-full lg:max-w-[100vw] z-10">
            {/* Main Copy */}

            <h1 className="pn-regular-96 uppercase text-center max-w-[20ch] my-[0.625rem] flex flex-col items-center">
              <Reveal delay={0} slide={false}>
                <span>
                  Meet the <GradientText>Gold</GradientText>
                </span>
              </Reveal>{" "}
              <Reveal delay={0.05} slide={false}>
                <span>
                  <GradientText>Standard</GradientText> in Real
                </span>
              </Reveal>{" "}
              <Reveal delay={0.1} slide={false}>
                <span>Estate Marketing</span>
              </Reveal>
            </h1>

            {/* Hero CTA */}
            <Reveal
              once
              ref={heroCTARef}
              delay={revealDelay}
              xOverflow={false}
              yOverflow={false}
              slide={false}
            >
              <div className="flex h-[3.313rem] my-[0.625rem]">
                <div className="flex flex-col lg:flex-row gap-[1rem]">
                  <motion.div
                    className={`button group !p-0 h-full cursor-select-hover !bg-transparent shadow-customShadow shadow-ash/5 hover:shadow-goldenrod/5 hover:scale-110 w-[11rem]`}
                    style={{
                      background:
                        "linear-gradient(90deg, #C5A05E, #FDD98A, #C5A05E)",
                      backgroundSize: "300% 100%",
                    }}
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{
                      duration: 2,
                      ease: "linear",
                      repeat: Infinity,
                    }}
                  >
                    <HoverWrapper
                      href="#contact"
                      className="flex size-full items-center px-[1.5rem] py-[0.875rem]"
                    >
                      <FlipLink className={`flex items-center w-full`}>
                        Get In Touch
                      </FlipLink>

                      <Image
                        alt="arrow"
                        src="/svgs/arrow-redirect-cta.svg"
                        className="text-ash group-hover:rotate-45 transition-all duration-300"
                        height={21}
                        width={21}
                      />
                    </HoverWrapper>
                  </motion.div>
                </div>
              </div>
            </Reveal>
          </div>
          <GsapMagnetic speed={0.5} className="z-[100] opacity-0">
            <motion.div
              // data-speed={1.1}
              className="select-none cursor-select-hover relative size-[7.5rem] mx-auto bg-goldenbrown shadow-customShadow shadow-ash/5 rounded-full border-[0.125rem] border-ash opacity-100 lg:opacity-50 hover:opacity-100 transition-opacity duration-500"
              style={{
                background: "linear-gradient(90deg, #C5A05E, #FDD98A, #C5A05E)",
                backgroundSize: "300% 100%",
              }}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 2,
                ease: "linear",
                repeat: Infinity,
              }}
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
                  className="pn-regular-16 !text-[1.125rem] xl:!text-[1.125rem] [@media(min-width:1440px)]:!text-[1rem]"
                  fontSize="4.5"
                  fill="currentColor"
                  letterSpacing="0.1"
                >
                  <textPath href="#circlePath" startOffset="0%">
                    • SEE MORE • SEE MORE
                  </textPath>
                </text>
              </svg>

              <HoverWrapper
                href="#socialProof1"
                className="absolute inset-0 flex items-center justify-center"
              >
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
            </motion.div>
          </GsapMagnetic>
          <div className="absolute -top-[2.5rem] flex size-full w-[100vw] h-[100dvh] items-end justify-center">
            {/* Circle CTA */}
            <GsapMagnetic speed={0.5} className="z-[100]">
              <motion.div
                // data-speed={1.1}
                className="select-none cursor-select-hover relative size-[7.5rem] mx-auto bg-goldenbrown shadow-customShadow shadow-ash/5 rounded-full border-[0.125rem] border-ash opacity-100 lg:opacity-50 hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    "linear-gradient(90deg, #C5A05E, #FDD98A, #C5A05E)",
                  backgroundSize: "300% 100%",
                }}
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 2,
                  ease: "linear",
                  repeat: Infinity,
                }}
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
                    className="pn-regular-16 !text-[1.125rem] xl:!text-[1.125rem] [@media(min-width:1440px)]:!text-[1rem]"
                    fontSize="4.5"
                    fill="currentColor"
                    letterSpacing="0.1"
                  >
                    <textPath href="#circlePath" startOffset="0%">
                      • SEE MORE • SEE MORE
                    </textPath>
                  </text>
                </svg>

                <HoverWrapper
                  href="#socialProof1"
                  className="absolute inset-0 flex items-center justify-center"
                >
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
              </motion.div>
            </GsapMagnetic>
          </div>
        </div>

        {/* Navdock */}
        <div
          id="navdock"
          className={`fixed flex flex-row items-center justify-center top-[2.5rem] w-[100vw] h-[3.313rem] z-[999] max-w-[100vw]`}
        >
          <div
            ref={navdockRef}
            className={`flex flex-row items-center justify-between border-[0.125rem] border-ash lg:rounded-full shadow-customShadow shadow-ash/5 hover:shadow-goldenrod/5 overflow-hidden`}
          >
            {/* Navdock Final Form */}
            <div id="logo" className="flex items-center h-full">
              <Link
                href="/"
                passHref
                className="cursor-select-hover flex h-[36px] aspect-square overflow-hidden"
              >
                <Image
                  src="/images/logo2.webp"
                  alt="logo"
                  width={36}
                  height={36}
                  className="size-full"
                />
              </Link>
            </div>

            {/* Navigation Links */}
            <nav className="nav flex flex-row  gap-[1rem] items-center justify-between mx-[1rem] h-full text-white">
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
            <motion.div
              id="navdock-cta"
              className={`button group !border-none !p-0 h-full cursor-select-hover !bg-transparent shadow-customShadow shadow-ash/5 hover:shadow-goldenrod/5 w-[11rem]`}
              style={{
                background: "linear-gradient(90deg, #C5A05E, #FDD98A, #C5A05E)",
                backgroundSize: "300% 100%",
              }}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 2,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              <HoverWrapper
                href="#contact"
                className="flex size-full items-center px-[1.5rem] py-[0.875rem]"
              >
                <FlipLink className={`flex items-center w-full`}>
                  Get In Touch
                </FlipLink>

                <Image
                  alt="arrow"
                  src="/svgs/arrow-redirect-cta.svg"
                  className="text-ash group-hover:rotate-45 transition-all duration-300"
                  height={21}
                  width={21}
                />
              </HoverWrapper>
            </motion.div>
          </div>
        </div>
      </div>
    );
  }
);

HeroSection.displayName = "HeroSection";

export default HeroSection;
