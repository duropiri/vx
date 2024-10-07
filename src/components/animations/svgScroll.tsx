import React, { useEffect, useRef, ReactElement, RefCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface SVGScrollProps {
  children: ReactElement;
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
        trigger: svgRef.current,
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });

    return () => {
      // Cleanup GSAP ScrollTrigger instances on component unmount
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

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

  return childrenWithRef;
};

export default SVGScroll;