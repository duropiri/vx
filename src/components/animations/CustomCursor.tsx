import React, { useEffect, useRef, useState } from "react";
import { gsap } from "@/utils/gsap";
import { usePathname } from "next/navigation";
import { useViewport } from "@/contexts/ViewportContext";
import { ServiceIcons } from "@/data/serviceIcons";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const innerDotRef = useRef<HTMLDivElement | null>(null);
  const followerTextRef = useRef<HTMLSpanElement | null>(null);
  const [isClosed, setIsClosed] = useState(false);

  const { windowWidth } = useViewport();
  const pathname = usePathname();

  useEffect(() => {
    if (!cursorRef.current || !innerDotRef.current || !followerTextRef.current)
      return;

    // Initialize cursor hidden and centered
    gsap.set(cursorRef.current, { xPercent: -50, yPercent: -50 });
    gsap.set(innerDotRef.current, { xPercent: -50, yPercent: -50 });
    // Ensure cursor starts at default scale
    gsap.set(cursorRef.current, { scale: 1 });
    gsap.set(innerDotRef.current, { scale: 1 });

    // Smoothly follow the mouse
    const xTo = gsap.quickTo(cursorRef.current, "x", {
      duration: 0.3,
      ease: "power3.out",
    });
    const yTo = gsap.quickTo(cursorRef.current, "y", {
      duration: 0.3,
      ease: "power3.out",
    });

    const xToI = gsap.quickTo(innerDotRef.current, "x", {
      duration: 0.15,
      ease: "power3.out",
    });
    const yToI = gsap.quickTo(innerDotRef.current, "y", {
      duration: 0.15,
      ease: "power3.out",
    });

    const moveCursor = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
      xToI(e.clientX);
      yToI(e.clientY);
      // gsap.set(innerDotRef.current, { x: e.clientX, y: e.clientY });
    };

    const handleMouseLeave = () => {
      gsap.to(cursorRef.current, { autoAlpha: 0 });
      gsap.to(innerDotRef.current, { autoAlpha: 0 });
    };

    const handleMouseEnter = () => {
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

    const handleTooltipHover = (e: MouseEvent) => {
      const target = e.currentTarget as HTMLElement;
      const text = target.getAttribute("data-follower-text") || "&#8505;";
      const scale = target.getAttribute("data-scale") || "0.4";
      if (followerTextRef.current) {
        followerTextRef.current.innerHTML = text;
        followerTextRef.current.className = "absolute text-[3rem] text-white mix-blend-difference";
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

    const handleNoneHover = () => {
      gsap.to(cursorRef.current, {
        scale: 0,
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
        followerTextRef.current.className = "absolute text-lg text-white mix-blend-difference";
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
    window.addEventListener("mouseleave", handleNoneHover);
    window.addEventListener("mouseenter", handleMouseEnter);

    // Hide custom cursor when mouse leaves window entirely
    const handleWindowMouseOut = (e: MouseEvent) => {
      if (!e.relatedTarget && !(e as any).toElement) {
        handleNoneHover();
      }
    };
    window.addEventListener("mouseout", handleWindowMouseOut);

    // Show custom cursor only when mouse truly re-enters the viewport
    const handleWindowMouseIn = (e: MouseEvent) => {
      if (!e.relatedTarget && !(e as any).fromElement) {
        handleMouseEnter();
      }
    };
    window.addEventListener("mouseover", handleWindowMouseIn);

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
        .querySelectorAll<HTMLElement>(".cursor-drag-hover")
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

      document
        .querySelectorAll<HTMLElement>(".cursor-tooltip-hover")
        .forEach((el) => {
          el.addEventListener("mouseenter", handleTooltipHover);
          el.addEventListener("mouseleave", handleMouseLeaveReset);
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
      window.removeEventListener("mouseleave", handleNoneHover);
      window.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseout", handleWindowMouseOut);
      window.removeEventListener("mouseover", handleWindowMouseIn);
      observer.disconnect();

      document
        .querySelectorAll<HTMLElement>(
          ".cursor-select-hover, .cursor-none-hover, .cursor-view-hover, .cursor-play-hover, .cursor-text-hover, .cursor-tooltip-hover"
        )
        .forEach((el) => {
          el.removeEventListener("mouseenter", handleSelectHover);
          el.removeEventListener("mouseenter", handleTextHover);
          el.removeEventListener("mouseenter", handleNoneHover);
          el.removeEventListener("mouseenter", handleViewHover);
          el.removeEventListener("mouseenter", handleDragHover);
          el.removeEventListener("mouseenter", handlePlayHover);
          el.removeEventListener("mouseenter", handleTooltipHover);
          el.removeEventListener("mouseleave", handleMouseLeaveReset);
          el.removeEventListener("click", handlePlayClick);
        });
    };
  }, [pathname, isClosed, windowWidth]);

  return (
    <div id="cursor">
      <div
        ref={cursorRef}
        className="fixed pointer-events-none flex items-center justify-center rounded-full text-white border border-white mix-blend-difference size-[3rem]"
        style={{ zIndex: 99999999999999 }}
      >
        <span
          ref={followerTextRef}
          className="absolute text-lg text-white mix-blend-difference"
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
