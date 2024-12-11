import React, { forwardRef, RefObject, useEffect, useRef } from "react";
import Image from "next/image";

import { gsap, ScrollTrigger } from "@/utils/gsap";
gsap.registerPlugin(ScrollTrigger);

// Import all the SVG assets
import instagramHeroImage from "@/../../public/assets/svgs/hero-svgs/Instagram.svg";
import twitterHeroImage from "@/../../public/assets/svgs/hero-svgs/Twitter.svg";
import facebookHeroImage from "@/../../public/assets/svgs/hero-svgs/Facebook.svg";
import tiktokHeroImage from "@/../../public/assets/svgs/hero-svgs/TikTok.svg";
import linkedinHeroImage from "@/../../public/assets/svgs/hero-svgs/LinkedIn.svg";
import pinterestHeroImage from "@/../../public/assets/svgs/hero-svgs/Pinterest.svg";
import youtubeHeroImage from "@/../../public/assets/svgs/hero-svgs/Youtube.svg";
import whatsappHeroImage from "@/../../public/assets/svgs/hero-svgs/WhatsApp.svg";

// Interface for social media icon positioning
interface SocialMediaIcon {
  id: string;
  className: string;
  src: string;
  scrollAnimation: {
    x: [number, number];
    y: [number, number];
    rotate: [number, number];
  };
  floatingDelay?: number;
  initialRotation?: number; // Add this property
}

// Social media icons configuration
const socialMediaIcons: SocialMediaIcon[] = [
  {
    id: "instagram",
    className:
      "size-[5rem] absolute flex left-[20%] top-[20vh] sm:left-[30%] sm:top-[8rem]",
    src: instagramHeroImage,
    scrollAnimation: {
      x: [0, 300],
      y: [0, 1200],
      rotate: [-15, -45],
    },
    initialRotation: -15, // Add initial rotation
  },
  {
    id: "twitter",
    className:
      "size-[5rem] absolute flex right-[10%] top-[10vh] sm:right-[30%] sm:top-[10vh]",
    src: twitterHeroImage,
    scrollAnimation: {
      x: [0, -300],
      y: [0, 1200],
      rotate: [15, 45],
    },
    initialRotation: 15,
    floatingDelay: 0.5,
  },
  {
    id: "facebook",
    className:
      "size-[5rem] absolute flex left-[10%] top-[50vh] sm:left-[20%] sm:top-[30vh]",
    src: facebookHeroImage,
    scrollAnimation: {
      x: [0, 400],
      y: [0, 1000],
      rotate: [-20, -40],
    },
    initialRotation: -20,
    floatingDelay: 1.0,
  },
  {
    id: "tiktok",
    className:
      "size-[5rem] absolute flex right-[10%] top-[40vh] sm:right-[15rem] sm:top-[16rem]",
    src: tiktokHeroImage,
    scrollAnimation: {
      x: [0, -400],
      y: [0, 1000],
      rotate: [20, 40],
    },
    initialRotation: 20,
    floatingDelay: 1.5,
  },
  {
    id: "linkedin",
    className:
      "size-[5rem] absolute flex left-[5%] top-[65vh] sm:left-[5rem] sm:top-[24rem]",
    src: linkedinHeroImage,
    scrollAnimation: {
      x: [0, 400],
      y: [0, 800],
      rotate: [-30, -60],
    },
    initialRotation: -30,
    floatingDelay: 2.0,
  },
  {
    id: "pinterest",
    className:
      "size-[5rem] absolute flex right-[5%] top-[70vh] sm:right-[5rem] sm:top-[40vh]",
    src: pinterestHeroImage,
    scrollAnimation: {
      x: [0, -400],
      y: [0, 800],
      rotate: [30, 60],
    },
    initialRotation: 30,
    floatingDelay: 2.5,
  },
  {
    id: "youtube",
    className: "size-[5rem] absolute hidden sm:flex left-[20rem] top-[55vh]",
    src: youtubeHeroImage,
    scrollAnimation: {
      x: [0, 300],
      y: [0, 600],
      rotate: [-25, -50],
    },
    initialRotation: -25,
    floatingDelay: 3.0,
  },
  {
    id: "whatsapp",
    className: "size-[5rem] absolute hidden sm:flex right-[20rem] top-[60vh]",
    src: whatsappHeroImage,
    scrollAnimation: {
      x: [0, -300],
      y: [0, 600],
      rotate: [25, 50],
    },
    initialRotation: 25,
    floatingDelay: 3.5,
  },
];

// Component for a single social media icon
const SocialMediaIconComponent: React.FC<{ icon: SocialMediaIcon }> = ({
  icon,
}) => {
  const iconRef = React.useRef<HTMLDivElement>(null);
  const innerRef = React.useRef<HTMLDivElement>(null);
  const rotateRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!iconRef.current || !innerRef.current || !rotateRef.current) return;

    // Set initial rotation
    gsap.set(iconRef.current, {
      rotation: icon.initialRotation || 0,
    });

    // Create the floating animation
    gsap.to(innerRef.current, {
      y: -15,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      delay: icon.floatingDelay || 0,
    });

    // Create the rotation animation
    gsap.to(rotateRef.current, {
      rotation: 6,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    // Create scroll-based animations
    const scrollTween = gsap.timeline({
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "500 top",
        scrub: true,
      },
    });

    // Add animations to the timeline
    scrollTween.to(iconRef.current, {
      x: icon.scrollAnimation.x[1],
      y: icon.scrollAnimation.y[1],
      rotation: icon.scrollAnimation.rotate[1],
      opacity: 0,
      ease: "none",
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [icon]);

  return (
    <div ref={iconRef} className={icon.className}>
      <div ref={innerRef} className="size-full">
        <div ref={rotateRef} className="size-full rounded-[1rem] shadow-inner">
          <Image
            alt="social media icon"
            src={icon.src}
            className="size-full shadow-2xl rounded-[1rem]"
            quality={75}
            priority
          />
        </div>
      </div>
    </div>
  );
};

// Icons container component
const IconsContainer: React.FC<SectionProps> = ({ className = "" }) => {
  useEffect(() => {
    return () => {
      // Clean up all ScrollTrigger instances
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className={`${className} relative z-10`}>
      {socialMediaIcons.map((icon) => (
        <SocialMediaIconComponent key={icon.id} icon={icon} />
      ))}
    </div>
  );
};

interface LinkDetails {
  title: string;
  href: string;
  src?: string;
}

interface SectionProps {
  className?: string;
  iconsClassName?: string;
  full?: boolean;
  navigation?: LinkDetails[];
  originalColor?: string | undefined;
  transitionColor?: string;
  ref?: RefObject<HTMLDivElement>;
}

const HeroDecorations = forwardRef<HTMLDivElement, SectionProps>(
  ({ originalColor, className = "", iconsClassName = "" }, ref) => {
    // Animate light rays
    const raysRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
      const rays = raysRef.current?.querySelectorAll(".light-ray");
      rays?.forEach((ray, index) => {
        const baseRotation = parseInt(ray.getAttribute("data-rotation") || "0");
        gsap.to(ray, {
          rotation: `${baseRotation + (index % 2 ? 5 : -5)}`,
          duration: 5 + index,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        });
      });

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }, []);

    return (
      <div
        id="icons"
        className={`${className} pointer-events-none absolute !bg-transparent h-[100vh] w-full max-w-[100vw] !p-0 overflow-hidden`}
      >
        {/* Light Rays */}
        <div
          ref={raysRef}
          className="pointer-events-none absolute inset-0 w-full h-full overflow-hidden"
        >
          <div
            className="pointer-events-none absolute flex h-[100vh] w-full max-w-[100vw] bg-gradient-to-t from-10% to-transparent to-30% transition-all z-30"
            style={
              {
                "--tw-gradient-from": `${originalColor} var(--tw-gradient-from-position)`,
                "--tw-gradient-to":
                  "rgb(255 255 255 / 0) var(--tw-gradient-to-position)",
                "--tw-gradient-stops":
                  "var(--tw-gradient-from), var(--tw-gradient-to)",
              } as React.CSSProperties
            }
          />
          {/* Light Rays */}
          {[
            { left: "15%", rotation: -25 },
            { left: "30%", rotation: -15 },
            { left: "45%", rotation: 0 },
            { left: "55%", rotation: 15 },
            { left: "75%", rotation: 25 },
          ].map((ray, index) => (
            <div
              key={index}
              className="light-ray absolute -bottom-[10rem] h-[120vh] w-[10rem] origin-bottom bg-gradient-to-t to-transparent animate-pulse"
              style={
                {
                  left: ray.left,
                  "--tw-gradient-from": `${originalColor} var(--tw-gradient-from-position)`,
                  "--tw-gradient-to":
                    "rgb(255 255 255 / 0) var(--tw-gradient-to-position)",
                  "--tw-gradient-stops":
                    "var(--tw-gradient-from), var(--tw-gradient-to)",
                  transform: `rotate(${ray.rotation}deg)`,
                } as React.CSSProperties
              }
              data-rotation={ray.rotation}
            />
          ))}
        </div>

        {/* Icons */}
        <IconsContainer className={iconsClassName} />
      </div>
    );
  }
);

export default HeroDecorations;
