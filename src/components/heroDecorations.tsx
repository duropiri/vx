import React, { forwardRef, RefObject, useEffect, useRef, useMemo } from "react";
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
import { useViewport } from "@/contexts/ViewportContext";
import { useGSAP } from "@/hooks/useGSAP";

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
      "size-[5rem] absolute flex right-[10%] top-[10vh] sm:right-[30%] sm:top-[6rem]",
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
      "size-[5rem] absolute flex left-[10%] top-[50vh] sm:left-[20%] sm:top-[17rem]",
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
      "size-[5rem] absolute flex right-[5%] top-[70vh] sm:right-[5rem] sm:top-[22rem]",
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
    className: "size-[5rem] absolute hidden sm:flex left-[20rem] top-[28rem]",
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
    className: "size-[5rem] absolute hidden sm:flex right-[20rem] top-[32rem]",
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
const SocialMediaIconComponent: React.FC<{ icon: SocialMediaIcon }> = ({ icon }) => {
  const iconRef = useRef<HTMLDivElement>(null);
  const { isMobile } = useViewport();
  
  // Memoize animation configs
  const { floatingConfig, rotationConfig, scrollConfig } = useMemo(() => ({
    floatingConfig: {
      y: -15,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      delay: icon.floatingDelay || 0,
    },
    rotationConfig: {
      rotation: 6,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    },
    scrollConfig: {
      x: icon.scrollAnimation.x[1] * (isMobile ? 0.25 : 1),
      y: icon.scrollAnimation.y[1],
      rotation: icon.scrollAnimation.rotate[1],
      opacity: 0,
      ease: "none",
    }
  }), [icon, isMobile]);

  useGSAP(() => {
    if (!iconRef.current) return;

    // Set initial rotation
    gsap.set(iconRef.current, { rotation: icon.initialRotation || 0 });

    // Create animations
    const ctx = gsap.context(() => {
      gsap.to(iconRef.current!.querySelector('.inner'), floatingConfig);
      gsap.to(iconRef.current!.querySelector('.rotator'), rotationConfig);
      
      const scrollTween = gsap.timeline({
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "500 top",
          scrub: 0.5,
        },
      });
      
      scrollTween.to(iconRef.current, scrollConfig);
    }, iconRef);

    return () => ctx.revert();
  }, [floatingConfig, rotationConfig, scrollConfig]);

  return (
    <div ref={iconRef} className={icon.className}>
      <div className="inner">
        <div className="rotator">
          <Image src={icon.src} alt={icon.id + " logo"} width={80} height={80} />
        </div>
      </div>
    </div>
  );
};

// Icons container component
const IconsContainer: React.FC<SectionProps> = ({ className = "" }) => {
  const { windowWidth } = useViewport();
  useEffect(() => {
    return () => {
      // Clean up all ScrollTrigger instances
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [windowWidth]);

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
    const { windowWidth } = useViewport();
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
    }, [windowWidth]);

    return (
      <div
        ref={ref}
        id="icons"
        className={`${className} pointer-events-none absolute !bg-transparent h-full w-full max-w-[100vw] !p-0 overflow-hidden`}
      >
        {/* Gradient */}
        <div
          ref={raysRef}
          className="pointer-events-none absolute inset-0 w-full h-full overflow-hidden"
        >
          <div
            className="pointer-events-none flex size-full max-w-[100vw] bg-gradient-to-t from-0% to-transparent transition-all z-30"
            style={
              {
                "--tw-gradient-from": `${originalColor} var(--tw-gradient-from-position)`,
                "--tw-gradient-to": "rgb(255 255 255 / 0) var(--tw-gradient-to-position)",
                "--tw-gradient-stops": "var(--tw-gradient-from), var(--tw-gradient-to)",
                "--tw-gradient-to-position": "10%",
              } as React.CSSProperties
            }
          />
          {/* Light Rays */}
          {/* {[
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
          ))} */}
        </div>

        {/* Icons */}
        <IconsContainer className={iconsClassName} />
      </div>
    );
  }
);

// Add display name
HeroDecorations.displayName = 'HeroDecorations';

export default HeroDecorations;
