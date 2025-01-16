import { useViewport } from "@/contexts/ViewportContext";
import { gsap, ScrollTrigger } from "@/utils/gsap";
gsap.registerPlugin(ScrollTrigger);
import React, { useEffect, useRef, ReactElement, RefCallback } from "react";

interface SVGScrollProps {
  children: ReactElement;
}

const SVGScroll: React.FC<SVGScrollProps> = ({ children }) => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const pathRef = useRef<SVGPathElement | null>(null);
  const rocketRef = useRef<SVGGElement | null>(null);
  const { windowWidth } = useViewport();

  useEffect(() => {
    // Check if the screen is mobile using window.matchMedia
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    // Get the <g> element inside the rocketRef
    const gElement = rocketRef.current?.querySelector("g");

    if (gElement) {
      // Apply transform based on whether it's mobile or not
      const transformValue = isMobile
        ? "translate(-15, -50) scale(0.08)" // Mobile transform
        : "translate(-15, -55) scale(0.15)"; // Default transform for larger screens

      gElement.setAttribute("transform", transformValue);
    }
  }, [windowWidth]);

  useEffect(() => {
    if (!svgRef.current || !pathRef.current || !rocketRef.current) return;

    const pathLength = pathRef.current.getTotalLength();
    pathRef.current.style.strokeDasharray = `${pathLength}`;
    pathRef.current.style.strokeDashoffset = `${pathLength}`;

    gsap.set(rocketRef.current, { visibility: "hidden" }); // Initially hide the rocket

    // Create a timeline for synchronized animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: svgRef.current,
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });

    // Animate the path reveal
    tl.to(pathRef.current, {
      strokeDashoffset: 0,
      ease: "none",
    });

    // Animate the rocket along the path
    tl.to(
      rocketRef.current,
      {
        visibility: "visible", // Make the rocket visible before moving
        motionPath: {
          path: pathRef.current,
          align: pathRef.current,
          alignOrigin: [0.5, 0.5],
          autoRotate: true,
        },
        ease: "none",
      },
      0
    ); // Start at the same time as path reveal

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [windowWidth]);

  const refCallback: RefCallback<SVGSVGElement> = (node) => {
    if (node) {
      svgRef.current = node;
      const path = node.querySelector("path");
      if (path) {
        pathRef.current = path as SVGPathElement;
      }
    }
  };

  const childrenWithRef = React.cloneElement(children, {
    ref: refCallback,
    className: `${children.props.className || ""} squiggle`.trim(),
  });

  return (
    <div style={{ position: "relative" }}>
      {childrenWithRef}

      <svg
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
        }}
      >
        <g ref={rocketRef}>
          <g transform="translate(55, -55) scale(0.15)">
            <path
              d="M324.288 528.899C281.619 651.078 -7.24454 745.919 2.18646 646.771C6.00346 606.574 42.3125 572.666 40.0345 479.964C39.6815 480.176 54.2505 500.328 92.9815 502.251C176.026 513.022 323.987 529.2 324.288 528.899Z"
              fill="#C5A05E"
            />
            <path
              d="M341.826 177.251C293.101 47.777 -9.64552 -62.2154 3.83148 41.9322C9.28848 84.1612 48.1255 120.983 49.1865 217.942C48.8155 217.712 63.1755 197.173 103.246 196.589C188.846 188.307 341.491 176.916 341.826 177.251Z"
              fill="#C5A05E"
            />
            <path
              d="M311.733 128.86L308.076 124.816C264.648 129.143 158.01 140.235 91.6415 148.358C66.7395 149.381 51.7275 157.931 44.0805 164.201C45.8645 173.828 47.2255 184.23 48.1075 195.497C56.6195 189.951 70.3255 184.052 90.7055 183.205C175.463 172.803 326.514 157.491 326.817 157.826C323.336 147.987 318.018 138.326 311.733 128.86Z"
              fill="#967A47"
            />
            <path
              d="M323.531 530.754C302.126 528.917 168.097 515.654 89.8755 506.346C62.0245 505.268 46.6765 494.937 40.0205 488.773C39.9835 501.383 39.2975 512.951 38.0055 523.495C43.6755 529.341 59.3585 541.384 89.4705 542.567C154.958 550.337 259.138 560.882 304.07 565.154C312.492 554.084 319.15 542.55 323.531 530.754Z"
              fill="#967A47"
            />
            <path
              d="M805.199 344.06C805.924 369.899 599.941 536.776 345.942 535.929C188.671 535.416 106 513.428 82.6165 511.769C32.2825 492.838 0.864514 478.301 0.439514 341.464C-0.00248584 204.963 32.0345 199.276 79.8095 181.879C103.723 180.5 187.47 159.168 344.777 159.68C598.706 160.49 803.627 317.833 805.199 344.06Z"
              fill="#1B1A17"
            />
            <path
              d="M486.911 343.777C486.859 398.757 442.248 443.368 387.25 443.438C332.254 443.475 287.731 398.951 287.766 343.953C287.836 288.955 332.446 244.344 387.426 244.292C442.442 244.239 486.966 288.763 486.911 343.777Z"
              fill="#C5A05E"
            />
            <path
              d="M437.304 344.112C437.393 371.717 415.087 394.022 387.482 393.934C359.895 393.863 337.431 371.398 337.326 343.777C337.255 316.19 359.56 293.885 387.147 293.956C414.785 294.077 437.233 316.525 437.304 344.112Z"
              fill="#1A213D"
            />
          </g>
        </g>
      </svg>
    </div>
  );
};

export default SVGScroll;
