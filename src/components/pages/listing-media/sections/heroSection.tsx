/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { FlipLink, HoverWrapper } from "@/components/animations/RevealLinks";
import React, {
  forwardRef,
  RefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  motion,
  useScroll,
  useTransform,
  easeInOut,
  useSpring,
} from "framer-motion";
import Link from "next/link";
import Image from "next/image";
// import { getChars } from "@/components/animations/GetChars";
// import GsapMagnetic from "@/components/animations/GsapMagnetic";
import { Reveal } from "@/components/animations/Reveal";
import { GradientText } from "@/components/ui/gradientText";
// import CircleCTA from "@/components/ui/circleCTA";

// import logo from "@/../../public/images/logo2.webp";
import arrowRedirect from "@/../../public/svgs/arrow-redirect-cta.svg";
import instagramHeroImage from "@/../../public/svgs/hero-svgs/Instagram.svg";
import twitterHeroImage from "@/../../public/svgs/hero-svgs/Twitter.svg";
import facebookHeroImage from "@/../../public/svgs/hero-svgs/Facebook.svg";
import tiktokHeroImage from "@/../../public/svgs/hero-svgs/TikTok.svg";
import linkedinHeroImage from "@/../../public/svgs/hero-svgs/LinkedIn.svg";
import pinterestHeroImage from "@/../../public/svgs/hero-svgs/Pinterest.svg";
import youtubeHeroImage from "@/../../public/svgs/hero-svgs/Youtube.svg";
import whatsappHeroImage from "@/../../public/svgs/hero-svgs/WhatsApp.svg";

import starImage from "@/../../public/svgs/star.svg";

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

        return () => {
          ScrollTrigger.getAll().forEach((st) => st.kill());
        };
      };

      loadGSAP();
    }, [isMobile]);

    return (
      <div
        ref={ref}
        className={`relative !bg-white ${className}`}
        data-original-color={originalColor}
        data-transition-color={transitionColor}
      >
        {/* Assemble Icons */}
        <div
          id="icons"
          className="pointer-events-none absolute !bg-transparent top-0 h-[100vh] w-full max-w-[100vw] !p-0 overflow-hidden"
        >
          {/* Light Rays */}
          <div className="pointer-events-none absolute inset-0 w-full h-full overflow-hidden">
            <div
              className="pointer-events-none absolute flex h-[100vh] w-full max-w-[100vw] bg-gradient-to-t from-10% to-transparent to-30% transition-all z-30"
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
                className="size-[5rem] absolute flex left-[20%] top-[20vh] sm:left-[30%] sm:top-[8rem]"
                style={{
                  x: useSpring(useTransform(scrollY, [0, 500], [0, 300]), {
                    stiffness: 500,
                    damping: 20,
                  }),
                  y: useSpring(useTransform(scrollY, [0, 500], [0, 1200]), {
                    stiffness: 500,
                    damping: 20,
                  }),
                  opacity,
                  rotate: useSpring(
                    useTransform(scrollY, [0, 500], [-15, -45]),
                    { stiffness: 500, damping: 20 }
                  ),
                }}
              >
                <motion.div className="size-full" animate={floatingAnimation}>
                  <motion.div
                    className="size-full rounded-[1rem] shadow-inner"
                    animate={rotationAnimation}
                  >
                    <Image
                      alt="icon"
                      src={instagramHeroImage}
                      className="size-full shadow-2xl rounded-[1rem]"
                      quality={10}
                      priority
                    />
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Repeat the same structure for other icons with different positions and delays */}
              {/* Top Right */}
              <motion.div
                className="size-[5rem] absolute flex right-[10%] top-[10vh] sm:right-[30%] sm:top-[10vh]"
                style={{
                  x: useSpring(useTransform(scrollY, [0, 500], [0, -300]), {
                    stiffness: 500,
                    damping: 20,
                  }),
                  y: useSpring(useTransform(scrollY, [0, 500], [0, 1200]), {
                    stiffness: 500,
                    damping: 20,
                  }),
                  opacity,
                  rotate: useSpring(useTransform(scrollY, [0, 500], [15, 45]), {
                    stiffness: 500,
                    damping: 20,
                  }),
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
                      src={twitterHeroImage}
                      className="size-full shadow-2xl rounded-[1rem]"
                      quality={10}
                      priority
                    />
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Mid-Left Upper */}
              <motion.div
                className="size-[5rem] absolute flex left-[10%] top-[50vh] sm:left-[20%] sm:top-[30vh]"
                style={{
                  x: useSpring(useTransform(scrollY, [0, 500], [0, 400]), {
                    stiffness: 500,
                    damping: 20,
                  }),
                  y: useSpring(useTransform(scrollY, [0, 500], [0, 1000]), {
                    stiffness: 500,
                    damping: 20,
                  }),
                  opacity,
                  rotate: useSpring(
                    useTransform(scrollY, [0, 500], [-20, -40]),
                    { stiffness: 500, damping: 20 }
                  ),
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
                      src={facebookHeroImage}
                      className="size-full shadow-2xl rounded-[1rem]"
                      quality={10}
                      priority
                    />
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Mid-Right Upper */}
              <motion.div
                className="size-[5rem] absolute flex right-[10%] top-[40vh] sm:right-[15rem] sm:top-[16rem]"
                style={{
                  x: useSpring(useTransform(scrollY, [0, 500], [0, -400]), {
                    stiffness: 500,
                    damping: 20,
                  }),
                  y: useSpring(useTransform(scrollY, [0, 500], [0, 1000]), {
                    stiffness: 500,
                    damping: 20,
                  }),
                  opacity,
                  rotate: useSpring(useTransform(scrollY, [0, 500], [20, 40]), {
                    stiffness: 500,
                    damping: 20,
                  }),
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
                      src={tiktokHeroImage}
                      className="size-full shadow-2xl rounded-[1rem]"
                      quality={10}
                      priority
                    />
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Mid-Left Lower */}
              <motion.div
                className="size-[5rem] absolute flex left-[5%] top-[65vh] sm:left-[5rem] sm:top-[24rem]"
                style={{
                  x: useSpring(useTransform(scrollY, [0, 500], [0, 400]), {
                    stiffness: 500,
                    damping: 20,
                  }),
                  y: useSpring(useTransform(scrollY, [0, 500], [0, 800]), {
                    stiffness: 500,
                    damping: 20,
                  }),
                  opacity,
                  rotate: useSpring(
                    useTransform(scrollY, [0, 500], [-30, -60]),
                    { stiffness: 500, damping: 20 }
                  ),
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
                      src={linkedinHeroImage}
                      className="size-full shadow-2xl rounded-[1rem]"
                      quality={10}
                      priority
                    />
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Mid-Right Lower */}
              <motion.div
                className="size-[5rem] absolute flex right-[5%] top-[70vh] sm:right-[5rem] sm:top-[40vh]"
                style={{
                  x: useSpring(useTransform(scrollY, [0, 500], [0, -400]), {
                    stiffness: 500,
                    damping: 20,
                  }),
                  y: useSpring(useTransform(scrollY, [0, 500], [0, 800]), {
                    stiffness: 500,
                    damping: 20,
                  }),
                  opacity,
                  rotate: useSpring(useTransform(scrollY, [0, 500], [30, 60]), {
                    stiffness: 500,
                    damping: 20,
                  }),
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
                      src={pinterestHeroImage}
                      className="size-full shadow-2xl rounded-[1rem]"
                      quality={10}
                      priority
                    />
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Bottom Left */}
              <motion.div
                className="size-[5rem] absolute hidden sm:flex left-[20rem] top-[55vh]"
                style={{
                  x: useSpring(useTransform(scrollY, [0, 500], [0, 300]), {
                    stiffness: 500,
                    damping: 20,
                  }),
                  y: useSpring(useTransform(scrollY, [0, 500], [0, 600]), {
                    stiffness: 500,
                    damping: 20,
                  }),
                  opacity,
                  rotate: useSpring(
                    useTransform(scrollY, [0, 500], [-25, -50]),
                    { stiffness: 500, damping: 20 }
                  ),
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
                      src={youtubeHeroImage}
                      className="size-full shadow-2xl rounded-[1rem]"
                      quality={10}
                      priority
                    />
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Bottom Right */}
              <motion.div
                className="size-[5rem] absolute hidden sm:flex right-[20rem] top-[60vh]"
                style={{
                  x: useSpring(useTransform(scrollY, [0, 500], [0, -300]), {
                    stiffness: 500,
                    damping: 20,
                  }),
                  y: useSpring(useTransform(scrollY, [0, 500], [0, 600]), {
                    stiffness: 500,
                    damping: 20,
                  }),
                  opacity,
                  rotate: useSpring(useTransform(scrollY, [0, 500], [25, 50]), {
                    stiffness: 500,
                    damping: 20,
                  }),
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
                      src={whatsappHeroImage}
                      className="size-full shadow-2xl rounded-[1rem]"
                      quality={10}
                      priority
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
          className={`section-container hero-container !justify-center ${className} !pt-[7rem] sm:!pt-[5rem] overflow-hidden z-[400]`}
        >
          <div className="relative flex flex-col items-center justify-between sm:my-auto h-auto w-full max-w-[80vw] sm:max-w-[100vw] gap-[2rem] z-[100] -translate-y-[20%] sm:translate-y-0">
            {/* Main Copy */}
            <Reveal delay={0} slide={false}>
              <div className="button !gap-[1.5rem] !bg-ash !border-goldenbrown">
                <div className="flex flex-row gap-[0.25rem]">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Image
                      key={index}
                      alt="start"
                      src={starImage}
                      className="w-[1rem]"
                      quality={10}
                    />
                  ))}
                </div>
                <p className="pn-regular-16 text-white">500+ Agents Trust Us</p>
              </div>
            </Reveal>
            <div className="relative flex flex-col items-center justify-center my-auto">
              <div className="rounded-[5rem] blur-lg animate-pulse absolute top-0 size-[120%] bg-white/80 -z-10 pointer-events-none" />
              <h1 className="hidden pn-regular-96 uppercase text-center max-w-[20ch] my-[0.625rem] sm:flex flex-col items-center">
                <Reveal delay={0} slide={false}>
                  <span>Showcase</span>
                </Reveal>{" "}
                <Reveal delay={0.05} slide={false}>
                  <span>
                    <GradientText>Excellence</GradientText> in Real
                  </span>
                </Reveal>{" "}
                <Reveal delay={0.1} slide={false}>
                  <span>Estate Marketing</span>
                </Reveal>
              </h1>

              <h1 className="sm:hidden pn-regular-96 uppercase text-center my-[0.625rem] flex flex-col items-center">
                <Reveal delay={0} slide={false}>
                  <span>Showcase</span>
                </Reveal>{" "}
                <Reveal delay={0.05} slide={false}>
                  <span>
                    <GradientText>Excellence</GradientText> in
                  </span>
                </Reveal>{" "}
                <Reveal delay={0.1} slide={false}>
                  <span>Real Estate</span>
                </Reveal>
                <Reveal delay={0.15} slide={false}>
                  <span>Marketing</span>
                </Reveal>
              </h1>

              <h2 className="pn-regular-16 text-center !font-bold max-w-[60ch]">
                <Reveal delay={0.15} slide={false}>
                  <span>
                    Our premium listing media services deliver tailored social
                    media strategies, high-impact visuals, and expert content
                    creation—designed to attract quality leads, boost
                    engagement, and close deals faster.
                  </span>
                </Reveal>
              </h2>
            </div>
            {/* Hero CTA */}
            <Reveal
              once
              ref={heroCTARef}
              delay={revealDelay}
              xOverflow={false}
              yOverflow={false}
              slide={false}
              className="z-[999]"
            >
              <div className="flex h-[3.313rem] my-[0.625rem]">
                <div className="flex flex-col sm:flex-row gap-[1rem]">
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
                    <HoverWrapper className="flex w-full items-center">
                      <Link
                        href="https://listings.virtualxposure.com/order-forms/018e5ff1-0bc6-707e-9947-bc385f21a938"
                        className="flex w-full items-center px-[1.5rem] py-[0.5rem]"
                        passHref
                      >
                        <FlipLink className={`flex items-center w-full`}>
                          Get In Touch
                        </FlipLink>

                        <Image
                          alt="arrow"
                          src={arrowRedirect}
                          className="text-ash group-hover:rotate-45 transition-all duration-300"
                          quality={10}
                        />
                      </Link>
                    </HoverWrapper>
                  </motion.div>
                </div>
              </div>
            </Reveal>
            {/* </div> */}
          </div>
        </div>
      </div>
    );
  }
);

HeroSection.displayName = "HeroSection";

export default HeroSection;