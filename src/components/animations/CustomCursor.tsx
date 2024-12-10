import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { usePathname } from "next/navigation";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const innerDotRef = useRef<HTMLDivElement | null>(null);
  const followerTextRef = useRef<HTMLSpanElement | null>(null);
  const [isClosed, setIsClosed] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    if (!cursorRef.current || !innerDotRef.current || !followerTextRef.current)
      return;

    // Initialize cursor hidden and centered
    gsap.set(cursorRef.current, { xPercent: -50, yPercent: -45 });
    gsap.set(innerDotRef.current, { xPercent: -50, yPercent: 1 });

    // Smoothly follow the mouse
    const xTo = gsap.quickTo(cursorRef.current, "x", {
      duration: 0.25,
      ease: "power3.out",
    });
    const yTo = gsap.quickTo(cursorRef.current, "y", {
      duration: 0.25,
      ease: "power3.out",
    });

    const moveCursor = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
      gsap.set(innerDotRef.current, { x: e.clientX, y: e.clientY });
    };

    const handleMouseLeave = () => {
      gsap.to(cursorRef.current, { autoAlpha: 0 });
      gsap.to(innerDotRef.current, { autoAlpha: 0 });
    };

    const handleMouseEnter = () => {
      gsap.to(cursorRef.current, { autoAlpha: 1 });
      gsap.to(innerDotRef.current, { autoAlpha: 1 });
    };

    const handleSelectHover = (e: MouseEvent) => {
      const target = e.currentTarget as HTMLElement;
      const scale = target.getAttribute("data-scale") || "0.4";
      if (followerTextRef.current) {
        followerTextRef.current.innerHTML = "";
      }
      gsap.to(cursorRef.current, {
        scale: parseFloat(scale),
        backgroundColor: "white",
        ease: "power3.out",
        autoAlpha: 1,
        duration: 0.4,
        overwrite: "auto",
      });
    };

    const handleTextHover = (e: MouseEvent) => {
      const target = e.currentTarget as HTMLElement;
      const text = target.getAttribute("data-follower-text") || "Explore";
      const scale = target.getAttribute("data-scale") || "1.7";
      if (followerTextRef.current) {
        followerTextRef.current.innerHTML = text;
      }
      gsap.to(cursorRef.current, {
        scale: parseFloat(scale),
        backgroundColor: "white",
        ease: "power3.out",
        autoAlpha: 1,
        duration: 0.4,
        overwrite: "auto",
      });
      gsap.to(innerDotRef.current, {
        ease: "power3.out",
        autoAlpha: 0,
        duration: 0.4,
        overwrite: "auto",
      });
    };

    const handleNoneHover = (e: MouseEvent) => {
      const target = e.currentTarget as HTMLElement;
      const scale = target.getAttribute("data-scale") || "0";
      gsap.to(cursorRef.current, {
        scale: parseFloat(scale),
        backgroundColor: "white",
        ease: "power3.out",
        autoAlpha: 0,
        duration: 0.4,
        overwrite: "auto",
      });
      gsap.to(innerDotRef.current, {
        ease: "power3.out",
        autoAlpha: 0,
        duration: 0.4,
        overwrite: "auto",
      });
    };

    const handleViewHover = (e: MouseEvent) => {
      const target = e.currentTarget as HTMLElement;
      const text = target.getAttribute("data-follower-text") || "View";
      const scale = target.getAttribute("data-scale") || "1.7";
      if (followerTextRef.current) {
        followerTextRef.current.innerHTML = text;
      }
      gsap.to(cursorRef.current, {
        scale: parseFloat(scale),
        backgroundColor: "white",
        ease: "power3.out",
        autoAlpha: 1,
        duration: 0.4,
        overwrite: "auto",
      });
      gsap.to(innerDotRef.current, {
        ease: "power3.out",
        autoAlpha: 0,
        duration: 0.4,
        overwrite: "auto",
      });
    };

    const handleDragHover = (e: MouseEvent) => {
      const target = e.currentTarget as HTMLElement;
      const text = target.getAttribute("data-follower-text") || "Drag";
      const scale = target.getAttribute("data-scale") || "1.7";
      if (followerTextRef.current) {
        followerTextRef.current.innerHTML = text;
      }
      gsap.to(cursorRef.current, {
        scale: parseFloat(scale),
        backgroundColor: "white",
        ease: "power3.out",
        autoAlpha: 1,
        duration: 0.4,
        overwrite: "auto",
      });
      gsap.to(innerDotRef.current, {
        ease: "power3.out",
        autoAlpha: 0,
        duration: 0.4,
        overwrite: "auto",
      });
    };

    const handlePlayHover = (e: MouseEvent) => {
      const target = e.currentTarget as HTMLElement;
      const text = isClosed ? "Close" : "Play";
      const scale = target.getAttribute("data-scale") || "1.7";
      if (followerTextRef.current) {
        followerTextRef.current.innerHTML = text;
      }
      gsap.to(cursorRef.current, {
        scale: parseFloat(scale),
        backgroundColor: "white",
        ease: "power3.out",
        autoAlpha: 1,
        duration: 0.4,
        overwrite: "auto",
      });
      gsap.to(innerDotRef.current, {
        ease: "power3.out",
        autoAlpha: 0,
        duration: 0.4,
        overwrite: "auto",
      });
    };

    const handleMouseLeaveReset = () => {
      if (followerTextRef.current) {
        followerTextRef.current.innerHTML = "";
      }
      gsap.to(cursorRef.current, {
        scale: 1,
        backgroundColor: "transparent",
        ease: "power3.out",
        autoAlpha: 1,
        duration: 0.4,
        overwrite: "auto",
      });
      gsap.to(innerDotRef.current, {
        ease: "power3.out",
        autoAlpha: 1,
        duration: 0.4,
        overwrite: "auto",
      });
    };

    const handlePlayClick = () => {
      setIsClosed(!isClosed);
    };

    // Setup event listeners
    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mouseenter", handleMouseEnter);

    // Function to set up element-specific listeners
    const setupElementListeners = () => {
      document
        .querySelectorAll<HTMLElement>(".cursor-select-hover")
        .forEach((el) => {
          el.addEventListener("mouseenter", handleSelectHover);
          el.addEventListener("mouseleave", handleMouseLeaveReset);
        });

      document
        .querySelectorAll<HTMLElement>(".cursor-text-hover")
        .forEach((el) => {
          el.addEventListener("mouseenter", handleTextHover);
          el.addEventListener("mouseleave", handleMouseLeaveReset);
        });

      document
        .querySelectorAll<HTMLElement>(".cursor-view-hover")
        .forEach((el) => {
          el.addEventListener("mouseenter", handleViewHover);
          el.addEventListener("mouseleave", handleMouseLeaveReset);
        });

      document
        .querySelectorAll<HTMLElement>(".cursor-swipe-hover")
        .forEach((el) => {
          el.addEventListener("mouseenter", handleDragHover);
          el.addEventListener("mouseleave", handleMouseLeaveReset);
        });

      document
        .querySelectorAll<HTMLElement>(".cursor-none-hover")
        .forEach((el) => {
          el.addEventListener("mouseenter", handleNoneHover);
          el.addEventListener("mouseleave", handleMouseLeaveReset);
        });

      document
        .querySelectorAll<HTMLElement>(".cursor-play-hover")
        .forEach((el) => {
          el.addEventListener("mouseenter", handlePlayHover);
          el.addEventListener("mouseleave", handleMouseLeaveReset);
          el.addEventListener("click", handlePlayClick);
        });
    };

    // Initial setup
    setupElementListeners();

    // Setup a MutationObserver to watch for DOM changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "childList") {
          setupElementListeners();
        }
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    // Cleanup function
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mouseenter", handleMouseEnter);
      observer.disconnect();

      document
        .querySelectorAll<HTMLElement>(
          ".cursor-select-hover, .cursor-none-hover, .cursor-view-hover, .cursor-play-hover, .cursor-text-hover"
        )
        .forEach((el) => {
          el.removeEventListener("mouseenter", handleSelectHover);
          el.removeEventListener("mouseenter", handleTextHover);
          el.removeEventListener("mouseenter", handleNoneHover);
          el.removeEventListener("mouseenter", handleViewHover);
          el.removeEventListener("mouseenter", handleDragHover);
          el.removeEventListener("mouseenter", handlePlayHover);
          el.removeEventListener("mouseleave", handleMouseLeaveReset);
          el.removeEventListener("click", handlePlayClick);
        });
    };
  }, [pathname, isClosed]);

  return (
    <div id="cursor">
      <div
        ref={cursorRef}
        className="fixed pointer-events-none flex items-center justify-center rounded-full text-white border border-white mix-blend-difference size-[3rem]"
        style={{ zIndex: 99999999999999 }}
      >
        <span
          ref={followerTextRef}
          className="absolute champagne-limos text-lg text-white mix-blend-difference"
        ></span>
      </div>
      <div
        ref={innerDotRef}
        className="fixed pointer-events-none rounded-full bg-white mix-blend-difference size-[0.35rem]"
        style={{ zIndex: 99999999999999 }}
      ></div>
    </div>
  );
}
