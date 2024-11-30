"use client";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  wrap,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface ScrollingBannerProps {
  children: React.ReactNode;
  baseVelocity?: number;
  length?: number;
  className?: string;
  child?: string;
  innerChild?: string;
  slowOnHover?: boolean;
  vertical?: boolean;
}

export default function ScrollingBanner({
  children,
  baseVelocity = 300,
  length = 180,
  className,
  child,
  innerChild,
  slowOnHover = false,
  vertical = false,
}: ScrollingBannerProps) {
  const basePosition = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 2], {
    clamp: false,
  });

  const [isHovered, setIsHovered] = useState(false);
  const [maxWidth, setMaxWidth] = useState("auto");
  const [maxHeight, setMaxHeight] = useState("auto");

  // Ref to get the height of one child element
  const childRef = useRef<HTMLSpanElement | null>(null);

  // Dynamically set max-width based on child element height
  useEffect(() => {
    if (vertical && childRef.current) {
      const height = childRef.current.offsetHeight;
      const width = childRef.current.offsetWidth;
      setMaxWidth(`${height}px`);
      setMaxHeight(`${width}px`);
    }
  }, [vertical, childRef]);

  const adjustedBaseVelocity =
    slowOnHover && isHovered ? baseVelocity / 3 : baseVelocity;

  // Calculate the total scrollable size based on the number of elements and their size
  const totalScrollableSize = vertical
    ? 45 * length
    : 45;

  const position = useTransform(basePosition, (v) => `${wrap(-20, -totalScrollableSize, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy =
      directionFactor.current * (adjustedBaseVelocity / 1000) * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    basePosition.set(basePosition.get() + moveBy);
  });

  const styles = {
    banner: vertical
      ? `relative m-0 flex flex-col flex-nowrap items-center whitespace-nowrap min-h-[100vh]`
      : "relative m-0 flex flex-nowrap items-center whitespace-nowrap",
    child: vertical
      ? "flex flex-col flex-nowrap items-center whitespace-nowrap"
      : "flex flex-row flex-nowrap items-center whitespace-nowrap",
    innerChild: vertical ? "my-4 transform -rotate-90 origin-center" : "mx-4",
  };

  return (
    <div
      className={className + " " + styles.banner}
      style={{
        maxWidth: vertical ? maxWidth : "100%", // Set maxWidth dynamically when vertical
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        style={{
          [vertical ? "y" : "x"]: position, // Use 'y' for vertical scrolling, 'x' for horizontal
          transform: vertical ? "translateY(0)" : "none", // Ensures no rotation on the container itself
          width: vertical ? maxWidth : "100%", // Set maxWidth dynamically when vertical
          height: vertical ? maxHeight : "100%", // Set maxWidth dynamically when vertical
          gap: vertical ? maxHeight : "",
        }}
        className={child + " " + styles.child}
      >
        {Array.from({ length }).map((_, index) => (
          <span
            className={innerChild + " " + styles.innerChild}
            key={index}
            ref={index === 0 ? childRef : null} // Assign the ref to the first child to measure its height
          >
            {children}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
