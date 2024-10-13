"use client";
import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";

interface AnimationProps {
  children: React.ReactNode;
  className?: string;
  start?: number; // Percentage of the viewport where the animation should start
  end?: number; // Percentage of the viewport where the animation should end
}

export default function OpacityOnScroll({
  children,
  className,
  start = 90,
  end = 25,
}: AnimationProps) {
  const element = useRef(null);
  // Convert start and end to a percentage string format required by Framer Motion
  const { scrollYProgress } = useScroll({
    target: element,
    // offset: ["start end", "start start"], // start animation once in view, complete animation at top of view
    offset: [`start ${start}%`, `end ${end}%`],
  });

  // useEffect(() => {
  //   scrollYProgress.on("change", (e) => console.log(e));
  // }, []);

  return (
    <motion.div
      className={className}
      ref={element}
      style={{ opacity: scrollYProgress }}
    >
      {children}
    </motion.div>
  );
}
