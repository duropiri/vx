import React, { useEffect, useRef, ReactElement } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface SVGScrollProps {
  children: ReactElement<SVGElement>;
}

const SVGScroll: React.FC<SVGScrollProps> = ({ children }) => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const pathRef = useRef<SVGPathElement | null>(null);

  useEffect(() => {
    if (!svgRef.current || !pathRef.current) return;

    const pathLength = pathRef.current.getTotalLength();
    pathRef.current.style.strokeDasharray = `${pathLength}`;
    pathRef.current.style.strokeDashoffset = `${pathLength}`;

    // Use GSAP ScrollTrigger to animate the strokeDashoffset
    gsap.to(pathRef.current, {
      strokeDashoffset: 0, // Animate the stroke from start to end
      ease: "none",
      scrollTrigger: {
        trigger: svgRef.current, // Trigger animation when the SVG is in view
        start: "top center", // Start animation when top of the SVG reaches the center of the viewport
        end: "bottom center", // End when the bottom of the SVG reaches the center of the viewport
        scrub: true, // Link the animation to the scrollbar's progress
        // markers: true,
      },
    });

    return () => {
      // Cleanup GSAP ScrollTrigger instances on component unmount
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const childrenWithRef = React.cloneElement(children, {
    ref: (node: SVGSVGElement) => {
      svgRef.current = node;
      const path = node?.querySelector("path");
      if (path) {
        pathRef.current = path as SVGPathElement;
      }
    },
    className: `${children.props.className || ""} squiggle`.trim(),
  });

  return childrenWithRef;
};

export default SVGScroll;
