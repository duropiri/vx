"use client";
import React, {
  useEffect,
  // useRef,
  useState,
} from "react";
import HeroSection from "@/components/pages/home/sections/heroSection";
import { NavdockLinks } from "@/data/navLinks";
import ChatWidget from "@/components/ui/chatWidget";
import ListingMediaSection from "@/components/pages/home/sections/listingMediaSection";
import SocialMediaManagementSection from "@/components/pages/home/sections/socialmediamanagementSection";
import ScrollingBanner from "@/components/animations/ScrollingBanner";
// import { Volume2, VolumeX } from "lucide-react";
import Link from "next/link";

const TRANSITION_TIMING = "0.6s";
const TRANSITION_EASING = "cubic-bezier(0.4, 0, 0.2, 1)"; // Smooth easing
const HINT_TIMING = "0.3s";
const BASE_TRANSITION = `all ${TRANSITION_TIMING} ${TRANSITION_EASING}`;
const HINT_TRANSITION = `transform ${HINT_TIMING} ${TRANSITION_EASING}`;

// const VideoBackground = ({ className = "" }) => {
//   const videoRef = useRef<HTMLVideoElement>(null);

//   const handleMouseEnter = () => {
//     if (videoRef.current) {
//       // Restart the video
//       videoRef.current.currentTime = 0;
//       videoRef.current.play();

//       // Unmute and fade in audio
//       videoRef.current.muted = false;
//       videoRef.current.volume = 0;
//       const fadeAudio = setInterval(() => {
//         if (videoRef.current && videoRef.current.volume < 1) {
//           videoRef.current.volume = Math.min(videoRef.current.volume + 0.1, 1);
//         } else {
//           clearInterval(fadeAudio);
//         }
//       }, 50);
//     }
//   };

//   const handleMouseLeave = () => {
//     if (videoRef.current) {
//       // Fade out audio before muting
//       const fadeAudio = setInterval(() => {
//         if (videoRef.current && videoRef.current.volume > 0) {
//           videoRef.current.volume = Math.max(videoRef.current.volume - 0.1, 0);
//         } else {
//           if (videoRef.current) videoRef.current.muted = true;
//           clearInterval(fadeAudio);
//         }
//       }, 50);
//     }
//   };

//   return (
//     <div
//       className="absolute inset-0"
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//     >
//       {/* Video Element */}
//       <video
//         ref={videoRef}
//         autoPlay
//         loop
//         muted
//         playsInline
//         className={`absolute inset-0 w-full h-full object-cover opacity-75 ${className}`}
//         style={{
//           zIndex: 0,
//         }}
//       >
//         <source src="/videos/blake-vx.mp4" type="video/mp4" />
//       </video>

//       {/* Gradient Overlay */}
//       <div
//         className="absolute inset-0 bg-gradient-to-l from-transparent to-ash to-80%"
//         style={{
//           zIndex: 1,
//         }}
//       />
//     </div>
//   );
// };

const Body = () => {
  const [isLeftHovered, setIsLeftHovered] = useState(false);
  const [isRightHovered, setIsRightHovered] = useState(false);
  const [isHeroHovered, setIsHeroHovered] = useState(false);
  const [showLeftHint, setShowLeftHint] = useState(false);
  const [showRightHint, setShowRightHint] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // Standard mobile breakpoint
    };

    // Initial check
    checkMobile();

    // Add listener for window resize
    window.addEventListener("resize", checkMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Hint animation timer
  useEffect(() => {
    // Don't show hints if panels are hovered
    if (isLeftHovered || isRightHovered) return;

    // Initial delay before starting hints
    const initialDelay = setTimeout(() => {
      const interval = setInterval(() => {
        // Alternate between left and right hints
        setShowLeftHint(true);

        setTimeout(() => {
          setShowLeftHint(false);

          setTimeout(() => {
            setShowRightHint(true);

            setTimeout(() => {
              setShowRightHint(false);
            }, 1000); // Duration of right hint
          }, 500); // Delay between left and right
        }, 1000); // Duration of left hint
      }, 16000); // Time between hint cycles

      return () => clearInterval(interval);
    }, 2000); // Initial delay

    return () => clearTimeout(initialDelay);
  }, [isHeroHovered, isLeftHovered, isRightHovered]);

  const handleHeroEnter = () => {
    setIsHeroHovered(true);
    setIsLeftHovered(false);
    setIsRightHovered(false);
  };

  const handleHeroLeave = () => {
    setIsHeroHovered(false);
  };

  const leftContent = (
    <div className="relative section-container flex-col !items-end justify-start !pr-0 !w-auto h-full overflow-hidden bg-goldenbrown">
      {/* Video Background Container */}
      <div className="absolute inset-0">
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
          <source src="/videos/virtual-3d-tours.mp4" type="video/mp4" />
        </video>

        {/* Gradient Overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-transparent to-goldenbrown to-80%"
          style={{
            zIndex: 1,
            // mixBlendMode: "multiply",
          }}
        />
      </div>
      {/* Gradient */}
      <div
        style={{
          opacity: `${isLeftHovered ? "0%" : "100%"}`,
          transition: "all 0.6s ease-in-out",
        }}
        className="absolute left-0 top-0 flex flex-col w-full h-[50vh] origin-top-left bg-gradient-to-t from-transparent to-white to-75% pointer-events-none z-20"
      />
      <ScrollingBanner
        vertical
        baseVelocity={10000}
        className="bg-goldenbrown z-10"
      >
        <h2 className="pn-regular-96 uppercase text-ash">Listing Media</h2>
      </ScrollingBanner>
    </div>
  );

  const rightContent = (
    <div className="section-container flex-col !items-start justify-start !pl-0 !w-auto h-full overflow-hidden bg-ash">
      {/* Video Background Container */}
      {/* <VideoBackground className="ml-[7.5rem]" /> */}
      <div className="absolute inset-0">
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
          <source src="/videos/blake-vx.mp4" type="video/mp4" />
        </video>

        {/* Gradient Overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-l from-transparent to-ash to-80%"
          style={{
            zIndex: 1,
            // mixBlendMode: "multiply",
          }}
        />
      </div>
      {/* Gradient */}
      <div
        style={{
          opacity: `${isRightHovered ? "0%" : "100%"}`,
          transition: "all 0.6s ease-in-out",
        }}
        className="absolute left-0 top-0 flex flex-col w-full h-[50vh] origin-top-left bg-gradient-to-t from-transparent to-white to-75% pointer-events-none rounded-t-[1.875rem] z-20"
      />
      <ScrollingBanner vertical baseVelocity={10000} className="bg-ash z-10">
        <h2 className="pn-regular-96 uppercase text-goldenbrown">
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
                  ? isMobile
                    ? "-60%"
                    : "-80%"
                  : isMobile
                  ? "-70%"
                  : "-86%"
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
          className="relative w-full z-5 overflow-hidden bg-ash"
          style={{
            transform: `translateX(${
              isLeftHovered ? "30vw" : isRightHovered ? "-30vw" : "0"
            })`,
            transition: BASE_TRANSITION,
          }}
          onMouseEnter={handleHeroEnter}
          onMouseLeave={handleHeroLeave}
        >
          <div
            className="overflow-hidden transition-all"
            style={{
              opacity: isLeftHovered || isRightHovered ? 0.2 : 1,
              transition: BASE_TRANSITION,
            }}
          >
            <HeroSection
              originalColor="#EFE6CF"
              transitionColor="#FFFFFF"
              className="min-h-screen"
              navigation={NavdockLinks}
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
                  ? isMobile
                    ? "60%"
                    : "80%"
                  : isMobile
                  ? "70%"
                  : "86%"
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
