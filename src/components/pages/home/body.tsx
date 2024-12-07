"use client";
import React, {
  useEffect,
  useRef,
  // useRef,
  useState,
} from "react";
import HeroSection from "@/components/pages/home/sections/heroSection";
import { SMMANavdockLinks } from "@/data/navLinks";
import ChatWidget from "@/components/ui/chatWidget";
import ListingMediaSection from "@/components/pages/home/sections/listingMediaSection";
import SocialMediaManagementSection from "@/components/pages/home/sections/socialmediamanagementSection";
import ScrollingBanner from "@/components/animations/ScrollingBanner";
// import { Volume2, VolumeX } from "lucide-react";
import Link from "next/link";
import { useViewport } from "@/contexts/ViewportContext";

const TRANSITION_TIMING = "0.6s";
const TRANSITION_EASING = "cubic-bezier(0.4, 0, 0.2, 1)"; // Smooth easing
const HINT_TIMING = "0.3s";
const BASE_TRANSITION = `all ${TRANSITION_TIMING} ${TRANSITION_EASING}`;
const HINT_TRANSITION = `transform ${HINT_TIMING} ${TRANSITION_EASING}`;

const Body = () => {
  const [isLeftHovered, setIsLeftHovered] = useState(false);
  const [isRightHovered, setIsRightHovered] = useState(false);
  const [isHeroHovered, setIsHeroHovered] = useState(false);
  const [showLeftHint, setShowLeftHint] = useState(false);
  const [showRightHint, setShowRightHint] = useState(false);
  const { isMobile } = useViewport();
  // Refs to store timeouts and intervals
  const hintIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const initialDelayRef = useRef<NodeJS.Timeout | null>(null);

  // Clear all animations and timers
  const clearAllAnimations = () => {
    if (hintIntervalRef.current) {
      clearInterval(hintIntervalRef.current);
      hintIntervalRef.current = null;
    }
    if (initialDelayRef.current) {
      clearTimeout(initialDelayRef.current);
      initialDelayRef.current = null;
    }
    setShowLeftHint(false);
    setShowRightHint(false);
  };

  // Start hint animation sequence
  const startHintSequence = () => {
    // Clear any existing animations first
    clearAllAnimations();

    // Only start new sequence if panels aren't hovered
    if (!isLeftHovered && !isRightHovered) {
      initialDelayRef.current = setTimeout(() => {
        const runHintSequence = () => {
          setShowLeftHint(true);

          setTimeout(() => {
            setShowLeftHint(false);

            setTimeout(() => {
              setShowRightHint(true);

              setTimeout(() => {
                setShowRightHint(false);
              }, 1000); // Right hint duration
            }, 500); // Delay between hints
          }, 1000); // Left hint duration
        };

        // Run initial sequence
        runHintSequence();

        // Set up interval for repeated sequences
        hintIntervalRef.current = setInterval(runHintSequence, 16000);
      }, 2000); // Initial delay
    }
  };

  // Effect to manage hint animations
  useEffect(() => {
    if (isLeftHovered || isRightHovered) {
      clearAllAnimations();
    } else {
      startHintSequence();
    }

    // Cleanup on unmount or when dependencies change
    return () => clearAllAnimations();
  }, [isLeftHovered, isRightHovered]);

  const handleHeroEnter = () => {
    setIsHeroHovered(true);
    setIsLeftHovered(false);
    setIsRightHovered(false);
  };

  const handleHeroLeave = () => {
    setIsHeroHovered(false);
  };

  const leftContent = (
    <div className="section-container flex-col !items-end justify-start !pr-0 !w-auto h-full overflow-hidden bg-goldenbrown">
      {/* Video Background Container */}
      <div className="pointer-events-none absolute inset-0">
        {/* Video Element */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-75"
          style={{
            zIndex: 0,
          }}
        >
          <source
            src="/assets/videos/virtual-3d-tours.webm"
            type="video/webm"
          />
        </video>

        {/* Gradient Overlay */}
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent to-goldenbrown to-80%"
          style={{
            zIndex: 1,
            // mixBlendMode: "multiply",
          }}
        />
      </div>
      {/* Gradient */}
      {/* <div
        style={{
          opacity: `${isLeftHovered ? "50%" : "100%"}`,
          transition: "all 0.6s ease-in-out",
        }}
        className="absolute left-0 top-0 flex flex-col w-full h-[50vh] origin-top-left bg-gradient-to-t from-transparent to-white to-75% pointer-events-none z-20"
      /> */}
      <ScrollingBanner
        baseVelocity={-20000}
        vertical
        className="bg-goldenbrown z-10"
      >
        <h2 className="pn-regular-32 uppercase text-white">
          Listing Media Management
        </h2>
      </ScrollingBanner>
    </div>
  );

  const rightContent = (
    <div className="section-container flex-col !items-start justify-start !pl-0 !w-auto h-full overflow-hidden bg-ash">
      {/* Video Background Container */}
      {/* <VideoBackground className="ml-[7.5rem]" /> */}
      <div className="pointer-events-none inset-0">
        {/* Video Element */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-75 ml-[5rem]"
          style={{
            zIndex: 0,
          }}
        >
          <source src="/assets/videos/blake-vx.webm" type="video/webm" />
        </video>

        {/* Gradient Overlay */}
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-l from-transparent to-ash to-80%"
          style={{
            zIndex: 1,
            // mixBlendMode: "multiply",
          }}
        />
      </div>
      {/* Gradient */}
      {/* <div
        style={{
          opacity: `${isRightHovered ? "50%" : "100%"}`,
          transition: "all 0.6s ease-in-out",
        }}
        className="absolute left-0 top-0 flex flex-col w-full h-[50vh] origin-top-left bg-gradient-to-t from-transparent to-white to-75% pointer-events-none z-20"
      /> */}
      <ScrollingBanner
        baseVelocity={20000}
        vertical
        className="bg-ash z-10"
      >
        <h2 className="pn-regular-32 uppercase text-white">
          Social Media Management
        </h2>
      </ScrollingBanner>
    </div>
  );

  return (
    <>
      <ChatWidget />
      <div className="relative flex flex-row min-h-screen overflow-hidden bg-ash">
        {/* Left section */}
        {!isMobile && (
          <Link
            href="/services/listing-media"
            data-follower-text="Explore"
            className={`bg-ash cursor-text-hover`}
            style={{
              width: "30vw",
              transform: `translateX(${
                isLeftHovered
                  ? "0%"
                  : isRightHovered
                  ? "-100%"
                  : showLeftHint
                  ? "-90%"
                  : "-95%"
              })`,
              opacity: `${isLeftHovered ? "100%" : "50%"}`,
              transition: showLeftHint ? HINT_TRANSITION : BASE_TRANSITION,
              position: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              zIndex: 10,
            }}
          >
            <ListingMediaSection
              content={leftContent}
              onMouseEnter={() => setIsLeftHovered(true)}
              className="h-full cursor-text-hover !bg-transparent"
              style={
                {
                  "--section-width": "100%",
                } as React.CSSProperties
              }
            />
          </Link>
        )}

        {/* Center section */}
        <div
          className="relative w-full z-5 overflow-hidden"
          style={{
            transform: `translateX(${
              isLeftHovered ? "30vw" : isRightHovered ? "-30vw" : "0"
            })`,
            backgroundColor: isLeftHovered
              ? "var(--goldenbrown)"
              : isRightHovered
              ? "var(--ash)"
              : "white",
            transition: BASE_TRANSITION,
          }}
          onMouseEnter={handleHeroEnter}
          onMouseLeave={handleHeroLeave}
        >
          <div
            className="overflow-hidden transition-all"
            style={{
              opacity: isLeftHovered || isRightHovered ? 0.6 : 1,
              scale: isLeftHovered || isRightHovered ? 0.9999 : 1,
              borderBottomLeftRadius:
                isLeftHovered || isRightHovered ? "1rem" : 0,
              borderBottomRightRadius:
                isLeftHovered || isRightHovered ? "1rem" : 0,
              transition: BASE_TRANSITION,
            }}
          >
            <HeroSection
              originalColor="#EFE6CF"
              transitionColor="#FFFFFF"
              className="min-h-screen"
              navigation={SMMANavdockLinks}
            />
          </div>
        </div>

        {/* Right section */}
        {!isMobile && (
          <Link
            href="/services/social-media-management"
            data-follower-text="Explore"
            className="bg-ash cursor-text-hover"
            style={{
              width: "30vw",
              transform: `translateX(${
                isRightHovered
                  ? "0%"
                  : isLeftHovered
                  ? "100%"
                  : showRightHint
                  ? "90%"
                  : "95%"
              })`,
              opacity: `${isRightHovered ? "100%" : "50%"}`,
              transition: showRightHint ? HINT_TRANSITION : BASE_TRANSITION,
              position: "absolute",
              right: 0,
              top: 0,
              bottom: 0,
              zIndex: 10,
            }}
          >
            <SocialMediaManagementSection
              content={rightContent}
              onMouseEnter={() => setIsRightHovered(true)}
              className="h-full !bg-transparent"
              style={
                {
                  "--section-width": "100%",
                } as React.CSSProperties
              }
            />
          </Link>
        )}
      </div>
    </>
  );
};

export default Body;
