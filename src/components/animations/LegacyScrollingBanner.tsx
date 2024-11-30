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
  import React, { useRef, useState } from "react";
  
  interface ScrollingBannerProps {
    children: React.ReactNode;
    baseVelocity?: number;
    length?: number;
    className?: string;
    child?: string;
    innerChild?: string;
    slowOnHover?: boolean;
    direction?: "horizontal" | "vertical";
  }
  
  export default function ScrollingBanner({
    children,
    baseVelocity = 600,
    length = 25,
    className,
    child,
    innerChild,
    slowOnHover = false,
    direction = "horizontal",
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
  
    const adjustedBaseVelocity =
      slowOnHover && isHovered ? baseVelocity / 3 : baseVelocity;
  
    const isVertical = direction === "vertical";
  
    const position = useTransform(basePosition, (v) => `${wrap(-20, -45, v)}%`);
  
    const directionFactor = useRef(1);
    useAnimationFrame((_t, delta) => {
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
      banner: isVertical
        ? "relative m-0 flex flex-col flex-nowrap items-center whitespace-nowrap min-h-[100vh]"
        : "relative m-0 flex flex-nowrap items-center whitespace-nowrap h-full",
      child: isVertical
        ? "flex flex-col flex-nowrap items-center whitespace-nowrap"
        : "flex flex-row flex-nowrap items-center whitespace-nowrap",
      innerChild: isVertical ? "my-4" : "mx-4",
    };
  
    return (
      <div
        className={`${className} ${styles.banner}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          style={{
            [isVertical ? "y" : "x"]: position,
          }}
          className={`${child} ${styles.child}`}
        >
          {Array.from({ length }).map((_, index) => (
            <span className={`${innerChild} ${styles.innerChild}`} key={index}>
              {children}
            </span>
          ))}
        </motion.div>
      </div>
    );
  }