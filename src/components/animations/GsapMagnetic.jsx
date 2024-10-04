"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function GsapMagnetic({ children, speed = 2 }) {
  const magnetic = useRef(null);

  useEffect(() => {
    const xTo = gsap.quickTo(magnetic.current, "x", {
      duration: speed,
      ease: "power3.out",
    });
    const yTo = gsap.quickTo(magnetic.current, "y", {
      duration: speed,
      ease: "power3.out",
    });

    const moveHandler = (e) => {
      const { clientX, clientY } = e;
      const { height, width, left, top } =
        magnetic.current.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      xTo(x);
      yTo(y);
    };

    const leaveOrClickHandler = () => {
      setTimeout(() => {
        xTo(0);
        yTo(0);
      }, 100); // Delay in milliseconds before the element moves back to its original position
    };

    magnetic.current.addEventListener("mousemove", moveHandler);
    magnetic.current.addEventListener("mouseleave", leaveOrClickHandler);
    // Adding event listener for mouse click to trigger the element moving back
    magnetic.current.addEventListener("click", leaveOrClickHandler);

    return () => {
      if (magnetic.current) {
        magnetic.current.removeEventListener("mousemove", moveHandler);
        magnetic.current.removeEventListener("mouseleave", leaveOrClickHandler);
        magnetic.current.removeEventListener("click", leaveOrClickHandler);
      }
    };
  }, [speed]);

  return React.cloneElement(children, { ref: magnetic });
}
